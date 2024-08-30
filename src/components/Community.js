import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EducationalResources = () => {
  return (
    <Container id="community" style={styles.container}>
      <h1 style={styles.title}>Educational Resources</h1>

      <Row style={styles.row}>
        <Col md={4} style={styles.col}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Feeding Dogs & Puppies</Card.Title>
              <Card.Text style={styles.cardText}>
                Proper feeding is crucial for the health and development of your dog. Puppies require more frequent feedings with a diet rich in proteins and calories, while adult dogs need balanced meals tailored to their size and activity level.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} style={styles.col}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>How Old Is A Dog In Human Years?</Card.Title>
              <Card.Text style={styles.cardText}>
                The common rule is that one dog year equals seven human years. However, dogs age differently depending on their breed and size. Generally, smaller dogs live longer and age slower compared to larger breeds.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} style={styles.col}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Dog & Puppy Training</Card.Title>
              <Card.Text style={styles.cardText}>
                Training is essential for a well-behaved dog. Start with basic commands and gradually introduce more complex tasks. Consistency and positive reinforcement are key to successful training.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  container: {
    marginTop: '40px',
    marginBottom: '40px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    fontFamily: '"Playfair Display", serif',
    fontWeight: 'bold',
    color: '#003d66', // Dark blue text color
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  col: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  card: {
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #ADD8E6', // Light blue border
    backgroundColor: '#E0F7FA', // Light blue background
    animation: 'fadeIn 1s ease-in-out',
  },
  cardTitle: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000000', // Light blue color
  },
  cardText: {
    fontSize: '16px',
    color: '#007BFF', // Light blue color
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
};

export default EducationalResources;
