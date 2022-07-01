import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = ({ removeDetails, actualData, localStorage }) => {
  // removeDetails: on Click, stop showing Details
  // actualData and localStorage are passed to CapturedPokemon via Link's State

  return (
    <div className="header-container" onClick={() => removeDetails()}>
      {/* Logo  */}
      <Link to="/">
        <img src="./images/pokedex_logo.png" alt="Pokedex Logo" id="mainLogo" />
      </Link>
      {/* Captured Pokemon Button */}
      <Link
        to="/capturedpokemon"
        state={{ actualData: actualData, localStorage: localStorage }}
        className="header-button"
      >
        <img
          src="./images/pokeball.png"
          alt="Pokeball"
          className="header-pokeball-img"
        />
        Captured Pokemon
      </Link>
    </div>
  );
};

export default Header;
