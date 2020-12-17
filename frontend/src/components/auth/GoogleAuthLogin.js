import React from "react";
import actions from "../../services/index";
import { GoogleLogin } from "react-google-login";
import {Button} from '@shopify/polaris';

const responseGoogle = (props) => {
  

  const onResponse = (response) => {
    // console.log(response);

    const user = {
      ...response.profileObj,
      password: response.profileObj?.googleId,
    };
    console.log('Google ', response);
    actions
      .logIn(user)
      .then(async (user) => {
        let res1 = await props.setUser({ ...user.data });

      })
      .catch(({ response }) => {
        if(response !== undefined) {
        if(response.data == 'Unauthorized')  alert(
          "Looks like you do not have an account yet!"
        );
        
        console.error(response)}
      });
  };
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLEID}
      render={(renderProps) => {
        return (
         <Button primary
         fullWidth
         size='large'
            type="text"
            onClick={renderProps.onClick}
            className='auth'
          >
            Log In
          </Button>
        )
      }}
      onSuccess={onResponse}
      onFailure={onResponse}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default responseGoogle;
