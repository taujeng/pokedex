import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header-container">
      {/* Logo  */}
      <img src="./images/pokedex_logo.png" alt="Pokedex Logo" id="mainLogo" />
      {/* Captured Pokemon Button */}
      <button className="header-button">
        <img
          src="./images/pokeball.png"
          alt="Pokeball"
          className="header-pokeball-img"
        />
        Captured Pokemon
      </button>
    </header>
  );
};

export default Header;
