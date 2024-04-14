import React, { useState, useEffect } from "react";
import { Card, Form, Col, Row } from "react-bootstrap";
import Chart from "react-apexcharts";

const CountryChart = ({ data }) => {
  const [selectedCountry, setSelectedCountry] = useState(
    "United States of America"
  );
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const countryData = data.filter(
      (entry) => entry.country === selectedCountry
    ).slice(0, 30);

    const sectors = {};
    countryData.forEach((entry) => {
      if (!sectors[entry.sector]) {
        sectors[entry.sector] = [];
      }
      sectors[entry.sector].push(entry.intensity);
    });

    const sectorLabels = Object.keys(sectors);
    const sectorIntensities = sectorLabels.map(
      (sector) => sectors[sector]
    );

    setChartData({
      labels: sectorLabels,
      datasets: [
        {
          data: sectorIntensities.flat(),
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#8f4dbf',
            '#44aa44',
            '#ffbb33',
            '#f74141',
          ],
        },
      ],
    });
  }, [selectedCountry, data]);

  const chartOptions = {
    chart: {
      type: 'donut',
      toolbar: {
        show: false
      }
    },
    labels: chartData ? chartData.labels : [],
    legend: {
      show: true,
      position: 'top',
      fontSize: '12px',
      fontFamily: 'Arial, sans-serif'
    },
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <Card className="my-4" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)', margin: '10px' }}>
      <Card.Body>
        <h2 className="mb-4">Country Chart</h2>
        <Form>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={2}>
              Select Country:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="select"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <option value="United States of America">
                  United States of America
                </option>
                <option value="Mexico">Mexico</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Russia">Russia</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Form>
        <div style={{ height: '400px' }}>
          {chartData && <Chart options={chartOptions} series={chartData.datasets[0].data} type="donut" height="100%" />}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CountryChart;
