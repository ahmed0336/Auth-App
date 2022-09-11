import { React, useState, useEffect } from 'react'
// import Header from '../Components/Header'
import Swal from 'sweetalert2'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import MUIDataTable from "mui-datatables";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Header from '../Components/Header';

import Buttonbootstrap from 'react-bootstrap/Button';
import Cardbootstarp from 'react-bootstrap/Card';

import Rating from '@mui/material/Rating';

import { Loader } from 'react-overlay-loader';


// import { incNumber, decNumber, formActionfunction ,addActionfunction} from "../redux/actions/productsActions";

import { formdatafunction } from '../Redux/action/actionFunction';

import { fetchProducts } from '../Redux/action/actionFunction'


import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  Container,
  Grid,
  Button,
  TextField,
  IconButton,
  Box,
} from '@mui/material';
import { Helmet } from 'react-helmet';

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
    backgroundColor: 'lightblue'
  }

};


const Service = () => {



  const dispatch = useDispatch();

  const [productarray, setproductarray] = useState([])

  const [yesstate, setyesstate] = useState('')

  const [saveproductvalue, setsaveproductvalue] = useState([])

  const [loader, setloader] = useState(false)

  const fromdataredux = useSelector((getformvalue) => getformvalue.formreducerfunction)


  const productvalue = useSelector((ahmed) => ahmed.ProductReducer)


  useEffect(() => {


    setloader(true)
    console.log("useEffect is running ==>", productvalue)
    console.log("useEffect is running of array ==>", productvalue.products)

    let parray = productvalue.products.map((x) => x)
    console.log("prduct array map ===>", parray)

    // let lock = parray.map(x => x.status.map(m => m.time))

    let lock = parray.map((y) => y.id)

    console.log("lock ===>", lock)
    // let answer =lock.map((z)=>z.name)

    // console.log("answer ===>",answer)



    // let fullmap =parray.map((y)=>y)
    // console.log("result of fullmap array",fullmap.category)

    // console.log("useEffect is running of array first index ==>",productvalue.products[0].category)

    setsaveproductvalue(productvalue.products)


    // console.log("safdar===>",productvalue.products[0].category)

    // console.log("value of my state ==> ",saveproductvalue[0].category)

  }, [productvalue])

  useEffect(() => {

    setTimeout(() => {
      setloader(false)

    }, 1000);

  }, [])

  // if(saveproductvalue.length > 0)
  // {
  // setloader(false)
  // }
  // else{

  //   setTimeout(() => {
  //     setloader(true)

  //   }, 2000);
  // }

  // const { category } = productvalue;

  console.log("getting get api of product from Redux  ==>", productvalue)

  console.log("productvalue.products  ==>", productvalue.products)

  // let productbasket =productvalue.products

  // console.log("product basket ==>",productbasket)

  // setproductarray(productbasket)








  // let pmap =productvalue.products.map((x) => x)

  // console.log("map on redux get api ==>",pmap)

  // setproductdata(pmap)

  // console.log("service page map of product value is ==>",productvalue.products.map((x) => x))

  // let mad =pmap.map((y)=> y)

  // console.log("mad value is ==>",mad[2].category)

  // const hello = productvalue.map((x) => x);

  // console.log("timeline object is ==>", resp.status_dtails.map((x) => x))

  // let detail = resp.status_dtails.map((x) => x);

  // const products = useSelector((state) => state.allProducts.products);


  // console.log("getting data from redux", fromdataredux)


  useEffect(() => {
    dispatch(fetchProducts());

  }, []);


  // console.log("Products :", products);



  const [name, Setname] = useState('')
  const [email, Setemail] = useState('')
  const [password, Setpassword] = useState("")
  const [confirmpassword, Setconfirmpassword] = useState("")

  const [image, Setimage] = useState("")

  // const [formobj, Setformobj] = useState("")

  // const people = [
  //   { id: 1, name: 'Alice', pets: ['dog', 'cat'] },
  //   { id: 2, name: 'Bob', pets: ['turtle', 'rabbit'] },
  //   { id: 3, name: 'Carl', pets: ['hamster', 'parrot'] },
  // ];



  const [title, Settitle] = useState('')
  const [price, Setprice] = useState('')
  const [description, Setdescription] = useState("")
  // const [category, Setcategory] = useState("")

  const handlechangeClear = () => {


    Setname('');
    Setemail('');
    Setpassword('');
    Setconfirmpassword('');


  }

  const handlechange = () => {

    console.log(name, email, password, confirmpassword)

    const formobj = {
      name,
      email,
      password,
      confirmpassword
    }

    dispatch(formdatafunction(formobj))


    // dispatch





    //   {
    //     Swal.fire({
    //         title: "Oops",
    //         text: "Write your  ConfirmPassword is required",
    //         icon: "error",
    //         confirmButtonColor: "#ed2a26",
    //     });
    // }


  }

  const columns = [
    // {
    //     name: "name",
    //     label: "roolno",
    //     options: {
    //         CustomBodyRender: (value, row) => {
    //             return (`Roll Series-00${value}` );
    //         }
    //     }
    // },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "password",
      label: "password",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "confirmpassword",
      label: "confirmpassword",
      options: {
        filter: true,
        sort: false,
      }
    },
  ];



  const options = {
    filterType: 'checkbox',
  };

  //   const game = [
  //     {name: "ahmed", gender: "male" ,football:[{player:'ronaldo', scorer:'10'}] }, 
  //     { name: "kiran", gender: "female",football:[{player:'messi', scorer:'2'}] },
  //  ]


  return (
    <div>
      {

        loader == true ?
          <Loader fullPage loading /> : null
      }


      <Header />

      <Helmet>
        <title>Service Session</title>
      </Helmet>



      <div className='conatiner' >
        <div className='row' >




          {saveproductvalue.length > 0 &&


            // <h1>ahmed baloch {saveproductvalue[0].category}</h1> || <h1>loading.....</h1>

            saveproductvalue.map((item, index) => {

              return (
                <>
                  <div className='col- col-sm-12 col-md mt-4  col-lg ml-1' >
                    <Cardbootstarp className='BeerListItem-main-card' >
                      <h1>{item.category}</h1>
                      <Cardbootstarp.Img className='BeerListItem-img  ' variant="top" src={item.image} />
                      <Cardbootstarp.Body>
                        <Cardbootstarp.Title key={index} >{item.title}</Cardbootstarp.Title>
                        <Cardbootstarp.Text key={index}>
                          <p>
                            <span className='text-dark bold' style={{ fontSize: 20, fontWeight: "bolder" }} >Price</span>
                            <span style={{ fontSize: 20 }}> {item.price}</span>
                          </p>

                        </Cardbootstarp.Text>
                          
                        <Cardbootstarp.Text key={index}>
                          <p>
                            <span className='text-dark bold' style={{ fontSize: 20, fontWeight: "bolder" }} >Ratiing</span>
                            <span style={{ fontSize: 20 }}> {item.rating['rate']}</span>
                          </p>

                        </Cardbootstarp.Text>

                        <Cardbootstarp.Text key={index}>


                          <p>
                            <span className='text-dark bold' style={{ fontSize: 20, fontWeight: "bolder" }} >Rating</span>
                            <span style={{ fontSize: 20 }}>
                              {/* {item.rating['rate']} */}
                              <Rating
                              readOnly
                                // name="simple-controlled"
                                name="read-only"
                                value={item.rating['rate']}
                                // onChange={(event, newValue) => {
                                //   setValue(newValue);
                                // }}
                              />
                            </span>
                          </p>

                        </Cardbootstarp.Text>
                        <Buttonbootstrap variant="primary">Go somewhere</Buttonbootstrap>
                      </Cardbootstarp.Body>
                    </Cardbootstarp>
                  </div>
                </>

              )

            })


          }


        </div>
      </div>

      <h4>Services </h4>

      <h1>map listing</h1>
      {/* {
        game.map((x, k) => {
          return (
            <>
              <h1 key={k} >{x.name} {x.gender} </h1>
              <h2>{x.football.map((z)=>
               <h1>{z.player}</h1>
              )}</h2>
            </>

          )
        })

      } */}


      {/* <h1>{yesstate == 'ahmed' ? <h1>yes</h1> : <h1>no</h1> }</h1> */}

      {/* {productarray.map(({ key, data }) => (
        <p key={key}>Coffee type {data} </p>
      ))} */}


      {/* <Grid container justifyContent="center" spacing={10} marginTop={20} padding={4} */}
      <Grid container justifyContent="center" spacing={10} padding={4}
        style={styles.heroContainer} >



        <Grid item xs={12} md={12}

        >
          <Box
            sx={{
              width: 700,
              maxWidth: '100%',



              // margin: "dense"
            }}



          >
            {/* {
              people.map((person, index) => {
                return (
                  <div key={index}>
                    <h2>Name: {person.name}</h2>

                    {person.pets.map((pet, index) => {
                      return (
                        <div key={index}>
                          <h2>Pet: {pet}</h2>
                        </div>
                      );
                    })}

                    <hr />
                  </div>
                );
              })} */}


            {saveproductvalue.length > 0 &&
              // <h1>ahmed baloch {saveproductvalue[0].category}</h1> || <h1>loading.....</h1>

              saveproductvalue.map((item) =>
                <>



                  {/* <ul> id {item.id}
                    <li>Category {item.category}</li>
                    <li>description {item.description}</li>
                    <li>title {item.title}</li>
                    <li>Ratiing {item.rating['rate']}</li>
                    <li>Count {item.rating['count']}</li>
                  </ul> */}
                </>
              )
            }

            <Typography variant="h4" component="h4">
              Student Registration Form
            </Typography>
            <TextField fullWidth label="Name" value={name} id="name" margin="dense" onChange={(e) => Setname(e.target.value)} />
            <TextField fullWidth label="Email" id="email" value={email} type="email" margin="dense" onChange={(e) => Setemail(e.target.value)} autoComplete="off" />
            {/* <TextField error helperText="Incorrect entry." fullWidth label="Password" id="password" type="password" margin="dense" onChange={ (e)=> Setpassword(e.target.value)} /> */}
            <TextField fullWidth label="Password" id="password" value={password} type="password" margin="dense" onChange={(e) => Setpassword(e.target.value)} autoComplete="off" />
            <TextField fullWidth label="ConfirmPassword" id="confirmpassword" value={confirmpassword} type="password" margin="dense" onChange={(e) => Setconfirmpassword(e.target.value)} />
            <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(e) => Setimage(e.target.files[0])} />
              <Button variant="contained" component="span">
                Upload
              </Button>
            </label>

          </Box>


          {/* <Box
                        sx={{
                            width: 700,
                            maxWidth: '100%',

                            // margin: "dense"
                        }}
                    >
                        <Typography variant="h2" component="h2">
                            Student Registration Form data
                        </Typography>

                        


                        {myfromredux.map((item, index) => {
                            return (
                                <Box key={index}>
                                    <Typography variant="h2" component="h5">
                                        Student No  {index}
                                    </Typography>


                                    <Typography variant="h2" component="h5" >
                                        {item.name}
                                    </Typography>
                                    <Typography variant="h2" component="h5" >
                                        {item.email}
                                    </Typography>
                                    <Typography variant="h2" component="h5" >
                                        {item.password}
                                    </Typography>

                                    <Typography variant="h2" component="h5" >
                                        {item.image}
                                    </Typography>


                                </Box>
                            )
                        })}





                    </Box> */}



          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            marginTop={2}
            marginBottom={2}
          >
            <Button variant="contained" onClick={handlechange} endIcon={<SendIcon />}>
              Send
            </Button>

            <Button variant="contained" onClick={handlechangeClear} endIcon={<SendIcon />}>
              Clear
            </Button>

            {/* <Item> <Button variant="contained" onClick={handlechangereste} endIcon={<SendIcon />}>
                            Reset
                        </Button></Item> */}

          </Stack>





        </Grid>


        {/* use mui to show redux saved value */}

        <Grid item xs={12} md={8}  >


          <MUIDataTable
            title={"Student Registration Data"}
            data={fromdataredux}
            columns={columns}
            options={options}
            margin={4}

          />
        </Grid>


      </Grid>




    </div >
  )
}

export default Service


