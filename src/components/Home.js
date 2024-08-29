import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import homebg from '../images/homebg.jpg';
import PetCard from './PetCard'; // Import PetCard component
import ListAPet from './ListAPet'; // Import ListAPet component

const Home = () => {
  const [view, setView] = useState('home'); // State to control which view to display

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
          <Container className="text-center" style={styles.textContainer}>
            <h1 className="tagline">Find Your New Best Friend</h1>
            <p className="subtitle">Browse pets from our network of over 14,500 shelters and rescues.</p>
          </Container>
          <div style={styles.buttonContainer}>
            <Button className="animal-button" onClick={() => handleButtonClick('dogs')}>
              Dogs
            </Button>
            <Button className="animal-button" onClick={() => handleButtonClick('cats')}>
              Cats
            </Button>
            <Button className="animal-button" onClick={() => handleButtonClick('rabbits')}>
              Rabbits
            </Button>
            <Button className="animal-button" onClick={() => handleButtonClick('list-a-pet')}>
              List a Pet
            </Button>
          </div>
        </div>
      )}
      {view === 'list-a-pet' && <ListAPet />}
      {view === 'dogs' || view === 'cats' || view === 'rabbits' || view === 'other-animals' ? (
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
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  homeBackground: {
    backgroundImage: `url(${homebg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center text vertically in the image
  },
  textContainer: {
    position: 'absolute',
    top: '100%', // Adjust based on your needs
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    padding: '20px',
    position: 'absolute',
    bottom: '20px', // Adjust based on your needs
  },
};

export default Home;
