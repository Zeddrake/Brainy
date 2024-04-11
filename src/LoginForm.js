import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({ onLogin, handleCloseModal }) => { // Přidáváme prop handleCloseModal
  const [formData, setFormData] = useState({
    username: 'admin', // Předvyplněné uživatelské jméno
    password: 'adminadmin' // Předvyplněné heslo
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
    // Simulace ověření uživatelských údajů
    if (formData.username === 'admin' && formData.password === 'adminadmin') {
      onLogin(formData.username); // Přihlášení s uživatelským jménem
      history.push('/home'); // Přesměrování na domovskou stránku po úspěšném přihlášení
      handleCloseModal(); // Zavření modálního okna
    } else {
      alert('Neplatné přihlašovací údaje');
    }
  };

  return (
    <>
      <div className="modal">
        <div className="login-form">
          <h2>Přihlášení</h2>
          <button className="close-button" onClick={handleCloseModal}>✖</button> {/* Close button */}
          <div>
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
            <button onClick={handleSubmit}>Přihlásit se</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
