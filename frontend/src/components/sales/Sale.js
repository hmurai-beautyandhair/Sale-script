import React, { useState, useEffect } from "react";
import {Avatar, TextStyle, Card, ResourceItem, ResourceList, Thumbnail, Stack} from '@shopify/polaris';


export default function  Sale() {

    const [items, setItems] = useState([
        {
        
           url: 'https://polaris-icons.shopify.com/?icon=InventoryMajor',
          title: 'jjn',
          image: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
          description: "open someting"
        },
        {
         
          url: 'customers/256',
          title: 'Ellen Ochoa',
          image: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
          description: "close someting"
        },
      ])


return(
<div style={{paddingTop: "15em"}}>
<div>

<ResourceList
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
</div>
</div>

)

}