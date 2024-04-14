import React from 'react';
import { Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';

const TopicsChart = ({ data }) => {
  // Check if data is not null and contains at least 30 items
  const filteredData = data && data.length > 0 ? data.slice(0, 30) : [];

  const topics = filteredData.map(item => item.topic);
  const relevances = filteredData.map(item => item.relevance);

  const chartData = {
    series: relevances,
    labels: topics,
  };

  const chartOptions = {
    chart: {
      type: 'polarArea',
    },
    labels: chartData.labels,
    legend: {
      show: true,
      position: 'top',
      fontSize: '12px',
      fontFamily: 'Arial, sans-serif',
    },
  };

  return (
    <Card  style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)', margin: '10px' }}>
      <Card.Body>
        <h2 style={{ marginBottom: "10px" }}>Topics Chart</h2>
        <Chart options={chartOptions} series={chartData.series} type="polarArea" height={400} />
      </Card.Body>
    </Card>
  );
};

export default TopicsChart;
