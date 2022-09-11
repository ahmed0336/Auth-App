import React, { useState } from 'react'

import { SwatchesPicker } from 'react-color';

import Header from '../Components/Header';

const Colorpicker = () => {
        
    const [colorpicker,setcolorpicker] =useState("#000")
    const [mycolor, setmycolor] = useState("bg-secondary")



    const  handleChangeComplete = (e) => {
           
        console.log("value of my colorpicker",e)
       setcolorpicker(e.hex)
       localStorage.setItem('bgcolor', JSON.stringify(e.hex));
    }

    
  const colorfunction = (e) => {
    console.log("getting value from on onclik ", e)
    if (e === 'red') {

      setmycolor("bg-danger")

    } else if (e === 'blue') {
      setmycolor("bg-primary")

    } else if (e === 'yellow') {
      setmycolor("bg-warning")
    }
    else {
      setmycolor("bg-secondary")
    }

    console.log("mycolor iss ", mycolor)

  }

  return (
    <>
    <Header  />
    
    <h4 class="text-center mt-5" >Change Div Color </h4>
      <div className='text-center d-flex   align-items-center justify-content-center mt-5' >
        <div
          className={`${mycolor}  text-center   text-center `}
          // className={mycolor?"bg-dark text-center" : "bg-danger text-center" } 
          style={
            {
              width: 300, height: 200, 
               // backgroundColor:bluecolor ? "bg-dark text-center ": "bg-primary text-center"  
             } 

           } 
         > 
           <h1 >hello</h1> 
         </div> 

       </div>
      <div className='text-center d-flex   align-items-center justify-content-center mt-5 ' >

        <button className='btn btn-primary mx-3 mb-3' onClick={() => colorfunction("red")} >red</button> 
        <button className='btn btn-primary mx-3 mb-3 ' onClick={() => colorfunction("blue")}  >blue</button> 
        <button className='btn btn-primary mx-3 mb-3' onClick={() => colorfunction("yellow")}  >yellow</button>

      </div>

      <div className='text-center   align-items-center justify-content-center mt-5 ' >

        <h1>Choose any color to Change Header color</h1>

        <div style={{ backgroundColor: colorpicker }} >
          <h1>para</h1>
        </div>

        
        <SwatchesPicker
          color={colorpicker}
          onChangeComplete={handleChangeComplete}

        />
      </div>
    </>
  )
}

export default Colorpicker