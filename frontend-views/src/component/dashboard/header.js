/* /frontend-views/src/component/dashboard/header.js */

import React from 'react';
import "./CSS/header.css";
import { Navbar, Nav, Image, Stack } from 'react-bootstrap';
import logo from '../assets/logo.png';
import {FaSearch} from 'react-icons/fa';
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3 py-0">
      <Navbar.Brand href="#home" ><Image src={logo} alt="logo" className='logo'/></Navbar.Brand>
    
      {/* <Stack direction='horizontal'> */}
      {/* <Nav className="ml-auto">
          <Nav.Link href="#"><FaSearch/></Nav.Link>
        </Nav> */}
     
      {/* </Stack> */}
        
    </Navbar>
  );
};

export default Header;
