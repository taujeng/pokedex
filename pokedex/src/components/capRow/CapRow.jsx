import React from 'react';
import './capRow.css';
import styleHelper from '../../styleHelper';

const CapRow = ({ localItem, actualData }) => {
  const findPokemon = actualData.filter((item) => {
    return item.name === localItem.name;
  });

  // Selected Pokemon's Individual Info
  const spotlight = findPokemon[0];
  // localItem is Selected Pokemon's Local Storage Info

  // <--- Formatting Information --->

  // POKEMON
  let postTitle = String(spotlight.order);
  while (postTitle.length < 3) {
    postTitle = '0' + postTitle;
  }
  let name1 = spotlight.name;
  // Might have to change this if Pokemon names contain >1 word
  name1 = styleHelper.upperCase(name1);
  postTitle = '#' + postTitle + ' ' + name1;

  // Pokemon Types
  let pokemonTypes = styleHelper.upperCase(spotlight.types[0].type.name);

  for (let i = 1; i < spotlight.types.length; i++) {
    pokemonTypes += ' • ' + styleHelper.upperCase(spotlight.types[i].type.name);
  }

  return (
    <div>
      <div className="CapRow-container">
        <div className="CapRow-pokemon">
          <div className={`CapRow-image ${spotlight.types[0].type.name}-type`}>
            <img
              src={
                spotlight['sprites']['other']['official-artwork'][
                  'front_default'
                ]
              }
              alt={spotlight.name}
              className="CapRow-image"
            />
          </div>
          <div className="CapRow-title">
            <h1>{postTitle}</h1>
            <p>{pokemonTypes}</p>
          </div>
        </div>
        <div className="row-item">{localItem['nickname']}</div>
        <div className="row-item">
          {styleHelper.setDate(localItem['captured_date'])}
        </div>
        <div className="row-item">{localItem['captured_level']}</div>
      </div>
      {/* Mobile View */}
      <div className="mobile-CapRow-container">
        <div className="mobile-CapRow-image">
          <div className={`CapRow-image ${spotlight.types[0].type.name}-type`}>
            <img
              src={
                spotlight['sprites']['other']['official-artwork'][
                  'front_default'
                ]
              }
              alt={spotlight.name}
              className="CapRow-image"
            />
          </div>
        </div>
        <div className="mobile-CapRow-text">
          <div id="mobile-CapRow-title">{localItem['nickname']}</div>
          <div className="row-item">
            {styleHelper.setDate(localItem['captured_date'])}
          </div>
          <div className="row-item">{localItem['captured_level']}</div>
        </div>
      </div>
    </div>
  );
};

export default CapRow;
