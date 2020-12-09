import React, { useState, useEffect, useCallback, useRef } from "react";
import {Avatar, TextStyle, Card, ResourceItem, ResourceList, Thumbnail, ButtonGroup, Icon, FormLayout, TextField,  Layout, Page, Button, Form, } from '@shopify/polaris';
import axios from "axios";
import {AddMajor} from '@shopify/polaris-icons';
import actions from "../../services/index";

export default function  Sale() {
    // let library = [{
        
    //     url: 'https://polaris-icons.shopify.com/?icon=InventoryMajor',
    //    title: 'jjn',
    //    image: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
    //    description: "open someting"
    //  },
    //  {
      
    //    url: 'customers/256',
    //    title: 'Ellen Ochoa',
    //    image: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
    //    description: "open2 someting"}]
    const [items, setItems] = useState([])
  

    useEffect(() => {
        const fetchData = async () => {
          const result = await actions.list();
          setItems(result.data);
          //   console.log(result.data);
        };
    
        fetchData();
      }, []);
  
      const [title, setTitle] = useState('');
      const [showForm, setshowForm] = useState(false);
      const [ image, setImage] = useState('');
      const [ link, setLink] = useState('');
      const [ description, setDescription] = useState('');
    
     

      const handleTitleChange = useCallback((value) => {
          console.log('Title', value)
        setTitle(value)}, []);
      const handleImageChange = useCallback((value) => 
        setImage(value), []);
      const handleDescriptionChange = useCallback((value) => 
        setDescription(value), []);
      const handleLinkChange = useCallback((value) => 
        setLink(value), []);

        const handleSubmit = () => {
         let newState = [...items, {
      
            url: link,
            title: title,
            image: image,
            description: description
          },];
      
          setItems(newState)
          setshowForm(false)
          actions.createLink({
            url: link,
            title: title,
            image: image,
            description: description
          }).then(res => {
            console.log(res.data);
          })

        }
        

        const toggleForm = ()=>{
            setshowForm(false)
            console.log('Click')
        }
         const toggleAdd = () =>{ 
             setshowForm(true)
             console.log('Click')
        }
        const goBack =()=>{
            setshowForm(false) 
            setTitle('')
            setLink('')
            setImage('')
            setDescription('')
        }
       
const form = 
<Page>
       <Form  onSubmit={handleSubmit}>
<FormLayout style={{padding: '2em'}}>
<FormLayout.Group condensed>
        <TextField
          label="Title"
          required
          value={title}
          onChange={handleTitleChange}
        />
        <TextField
          type="url"
          label="Link"
          required
          value={link}
          onChange={handleLinkChange}
        />
         
        <TextField
          label="Image"
          type="url"
          required
          value={image}
          onChange={handleImageChange}
        />
         <TextField
          label="Description"
          required
          value={description}
          onChange={handleDescriptionChange}
        />
        </FormLayout.Group>
        <ButtonGroup>
         <Button primary  disabled={!image || !title || !description || !link} submit>Submit</Button>
         <Button onClick={goBack}>Back</Button>
         </ButtonGroup>
      </FormLayout>
      </Form>
      </Page>
      


const addButton = <Card >
<center>
<p onClick={toggleAdd}><img  src='data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M3%203h1V1H2.5A1.5%201.5%200%20001%202.5V4h2V3zM6%203h3V1H6v2zM11%203h3V1h-3v2zM9%2019H6v-2h3v2zM11%2019h3v-2h-3v2zM17%204V3h-1V1h1.5A1.5%201.5%200%200119%202.5V4h-2zM3%2017v-1H1v1.5A1.5%201.5%200%20002.5%2019H4v-2H3zM16%2017h1v-1h2v1.5a1.5%201.5%200%2001-1.5%201.5H16v-2zM10%206a1%201%200%20011%201v2h2a1%201%200%20110%202h-2v2a1%201%200%2011-2%200v-2H7a1%201%200%20110-2h2V7a1%201%200%20011-1zM1%209V6h2v3H1zM1%2011v3h2v-3H1zM17%209V6h2v3h-2zM17%2011v3h2v-3h-2z%22%20fill%3D%22%235C5F62%22%2F%3E%3C%2Fsvg%3E' width='35' height='35'/></p>
</center>
</Card>

const pageMarkup = showForm ? form : addButton;


return(
<div >
<div>

<Page><ResourceList
    resourceName={{singular: 'customer', plural: 'customers'}}
    items={items}
    renderItem={(item) => {
      const { url, title, image,  description} = item;
      const media = <Thumbnail
      source={image}
      size="large"
      alt="Black choker necklace"
    />
      return (
        <ResourceItem
          external url={url}
          media={media}
          accessibilityLabel={`View details for ${title}`}
        >
          <h3>
      <TextStyle variation="strong">{title}</TextStyle>
          </h3>
          <div>{description}</div>
        </ResourceItem>
      );
    }}
  />
{pageMarkup}
</Page>







</div>

</div>

)

}