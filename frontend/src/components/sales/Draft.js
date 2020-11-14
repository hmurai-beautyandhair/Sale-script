// import React, { Component } from "react";
// import actions from "../../services/index";
// import Table from "react-bootstrap/Table";
// class Draft extends Component {
//   state = {
//     arr: []
//   };
//   componentDidMount() {
//     actions
//       .draft()
//       .then(res => {
//         console.log(res);
//         this.setState({
//           arr: res.data
//         });
//       })
//       .catch(({ response }) => console.error(response));
//   }
//   print = () => {
//     return (
//       <Table striped bordered hover size="sm">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Cusromer</th>
//             <th>Order</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//           </tr>
//         </tbody>
//       </Table>
//     );
//   };
//   render() {
//     return (
//       <div>
//         <Table striped bordered hover size="sm">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Cusromer</th>
//               <th>Order</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>Mark</td>
//               <td>Otto</td>
//               <td>@mdo</td>
//             </tr>
//           </tbody>
//         </Table>
//       </div>
//     );
//   }
// }

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
      console.log(result.data);
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Table>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Order</Th>
            <Th>Customer</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((x, i) => {
            let client = "";
            let last_name = "";
            let first_name = "";
            let email = "";
            if (x.customer === null) {
              client = "Undefined";
              email = "Undefined";
            } else {
              client = x.customer.first_name + " " + x.customer.last_name;
              email = x.customer.email;
            }
            return (
              <a href={x.invoice_url} target="_blank">
                <Tr key={i} style={{ background: "red" }}>
                  <Td>{i}</Td>
                  <Td>{x.order_id}</Td>
                  <Td>{client}</Td>
                  <Td>{email}</Td>
                </Tr>
              </a>
            );
          })}
        </Tbody>
      </Table>
      {console.log("data", data[0]?.id)}
    </div>
  );
}
