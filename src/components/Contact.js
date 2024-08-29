import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      title: 'A New Beginning',
      story: 'Thanks to the platform, we found the perfect family for our dog Max. He is now living his best life!',
      author: 'Sarah & Michael'
    },
    {
      id: 2,
      title: 'A Happy Home',
      story: 'Adopting Luna has been the best decision ever. She brought so much joy and love into our lives.',
      author: 'The Smith Family'
    },
    {
      id: 3,
      title: 'Forever Grateful',
      story: 'We are forever grateful to have found our cat Bella through this platform. She completes our family.',
      author: 'Emily & James'
    }
  ];

  return (
    <Container style={styles.container}>
      <h1 style={styles.title}>Success Stories</h1>
      <Row>
        {stories.map((story) => (
          <Col key={story.id} md={4}>
            <Card style={styles.card}>
              <Card.Body>
                <Card.Title style={styles.cardTitle}>{story.title}</Card.Title>
                <Card.Text style={styles.cardText}>
                  "{story.story}"
                </Card.Text>
                <Card.Footer className="text-muted" style={styles.cardFooter}>
                  - <span style={styles.author}>{story.author}</span>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const styles = {
  container: {
    marginTop: '20px'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#003d66' // Darker blue color for the title
  },
  card: {
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #b3d9ff', // Light pastel blue border
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backgroundColor: '#e6f7ff' // Pastel blue background
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#66b3ff' // Pastel blue color for the title
  },
  cardText: {
    fontStyle: 'italic',
    color: '#003d66' // Darker blue color for the text
  },
  cardFooter: {
    fontSize: '0.85rem',
    color: '#004080' // Medium blue color for the footer
  },
  author: {
    color: '#66b3ff' // Pastel blue color for the author's name
  }
};

export default SuccessStories;
