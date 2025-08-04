import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './CitiesList.css';

const CitiesList = ({ cities }) => {
  const { id } = useParams();
  return (
    <div className="cities-list">
      <h2>Available Cities</h2>
      <ul>
        {cities.map(city => (
          <li key={city.id} className={id === city.id ? 'active' : ''}>
            <Link to={city.id}>{city.name}</Link>
          </li>
        ))}
      </ul>
      {!id && <p>Select a city to view details.</p>}
    </div>
  );
};

export default CitiesList;