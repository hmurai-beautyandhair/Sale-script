import React from "react";
import actions from "../../services/index";
import { GoogleLogout } from "react-google-login";

const LogOut = (props) => {
  
  const onResponse = (response) => {
    console.log(response);
    
   
    
  };
  return (
 
    <GoogleLogout
    clientId={ process.env.REACT_APP_GOOGLEID }
    buttonText='Logout'
    onLogoutSuccess={ onResponse }
    onFailure={ onResponse }
  />
  );
};

export default LogOut;