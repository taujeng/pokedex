import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = ({ removeDetails }) => {
  // removeDetails
  // onClick, remove Detail component

  return (
    <header className="header-container" onClick={() => removeDetails()}>
      {/* Logo  */}
      <img src="./images/pokedex_logo.png" alt="Pokedex Logo" id="mainLogo" />
      {/* Captured Pokemon Button */}
      <Link to="/capturedpokemon" className="header-button">
        <img
          src="./images/pokeball.png"
          alt="Pokeball"
          className="header-pokeball-img"
        />
        Captured Pokemon
      </Link>
    </header>
  );
};

export default Header;
