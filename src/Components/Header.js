import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';

import headercss from '../Components/header.module.css'
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  useNavigate
} from "react-router-dom";
import { set } from 'react-hook-form';


const Header = () => {


  const Navigate = useNavigate()

  const [ahmedb, setahmedb]=useState('')

        
  // token local storage value
 
  const localstorageToken = JSON.parse(localStorage.getItem('ahmed'));
    
  console.log("value of localstorage token in home page",localstorageToken)

  const bgcolor = JSON.parse(localStorage.getItem('bgcolor'))|| "black";
  
  useEffect(()=>{

    // localstorage work
    setahmedb(bgcolor)
    console.log(" header bg color baloch ",ahmedb)
  },[bgcolor])


  // console.log(" localstorage bgcolor in header --> ", bgcolor)
  // setlocalitem(ahmeditem)

  const logoutfun = () => {
    localStorage.clear();
  }

  useEffect(()=>{

    if(localstorageToken === null)
    {
      Navigate('/login')
    }

  },[])
 
  // let b = document.getElementsByClassName('bg').style.color="black"


  return (
    <>
    {/* style={{backgroundColor:ahmedb }} */}
    {/* <div  id="colorahmed" ></div> */}


    {/* <div style={{backgroundColor:ahmedb }} > new page</div> */}

    <Navbar  style={{backgroundColor:ahmedb }
      

    }   variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/service">Service</Link>
            <Link className="nav-link" to="/friends">Friends</Link>
            <Link className="nav-link" to="/colorpicker">ColorPicker</Link>
            <Link className="nav-link" to="/materialtable">Animination</Link>
          </Nav>
          <Link to="/signup">
            <Button variant="success"  className={headercss.signupbtn} >
            Signup
            </Button>
          </Link>

          <Link to="/login">
            <Button variant="success"  className={headercss.signupbtn} >
            login
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="success" onClick={logoutfun}  className={headercss.signupbtn} >
            Login Out
            </Button>
          </Link>
          {/* <Button className={headercss.signupbtn} href="/signup" as="a" variant="success">
            as
            
          </Button>
          <Button href="/login" as="a" variant="success">
            login
          </Button> */}




        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header