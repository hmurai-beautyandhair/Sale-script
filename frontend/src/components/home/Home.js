import React, { useState, useEffect } from "react";
import { Page, Card, PageActions } from "@shopify/polaris";
export default function Marketing(props) {
  return (
    <div>
      <Page title="Home Page">
        <Card title="" sectioned>
          <ul>
            <li>Something about LauchPad</li>
            <li>Company's news</li>
          </ul>
        </Card>
        
      </Page>
    </div>
  );
}
