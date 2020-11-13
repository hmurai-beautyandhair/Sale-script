import React from "react";
import actions from "../../services/index";
import { GoogleLogin } from "react-google-login";

const responseGoogle = (props) => {
  console.log('props', props);
  const onResponse = (response) => {
    console.log('REspnce', response);
    const user = {
      ...response.profileObj,
      password: response.profileObj?.googleId,
    };
    actions
      .signUp(user)
      .then(async user => {
       
props.setUser({ ...user.data })
       
        
        
      })
      .catch(async ({ response }) =>
      {
        if(response !== undefined) {
        if(response.data.err.message == 'A user with the given username is already registered'){
          alert(
            "Looks like you already have an account!"
          );
        }
     console.error('error', response.data.err.message)
        console.error(response)
        
      }
      });
  };
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLEID}
      render={(renderProps) => {
        return (
          <button
            type="button"
            onClick={renderProps.onClick}
            className='auth'
          >
            Sign Up
          </button>
        )
      }}
      onSuccess={onResponse}
      onFailure={onResponse}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default responseGoogle;
