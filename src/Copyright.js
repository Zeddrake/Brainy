import React from 'react';
import './Copyright.css';

const Copyright = () => {
  return (
    <div className="copyright">
      <p>&copy; {new Date().getFullYear()} BRAINY | <a href="/contact">Kontaktujte nás</a></p>
    </div>
  );
};

export default Copyright;
