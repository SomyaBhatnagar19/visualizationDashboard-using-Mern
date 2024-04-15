import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';

const DashboardFilters = ({ data, onApplyFilters }) => {
  const [endYear, setEndYear] = useState('');
  const [topicsOptions, setTopicsOptions] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [sectorOptions, setSectorOptions] = useState([]);
  const [selectedSector, setSelectedSector] = useState('');
  const [swotOptions, setSwotOptions] = useState([]);
  const [selectedSwot, setSelectedSwot] = useState('');
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [countryOptions, setCountryOptions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    if (data.length > 0) {
      // Extract unique topics from data
      const topics = [...new Set(data.flatMap((item) => item.topics))];
      setTopicsOptions(topics);

      // Extract unique sectors from data
      const sectors = [...new Set(data.map((item) => item.sector))];
      setSectorOptions(sectors);

      // Extract unique SWOT from data
      const swots = [...new Set(data.map((item) => item.swot))];
      setSwotOptions(swots);

      // Extract unique cities from data
      const cities = [...new Set(data.map((item) => item.city))];
      setCityOptions(cities);

      // Extract unique countries from data
      const countries = [...new Set(data.map((item) => item.country))];
      setCountryOptions(countries);
    }
  }, [data]);

  const handleApplyFilters = (e) => {
    e.preventDefault();
    const filters = {
      endYear,
      topics: selectedTopics,
      sector: selectedSector,
      swot: selectedSwot,
      city: selectedCity,
      country: selectedCountry,
    };
    onApplyFilters(filters);
  };

  return (
    <Card style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)', margin: '10px' }}>
      <Card.Body>
        <Form onSubmit={handleApplyFilters} className="mt-4">
          <Row>
            <Col>
              <Form.Group controlId="endYearFilter">
                <Form.Label>End Year</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter end year"
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="topicsFilter">
                <Form.Label>Topics</Form.Label>
                <Form.Control
                  as="select"
                  multiple
                  value={selectedTopics}
                  onChange={(e) => setSelectedTopics(Array.from(e.target.selectedOptions, (option) => option.value))}
                >
                  {topicsOptions.map((topic) => (
                    <option key={topic} value={topic}>{topic}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="sectorFilter">
                <Form.Label>Sector</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                >
                  <option value="">Select sector</option>
                  {sectorOptions.map((sector) => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="swotFilter">
                <Form.Label>SWOT</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedSwot}
                  onChange={(e) => setSelectedSwot(e.target.value)}
                >
                  <option value="">Select SWOT</option>
                  {swotOptions.map((swot) => (
                    <option key={swot} value={swot}>{swot}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="cityFilter">
                <Form.Label>City</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="">Select city</option>
                  {cityOptions.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="countryFilter">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="">Select country</option>
                  {countryOptions.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Button variant="primary" type="submit" className="mt-2">
                Apply Filters
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default DashboardFilters;
