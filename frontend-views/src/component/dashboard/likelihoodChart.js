import React from 'react';
import { Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import './CSS/likelihoodChart.css'; // Import the CSS file

const LikelihoodChart = ({ data }) => {
    const sortedData = data.slice(-50); // Get the latest 50 data points
    const chartData = {
      series: [{
        name: 'Likelihood',
        data: sortedData.map(entry => entry.likelihood)
      }],
      options: {
        chart: {
          type: 'radar',
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: sortedData.map(entry => entry.country)
        },
        yaxis: {
          tickAmount: 5,
          labels: {
            formatter: (val) => Math.floor(val)
          }
        },
        legend: {
          show: true,
          markers: {
            fillColors: ['rgba(79, 59, 169, 0.7)'],
          },
          fontSize: '12px',
          fontFamily: 'Arial, sans-serif',
          position: 'top',
        },
      }
    };

  return (
    <Card className="likelihood-chart">
      <Card.Body>
        <h2 className="chart-title">Likelihood Chart</h2>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="radar"
          height={400}
        />
      </Card.Body>
    </Card>
  );
};

export default LikelihoodChart;
