import { React, useEffect, useState } from 'react'
// import Header from '../Components/Header'
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { decNumber, incNumber } from '../Redux/action/actionFunction';

import { SwatchesPicker } from 'react-color';


import Header from '../Components/Header';

// import Homecss from './Homecss.modu'

import { Loader } from 'react-overlay-loader';
import { Box } from '@mui/material';

import Carousel from '../Components/Carousel'

const Home = () => {


  const myState = useSelector((state) => state.changenumber)
  console.log("value of redux state-->", myState)

  // const [localstorageitem, setlocalitem] = useState([]);

  // localstorage work
  const ahmeditem = JSON.parse(localStorage.getItem('ahmed'));

  console.log("value of localstorage token in home page", ahmeditem)
  // setlocalitem(ahmeditem)


  const dispatch = useDispatch();


  const [colorpicker, setcolorpicker] = useState('#000')

  const handleChangeComplete = (e) => {
    console.log("value of color", e.hex)
    setcolorpicker(e.hex)
  }

  const [loader, setloader] = useState(false)

  

  // const [redcolor, setredcolor] = useState("backgroundred")
  // const [bluecolor,setbluecolor]=useState("blue")
  // const [yellowcolor,setyellowcolor]=useState(false)

  // const [inc, setinc] = useState(1)

  // let myinc = () => setinc(inc + 1)
  // let deinc = () => {
  //   if (inc < 0) {
  //     return inc

  //   }

  //   else {

  //     setinc(inc - 1)
  //   }

  // }


  // const myde = () => console.log("decrement ==>")



  const counter = {

    color: "red",
    fontSize: 100

  }



  // const bluefunction = () => {
  //   setbluecolor()
  // } 

  // const  calculator = (e) =>{

  //   let result;

  //   if(e == "+")
  //   {
  //      result =e+1
  //      console.log("sum of number")  
  //   }

  // }

  return (
    <>
      {
        loader == true ?
          <Loader fullPage loading /> : null
      }
      <Header />

      {/* <h1>mycounter</h1>
       <p> {
             inc < 0 ?
             <h5>no negative value decreament</h5> :
             inc
        } </p>
       <button   className='btn btn-primary' onClick={myinc} >inc</button>
       <button className='btn btn-primary' onClick={deinc} >de</button>   */}



      {/* <Carousel /> */}

      <Box

        sx={{
          // width: 700,
          // maxWidth: '100%',
          // backgroundColor:'red',
          // border: '2px solid black',
          // padding: "20px",
          borderRadius: '16px'



          // margin: "dense"
        }}
      // display="flex"
      // justifyContent="center"
      // alignItems="center"
      // minHeight="100vh"

      >

        {/* style={{
          background: mycolor ? "orange" : "red",

        }} */}

        <h4 >Increment and Decrement Counter using Redux </h4>
        {/* <h6 className='mt-4' > localStorage token{ahmeditem} </h6> */}


        <h1 style={counter} >

          {myState}

        </h1>

        <div className="mb-2 mt-5 ">
          <Button variant="primary" className='mx-2  px-5' size="lg" onClick={() => { dispatch(incNumber(myState)) }}>
            +
          </Button>{' '}
          <Button variant="primary" className='mx-2 px-5' size="lg" onClick={() => dispatch(decNumber(myState))}>
            -
          </Button>
        </div>
      </Box>


    </>
  )
}

export default Home