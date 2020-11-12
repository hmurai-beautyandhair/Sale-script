import React, { Component } from 'react';

const Profile = (props) => {
    if(!props.user.email){ 
        props.history.push('/log-in') ;
    }   
    console.log('profile', props)
    return (
        <div>
            Profile
            Greetings {props.user.email} !
        </div>
    );
}

export default Profile;