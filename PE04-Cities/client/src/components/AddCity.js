import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddCity.css';

const AddCity = ({ onAdd }) => {
  const [form, setForm] = useState({ name: '', country: '', population: '', description: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd({
      name: form.name,
      country: form.country,
      population: Number(form.population),
      description: form.description
    });
    navigate('/cities', { replace: true });
  };

  return (
    <form className="add-city-form" onSubmit={handleSubmit}>
      <h2>Add New City</h2>
      <label>
        Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} required />
      </label>
      <label>
        Country:
        <input type="text" name="country" value={form.country} onChange={handleChange} required />
      </label>
      <label>
        Population:
        <input type="number" name="population" value={form.population} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <textarea name="description" value={form.description} onChange={handleChange} />
      </label>
      <button type="submit">Add City</button>
    </form>
  );
};

export default AddCity;