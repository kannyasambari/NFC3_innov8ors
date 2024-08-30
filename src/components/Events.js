import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const events = [
  {
    id: 1,
    title: 'Pet Adoption Fair',
    date: '2024-09-15',
    location: 'City Park',
    description: 'Join us for a fun-filled day at the park with various pets available for adoption.'
  },
  {
    id: 2,
    title: 'Pet Training Workshop',
    date: '2024-10-01',
    location: 'Downtown Community Center',
    description: 'Learn valuable tips and tricks for training your new pet.'
  },
  {
    id: 3,
    title: 'Charity Walk for Pets',
    date: '2024-11-05',
    location: 'Riverwalk',
    description: 'Participate in our charity walk to raise funds for animal shelters.'
  }
  // Add more events as needed
];

const Events = () => {
  return (
    <Container fluid style={styles.container}>
      <Row className="justify-content-center align-items-center" style={styles.row}>
        <Col md={10} lg={8} style={styles.col}>
          <h1 style={styles.heading}>Upcoming Events</h1>
          <Row>
            {events.map((event) => (
              <Col key={event.id} md={6} lg={4} style={styles.col}>
                <Card style={styles.card}>
                  <Card.Body>
                    <Card.Title style={styles.cardTitle}>{event.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={styles.cardSubtitle}>{event.date}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted" style={styles.cardSubtitle}>{event.location}</Card.Subtitle>
                    <Card.Text style={styles.cardText}>{event.description}</Card.Text>
                    <Button variant="primary" style={styles.button}>Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#FFFFFF' // Background color for the full page
  },
  row: {
    minHeight: '100vh',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontFamily: '"Playfair Display", serif',
    fontWeight: 'bold',
    color: '#003d66' // Darker blue color for the heading
  },
  card: {
    width: '100%', // Ensure the card takes full width of its column
    maxWidth: '400px', // Set a maximum width for the cards
    padding: '15px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #b3d9ff', // Pastel blue border
    backgroundColor: '#e6f7ff' // Pastel blue background
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#66b3ff' // Pastel blue color for the title
  },
  cardSubtitle: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#003d66' // Darker blue color for the subtitle
  },
  cardText: {
    fontSize: '0.875rem',
    color: '#003d66' // Darker blue color for the text
  },
  button: {
    marginTop: '10px',
    backgroundColor: '#66b3ff', // Pastel blue button
    borderColor: '#66b3ff' // Pastel blue border
  }
};

export default Events;
