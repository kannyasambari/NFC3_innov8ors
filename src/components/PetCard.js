import React from 'react';
import TinderCard from 'react-tinder-card';
import { useHistory } from 'react-router-dom';

const PetCard = ({ pet, onSwipe }) => {
  const history = useHistory();

  const handleSwipe = (direction) => {
    if (direction === 'right') {
      history.push(`/adopt/${pet.id}`);
    }
    onSwipe();
  };

  return (
    <TinderCard
      onSwipe={handleSwipe}
      preventSwipe={['up', 'down']}
      style={styles.card}
    >
      <div style={styles.cardContent}>
        <img src={pet.image} alt={pet.name} style={styles.image} />
        <h2>{pet.name}</h2>
        <p>{pet.description}</p>
      </div>
    </TinderCard>
  );
};

const styles = {
  card: {
    width: '300px',
    height: '400px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    position: 'absolute',
    backgroundColor: '#fff',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px'
  }
};

export default PetCard;
