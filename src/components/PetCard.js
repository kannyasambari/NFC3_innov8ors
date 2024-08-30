import React, { useState } from 'react';
import { Container, Card, Button, Form, Modal, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import YesIcon from '../images/happykutta.jpg'; // Replace with actual path
import NoIcon from '../images/sadkutta-removebg.png';  // Replace with actual path
import dog from '../images/dog.jpeg'; // Import dog images
import dog2 from '../images/dog2.jpeg';
import dog3 from '../images/dog3.jpeg';
import dog4 from '../images/dog4.jpg';
import dog5 from '../images/dog5.jpg';
import dog6 from '../images/dog6.jpg';
import dog7 from '../images/dog7.jpg';
import dog8 from '../images/dog8.jpg';
import dog9 from '../images/dog9.jpg';
import dog10 from '../images/dog10.jpg';
import dog11 from '../images/dog11.jpg';
import dog12 from '../images/dog12.jpg';
import cat from '../images/cat.jpeg'; // Import cat images
import cat2 from '../images/cat2.jpeg';
import cat3 from '../images/cat3.jpeg';
import cat4 from '../images/cat4.jpg';
import cat5 from '../images/cat5.jpg';
import cat6 from '../images/cat6.jpg';
import cat7 from '../images/cat7.jpg';
import cat8 from '../images/cat8.jpg';
import cat9 from '../images/cat9.jpg';
import cat10 from '../images/cat10.jpg';
import cat11 from '../images/cat11.jpg';
import cat12 from '../images/cat12.jpg';
import cardbg from '../images/cardbg.avif'

const PetCard = ({ animalType, onBack }) => {
  // Define different pet data based on the animalType
  const petData = {
    dogs: [
      {
        id: 1,
        name: 'Buddy',
        breed: 'Golden Retriever',
        age: '2 years',
        description: 'Friendly and energetic. Loves to play fetch!',
        image: dog
      },
      {
        id: 2,
        name: 'Coco',
        breed: 'Pug',
        age: '1 year',
        description: 'Playful and affectionate. Loves to snuggle.',
        image: dog2
      },
      {
        id: 3,
        name: 'Max',
        breed: 'German Shepherd',
        age: '4 years',
        description: 'Playful. Loves to play.',
        image: dog3
      },
      {
        id: 4,
        name: 'Bella',
        breed: 'Labrador Retriever',
        age: '3 years',
        description: 'Loyal and loving. Great with kids.',
        image: dog4
      },
      {
        id: 5,
        name: 'Daisy',
        breed: 'Beagle',
        age: '2 years',
        description: 'Friendly and curious. Loves to explore.',
        image: dog5
      },
      {
        id: 6,
        name: 'Rex',
        breed: 'Bulldog',
        age: '5 years',
        description: 'Calm and courageous. Enjoys lounging.',
        image: dog6
      },
      {
        id: 7,
        name: 'Milo',
        breed: 'Chihuahua',
        age: '1 year',
        description: 'Energetic and playful. Loves attention.',
        image: dog7
      },
      {
        id: 8,
        name: 'Roxy',
        breed: 'Siberian Husky',
        age: '4 years',
        description: 'Adventurous and friendly. Enjoys running.',
        image: dog8
      },
      {
        id: 9,
        name: 'Ziggy',
        breed: 'Shih Tzu',
        age: '3 years',
        description: 'Affectionate and playful. Loves being pampered.',
        image: dog9
      },
      {
        id: 10,
        name: 'Luna',
        breed: 'Poodle',
        age: '2 years',
        description: 'Smart and energetic. Great for active families.',
        image: dog10
      },
      {
        id: 11,
        name: 'Rocky',
        breed: 'Boxer',
        age: '3 years',
        description: 'Strong and playful. Loves exercise.',
        image: dog11
      },
      {
        id: 12,
        name: 'Sadie',
        breed: 'Cocker Spaniel',
        age: '4 years',
        description: 'Gentle and affectionate. Great with other pets.',
        image: dog12
      },
      // Add more dog entries here
    ],
    cats: [
      {
        id: 1,
        name: 'Whiskers',
        breed: 'Siamese',
        age: '3 years',
        description: 'Loving and playful. Enjoys being around people.',
        image: cat
      },
      {
        id: 3,
        name: 'Luna',
        breed: 'Persian',
        age: '4 years',
        description: 'Quiet and affectionate. Prefers a calm environment.',
        image: cat3
      },
      {
        id: 4,
        name: 'Bella',
        breed: 'Bengal',
        age: '2 years',
        description: 'Active and playful. Loves to climb and explore.',
        image: cat4
      },
      {
        id: 5,
        name: 'Mittens',
        breed: 'Scottish Fold',
        age: '1 year',
        description: 'Friendly and calm. Enjoys being around people.',
        image: cat5
      },
      {
        id: 6,
        name: 'Simba',
        breed: 'Ragdoll',
        age: '3 years',
        description: 'Affectionate and relaxed. Loves to be cuddled.',
        image: cat6
      },
      {
        id: 7,
        name: 'Nala',
        breed: 'Sphynx',
        age: '4 years',
        description: 'Curious and playful. Enjoys warmth and attention.',
        image: cat7
      },
      {
        id: 8,
        name: 'Oliver',
        breed: 'Abyssinian',
        age: '2 years',
        description: 'Energetic and friendly. Loves to play and explore.',
        image: cat8
      },
      {
        id: 9,
        name: 'Cleo',
        breed: 'British Shorthair',
        age: '5 years',
        description: 'Calm and independent. Prefers a quiet home.',
        image: cat9
      },
      {
        id: 10,
        name: 'Ginger',
        breed: 'Russian Blue',
        age: '3 years',
        description: 'Gentle and affectionate. Enjoys a calm environment.',
        image: cat10
      },
      {
        id: 11,
        name: 'Dexter',
        breed: 'Turkish Angora',
        age: '2 years',
        description: 'Playful and energetic. Loves to chase toys.',
        image: cat11
      },
      {
        id: 12,
        name: 'Milo',
        breed: 'Siberian',
        age: '4 years',
        description: 'Friendly and outgoing. Great with families.',
        image: cat12
      },
      {
        id: 2,
        name: 'Shadow',
        breed: 'Maine Coon',
        age: '2 years',
        description: 'Gentle giant. Good with children and other pets.',
        image: cat2
      },
      // Add more cat entries here
    ],
    rabbits: [
      {
        id: 1,
        name: 'Thumper',
        breed: 'Lionhead',
        age: '3 years',
        description: 'Gentle and friendly. Enjoys hopping around and eating fresh vegetables.',
        image: 'https://via.placeholder.com/300' // Replace with actual image URL
      },
      {
        id: 2,
        name: 'Clover',
        breed: 'Holland Lop',
        age: '2 years',
        description: 'Calm and affectionate. Loves to be petted and cuddled.',
        image: 'https://via.placeholder.com/300' // Replace with actual image URL
      }
      // Add more rabbit entries here
    ],
    // Add other pet types if needed
  };

  const [pets] = useState(petData[animalType] || []);
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
      <Container id="home" style={styles.container}>
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
    backgroundColor: 'white',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '60px' // Adjust this value to match the height of your fixed navbar
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative' 
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  },
  card: {
    width: '300px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'transparent' // Removed background color
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '240px', // Increased width to give more space for the buttons
    marginTop: '20px'
  },
  actionButton: {
    border: 'none',
    borderRadius: '50%',
    width: '100px', // Increased button size
    height: '100px', // Increased button size
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
  },
  icon: {
    width: '70px', // Increased icon size
    height: '70px', // Increased icon size
  },
  status: {
    marginTop: '20px'
  },
  backButton: {
    marginBottom: '20px'
  }
};

export default PetCard;
