import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IntensityChart from './intensityChart';

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
      {/* Add more components to render other charts or data */}
    </div>
  );
};

export default Dashboard;
