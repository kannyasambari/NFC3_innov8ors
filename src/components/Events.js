import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
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
    <Container style={styles.container}>
      <h1>Upcoming Events</h1>
      {events.map(event => (
        <Card key={event.id} style={styles.card}>
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{event.location}</Card.Subtitle>
            <Card.Text>{event.description}</Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

const styles = {
  container: {
    marginTop: '20px'
  },
  card: {
    marginBottom: '20px'
  }
};

export default Events;
