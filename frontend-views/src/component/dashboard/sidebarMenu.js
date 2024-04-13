import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const SidebarMenu = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="left" style={{ height: '100vh', flexDirection: 'column' }} expanded={expanded}>
      <Navbar.Brand href="#" onClick={toggleExpanded}>Menu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleExpanded} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          <Nav.Link href="#transfer">Transfer</Nav.Link>
          <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          <Nav.Link href="#tasks">Tasks</Nav.Link>
          <Nav.Link href="#users">Users</Nav.Link>
          <Nav.Link href="#calendar">Calendar</Nav.Link>
          <Nav.Link href="#files">Files</Nav.Link>
          <Nav.Link href="#analytics">Analytics</Nav.Link>
          <Nav.Link href="#settings">Settings</Nav.Link>
          <Nav.Link href="#logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SidebarMenu;
