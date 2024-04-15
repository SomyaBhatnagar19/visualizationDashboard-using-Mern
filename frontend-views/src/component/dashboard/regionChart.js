import React from 'react';
import { Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';

const RegionChart = ({ data }) => {
  // Get the first 30 data points
  const slicedData = data.slice(0, 30);

  const regionCounts = {};
  slicedData.forEach(item => {
    if (item.region in regionCounts) {
      regionCounts[item.region]++;
    } else {
      regionCounts[item.region] = 1;
    }
  });

  const chartData = {
    series: Object.values(regionCounts),
    labels: Object.keys(regionCounts),
  };

  const chartOptions = {
    chart: {
      type: 'donut',
    },
    labels: chartData.labels,
    legend: {
      show: true,
      position: 'top',
      fontSize: '12px',
      fontFamily: 'Arial, sans-serif',
    },
    colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800', '#9C27B0', '#3F51B5'],
  };

  return (
    <Card style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)', margin: '10px' }}>
      <Card.Body>
        <h2 style={{marginBottom: '1.6rem'}} >Region Distribution</h2>
        <Chart options={chartOptions} series={chartData.series} type="donut" height={400} />
      </Card.Body>
    </Card>
  );
};

export default RegionChart;
