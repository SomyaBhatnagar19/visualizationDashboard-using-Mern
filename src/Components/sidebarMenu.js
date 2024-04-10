/* /Components/sidebarMenu.js */

import React, { useState } from "react";
import { Row, Col, Button, Nav } from "react-bootstrap";

function SidebarMenu() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Row>
      {/* Sidebar */}
      <Col md={3} lg={2} className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <Button className="toggle-btn" onClick={toggleCollapse}>
            {collapsed ? "»" : "«"}
          </Button>
          <span>Menu</span>
        </div>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="#">Link 1</Nav.Link>
          <Nav.Link href="#">Link 2</Nav.Link>
          <Nav.Link href="#">Link 3</Nav.Link>
        </Nav>
      </Col>
    </Row>
  );
}

export default SidebarMenu;
