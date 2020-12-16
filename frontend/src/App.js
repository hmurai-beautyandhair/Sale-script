// import React, { Component, Fragment } from "react";
// import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
// import Home from "./components/home/Home";
// import Profile from "./components/profile/Profile";
// import actions from "./services/index";
// import GoogleAuth from "./components/auth/GoogleAuth";
// import GoogleAuthLogin from "./components/auth/GoogleAuthLogin";
// import LogOut from "./components/auth/LogOut";
// import Navbar from "./components/navbar/Navbar";
// import Draft from "./components/sales/Draft";
// import Sale from './components/sales/Sale'
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

// class App extends Component {
//   state = {};

//   async componentDidMount() {
//     let user = await actions.isLoggedIn();
//     this.setState({ ...user.data });
//     console.log("coolest ");
//   }

//   setUser = user => this.setState(user);

//   logOut = async () => {
//     let res = await actions.logOut();
//     this.setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX
//   };

//   render() {
//     return (
//       <BrowserRouter>
//         <nav>
//           {this.state.email ? (
//             <Fragment>
//               <Navbar logout={this.logOut} />
//             </Fragment>
//           ) : (
//             <div className="container5">
//               <div class="panel panel-primary">
//                 <div className="firstPage">
//                   <img
//                     style={{ width: "fitContent", height: "90%" }}
//                     className="d-block w-100 carousel"
//                     src={require("../src/images/logo.png")}
//                   />
//                   <h1 id="lauchPad2">LaunchPad</h1>
//                 </div>
//                 <br></br>
//                 <br></br>
//                 <div className="googleButtons">
//                   <p>
//                     {!this.state.email && (
//                       <GoogleAuth
//                         style={{ minWidth: "100%", background: "red" }}
//                         setUser={this.setUser}
//                       />
//                     )}
//                   </p>
//                   <p>
//                     {!this.state.email && (
//                       <GoogleAuthLogin setUser={this.setUser} />
//                     )}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </nav>
//         <Switch>
//           {this.state.email ? (
//             <Route exact path="/" render={props => <Home {...props} />} />
//           ) : (
//             ""
//           )}
//           {/* <Route
//             exact
//             path="/sign-up"
//             render={(props) => <SignUp {...props} setUser={this.setUser} />}
//           />
//           <Route
//             exact
//             path="/log-in"
//             render={(props) => <LogIn {...props} setUser={this.setUser} />}
//           /> */}
//           <Route
//             exact
//             path="/profile"
//             render={props => <Profile {...props} user={this.state} />}
//           />
//           <Route
//             exact
//             path="/draft"
//             render={props => <Draft {...props} user={this.state} />}
//           />
//           <Route
//             exact
//             path="/sales"
//             render={props => <Sale {...props} user={this.state} />}
//           />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }
// export default App;


// import React, {useState,  useEffect} from 'react';
// import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
// import Home from "./components/home/Home";
// import Profile from "./components/profile/Profile";
// import actions from "./services/index";
// import GoogleAuth from "./components/auth/GoogleAuth";
// import GoogleAuthLogin from "./components/auth/GoogleAuthLogin";
// import LogOut from "./components/auth/LogOut";
// import Navbar from "./components/navbar/Navbar";
// import Draft from "./components/sales/Draft";
// import Sale from './components/sales/Sale'
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
  
 
// export default function App() { 
//   const [state, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const state = await actions.isLoggedIn();
//       setData({ ...state.data });
//     };
//     fetchData();
//   }, []);

//   const setUser = (user) => setData(user);

//   const logOut = async () => {
//     let res = await actions.logOut();
// setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX
//   };


//     return (
      // <BrowserRouter>
      //   <nav>
      //     {state.email ? (
           
      //         <Navbar logout={logOut} />
           
      //     ) : (
            // <div className="container5">
            //   <div class="panel panel-primary">
            //     <div className="firstPage">
            //       <img
            //         style={{ width: "fitContent", height: "90%" }}
            //         className="d-block w-100 carousel"
            //         src={require("../src/images/logo.png")}
            //       />
            //       <h1 id="lauchPad2">LaunchPad</h1>
            //     </div>
            //     <br></br>
            //     <br></br>
            //     <div className="googleButtons">
            //       <p>
            //         {!state.email && (
            //           <GoogleAuth
            //             style={{ minWidth: "100%", background: "red" }}
            //             setUser={setUser}
            //           />
            //         )}
            //       </p>
            //       <p>
            //         {!state.email && (
            //           <GoogleAuthLogin setUser={setUser} />
            //         )}
            //       </p>
            //     </div>
            //   </div>
            // </div>
      //     )}
      //   </nav>
      //   <Switch>
      //     {state.email ? (
      //       <Route exact path="/" render={props => <Home {...props} />} />
      //     ) : (
      //       ""
      //     )}
      //     <Route
      //       exact
      //       path="/profile"
      //       render={props => <Profile {...props} user={state} />}
      //     />
      //     <Route
      //       exact
      //       path="/draft"
      //       render={props => <Draft {...props} user={state} />}
      //     />
      //     <Route
      //       exact
      //       path="/sales"
      //       render={props => <Sale {...props} user={state} />}
      //     />
      //   </Switch>
      // </BrowserRouter>
//     );

// }
import Profile from "./components/profile/Profile";
import actions from "./services/index";
import GoogleAuth from "./components/auth/GoogleAuth";
import GoogleAuthLogin from "./components/auth/GoogleAuthLogin";
import LogOut from "./components/auth/LogOut";




import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";


import React, {useCallback, useRef, useState, useEffect} from 'react';
import {AppProvider, Avatar, ActionList, Card, TextField, TextContainer, ContextualSaveBar, 
  FormLayout, Modal, Frame, Layout, Loading, Navigation, Page, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, Toast, TopBar, MediaCard, ButtonGroup, CalloutCard, PageActions, DisplayText, Stack, Link} from '@shopify/polaris';
import {CartMajor,HomeMajor, OrdersMajor, MarketingMajor,  MonerisMajor, GamesConsoleMajor, JobsMajor, LockMajor, InventoryMajor, LegalMajor} from '@shopify/polaris-icons';
import Draft from "./components/sales/Draft";
import Home from './components/home/Home'
import Sale from "./components/sales/Sale";
import Inventory from './components/inventory/Inventory'
import IT from './components/it/IT'
import Newhire from './components/newhire/Newhire'
import Accounting from './components/accounting/Accounting'
 import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Marketing from "./components/marketing/Marketing";
import Ellen from './components/ellen/Ellen'
import { AccordionCollapse } from "react-bootstrap";





  // return (<div style={{display: 'flex', flexDirection: 'column !important'}}>
      
  //    <Link url="https://help.shopify.com/manual" external><TopBar.UserMenu
      
  //      name="LaunchPad"
  //      detail='Beauty&amp;Hair'
  //      url='https://www.google.com/'
  //           avatar='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADwCAMAAABCI8pNAAAAz1BMVEX///+Vv0Zejj6XwUaQvDmTvkGRvT2PvDdcjD6OuzRcjTyYwkb8/flUiC+TvkP9/vtZizfq8tz2+vCZwUzv9eTr893d6sf3+vLi7c/Q4rLx9ujV5brH3KOtzXS81o+hxl6BrUOdxFSMt0V6p0J0oUFjkz9smkDT5Lba6MKqy2+41Iex0H1NhCPE256fxVqlyGTH17nl7OG6z6mIq21fkTbU4cZ+pV9qlUqhvIy5y67b58+Ss3hxm1aEp26ZtIepwpvd5deFp26txpibt4xynktBuvt7AAARCElEQVR4nN2dC5fathLHF/DjmoB5GLB5mTq9W14LpMnm0Sa93bb5/p/pWl7Lb0szksCk/57Tc5bNgn9IGs2MRtLDwzXlTj1v5o2v+hk302Ay9zeaZZmhrJY/avp5ZDUYnQJLM+xWLNuw1pOmH0pG7vxipTixdGPV9HMJq7dyTL1Vlm0eB00/m5i2jlbBE0nb/4hMk4tZB0SY1k0/H17zUpezQ2WY/Olo4jb9lAj11lbeImiG3nICxzCSlwwrlLZfTZt+VpgmQfroLVvXgvV8NBmHw2fkOwXrp1mbZa/p5+XLM9JOZxv6wUufeXouDSvdDHYNPixIs4yhM1qrRfqbxVErTlIRtrW+71G1NO20AQ5Zp25lGxVAEbnjNfa8fO3ShjDO2Qd195VNRPvn/XY+L+11Vs5HmOpVjkQq7V6ZRknXsq2cJ7ezqjhsTbeTf3+ffW/s0KawjdwTbrNENv1H2s476MmXoN+lh35JiPQ8UXYYGa11/JNxCq3ggf5OP9+h4+fTgWR3ckQZkxFOrv7i4fz6sx2Q3y5pO2l+M4/NUDJeCr1upKdE2oZEtX5MYUU23qMh1d0Np0Xy5OYy+7rbSoms14agdtF8NXOz2Gl/bbU70p4OJPOUe/2SWm8rZqWURtzVVjGidl/x7orGR8Yx9/opiZsy/THGt8/xzzG2rd9TCmlCu53dyhmuUWK+bTtNDq3oYIp/Hsfcxj1ZiHXS7XJZrcG5cqairq1F56K469mtxcO9aEe7l5kfDqvEQTKzHs+E2geK2YsDKSM/DhuUG9D58pJ7fZFYu4LNiDte6tnN4+/EuZc440Qbw8gnU+kEVER9iL+C1MS5QYy+vckDczWmRFq+LaaJO2EUTFk89DLmILYY+j5505HXYLL5GDeGHeTzCEdqG6xl4S/i5tNTg09n6leLMZlfDE17/tZUN5xQQ10Ieqb0db2UtpsX2yThDw3E6ORYUf7icfjY0ERFDXj2AYkOiUNaSm0ttdIQi90i22lZ9O8e293PjVj1UWLA831/nPgT5Qk0NvqJ+xCqF9CB16Jqt9vDxyaY6IjR855QMifZnfJTeTFSxlFdXEq5iRCp3W2g701pN7EKYSlNGFd5OdRPipEGo9PFKCcn/hMx3b7v0RFTbCQvfmrbrnikaQap5/lnrQIoRmoPb820oI1RbKSkPx4q/ipGCsfS7tjSSstqkTpvX5FuznSqaSSXGgetasJM7L6h6XXpvQSp3W3fkok6Mi2r8OSxmW7pm6o/m1QmweqQbmv3lnFjFOekZLLSqpy23oy1oEaRfkqQbspEw3Nzln89yThYpbUW1/MDAFEO6YZMtAPZm0ISjmZMikNssTw6Zl26n4F0OyZqHEqJEBpW5CO/+b5j1pqDEtLPWaRwfvr1Jkhx9yrPPZtSvxutNnq9eeMjhUwff59c3ZWYxf2u2L0eJnRSin1wz3eqZ1MW0n/zSO1uvz8cdh+/f/rw5bd370K+a2Sc6XSqFfOkNBehzUPztjuY5SIVASRCFWk47BM9hXp+r5ZoQGeXoPh90aGkecu1VVmjIoZUZnx6pxSJtkU5r5OkWEPvQIiHIP3CJwot4VelSMl0WvR5xi18PxNF+kMlUS9JORR/40GmUi7SIwSp+01l3QTNmRaq0Ra7o6OgkYBI7WeVU/Ah7nfZsGIyv+Bmn3q9ARG1+ypnYNoWDn1hugpMRTwIpI/qiEa5fjfwTh2R2YeBBLDhoYZ/q0NKVlSmD+7u0LFgzihcHSCSQiueLPttjzrcGUUIiKTOio8Ts2ZcgweM1P2sLMusZO5hKBOns5GUmbyBr3rsCCK1n5Qg9XZHTpnTDZH68s74YnuxrmIOCkg/AZGGX6RwBtPVxhJ3rq+D9D9xnp53CixsbHp9pO4nweh2PDsEar0DHtLPQKT2s4gVj1JVt2oeNNITGil0ru0bmIMSEiROj9T/HcXTm58Zmfg7QUJZ8a3GqBu+MhIoTica/okhspoCQiEhfPFe0BxR6w0YqfsdjjSq3VR1CyRY6oHoCY40/1GQ4JnyazvbTHXARO0+POO6vvHsKowEtuK9TYPW4bWQAya4FR8ryTDeAKn7CYq0aNI6gCNAomco0rWzC+qQwFZ8+8O0Uh9aX3lq1IajkKBW/NCoDYcGtRHSb0CkvTySrRuGpmmmaYb/N3QbbkJRSFDHNSljFIQhEMHaP82Xy91ut9zO/eOGvAj7olBIUMfVFbcOuqYHh61XsZg19rZHxwAEYfA4PWomGBKkGqtKhhYcZsyludFqw20rFFK3D3NcIdVYJemmk93BXSvvyGHCtRIw/TDH23Dd3C+B6ZoJ5wuDpx4iJNhSIHpa0q01fDcf792RSDBfnNc1CrKtDWZ7Ii8HAE89EA0/gD4UF1oYZnFfBVMjnu2Bpx6Iut8gHzpAZe/MI66igturEXE6QfoM+VAXYcN1G9VEobhviUQaQraDc7tGKmOD3V/Of3NgbQpV/wXwqTvwtKSt0WU8AGuKIoJZ8RXUHzKryvU5cvhvi0MCLQVCM16mwF7YEaAHIJEgVhwYWoi0EeDr6rzFIYEyKoC+0Spt3wYq4L4vGukzwHEFGTz9IrJO6vGHKRoJUNCxgNlwofo+wDBFpR6IAFYclPHSZtz3qVDvDIgA0Uh8x3UJsOGGiGkA9TtcnE4EsOIriA0XKziATA94pL+4nwsILSyhbgfqd3gkQCUyP7Qo7cICCjLPIuN0Iv5mIH4hiiV4XB/ILcEjcWvY+Bmvyp2YAMHWtHFxOhE3ozLlIlXuxATIA014eCRuJTLX0JZPByjKXUyIxoVhC3OHcamHCIlnxbnTksk8/W288y9Bx9BM03DO+8N8lKbCYL6jABLPinNjtICRr5scHNPQk011uq5pznr+GvnC+h0ym0LU/c6x4rzFdNaJQSujbC5tXTMu2x44DEPG6US8sjzedFjaKpfqaNb8ra6Z/rgDyzsJIHGs+IC3mB7UtvKBNZMa4DorPBJnKXDB+eTSFs1EQosDSpA41Q8jTo+v3HkeaaNoNVQA6R8mEu+7NurmWUWFBZ23aCJe+oGzEGO36oaSolV4EaT2MzPW4Zhau/IQByLkcodSpCcmEmdaqndZL6qQsC5em+e4cqKl+hsDFBQWiCOx0g/J8SE1qj/eV1H5BzqojZBYVnwi7DvAFwfUIzELOnixdD2SoqJlIaTuLwwk3nddPndMcTPh43QiVg0bL+PFQHrwlexPF0Ni5MV5g1xjrfqtFZTxiSGx1s14ppjVSiGTfDvhUw8RUr0vzi095qRS/LqI6cpIDF+cW3rMCAAjzWW31+FTDxFSveM64Y0G7kn6XiDnvoohdesrkbkpD/4VSmO5ASWI1K99Hm7pMT+JF04EUnuf8BEgUX0lMj/ogRxmPnIkOp8gUq0V5/ueoOsOekfBuktxpForzo8QNFjN0FzYmosh1TquANcTMpiIPEfMmr8VIqpPP7j8xwCfZe5eRNyjjihSXQ0bpD4AfjMAM1WpGKndrXFcIdnF4qHUDK3wRkIoTieqSz+AdjWSY+KAwhsJ5UiwXBziyPkltu+JI9VkVGApEcwFDlskk1CcTlRnxYG5OMwVL3MckzBSjRUfQA+30xHnLPgoWy6O9K0y4wouPS5ei8AUKmcpFqcTPVaum8FLjzH1hS6CSAKpuoYNkbbC3AI1Q0xPYnF6hFTpi2N2xGCYDvD3FUeqLuhALREhqnWhK88t0aA2Qqq04rjN9toaXJQHP2tBAqnyaLkAQ0R2J0BPW4Dny8WRqiuRsV6m3oEWSIE3CLTEkaoqkcdox9kGxriIE2rFglqiKiRgkU+eCXgTFHglVwKpIv2AdpuJNNiVszNozxNHqqphEzsDxjhDIvcetOcJE1UeLSe42qqD8mBQT08cqepoOdFlfrt400WVoJ6JqPPQrqxhEz+TjL3qFAlWjyMc1BKVj5YbiGdIdYc76S6uj1ROP/A2WrNk8Ivhb4BUSj9IlWrx00agYl3hoJaovBQI2RHDEK/rgYyPHFLJF5erPuMmYUFWXAqp+71oxeWqz0p3xxQFenvxOJ3oqZgHljzHy+I4EbdAKnZ+nsvCmbbYRf7A+FIOqei4jnlEPnvFyODYPNhYEk49REgFK84pPbZb7mTDsom8tXbIDjNJpKIV5+yIITvLej5jrZzXSrB5STioJSomkTn1Aa/14TOtti15+wNh3oMUUvFoOU7pcVzi1TvWNJRtsEPB8S2QCmV5bIuU3g7jBZXNydtpC9raKBPUEhUcV/a0lBn8g1VFpYbNiwN3MHdLEilnxTlHk+WivPHJKZzNZZs8txW4e0kSKXe03ISZ5LX1/AO6q3P2DhLd5C6zA0NmKaKC48o+Iri8ltnzfMfSDD2UYV24y4IuMJ0iMy0Vj5Zj1wcUr2iMNJhuT+vL5bgCpB4gG+4VIOVq2Nilx6bsrXXQ81jkkNq5o+WYn1m/tQwqkDskF6dHSNl1M+a0VL+1DCjgYd7ySBkrPmBaJFP2NkjoBlRZpKzjOg4YnyR6GEL67rCNz3JxOlE3cyjRgvU18mt0OYJm2+WRMjVszPoAU/DoACrwIqBcUEuQ2umnsjJe9lnyTkFw0Y080jD99lnTEqYMqkqu6N27Asr44qyFGBNzkmSF4GUPcnF6hJRacda0pMu1EmK9VB4pXQpk74gROTUuUa8DJlKAlKYfOI6yDBOmPkQyTm9nDwjllR5re1GjhyrHU4DUpo4OdyHGCMTOHoLXcERIckEtQUpq2PiH8euIwuNU2DJQaaS0LA+yEGPt0c7rCblW2unKI9EkMqg+ANtQA/T+GOAVqCwl6QdYVYJtnhFHrk3P6DU4FUjxoUTgw/htaz+Dxey9lci9iPJI9Gg5Fz6KdfOyBVQN7c5CK7/ySPRoOdRh/LrmHNhe32B5Ebq6UjqoJYpr2JDn7dhGSDWra6vRyRG8i1MN0mtGRaDGy9DMwF+OCgNrsvNbpvDKvBKkuBJZrD4gbCzLenM5+qt5qNXpeDYtU+YyTuk4PUJ6rWGTqA+wdXKTSvSf9FWPapBerXiz93wlUoIUX3Ld5N1EGcnH6URRWR7mMP5rSg1SdLTc9F+FFKUfVB0DJyv5OJ0osuLbexlLapD+EZ6W1Es+TieKKpEbvX4yI/xhoJV6Dn3xvWZWHOXZAJJ8nE5EyvLcxWx12GhkNfnfgJQkkXuuN/cvjXIhrkBlIuVr2AbT5WmvWWYjd3O/UYNUeShR2BHXLVPTMNf5KZCC1EOEVHu03NjbHjYtw7xhR1SDxLkr0B3t/H2g4+5fbBgJcj1qbzI7HTe2pelXHWFKgtoICZhD7S1GoUVsWQpCvWsjAS/We9XAnSxPa8e6ygBThwS9HjUDttitjg6x9HeH1O33n56/vqCRXhVOzQfHUtgR5eL0bncY4nz/851sJc3DaOlfdEOJRRRHIjjDx6/vYPdtgjQJp+agpUlaRDEk0jifP/35UejyJB5X2BEvjibuI6LjdELz+OnrxxfZakGmxmFH3AdhsCLQXiikYYjz7ev7l2s0ToXCYCVKvSK5oHF62DhPz399+firZB0QWlGwsjERwQoEiRjp7/+8/xVxxI5qDUbLUxiEgToiJ/VAGufpw/uPg6uOHKgmu9Ve5949XosUTTn9cMq50cABa+HNj+eWUd8RK7Mp3dAODD9/+O33u2ibKhGLeAmMyo5YSj0Moynn7xfsbasNyI2CFT20iDmwbCEHaZznP76+e2nQDqDVW3irw8XO+IidtHGePn/9+1ZTjmIN3NHW33fiYCWecj58eef+SI1TpV4YrKzD4LL/9Mv/3r/cegK9olzvozKa/wNlCJ5hBSS5DgAAAABJRU5ErkJggg=='
  //      // open={userMenuActive}
     
  //    /></Link>
  //      <Link url="https://help.shopify.com/manual" external><TopBar.UserMenu
       
  //      name="LaunchPad"
  //      detail='Beauty&amp;Hair'
  //      url='https://www.google.com/'
  //           avatar='data:image/png;base64,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'
  //      // open={userMenuActive}
     
  //    /></Link>   
  //  </div>)

   



export default function FrameExample() {
  const defaultState = useRef({
    emailFieldValue: 'nnn',
    nameFieldValue: 'Beauty and Hair',
  });
  const skipToContentRef = useRef(null);

  const [toastActive, setToastActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [recent, setRecent] = useState([])

  const [state, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const state = await actions.isLoggedIn();
      setData({ ...state.data });
      // const response = await actions.getRecent(_id)
      // setRecent(response)
      
    };
    fetchData();
  }, []);

  const setUser = (user) => setData(user);

  const logOut = async () => {
    let res = await actions.logOut();
setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX

  };




  
  const [nameFieldValue, setNameFieldValue] = useState(
    defaultState.current.nameFieldValue,
  );
  const [emailFieldValue, setEmailFieldValue] = useState(
    defaultState.current.emailFieldValue,
  );
  const [storeName, setStoreName] = useState(
    defaultState.current.nameFieldValue,
  );
  const [supportSubject, setSupportSubject] = useState('');
  const [supportMessage, setSupportMessage] = useState('');

  const handleSubjectChange = useCallback(
    (value) => setSupportSubject(value),
    [],
  );
  const handleMessageChange = useCallback(
    (value) => setSupportMessage(value),
    [],
  );
  const handleDiscard = useCallback(() => {
    setEmailFieldValue(defaultState.current.emailFieldValue);
    setNameFieldValue(defaultState.current.nameFieldValue);
    setIsDirty(false);
  }, []);
  const handleSave = useCallback(() => {
    defaultState.current.nameFieldValue = nameFieldValue;
    defaultState.current.emailFieldValue = emailFieldValue;

    setIsDirty(false);
    setToastActive(true);
    setStoreName(defaultState.current.nameFieldValue);
  }, [emailFieldValue, nameFieldValue]);
  const handleNameFieldChange = useCallback((value) => {
    setNameFieldValue(value);
    value && setIsDirty(true);
  }, []);
  const handleEmailFieldChange = useCallback((value) => {
    setEmailFieldValue(value);
    value && setIsDirty(true);
  }, []);
  const handleSearchResultsDismiss = useCallback(() => {
    setSearchActive(false);
    setSearchValue('');
  }, []);
  const handleSearchFieldChange = useCallback((value) => {
    setSearchValue(value);
    setSearchActive(value.length > 0);
  }, []);
  const toggleToastActive = useCallback(
    () => setToastActive((toastActive) => !toastActive),
    [],
  );
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    [],
  );
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive,
      ),
    [],
  );
  // const toggleIsLoading = useCallback(
  //   () => setIsLoading((isLoading) => !isLoading),
  //   [],
  // );
  const toggleIsLoading = ()=>{
    console.log('Loading')
    setIsLoading(true)
  }
  const toggleModalActive = useCallback(
    () => setModalActive((modalActive) => !modalActive),
    [],
  );

  const toastMarkup = toastActive ? (
    <Toast onDismiss={toggleToastActive} content="Changes saved" />
  ) : null;

  const userMenuActions = [
    {
      items: [{content: 'Community forums'}],
    },
  ];

  const contextualSaveBarMarkup = isDirty ? (
    <ContextualSaveBar
      message="Unsaved changes"
      saveAction={{
        onAction: handleSave,
      }}
      discardAction={{
        onAction: handleDiscard,
      }}
    />
  ) : null;

//   const userMenuMarkup = () =>{
//  <div style={{display: 'flex', flexDirection: 'column !important'}}>
     
//     <Link url="https://help.shopify.com/manual" external><TopBar.UserMenu
//       actions={userMenuActions}
//       name="LaunchPad"
//       detail='Beauty&amp;Hair'
//       url='https://www.google.com/'
//            avatar='data:image/png;base64,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'
//       // open={userMenuActive}
    
//     /></Link>
//       <Link url="https://help.shopify.com/manual" external><TopBar.UserMenu
//       actions={userMenuActions}
//       name="LaunchPad"
//       detail='Beauty&amp;Hair'
//       url='https://www.google.com/'
//            avatar='data:image/png;base64,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'
//       // open={userMenuActive}
    
//     /></Link>
//       <Link url="https://help.shopify.com/manual" external><TopBar.UserMenu
//       actions={userMenuActions}
//       name="LaunchPad"
//       detail='Beauty&amp;Hair' 
//       url='https://www.google.com/'
//            avatarSource='data:image/png;base64,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'
//       // open={userMenuActive}
    
//     /></Link>
//       <Link url="https://help.shopify.com/manual" external><TopBar.UserMenu
//       actions={userMenuActions}
//       name="LaunchPad"

     
    
//     /></Link>
//       <Link url="https://help.shopify.com/manual" external><TopBar.UserMenu
//       actions={userMenuActions}
//       name="LaunchPad"
//       detail='Beauty&amp;Hair'
//       url='https://www.google.com/'
//            avatarSource='data:image/png;base64,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'
//       // open={userMenuActive}
    
//     /></Link>
    
//   </div>
//   }
  

  const searchResultsMarkup = (
    <Card>
      <ActionList
        items={[
          {content: 'Shopify help center'},
          {content: 'Community forums'},
        ]}
      />
    </Card>
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchFieldChange}
      value={searchValue}
      placeholder="Search"
    />
  );
const barLinks =(
  <TopBar.UserMenu
      
       name="LaunchPad"
       detail='Beauty&amp;Hair'
      initials='L'
       // open={userMenuActive}
     
     />
)


  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={barLinks}
      // searchResultsVisible={searchActive}
      // searchField={searchFieldMarkup}
      // searchResults={searchResultsMarkup}
      // onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const navigationMarkup = (
    <Navigation location="/nav">
     
      <Navigation.Section
        separator
        title="Launch Pad"
        items={[
          {
            url: '/',
            label: 'Home',
            icon: HomeMajor,
           onClick: toggleIsLoading
          },
          {
            url: '/sale',
            label: 'Sales',
            icon: CartMajor,
            onClick: toggleIsLoading
          },
          {
            url: '/ellen-wille',
            label: 'Ellen Wille',
            icon: LegalMajor,
            onClick: toggleIsLoading
          },
          {
            url: '/inventory',
            label: 'Inventory',
            icon: InventoryMajor,
            onClick: toggleIsLoading
          },
          {
            url: '/marketing',
            label: 'Marketing',
            icon: MarketingMajor,
            onClick: toggleIsLoading
          },
          {
            url: '/new-hire',
            label: 'Management',
            icon: JobsMajor,
            onClick: toggleIsLoading
          },
          {
            url: '/accounting',
            label: 'Accounting',
            icon:  MonerisMajor,
            onClick: toggleIsLoading
          },
          {
            url: '/it',
            label: 'IT',
            icon:  GamesConsoleMajor,
            onClick: toggleIsLoading
          },
          {
           
            label: 'Log out',
            url: '/',
            icon: LockMajor,
            onClick: logOut,
           
          },

        ]}
        // action={{
        //   icon: ConversationMinor,
        //   accessibilityLabel: 'Contact support',
        //   onClick: toggleModalActive,
        // }}
      />
    </Navigation>
  );

  const loadingMarkup = isLoading ? <Loading /> : null;
  const skipToContentTarget = (
    <a id="SkipToContentTarget" ref={skipToContentRef} tabIndex={-1} />
  );

  const actualPageMarkup = (
    <Page title="Account">
      <Layout>
        {skipToContentTarget}
        <Layout.AnnotatedSection
          title="Account details"
          description="Jaded Pixel will use this as your account information."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                label="Title"
                value={nameFieldValue}
                onChange={handleNameFieldChange}
              />
              <TextField
                type="url"
                label="Link"
                value={emailFieldValue}
                onChange={handleEmailFieldChange}
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );

  const loadingPageMarkup = (
    <SkeletonPage>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText lines={9} />
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );

  const pageMarkup = isLoading ? loadingPageMarkup : null;


  const modalMarkup = (
    <Modal
      open={modalActive}
      onClose={toggleModalActive}
      title="Contact support"
      primaryAction={{
        content: 'Send',
        onAction: toggleModalActive,
      }}
    >
      <Modal.Section>
        <FormLayout>
          <TextField
            label="Subject"
            value={supportSubject}
            onChange={handleSubjectChange}
          />
          <TextField
            label="Message"
            value={supportMessage}
            onChange={handleMessageChange}
            multiline
          />
        </FormLayout>
      </Modal.Section>
    </Modal>
  );

  const theme = {
    colors: {
      topBar: {
        background: '#fff',
        backgroundLighter: '#F4F6F8',
        backgroundDarker: '#DFE3E8',
        border: '#C4CDD5',
        color: '#212B36',
      },
    },
    logo: {
      width: 250,
      topBarSource:
        'https://cdn.shopify.com/s/files/1/2636/2774/files/b_h_lg.png?v=1607446236',
      contextualSaveBarSource:
        'https://cdn.shopify.com/s/files/1/2636/2774/files/b_h_lg.png?v=1607446236',
      url: '/',
      accessibilityLabel: 'Beauty and Hair',
    },
  };

  return (
    <div>
   
    <div style={{height: '500px'}}>
      <AppProvider
        theme={theme}
        i18n={{
          Polaris: {
            Avatar: {
              label: 'Avatar',
              labelWithInitials: 'Avatar with initials {initials}',
            },
            ContextualSaveBar: {
              save: 'Save',
              discard: 'Discard',
            },
            TextField: {
              characterCount: '{count} characters',
            },
            TopBar: {
              toggleMenuLabel: 'Toggle menu',

              SearchField: {
                clearButtonLabel: 'Clear',
                search: 'Search',
              },
            },
            Modal: {
              iFrameTitle: 'body markup',
            },
            Frame: {
              skipToContent: 'Skip to content',
              Navigation: {
                closeMobileNavigationLabel: 'Close navigation',
              },
            },
          },
        }}
      >
 {state.email ? (

        <Frame
          topBar={topBarMarkup}
          navigation={navigationMarkup}
          showMobileNavigation={mobileNavigationActive}
          onNavigationDismiss={toggleMobileNavigationActive}
          skipToContentTarget={skipToContentRef.current}
        >
          {contextualSaveBarMarkup}
          {loadingMarkup}
          {pageMarkup}
        
          {toastMarkup}
          {modalMarkup}
          <BrowserRouter>
        
        <Switch>
       <>
         
          <Route
            exact
            path="/profile"
            render={props => <Profile {...props} user={state} />}
          />
          <Route
            exact
            path="/draft"
            render={props => <Draft {...props} user={state} />}
          />
          <Route
            exact
            path="/sale"
            render={props => <Sale {...props} user={state} />}
          /> 
            <Route
            exact
            path="/inventory"
            render={props => <Inventory {...props} user={state} />}
          />  
           <Route
            exact
            path="/marketing"
            render={props => <Marketing {...props} user={state} />}
          />  
           <Route
            exact
            path="/new-hire"
            render={props => <Newhire {...props} user={state} />}
          />
          <Route
            exact
            path="/accounting"
            render={props => <Accounting {...props} user={state} />}
          />
            <Route
            exact
            path="/it"
            render={props => <IT {...props} user={state} />}
          />
           <Route
            exact
            path="/ellen-wille"
            render={props => <Ellen {...props} user={state} />}
          />
            <Route
            exact
            path="/"
            render={props => <Home {...props} user={state} />}
          />
          
          
            
      </>
        </Switch>
      </BrowserRouter>
        </Frame>) : (


        <Page
  narrowWidth

>
  <center><Card  sectioned >
    <div style={{paddingTop: '2em'}}></div>
  <img
          className="d-block w-100 carousel"
          src={require("../src/images/logo.png")}
        />
       <div style={{  fontWeight: '100', color: '#212b36'}}><DisplayText size="large">LAUCH PAD</DisplayText></div>
       {/* <Stack distribution="fillEvenly"> */}
       <div style={{paddingTop: '5em'}}></div>
       <center>
  {!state.email && (
         <GoogleAuthLogin setUser={setUser} />
       )}
{!state.email && (
         <GoogleAuth
           style={{ minWidth: "100%", background: "red" }}
           setUser={setUser}
         />
         
       )}
</center>
{/* </Stack> */}
  </Card>
  </center>
</Page>




)}

      </AppProvider>
    </div>
   
         </div> 
       
  );
}
