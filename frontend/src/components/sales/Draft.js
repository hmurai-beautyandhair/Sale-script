

import React, { useState, useEffect, useCallback } from "react";
import {Card, DataTable, Link, Page, Spinner, Layout} from '@shopify/polaris';
import actions from "../../services/index";


export default function Draft(props) {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await actions.draft();
      let arr = []
      result.data.reverse().slice(0, 20).map((x, i) => {
        let client = "";
        let email = "";
        if (x.customer === null) {
          client = "Undefined";
          email = "Undefined";
        } else {
          client = x.customer.first_name + " " + x.customer.last_name;
          email = x.email;
        }
        arr.push([
          <Link  url={x.invoice_url} external key={i}>
         {client}
        </Link>,
        x.name,
        email
        ])
    })
    setArray(arr)
    console.log('New array', arr)
    };

    fetchData();
  }, []);
  
  
  
const rows = array;

return (
  <Page title="Draft order, invoices">
    <Card>
      {array.length > 0 ? 
      <DataTable
        columnContentTypes={[
          'text',
          'text',
          'text'
        ]}
        headings={[
          'Client',
          'Draft Order',
          'Email '
        ]}
        rows={array}
        footerContent={`Showing ${rows.length} of ${rows.length} results`}
      /> : <div style={{padding: '2em'}}><center><Spinner accessibilityLabel="Spinner example" size="large" color="inkLightest" /></center> 
</div>}
    </Card>
  </Page>
);

}
