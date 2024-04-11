import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Redirect to home or any other page after successful registration
    history.push('/home');
  };

  const handleRedirectToAboutPage = () => {
    history.push('/about');
  };

  return (
    <div className="modal">
      <div className="registration-form">
        <h2>Registrace</h2>
        <button className="close-button" onClick={handleRedirectToAboutPage}>✖</button> {/* Close button */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Uživatelské jméno:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Heslo:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength="6"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Potvrďte heslo:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              minLength="6"
              required
            />
          </div>
          <button>Registrovat se</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
