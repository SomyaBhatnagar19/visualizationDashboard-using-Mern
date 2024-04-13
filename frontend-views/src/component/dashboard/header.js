/* /frontend-views/src/component/dashboard/header.js */

import React from "react";
import './CSS/header.css';
import { Navbar, Container, Image } from "react-bootstrap";
import logo from "../assets/logo.png";
import { FaSearch, FaUser } from "react-icons/fa";

const Header = () => {
  return (
  <Navbar expand="sm" className="header">
    <Navbar.Brand><Image src={logo} alt="logo" className="logo" href="#" /></Navbar.Brand>
    {/* <div className="icons">
        <input type="text" placeholder="Search"/>
    <FaSearch className="serach-icon" />
    <FaUser className="user-icon" />
    </div> */}
   
    </Navbar>
    );
};

export default Header;
