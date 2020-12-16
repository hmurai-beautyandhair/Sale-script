import React, { useState, useEffect } from "react";
import { Page, Card, TopBar, Link } from "@shopify/polaris";
import actions from "../../services/index";

export default function Marketing(props) {
  const [items, setItems] = useState([]);
  const [gmail, setGmail] = useState('')
  const [date, setDate] = useState('')
  const [track, setTrack] = useState([]);
  const [link_data, setLinks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
    const result = await actions.getRecent(props.user._id)

let arr = []
result.data.forEach(x =>{
      arr.push({value: Object.values(x), id: Object.keys(x)[0]})
      console.log(Object.keys(x)[0])
    })
    console.log(arr)
    let send = arr.sort((a, b) => b?.value[0]?.index - a?.value[0]?.index).slice(0, 5)
    console.log('SEND', send)
const gmail = await actions.gmail()
let new_date = new Date(Number(gmail.data.time))

setDate(new_date.toUTCString())

let str = gmail.data.message.replace(/[@]|[*]/g, '')
 str = `${str}`

setItems(send)
// setGmail(str.replace(/\s{,5}/g, '').trim())

setGmail(((str.replace(/\s{15,}/g, '<br/><br /><br />')).replace(/\s{6,}/g, '<br /><br />')).replace(/\s{2,}/g, '<br />'))
const result2 = await actions.getTrack(props.user._id);
      setTrack(result2.data);
      setLinks(result2.data.links);
    }
    fetchData();
  }, []);
  function createMarkup(str) {
    return {__html: str};
  }

  const Data = () =>{
return items.map((x, i) =>{
return (
 <Link  onClick={() => addLink(x.id, x.value[0].title, x.value[0].image, x.value[0].url)}  key={i}  url={x.value[0].url} external><TopBar.UserMenu style={{display: 'flex', flexDirection: 'column !important'}}

name={x.value[0].title}
avatar={x.value[0].image}
// open={userMenuActive}

/></Link>)
}) }

const addLink = (id, title, image, url) => {
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
};

const res = (<Data/>)
  return (
    <div>
      <Page >
        <Card title="Quick Access" sectioned>
           <center><div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'spaceEvenly'}}>{res}</div></center>
          

        </Card>

        <Card  title="Culture Club News" sectioned actions={[{content: `${date}`}]}>
        <div dangerouslySetInnerHTML={{__html: gmail}} />

  </Card>

      </Page>
    </div>
  );
}
