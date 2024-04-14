import React from 'react';
import { Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import './CSS/relevanceCharts.css';

const RelevanceChart = ({ data }) => {
  const slicedData = data.slice(0, 20); // Get the first 20 data points
  const chartData = {
    series: slicedData.map(item => item.relevance * 5),
    labels: slicedData.map(item => item.country)
  };

  const options = {
    chart: {
      type: 'pie',
      toolbar: {
        show: false
      }
    },
    labels: chartData.labels,
    legend: {
      show: true,
      position: 'top',
      fontSize: '12px',
      fontFamily: 'Arial, sans-serif'
    }
  };

  return (
    <Card className='relevance-charts'>
      <Card.Body>
        <h2>Relevance Chart</h2>
        <Chart options={options} series={chartData.series} type="pie" height={400} />
      </Card.Body>
    </Card>
  );
};

export default RelevanceChart;
