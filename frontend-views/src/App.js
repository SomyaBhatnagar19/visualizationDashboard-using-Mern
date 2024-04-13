/* /frontend-views/App.js */

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "./component/dashboard/header";
import SidebarMenu from "./component/dashboard/sidebarMenu";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      {/* <Container fluid> */}
      <Row>
        <Col md={3} >
        <SidebarMenu /> 
        </Col>
        <Col md={9}>
        Dashboard
        </Col>
      </Row>
      {/* </Container> */}
      
      
    </>
  );
}

export default App;
