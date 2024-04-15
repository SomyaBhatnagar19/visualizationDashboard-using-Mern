import React, { useState } from 'react';
import { Nav, Button, Navbar, Image } from 'react-bootstrap';
import { AiOutlineDashboard, AiOutlineCalendar, AiOutlineFile, AiOutlineBarChart, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai'; // Importing icons from react-icons
import './CSS/sidebarMenu.css';
import logo from "../assets/logo.png";

const SidebarMenu = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <Nav className="flex-column">
        <Navbar.Brand href="#home">
          <Image src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <hr></hr>
        <a href="#dashboard"><AiOutlineDashboard /> Dashboard</a>
        <a href="#calendar"><AiOutlineCalendar /> Calendar</a>
        <a href="#files"><AiOutlineFile /> Files</a>
        <a href="#analytics"><AiOutlineBarChart /> Analytics</a>
        <a href="#settings"><AiOutlineSetting /> Settings</a>
        <a href="#logout"><AiOutlineLogout /> Logout</a>
      </Nav>
      <Button className="toggle-btn" onClick={toggleExpanded}>
        {expanded ? '<' : '>'}
      </Button>
    </div>
  );
};

export default SidebarMenu;
