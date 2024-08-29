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
                  Welcome to [Your Organization's Name]! We are dedicated to helping pets find loving homes and supporting our local community.
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
                  Reach out to us at [Your Contact Information]. We’re here to help with any inquiries or support you may need.
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
              <p>&copy; {new Date().getFullYear()} [Your Organization's Name]. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f5f5dc', // Light brown color
    padding: '20px 0',
    marginTop: '20px'
  },
  col: {
    marginBottom: '20px'
  },
  card: {
    padding: '15px',
    border: 'none'
  },
  footerBottom: {
    backgroundColor: '#e0e0e0',
    padding: '10px 0',
    marginTop: '20px'
  }
};

export default Footer;
