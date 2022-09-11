import { Grid } from '@mui/material'
import { React, useState } from 'react'
import Swal from 'sweetalert2'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

import { useLocation, useNavigate } from 'react-router-dom';

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

import { useForm } from 'react-hook-form';

import urlvariable from '../api/ahmedurl'



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

const VerifyCode = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const uselocation = useLocation()
    const Navigate = useNavigate()

    const [code, setcode] = useState('')
    const [loader, setloader] = useState(false)

    console.log("value of id us ", uselocation.state.userid)


    // api arrow function

    const ahmed = (data) => {


        console.log("value of verifycode is ===>", data.code)
        var formdata = new FormData();
        formdata.append("token", data.code);
        formdata.append("id", uselocation.state.userid);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            headers: {
                Accept: 'application/json'
            },
            redirect: 'follow'
        };

        setloader(true)

        fetch(`${urlvariable.baseURL2}/forgettokenCheck`, requestOptions)
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
                    // setmyid(result.id)
                    Navigate("/newpassword", { state: { userid: uselocation.state.userid } })
                    // `/track/${TrackNumber}`


                    // console.log("id ",result.id)

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
                <Loader fullPage loading /> : null
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
                        <form onSubmit={handleSubmit(ahmed)} >
                            <Typography variant="h6" component="h6">
                                Verify Code
                            </Typography>
                            <TextField fullWidth label="VerifyCode" id="code" type="text" margin="dense" autoComplete="off"
                                sx={{ input: { color: "black" }, "label": { color: "black" } }}
                                // {...register("code", {
                                //     required: "VerifyCode is Required",
                                //     valueAsNumber: true,
                                //     pattern:{
                                //         value: /^(0|[1-9]\d*)(\.\d+)?$/
                                //      },
                                // })}
                                {...register('code', {
                                    required: "VerifyCode is Required",
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: 'Please Enter a Number like 987879',
                                    },

                                })}
                            />
                            <Typography variant="h6" component="h6" style={{ color: "red" }}>
                                {errors.code?.message}
                            </Typography>

                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: 1, sm: 2, md: 4 }}
                                marginTop={2}
                                marginBottom={2}
                            // direction='row-reverse'
                            >




                                {/* <Link to="" > */}
                                <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                                    Verify Code
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

export default VerifyCode