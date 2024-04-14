import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import Chart from 'react-apexcharts';

const IntensityChart = ({ data }) => {
  const sortedData = data.filter(item => item.start_year).slice(-50).reverse(); // Filter and get latest 50 data

  const [filteredData, setFilteredData] = useState(sortedData);

  const getColor = (value) => {
    const colors = ['#7F00FF', '#F2B93B', '#FF8000', '#FF453A']; // Purple, Yellow, Orange, Red
    const maxIntensity = Math.max(...filteredData.map(item => item.intensity));
    
    if (value === maxIntensity) {
      return colors[3]; // Red for highest intensity
    } else {
      const threshold = maxIntensity / 4;
      if (value < threshold) {
        return colors[0];
      } else if (value < threshold * 2) {
        return colors[1];
      } else if (value < threshold * 3) {
        return colors[2];
      } else {
        return colors[3];
      }
    }
  };

  const chartData = filteredData.map(item => ({
    x: item.start_year,
    y: item.intensity,
    fill: getColor(item.intensity),
    sector: item.sector, // Include sector information
  }));

  const options = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false, // Make the bars vertical
        barHeight: '100%', // Make the bars visible entirely
      },
    },
    xaxis: {
      categories: filteredData.map(item => item.start_year),
      title: { text: 'Year' },
      labels: {
        rotate: -45,
        style: {
          fontSize: '12px',
          fontFamily: 'Arial, sans-serif',
        },
      },
    },
    yaxis: {
      title: { text: 'Intensity (%)' },
      min: 0,
      max: 100,
      reversed: false, // Reverse the y-axis
    },
    tooltip: {
      enabled: true, // Show tooltips on hover
      formatter: function(val, { series, seriesIndex, dataPointIndex, w }) {
        return `${val}% - Sector: ${w.config.series[seriesIndex].data[dataPointIndex].sector}`;
      },
    },
  };

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setFilteredData(
      filterValue ?
        sortedData.filter(item => item.start_year && item.start_year.toString().startsWith(filterValue)) :
        sortedData
    );
  };

  return (
    <Card style={{ margin: '20px', padding: '20px' }}>
      <h3>Intensity Chart</h3>
      <Form.Control
        type="text"
        placeholder="Filter by year"
        onChange={handleFilterChange}
      />
      <Chart options={options} series={[{ data: chartData }]} type="bar" height={400} />
    </Card>
  );
};

export default IntensityChart;
