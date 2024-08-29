import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <Container>
        <Row>
          <Col md={4} style={styles.col}>
            <Card style={styles.card}>
              <Card.Body>
                <Card.Title>About Us</Card.Title>
                <Card.Text>
                  Welcome to Pawfect! We are dedicated to helping pets find loving homes and supporting our local community.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} style={styles.col}>
            <Card style={styles.card}>
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  Our mission is to provide a safe and caring environment for pets in need, to promote responsible pet ownership, and to foster a compassionate community.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} style={styles.col}>
            <Card style={styles.card}>
              <Card.Body>
                <Card.Title>Contact Us</Card.Title>
                <Card.Text>
                  Phone No: 923456789
                  <br/>
                  Address: 123 Street, Mumbai
                  <br/>
                  Instagram: @pawfect
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div style={styles.footerBottom}>
        <Container>
          <Row>
            <Col className="text-center">
              <p>&copy; {new Date().getFullYear()} Pawfect. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#cce7ff', // Pastel blue background for footer
    padding: '20px 0',
    marginTop: '20px'
  },
  col: {
    marginBottom: '20px'
  },
  card: {
    padding: '15px',
    border: 'none',
    backgroundColor: '#e6f0ff', // Lighter pastel blue background for cards
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  footerBottom: {
    backgroundColor: '#b3d9ff', // Slightly darker pastel blue for the bottom of the footer
    padding: '10px 0',
    marginTop: '20px'
  }
};

export default Footer;
