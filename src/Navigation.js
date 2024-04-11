import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navigation.css';
import LoginForm from './LoginForm'; // Importujeme komponentu LoginForm


const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false); // Stav modálního okna
  const [searchTerm, setSearchTerm] = useState(''); // Stav pro uchování vyhledávaného termínu
  const history = useHistory();

  const handleLogin = (username) => {
    setLoggedIn(true);
    setUsername(username);
    setShowModal(false); // Zavřeme modální okno po přihlášení
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    history.push('/about'); // Přesměrování na AboutPage po odhlášení
  };

  const handleOpenModal = () => {
    setShowModal(true); // Otevřeme modální okno
  };

  const handleCloseModal = () => {
    setShowModal(false); // Zavřeme modální okno
  };

  const handleSearch = () => {
    const found = window.find(searchTerm); // Hledá vyhledávaný termín na stránce
    if (!found) alert('Slovo nenalezeno');
  };

  return (
    <nav className="navigation">
      <div className="brand" onClick={() => history.push('/about')}>
        <span className="brand-text">BRAINY</span>
      </div>
      {/* Odkazy v navigaci */}
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/home" className="nav-link-item">Aktuality</Link>
        </li>
        <li className="nav-link">
          <Link to="/blog" className="nav-link-item">Blog</Link>
        </li>
        <li className="nav-link">
          <Link to="/ideas" className="nav-link-item">Nápady</Link>
        </li>
      </ul>
      {/* Vyhledávací lišta */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Vyhledat..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>Hledat</button>
      </div>
      <div className="user-actions">
        <div className="auth-links">
          {loggedIn ? (
            <>
              <span className="username">{username}</span>
              <span className="auth-link-divider"> </span>
              <button className="auth-link" onClick={handleLogout}>Odhlásit se</button>
            </>
          ) : (
            <>
              <button className="auth-link" onClick={handleOpenModal}>Přihlášení</button>
              <span className="auth-link-divider"> </span>
              <Link to="/register" className="auth-link">Registrace</Link>
            </>
          )}
        </div>
      </div>
      {/* Zobrazení modálního okna */}
      {showModal && <LoginForm onLogin={handleLogin} handleCloseModal={handleCloseModal} />}
    </nav>
  );
};

export default Navigation;