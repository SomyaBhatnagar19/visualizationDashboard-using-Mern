/* /frontend-views/App.js */

import React from "react";
import { Row, Col } from "react-bootstrap";
import SidebarMenu from "./component/dashboard/sidebarMenu";
import Dashboard from "./component/dashboard/dashboard";
import Footer from "./component/dashboard/footer";

import "./App.css";

function App() {
  return (
      <Row>
        <Col md={2}>
          <SidebarMenu />
        </Col>
        <Col md={9}>
          <Dashboard />
        </Col>
        <Footer />
      </Row>
  );
}

export default App;
