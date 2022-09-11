import { Grid } from '@mui/material'
import { React, useState } from 'react'
import Swal from 'sweetalert2'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';

import {
    Card,
    Container,
    Button,
    TextField,
    IconButton,
    Box,
} from '@mui/material';

import MUIDataTable from "mui-datatables";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import { border } from '@mui/system';
import { useForm } from 'react-hook-form';

import urlvariable from '../api/ahmedurl'

import {Loader} from 'react-overlay-loader';
 
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

const ForgetPassword = () => {

    // 
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };


    // 

    const { register, handleSubmit, formState: { errors } } = useForm();


    const Navigate = useNavigate()


    // const [sendemail, setsendemail] = useState('')
    const [sendemail, Setsendemail] = useState('')


    // loader
    const[loader, setloader]=useState(false)


    const [myid, setmyid] = useState('')

    //  console.log("value of error is ==>",errors)



    const onSubmit = (data) => {


        console.log("value of forgetpassword is ===>", data)
        var formdata = new FormData();
        formdata.append("email", data.sendemail);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            headers: {
                Accept: 'application/json'
            },
            redirect: 'follow'
        };

        setloader(true)

        fetch(`${urlvariable.baseURL2}/forgotPasswordlinkSend`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setloader(false)
                console.log(result)
                if (result['status'] === true) {
                    Swal.fire({
                        icon: 'success',
                        title: result.message,
                        showConfirmButton: false,
                        timer: 2000,
                    })
                    setmyid(result.id)
                    Navigate("/verifycode", { state: { userid: result.id } })

                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: result.message,
                        showConfirmButton: false,
                        timer: 2000,
                    })
                }

            }



            )
            .catch(error => console.log('error', error));

    }



    return (
        <div>
            {loader == true ?
                <Loader fullPage loading />:null
            }
            {/* <h6>ForgetPassword</h6> */}
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
                            <Typography variant="h4" component="h4">
                                Forgot Password
                            </Typography>
                            <Typography variant="p" component="p" >
                                We will send a OTP Code to reset your password
                            </Typography>


                            <TextField fullWidth label="Email" name="sendemail" id="sendemail" type="email" margin="dense" autoComplete="off"
                                sx={{ input: { color: "black" }, "label": { color: "black" } }}
                                {...register('sendemail', {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Please enter a valid Email like workingexample@email.com ',
                                    },
                                })}
                            />
                            <Typography variant="h6" component="h6" style={{ color: "red" }}>
                                {errors.sendemail?.message}
                            </Typography>

                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: 1, sm: 2, md: 4 }}
                                marginTop={2}
                                marginBottom={2}
                            // direction='row-reverse'
                            >

                                <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                                    Forget Password
                                </Button>


                            </Stack>
                        </form>
                    </Box>







                </Grid>

            </Grid>
        </div >

    )
}

export default ForgetPassword