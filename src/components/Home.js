import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import homebg from '../images/homebg.png'; // Ensure this path is correct
import dogImage from '../images/dog.jpeg'; // Import the new image
import PetCard from './PetCard'; // Import PetCard component
import ListAPet from './ListAPet'; // Import ListAPet component

const Home = () => {
  const [view, setView] = useState('home'); // State to control which view to display
  const [hover, setHover] = useState(''); // State to control hover effect

  const handleButtonClick = (view) => {
    setView(view);
  };

  const handleBackToHome = () => {
    setView('home');
  };

  return (
    <div style={styles.homeContainer}>
      {view === 'home' && (
        <div style={styles.homeBackground}>
          <Container style={styles.textContainer}>
            <h1 className="tagline">Find Your New Best Friend</h1>
            <p className="subtitle">Browse pets from our network of over 1000 shelters and rescues.</p>
          </Container>
          <div style={styles.buttonContainer}>
            <Button
              className="animal-button"
              style={{ ...styles.buttonStyles, ...(hover === 'dogs' ? styles.buttonHover : {}) }}
              onMouseEnter={() => setHover('dogs')}
              onMouseLeave={() => setHover('')}
              onClick={() => handleButtonClick('dogs')}
            >
              Dogs
            </Button>
            <Button
              className="animal-button"
              style={{ ...styles.buttonStyles, ...(hover === 'cats' ? styles.buttonHover : {}) }}
              onMouseEnter={() => setHover('cats')}
              onMouseLeave={() => setHover('')}
              onClick={() => handleButtonClick('cats')}
            >
              Cats
            </Button>
            <Button
              className="animal-button"
              style={{ ...styles.buttonStyles, ...(hover === 'list-a-pet' ? styles.buttonHover : {}) }}
              onMouseEnter={() => setHover('list-a-pet')}
              onMouseLeave={() => setHover('')}
              onClick={() => handleButtonClick('list-a-pet')}
            >
              List a Pet
            </Button>
          </div>
        </div>
      )}
      {view === 'list-a-pet' && <ListAPet />}
      {(view === 'dogs' || view === 'cats' || view === 'rabbits' || view === 'other-animals') ? (
        <PetCard animalType={view} onBack={handleBackToHome} />
      ) : null}
    </div>
  );
};

const styles = {
  homeContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  homeBackground: {
    backgroundImage: `url(${homebg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align content to the top
    width: '100%',
  },
  textContainer: {
    textAlign: 'center',
    padding: '20px',
    marginTop: '60px', // Space below the navbar
    color: 'white', // Ensure text color contrasts with the background
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    marginTop: '30px', // 1.5 cm is approximately 35px
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background to complement sky blue
    borderRadius: '10px', // Rounded corners
  },
  buttonStyles: {
    fontSize: '1.2rem',
    padding: '20px 30px',
    margin: '5px',
    backgroundColor: 'transparent',
    border: '2px solid #007bff', // Blue border
    color: '#007bff', // Blue text color
    transition: 'all 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#007bff', // Blue background on hover
    color: 'white',
  },
};

export default Home;
