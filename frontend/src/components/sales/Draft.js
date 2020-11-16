

import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import axios from "axios";
import actions from "../../services/index";
import { Link } from "react-router-dom";

export default function Draft(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await actions.draft();
      setData(result.data);
      //   console.log(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="draft">
      <h1 id='tracker'>Draft Order<br></br> TRACKER</h1>
      <Table className="table table-striped table-bordered ">
        <Thead className="thead-light">
          <Tr>
            <Th scope="col">#</Th>
            <Th scope="col">Client</Th>
            <Th scope="col">Draft order</Th>
            <Th scope="col">Email</Th>
          </Tr>
        </Thead>
        <Tbody>
      
       {data.reverse().slice(0, 20).map((x, i) => {
            let client = "";
            let last_name = "";
            let first_name = "";
            let email = "";
            if (x.customer === null) {
              client = "Undefined";
              email = "Undefined";
            } else {
              client = x.customer.first_name + " " + x.customer.last_name;
              email = x.email;
            }
         
              return (
              <Tr>
                <Td scope="row">
                  {" "}
                  <a href={x.invoice_url} target="_blank">
                    {i + 1}{" "}
                  </a>
                </Td>

                <Td>
                  {" "}
                  <a href={x.invoice_url} target="_blank">
                    {client}{" "}
                  </a>
                </Td>

                <Td>
                  {" "}
                  <a href={x.invoice_url} target="_blank">
                   {x.name}
                  </a>
                </Td>

                <Td>
                  {" "}
                  <a href={x.invoice_url} target="_blank">
                    {email}
                  </a>
                </Td>
              </Tr>
            )
          })
        }
        </Tbody>
      </Table>
    


    </div>
  );
}
