import React, { useState, useEffect, useCallback } from "react";
import { Page, Card, TopBar, Link, FormLayout,
  TextField, Button,
  Form, ButtonGroup, DisplayText} from "@shopify/polaris";
import actions from "../../services/index";

export default function Home(props) {
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [gmail, setGmail] = useState('')
  const [showForm, setshowForm] = useState(false);
  const [date, setDate] = useState('')
  const [track, setTrack] = useState([]);
  const [link_data, setLinks] = useState([]);
  const [description, setDescription] = useState("");
  const [announcment, setAnnouncment] = useState([])
  let [text, setText] = useState('')
  const today = new Date()


  useEffect(() => {
    const fetchData = async () => {

      const result = await actions.getRecent(props.user._id)
      if(result !== undefined) {
let arr = []
result.data.forEach(x =>{
      arr.push({value: Object.values(x), id: Object.keys(x)[0]})
      console.log(Object.keys(x)[0])
    })
    console.log(arr)
    let send = arr.sort((a, b) => b?.value[0]?.index - a?.value[0]?.index).slice(0, 5)
    console.log('SEND', send)
    setItems(send)
    const result2 = await actions.getTrack(props.user._id);
      setTrack(result2.data);
      setLinks(result2.data.links);
  }
const gmail = await actions.gmail()
let new_date = new Date(Number(gmail.data.time))

setDate(new_date.toUTCString())

let str = gmail.data.message.replace(/[@]|[*]/g, '')
 str = `${str}`


// setGmail(str.replace(/\s{,5}/g, '').trim())

setGmail(((str.replace(/\s{15,}/g, '<br/><br /><br />')).replace(/\s{6,}/g, '<br /><br />')).replace(/\s{2,}/g, '<br />'))
const ann = await actions.getAnnouncment()
if(ann.data.length > 0) {

  setAnnouncment(ann.data)
if( Math.ceil(Math.abs((new Date(ann.data[ann.data.length - 1].createdAt)).getTime() - today.getTime()) / (1000 * 3600 * 24)) <= 2)  setText(ann.data[ann.data.length - 1].description)
       
}
else {setText('No new announcements')}
console.log('announcment', ann.data)
    }
    fetchData();
  }, []);
  function createMarkup(str) {
    return {__html: str};
  }

  const toggleAdd = () => {
    setshowForm(true);
    console.log("Click");
  };
  const handleDescriptionChange = useCallback(
    (value) => setDescription(value),
    []
  );
  const goBack = () => {
    setshowForm(false);
   
    setDescription("");
  };
  const handleSubmit = () => {
    


    setshowForm(false);
    setDescription("");
    console.log('description,', description, 'name', props.user.name )
    setText(description)
    actions
      .postAnnouncment({
        description: description, name: props.user.name
      })
      .then((res) => {
        console.log(res.data);

  
      }).catch(err => console.log(err))
  };


  const Data = () =>{
    if(items !== undefined) {
return items.map((x, i) =>{
return (
 <Link  onClick={() => addLink(x.id, x.value[0].title, x.value[0].image, x.value[0].url)}  key={i}  url={x.value[0].url} external><TopBar.UserMenu style={{display: 'flex', flexDirection: 'column !important'}}

name={x.value[0].title}
avatar={x.value[0].image}
// open={userMenuActive}

/></Link>)
})}
else return '' }

const form = (
  <Page>
    <Form onSubmit={handleSubmit}>
      <FormLayout style={{ padding: "2em" }}>
        <FormLayout.Group condensed>
         
          
        </FormLayout.Group>
        <TextField
          label="Description"
          required
          value={description}
          onChange={handleDescriptionChange}
          multiline={4}
        />

        <ButtonGroup>
          <Button
            primary
            disabled={!description}
            submit
          >
            Submit
          </Button>
          <Button onClick={goBack}>Back</Button>
        </ButtonGroup>
      </FormLayout>
    </Form>
  </Page>
);
const addButton = (
  <Card>
    <center>
      <p style={{ padding: "1em" }} onClick={toggleAdd}>
        <img
          src="data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M3%203h1V1H2.5A1.5%201.5%200%20001%202.5V4h2V3zM6%203h3V1H6v2zM11%203h3V1h-3v2zM9%2019H6v-2h3v2zM11%2019h3v-2h-3v2zM17%204V3h-1V1h1.5A1.5%201.5%200%200119%202.5V4h-2zM3%2017v-1H1v1.5A1.5%201.5%200%20002.5%2019H4v-2H3zM16%2017h1v-1h2v1.5a1.5%201.5%200%2001-1.5%201.5H16v-2zM10%206a1%201%200%20011%201v2h2a1%201%200%20110%202h-2v2a1%201%200%2011-2%200v-2H7a1%201%200%20110-2h2V7a1%201%200%20011-1zM1%209V6h2v3H1zM1%2011v3h2v-3H1zM17%209V6h2v3h-2zM17%2011v3h2v-3h-2z%22%20fill%3D%22%235C5F62%22%2F%3E%3C%2Fsvg%3E"
          width="30"
          height="30"
        />
      </p>
    </center>
  </Card>
);
const pageMarkup = showForm ? form : addButton;


const addLink = (id, title, image, url) => {
  if(link_data !== undefined) {
  console.log("CLICK", id, title, image, url)
  let send = { [id]: { url: url, title: title, image: image, index: 0 } };
  if (link_data.filter((x) => id in x).length > 0) {
    let ind = 0;
    link_data.filter((y, i) => {
      if (id in y) {
        ind = i;
        return y;
      }
    });
    let index = link_data.filter((x) => id in x)[0][id].index;
    console.log("new index", Number(index) + 1);
    let newLinks = [...link_data];
    newLinks.splice(ind, 1);
    
    send = {
      [id]: {
        url: url,
        title: title,
        image: image,
        index: Number(index) + 1,
      },
    };
    newLinks.unshift(send);
    setLinks(newLinks);
    console.log('Links', newLinks)
    actions.addObj(send, track._id, id).then((res) => {
      console.log(res.data);
    });
  } else {
    console.log("Else");
    let newLinks = [...link_data];
    newLinks.unshift(send);
    setLinks(newLinks);
    actions.addObj(send, track._id, id).then((res) => {
      console.log(res.data);
    });
  }
}
};

const res = (<Data/>)
  return (
    <div>
      <Page >
        <Card title="Quick Access" sectioned>
           <center><div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'spaceEvenly', alignItems: 'center'}}>{res}</div></center>
          

        </Card>
        <Card title='Announcements' sectioned>
        
    {<div style={{padding: '2em 2em 3em'}}><center><DisplayText size="medium">{text}</DisplayText></center></div>}
        {pageMarkup}
        </Card>

        <Card  title="Culture Club News" sectioned actions={[{content: `${date}`}]}>
        <div dangerouslySetInnerHTML={{__html: gmail}} />

  </Card>

      </Page>
    </div>
  );
}
