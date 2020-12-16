import React, { useState, useEffect } from "react";
import { Page, Card, TopBar, Link } from "@shopify/polaris";
import actions from "../../services/index";

export default function Marketing(props) {
  const [items, setItems] = useState([]);
  const [gmail, setGmail] = useState('')
  useEffect(() => {
    const fetchData = async () => {
    const result = await actions.getRecent(props.user._id)
console.log(result)
const gmail = await actions.gmail()
let str = gmail.data.replace(/[@]|[*]/g, '')
setItems(result.data)
setGmail('<h3>' + (str || '').split(/[\r\n]+/gm).join('</p><p>') + '</h3>')
    }
    fetchData();
  }, []);
  function createMarkup(str) {
    return {__html: str};
  }
const news = (gmail)
  const Data = () =>{
return items.map((x, i) =>{
return (
 <Link key={i} extrnal url={x[0].url}><TopBar.UserMenu style={{display: 'flex', flexDirection: 'column !important'}}
name={x[0].title}
avatar={x[0].image}
// open={userMenuActive}

/></Link>)
}) }
const res = (<Data/>)
  return (
    <div>
      <Page >
        <Card title="Quick Access" sectioned>
           <center><div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'spaceEvenly'}}>{res}</div></center>

        </Card>

        <Card  title="Culture Club News" sectioned>
        <div style={{padding: '0 2em 1em', textAlign: 'left'}} dangerouslySetInnerHTML={createMarkup(news)} />
  </Card>

      </Page>
    </div>
  );
}
