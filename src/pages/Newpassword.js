import { Grid } from '@mui/material'
import { React, useState } from 'react'
import Swal from 'sweetalert2'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Link ,useNavigate,useLocation } from 'react-router-dom';

import {
    Card,
    Container,
    Button,
    TextField,
    IconButton,
    Box,
} from '@mui/material';
import {Loader} from 'react-overlay-loader';

import MUIDataTable from "mui-datatables";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import { border } from '@mui/system';

// import baseurl
import urlvariable from '../api/ahmedurl' 

import { useForm } from 'react-hook-form';



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

const Newpassword = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
      
    const Navigate = useNavigate()

    const uselocation = useLocation()
         
    const [newpassword, setnewpassword] = useState('')

    const [loader ,setloader] = useState(false)

    console.log("new password id ", uselocation.state.userid)


    const confirmationpassword = (data) => {
        
        
        // console.log("new password ===>", useLocation.userid)
        var formdata = new FormData();
        formdata.append("password", data.newpassword);
        formdata.append("userid", uselocation.state.userid);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            headers: {
              Accept: 'application/json'
            },
            redirect: 'follow'
          };

          setloader(true)
        fetch(`${urlvariable.baseURL2}/forgetConfirmation`, requestOptions)
            .then(response => response.json())
            .then(result =>
                
                {

                    setloader(false)
                console.log(result)
                if(result['status'] === true)
                {
                    Swal.fire({
                        icon: 'success',
                        title: result.message,
                        showConfirmButton: false,
                        timer: 2000,
                    })
                    // setmyid(result.id)
                    Navigate("/login")
                    // `/track/${TrackNumber}`
                    

                    // console.log("id ",result.id)

                }
                else{
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
            {/* <h6>ForgetPassword</h6> */}

            {
                 loader == true ?
                <Loader fullWidth loading />: null
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
                        <form onSubmit={handleSubmit(confirmationpassword)} >
                            <Typography variant="h6" component="h6">
                                Enter New Password
                            </Typography>
                            <TextField fullWidth label="New Password" id="newpassword" type="password" margin="dense" autoComplete="off"
                                sx={{ input: { color: "black" }, "label": { color: "black" } }}
                                {...register('newpassword', {
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

                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: 1, sm: 2, md: 4 }}
                                marginTop={2}
                                marginBottom={2}
                            // direction='row-reverse'
                            >




                                {/* <Link to="" > */}
                                    <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                                        Reset Code
                                    </Button>
                                {/* </Link> */}

                            </Stack>
                        </form>
                    </Box>







                </Grid>

            </Grid>
        </div>

    )
}

export default Newpassword