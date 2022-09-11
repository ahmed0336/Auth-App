import { Grid } from '@mui/material'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
    Card,
    Container,
    Button,
    TextField,
    IconButton,
    Box,
} from '@mui/material';

import signupcss from './Signupcss.module.css'

import MUIDataTable from "mui-datatables";
import { styled } from '@mui/material/styles';
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


        
        
        // width: `calc(100vw + 48px)`,
        // margin: -24,
        
        padding: 24,
//   backgroundColor:"red",
        
    }


};

const Signup = () => {

    // const  {register ,handleSubmit ,errors  } = useForm()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const Navigate = useNavigate();

    const nagvigatetologin = () => {
        Navigate('/login')
    }

    const [name, Setname] = useState('')
    const [email, Setemail] = useState('')
    const [alias, Setalias] = useState('')
    const [password, Setpassword] = useState('')
    const [confirmpassword, Setconfirmpassword] = useState('')

    // const Signupfun = () => {

    //     console.log("my name is ", name)
    //     console.log("my alias is ", alias)
    //     console.log("my email is ", email)
    //     console.log("my password is ", password)
    //     console.log("my confirmpassword is ", confirmpassword)

    // }

    const onSubmit = (data) => {
        console.log("data of errr", data)

        var formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("email", data.email);
        formdata.append("alias", data.alias);
        formdata.append("password", data.password);

        console.log("name is onsubmit", data.name)

        // var requestOptions = {
        //     method: 'POST',
        //     body: formdata,
        //     redirect: 'follow'
        // };
        var requestOptions = {
            method: 'POST',
            body: formdata,
            headers: {
                Accept: 'application/json'
            },
            redirect: 'follow'
        };


        fetch("https://testapi1.pythonanywhere.com/webapi/usr", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.msg)
                if (result['status'] == true) {
                    // alert("login sucessfully")
                    Swal.fire({
                        icon: 'success',
                        title: result.message,
                        showConfirmButton: false,
                        timer: 2000,
                    })
                    Navigate('/login')
                }
                else {

                    
                    Swal.fire({
                        title: "Oops",
                        text: result.message,
                        icon: "error",
                        confirmButtonColor: "#ed2a26",
                    });

                }

            })
            .catch(error => console.log('error', error));

    }


    return (
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
                        // backgroundColor:'red',
                        border: '2px solid black',
                        padding: "20px",
                        borderRadius: '16px'



                        // margin: "dense"
                    }}

                >
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <Typography variant="h4" component="h4">
                            Registration Form
                        </Typography>
                        <TextField fullWidth label="Name"
                            id="name"
                            margin="dense"
                            {...register('name', { required: 'Name is required' })}
                        // {...register( 'Password', { required: 'Password is required!' })}
                        sx={{ input: { color: "black" }, "label": {color: "black"} }} 
                        />

                        <Typography variant="h6" component="h6" style={{ color: "red" }}>
                            {errors.name?.message}
                        </Typography>

                        <TextField fullWidth label="Alias"
                            id="alias"
                            // value={alias}
                            // onChange={(e) => { Setalias(e.target.value) }}
                            {...register('alias', { required: 'Alias is required ' })}
                            sx={{ input: { color: "black" }, "label": {color: "black"} }} 
                            margin="dense" />
                        <Typography variant="h6" component="h6" style={{ color: "red" }}>
                            {errors.alias?.message}
                        </Typography>

                        <TextField fullWidth label="Email"
                            id="email"
                            // value={email}
                            // onChange={(e) => { Setemail(e.target.value) }}
                            {...register('email', {
                                required: "Email is required",
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please enter a valid Email like workingexample@email.com',
                                },
                            })}
                            type="email" margin="dense" autoComplete="off"
                            sx={{ input: { color: "black" }, "label": {color: "black"} }} 
                            />
                        <Typography variant="h6" component="h6" style={{ color: "red" }}>
                            {errors.email?.message}
                        </Typography>

                        <TextField

                            fullWidth
                            label="Password"
                            id="password"
                            type="password"
                            margin="dense"
                            {...register('password', {
                                required: "Password is required",
                                minLength: {
                                    value: 4,
                                    message: "Password must be more than 4 Characters",
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Password must be less than 10 Characters",
                                }

                            })}
                            sx={{ input: { color: "black" }, "label": {color: "black"} }} 
                        />
                        <Typography variant="h6" component="h6" style={{ color: "red" }}>
                            {errors.password?.message}
                        </Typography>

                        <TextField

                            fullWidth
                            label="confirmpassword"
                            id="confirmpassword"
                            type="password"
                            margin="dense"
                            {...register('confirmpassword', { required: "Confirmpassword is required" })}
                        />
                        <Typography variant="h6" component="h6" style={{ color: "red" }}  >
                            {errors.confirmpassword?.message}

                        </Typography>
                        {/* <p style={{color: "red"}} >{errors.confirmpassword?.message}</p> */}



                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                            marginTop={2}
                            marginBottom={2}
                        >


                            <Button variant="contained" type='submit' endIcon={<SendIcon />}>
                                Register
                            </Button>

                            <Button variant="contained" onClick={nagvigatetologin} endIcon={<SendIcon />}>
                                Login
                            </Button>

                        </Stack>

                    </form>

                </Box>






            </Grid>



        </Grid>
    )
}

export default Signup;