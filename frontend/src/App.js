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


import React, {useState,  useEffect} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import actions from "./services/index";
import GoogleAuth from "./components/auth/GoogleAuth";
import GoogleAuthLogin from "./components/auth/GoogleAuthLogin";
import LogOut from "./components/auth/LogOut";
import Navbar from "./components/navbar/Navbar";
import Draft from "./components/sales/Draft";
import Sale from './components/sales/Sale'
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
  
 
export default function App() { 
  const [state, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const state = await actions.isLoggedIn();
      setData({ ...state.data });
    };
    fetchData();
  }, []);

  const setUser = (user) => setData(user);

  const logOut = async () => {
    let res = await actions.logOut();
setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX
  };


    return (
      <BrowserRouter>
        <nav>
          {state.email ? (
           
              <Navbar logout={logOut} />
           
          ) : (
            <div className="container5">
              <div class="panel panel-primary">
                <div className="firstPage">
                  <img
                    style={{ width: "fitContent", height: "90%" }}
                    className="d-block w-100 carousel"
                    src={require("../src/images/logo.png")}
                  />
                  <h1 id="lauchPad2">LaunchPad</h1>
                </div>
                <br></br>
                <br></br>
                <div className="googleButtons">
                  <p>
                    {!state.email && (
                      <GoogleAuth
                        style={{ minWidth: "100%", background: "red" }}
                        setUser={setUser}
                      />
                    )}
                  </p>
                  <p>
                    {!state.email && (
                      <GoogleAuthLogin setUser={setUser} />
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
        </nav>
        <Switch>
          {state.email ? (
            <Route exact path="/" render={props => <Home {...props} />} />
          ) : (
            ""
          )}
          {/* <Route
            exact
            path="/sign-up"
            render={(props) => <SignUp {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/log-in"
            render={(props) => <LogIn {...props} setUser={this.setUser} />}
          /> */}
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
            path="/sales"
            render={props => <Sale {...props} user={state} />}
          />
        </Switch>
      </BrowserRouter>
    );

}

