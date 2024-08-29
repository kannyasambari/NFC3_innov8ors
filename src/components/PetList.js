import React, { useState } from 'react';
import PetCard from './PetCard';

const pets = [
  { id: 1, name: 'Bella', description: 'Friendly and energetic', image: '/pet1.jpg' },
  { id: 2, name: 'Charlie', description: 'Calm and loving', image: '/pet2.jpg' },
  { id: 3, name: 'Max', description: 'Playful and smart', image: '/pet3.jpg' }
];

const PetList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pets.length);
  };

  const pet = pets[currentIndex];

  return (
    <div style={styles.container}>
      <PetCard pet={pet} onSwipe={handleSwipe} />
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '300px',
    height: '400px',
    margin: 'auto'
  }
};

export default PetList;
