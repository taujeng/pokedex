import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './capturedpokemon.css';
import CapRow from '../components/capRow/CapRow';

const CapturedPokemon = () => {
  const location = useLocation();
  const { actualData } = location.state;
  const { localStorage } = location.state;

  return (
    <div className="captured-pokemon-container">
      <header className="header-container">
        {/* Logo  */}
        <Link to="/">
          <img
            src="./images/pokedex_logo.png"
            alt="Pokedex Logo"
            id="mainLogo"
          />
        </Link>
      </header>
      <div className="captured-area">
        <div className="titles">
          <h1>POKEMON</h1>
          <h1>NICKNAME</h1>
          <h1>CAPTURED AT</h1>
          <h1>CAPTURED LEVEL</h1>
        </div>
        {localStorage.length > 0 &&
          localStorage.map((item) => (
            <CapRow localItem={item} actualData={actualData} />
          ))}
      </div>
    </div>
  );
};

export default CapturedPokemon;
