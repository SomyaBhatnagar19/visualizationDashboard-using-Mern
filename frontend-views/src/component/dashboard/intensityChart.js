import React, { useState, useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import './CSS/IntensityChart.css';

const IntensityChart = ({ data }) => {
  const sortedData = data.filter(item => item.start_year).slice(-40).reverse(); // Filter and get latest 50 data

  const [filteredData, setFilteredData] = useState(sortedData);

  const chartData = filteredData.map(item => ({
    x: item.start_year,
    y: item.intensity,
    sector: item.sector,
  }));

  const options = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: '100%',
        dataLabels: {
          position: 'top', // Display data labels at the top of bars
          formatter: function (val) {
            return `${val}%`; // Format data labels as percentage
          },
        },
      },
    },
    xaxis: {
      categories: filteredData
        .sort((a, b) => a.start_year - b.start_year)
        .map((item) => item.start_year),
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
      reversed: false,
    },
    tooltip: {
      enabled: true,
      formatter: function(val, { series, seriesIndex, dataPointIndex, w }) {
        const data = w.config.series[seriesIndex].data[dataPointIndex];
        if (data.sector) {
          return `${val}% - Sector: ${data.sector}`;
        } else {
          return `${val}%`;
        }
      },
    },
  };

  useEffect(() => {
    // Set filtered data when component mounts
    setFilteredData(sortedData);
  }, [data]);

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setFilteredData(
      filterValue ?
        sortedData.filter(item => item.start_year && item.start_year.toString().startsWith(filterValue)) :
        sortedData
    );
  };

  return (
    <Card className="chart-container">
    <h3>Intensity Chart</h3>
    <Form.Control
      className="filter-input"
      type="text"
      placeholder="Filter by year"
      onChange={handleFilterChange}
    />
    <Chart options={options} series={[{ data: chartData }]} type="bar" height={400} />
  </Card>
  );
};

export default IntensityChart;
