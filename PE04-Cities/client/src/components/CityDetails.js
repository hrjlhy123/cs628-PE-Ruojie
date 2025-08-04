import React from 'react';
import { useParams } from 'react-router-dom';
import './CityDetails.css';

const CityDetails = ({ cities }) => {
  const { id } = useParams();
  const city = cities.find(c => c.id === id);

  if (!city) return <p>City not found.</p>;

  return (
    <div className="city-details">
      <h2>{city.name}</h2>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population.toLocaleString()}</p>
      <p><strong>Description:</strong> {city.description}</p>
    </div>
  );
};

export default CityDetails;