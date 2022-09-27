import React,{useEffect,useState} from 'react'
// import GoogleLogin from 'react-google-login';
// or
// import { GoogleLogin } from 'react-google-login';
// import { gapi } from 'gapi-script'
import { GoogleLogout } from 'react-google-login';

import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';


const Google = () => {

    const [ profile, setProfile ] = useState([]);
    const clientId = '1042229641158-47kgo2tnckcjj5enfvqf8t3m8bc1a1p0.apps.googleusercontent.com';
    
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        setProfile(res.profileObj);
        console.log("value of res",res)
    };

    const onFailure = (err) => {
        console.log('failed', err);

    };

    const logOut = () => {
        setProfile(null);
    };

    return (
        <>
        
        <div style={{marginTop:70}} >
        <h2>React Google Login</h2>
        <br />
        <br />
        {profile ? (
                <div>
                    <img src={profile.imageUrl} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
        {/* {profile ? (
            <div>
                <img src={profile.imageUrl} alt="user image" />
                <h3>User Logged in</h3>
                <p>Name: {profile.name}</p>
                <p>Email Address: {profile.email}</p>
                <br />
                <br />
                <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
            </div>
        ) : (
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        )} */}
    </div>
    </>

    )
}

export default GoogleLogin