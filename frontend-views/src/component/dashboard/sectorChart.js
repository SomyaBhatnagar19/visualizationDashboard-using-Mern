import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';

const SectorChart = ({ data }) => {
  const sectors = {};

  data.forEach((entry) => {
    if (!sectors[entry.sector]) {
      sectors[entry.sector] = 0;
    }
    sectors[entry.sector] += entry.intensity;
  });

  const getRandomColor = (index) => {
    const colors = [
      '#FF0080',
      '#00BFFF',
      '#FFD700',
      '#32CD32',
      '#FF4500',
      '#9400D3',
      // Add more colors here if needed
    ];
    return colors[index % colors.length];
  };
  

  const chartData = {
    series: [{
      data: Object.values(sectors),
    }],
    options: {
      chart: {
        type: 'bar',
        height: 400,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        categories: Object.keys(sectors),
      },
      colors: Object.keys(sectors).map((_, index) => getRandomColor(index)),
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '14px',
        fontFamily: 'Arial, sans-serif',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <Card style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', margin: '10px', marginBottom: '1rem', padding: '20px' }}>
      <h2>Sector Chart</h2>
      <Card.Body>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={460}
        />
      </Card.Body>
    </Card>
  );
};

export default SectorChart;
