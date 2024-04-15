import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import IntensityChart from "./intensityChart";
import LikelihoodChart from "./likelihoodChart";
import RelevanceChart from "./relevanceChart";
import CountryChart from "./countryChart";
import TopicsChart from "./topicsChart";
import RegionChart from "./regionChart";
import SectorChart from "./sectorChart";
import DashboardFilters from "./dashboardFilters";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = 'http://localhost:4000';
      try {
        const response = await axios.get(`${API_URL}/api/getData`);
        setData(response.data);
        setFilteredData(response.data); // Initialize filtered data with all data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromApi();
  }, []);

  const applyFilters = (filters) => {
    let filtered = [...data];

    if (filters.endYear) {
      filtered = filtered.filter((item) => item.year <= filters.endYear);
    }
    if (filters.topics.length > 0) {
      filtered = filtered.filter((item) =>
        filters.topics.some((topic) => item.topics.includes(topic))
      );
    }
    if (filters.sector) {
      filtered = filtered.filter((item) => item.sector === filters.sector);
    }

    setFilteredData(filtered);
  };

  return (
    <Container>
      <h2 className="mt-4 mb-2">Welcome to the Dashboard.</h2>
      <DashboardFilters data={data} onApplyFilters={applyFilters} />
      <IntensityChart data={filteredData} />
      <Row>
        <Col xs={12} md={6}>
          <LikelihoodChart data={filteredData} />
        </Col>
        <Col xs={12} md={6}>
          <RelevanceChart data={filteredData} />
        </Col>
      </Row>
      <CountryChart data={filteredData} />
      <Row>
        <Col xs={12} md={6}>
          <TopicsChart data={filteredData} />
        </Col>
        <Col xs={12} md={6}>
          <RegionChart data={filteredData} />
        </Col>
      </Row>
      <SectorChart data={filteredData} />
    </Container>
  );
};

export default Dashboard;
