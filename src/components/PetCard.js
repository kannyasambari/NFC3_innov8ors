import React, { useState } from 'react';
import { Container, Card, Button, Form, Modal, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import YesIcon from '../images/happykutta.jpg'; // Replace with actual path
import NoIcon from '../images/sadkutta.avif';  // Replace with actual path

const PetCard = ({ animalType, onBack }) => {
  const [pets] = useState([
    {
      id: 1,
      name: 'Buddy',
      breed: 'Golden Retriever',
      age: '2 years',
      description: 'Friendly and energetic. Loves to play fetch!',
      image: 'https://via.placeholder.com/300' // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Mittens',
      breed: 'Siamese',
      age: '1 year',
      description: 'Playful and affectionate. Loves to snuggle.',
      image: 'https://via.placeholder.com/300' // Replace with actual image URL
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAdoptForm, setShowAdoptForm] = useState(false);
  const [adoptionStatus, setAdoptionStatus] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleYesClick = () => {
    setShowAdoptForm(true);
  };

  const handleNoClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      if (currentIndex < pets.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setIsAnimating(false);
      } else {
        setAdoptionStatus('No more pets available.');
        setIsAnimating(false);
      }
    }, 500); // Duration of the animation
  };

  const handleAdoptFormSubmit = (e) => {
    e.preventDefault();
    setShowAdoptForm(false);
    setAdoptionStatus('Adoption confirmed! Thank you for adopting.');
  };

  const handleAdoptFormClose = () => {
    setShowAdoptForm(false);
    setAdoptionStatus('Adoption process canceled.');
  };

  return (
    <div style={styles.background}>
      <Container style={styles.container}>
        <Button onClick={onBack} style={styles.backButton}>
          Back to Home
        </Button>
        <div
          style={{
            ...styles.cardContainer,
            transform: isAnimating ? 'translateX(-100%)' : 'translateX(0)',
            opacity: isAnimating ? 0 : 1,
            transition: 'transform 0.5s ease, opacity 0.5s ease',
          }}
        >
          {pets.length > 0 && currentIndex < pets.length && (
            <Card style={styles.card}>
              <Card.Img variant="top" src={pets[currentIndex].image} />
              <Card.Body>
                <Card.Title>{pets[currentIndex].name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{pets[currentIndex].breed} - {pets[currentIndex].age}</Card.Subtitle>
                <Card.Text>{pets[currentIndex].description}</Card.Text>
              </Card.Body>
            </Card>
          )}
          <div style={styles.buttonContainer}>
            <Button
              onClick={handleNoClick}
              style={{ ...styles.actionButton, backgroundColor: '#dc3545' }}
            >
              <img src={NoIcon} alt="No" style={styles.icon} />
            </Button>
            <Button
              onClick={handleYesClick}
              style={{ ...styles.actionButton, backgroundColor: '#28a745' }}
            >
              <img src={YesIcon} alt="Yes" style={styles.icon} />
            </Button>
          </div>
        </div>

        <Modal show={showAdoptForm} onHide={handleAdoptFormClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adopt {pets[currentIndex]?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleAdoptFormSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>Your Address</Form.Label>
                <Form.Control type="text" placeholder="Enter your address" required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Confirm Adoption
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        {adoptionStatus && (
          <Alert variant={adoptionStatus.startsWith('Error') ? 'danger' : 'success'} style={styles.status}>
            {adoptionStatus}
          </Alert>
        )}
      </Container>
    </div>
  );
};

const styles = {
  background: {
    backgroundColor: '#white', // Matching background color
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Full width
    maxWidth: '600px' // Restrict width of card
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  },
  card: {
    width: '100%', // Full width of container
    boxShadow: 'none' // No border
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '20px'
  },
  actionButton: {
    border: 'none',
    borderRadius: '50%',
    width: '90px',
    height: '90px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  icon: {
    width: '60px', // Adjust icon size as needed
    height: '60px',
  },
  backButton: {
    position: 'absolute',
    top: '10px',
    left: '10px',
  },
  status: {
    marginTop: '20px',
  }
};

export default PetCard;
