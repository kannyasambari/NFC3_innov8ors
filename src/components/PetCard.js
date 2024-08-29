import React from 'react';
import { Link } from 'react-router-dom';
import './PetCard.css'; // Optional: CSS file for styling

function PetCard({ pet }) {
  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} className="pet-card-image" />
      <div className="pet-card-details">
        <h2 className="pet-card-name">{pet.name}</h2>
        <p className="pet-card-description">{pet.description}</p>
        <Link to={`/pet/${pet.id}`} className="pet-card-button">View Details</Link>
      </div>
    </div>
  );
}

export default PetCard;
