import { Grid } from '@mui/material'
// import { React, useState } from 'react'
import React, { Component, useState } from 'react'
import styled from 'styled-components';
import Swal from 'sweetalert2'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// fb book
// import { FacebookAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

import Firebase from '../Firebase'

import { Loader } from 'react-overlay-loader';

import {
    Card,
    Container,
    Button,
    TextField,
    IconButton,
    Box,
} from '@mui/material';

import BaseUrl from '../api/ahmedurl';

import MUIDataTable from "mui-datatables";
// import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import { border } from '@mui/system';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Input = styled('input')({
    display: 'none',
});

const styles = {
    heroContainer: {
        // height: 800,


        // backgroundColor: 'red',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // width: `calc(100vw + 48px)`,
        // margin: -24,
        padding: 24,
    }

};

const Wrapper = styled.div`
    @media only screen and (max-width : 399px) {
        width: 10%
    }
`

const BtnFacebook = styled.button`
    width: 165px;
    height:35px;  
    border-radius: 4px;
    background: #3b5998;
    color:white;
    border:0px transparent;  
    text-align: center;
    margin:5px;
    display: inline-block;

    &:hover{
        background: #3b5998;
        opacity: 0.6;
    }
`;
const BtnGoogle = styled.button`
    margin:5px;
    width: 165px;
    height:35px;
    border-radius: 4px;
    background: #db3236;
    color:white;
    border:0px transparent;
    text-align: center;

    &:hover{
        background: #3b5998;
        opacity: 0.6;
    }
`




const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [email, Setemail] = useState('')
    const [password, Setpassword] = useState('')

    const [loader, setloader] = useState(false)

    const location = useLocation()




    const Navigate = useNavigate()

    
// d.getHours();

    const facebookfun = () => {


        const provider = new FacebookAuthProvider();
        const auth = getAuth();
        const datefun = new Date();

        signInWithPopup(auth, provider)
            .then((result) => {

                // The signed-in user info.
                // if(result.accessToken == true )
                // {
                //     alert("hello ahmed")
                // }
                // setTimeout(()=>{
                //     localStorage.clear()

                // },3000)
                const d = new Date();
                let user = result.user;
                // setInterval(myTimer, 1000);

                // function myTimer() {
                    // let dtime = new Date();
                    // document.getElementById("demo").innerHTML = d.toLocaleTimeString();
                // }
                console.log("Token is===>", user)
                console.log("expire token===>", user.stsTokenManager)
                console.log("expire time===>", user.stsTokenManager.expirationTime)
                // console.log("apna user is===>", user.displayName)
                // window.location("/dashboard")
                Navigate("/")

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                // console.log("credential is ==>",credential)
                const accessToken = credential.accessToken;
                // console.log("accessToken is ==>",accessToken)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // The email of the user's account used.
                // const email = error.customData.email;
                // // The AuthCredential type that was used.
                // const credential = FacebookAuthProvider.credentialFromError(error);

                console.log(error.message)

                // ...
            });

        // firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        //     // Send token to your backend via HTTPS
        //     console.log("my token is ==>",idToken)
        //     // ...
        //   }).catch(function(error) {
        //     // Handle error
        //   });


    }

    const registernavigate = () => {
        Navigate('/signup')

    }

    const onSubmit = (data) => {

        // console.log("login data is ==>",data)
        setloader(true)
        var formdata = new FormData();
        formdata.append("password", data.password);
        formdata.append("email", data.email);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            headers: {
                Accept: 'application/json'
            },
            redirect: 'follow'
        };


        fetch(`${BaseUrl.baseURL2}/login`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setloader(false)

                console.log("value of token ", result.access)


                // setlocalstorageitem( result.access)
                // console.log("result is ==>" ,result)
                // login ke sath token aa rha hai usko local storage save kr rha hun agar koi wiithout token ke bad aae tou usko website pr nai jae ga 
                if (result['status'] == true) {
                    localStorage.setItem('ahmed', JSON.stringify(result.access));



                    // console.log("token of ahmed is ===>",items)

                    Swal.fire({
                        icon: 'success',
                        title: result.message,
                        showConfirmButton: false,
                        timer: 2000,
                    })

                    Navigate('/')
                }
                else {
                    console.log("status is false ", result)

                    Swal.fire({
                        title: "Oops",
                        text: result.message,
                        icon: "error",
                        confirmButtonColor: "#ed2a26",
                    });
                }
            }

            )


            .catch(error => console.log('error', error));

    }

    return (

        <div>
            {loader == true ?
                <Loader fullPage loading /> : null
            }
            <Grid container justifyContent="center" spacing={10} padding={4}
                style={styles.heroContainer} >
                <Grid item xs={12} md={8}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh"

                >
                    <Box
                        sx={{
                            width: 700,
                            maxWidth: '100%',
                            border: '2px solid black',
                            padding: "19px",
                            borderRadius: '16px'




                            // margin: "dense"
                        }}



                    >
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <Typography variant="h2" component="h2">
                                Login Form
                            </Typography>
                            <TextField fullWidth label="Email" id="email" name="email" type="email" margin="dense" autoComplete="off"
                                {...register('email', {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Please enter a valid Email like workingexample@email.com',
                                    },
                                })}
                            />
                            <Typography variant="h5" component="h5" style={{ color: "red" }}>
                                {errors.email?.message}
                            </Typography>
                            <TextField fullWidth label="Password" id="password" type="password" margin="dense" autoComplete="off"
                                {...register('password', {
                                    required: "Password is required",
                                    minLength: {
                                        value: 4,
                                        message: "Password must be more than 4 Characters",
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: "Password must be less than 15 Characters",
                                    }

                                })}
                            />
                            <Typography variant="h5" component="h5" style={{ color: "red" }}>
                                {errors.password?.message}
                            </Typography>
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: 1, sm: 2, md: 4 }}
                                marginTop={2}
                                marginBottom={2}
                            // direction='row-reverse'
                            >


                                <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                                    Login
                                </Button>


                                {/* <Link to="/signup"  variant="contained" > */}
                                <Button variant="contained" onClick={registernavigate} endIcon={<SendIcon />}>
                                    Register
                                </Button>
                                {/* </Link> */}
                            </Stack>
                            <Link to="/forgetpassword" >
                                <Typography variant="h6" component="h6">
                                    Forget Your Password ?
                                </Typography>
                            </Link>



                        </form>

                        <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                            <Wrapper>
                                <BtnFacebook onClick={facebookfun} >
                                    &nbsp;&nbsp;Sign  with Facebook
                                </BtnFacebook >
                                <BtnGoogle   >
                                    &nbsp;&nbsp;Sign In with Google
                                </BtnGoogle >
                            </Wrapper>
                        </div>

                    </Box>







                </Grid>

            </Grid>
        </div>

    )
}

export default Login