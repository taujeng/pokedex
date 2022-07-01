import React from 'react';
import './capRow.css';

const CapRow = ({ localItem, actualData }) => {
  const findPokemon = actualData.filter((item) => {
    return item.name === localItem.name;
  });
  const spotlight = findPokemon[0];

  console.log(localItem, 'local info');
  console.log(spotlight, 'spotlight');
  // <--- Formatting Information --->

  // Uppercase Words
  function upperCase(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  // POKEMON
  let postTitle = String(spotlight.order);
  while (postTitle.length < 3) {
    postTitle = '0' + postTitle;
  }
  let name1 = spotlight.name;
  // Might have to change this if Pokemon names contain >1 word
  name1 = upperCase(name1);
  postTitle = '#' + postTitle + ' ' + name1;

  // Pokemon Types
  let pokemonTypes = upperCase(spotlight.types[0].type.name);

  for (let i = 1; i < spotlight.types.length; i++) {
    pokemonTypes += ' • ' + upperCase(spotlight.types[i].type.name);
  }

  // Format Date
  function setDate(date) {
    // date we receive:
    // const receivedDate = capturedPokemon[0]['captured_date'];
    // format: "2022-06-30"
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const oldMonth = parseInt(date.slice(5, 7));
    const oldDay = date.slice(8, 10);
    const oldYear = date.slice(0, 4);

    const newDate = `${months[oldMonth - 1]} ${oldDay}, ${oldYear}`;
    return newDate;
  }

  return (
    <div className="CapRow-container">
      <div className="CapRow-pokemon">
        <div className={`CapRow-image ${spotlight.types[0].type.name}-type`}>
          <img
            src={
              spotlight['sprites']['other']['official-artwork']['front_default']
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
      <div className="CapRow-nickname row-item">{localItem['nickname']}</div>
      <div className="CapRow-capturedAt row-item">
        {setDate(localItem['captured_date'])}
      </div>
      <div className="CapRow-capturedLevel row-item">
        {localItem['captured_level']}
      </div>
    </div>
  );
};

export default CapRow;
