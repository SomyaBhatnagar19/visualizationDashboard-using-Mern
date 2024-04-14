import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import IntensityChart from "./intensityChart";
import LikelihoodChart from "./likelihoodChart";
import RelevanceChart from "./relevanceChart";

// import './CSS/dashboard.css';
const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = "http://localhost:4000";
      try {
        const response = await axios.get(`${API_URL}/api/getData`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <IntensityChart data={data} />
      <Row>
        <Col xs={12} md={6}>
          <LikelihoodChart data={data} />
        </Col>
        <Col xs={12} md={6}>
          <RelevanceChart data={data} />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
