import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CSS/footer.css';

const Footer = () => {
  return (
    <footer className="mt-5" style={{backgroundColor: 'black', padding: '1rem', text: 'white'}}>
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; Somya Bhatnagar</p>
            <p>
              <a href="https://github.com/SomyaBhatnagar19">GitHub</a> |{' '}
              <a href="https://www.linkedin.com/in/somya-bhatnagar/">LinkedIn</a> |{' '}
              <a href="https://somya-fullstack-portfolio.vercel.app/">Portfolio</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
