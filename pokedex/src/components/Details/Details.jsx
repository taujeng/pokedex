import React, { useEffect, useState } from 'react';
import './details.css';

const Details = ({
  actualData,
  chosenId,
  isActive,
  enableModal,
  localStorage,
}) => {
  const [useDate, setUseDate] = useState();
  // const [detailsData, setDetailsData] = useState('');
  // console.log(actualData, chosenId);

  // useEffect(() => {
  //   const getDetailsData = data.filter((item) => {
  //     return item.id === chosenId;
  //   });
  //   setDetailsData(getDetailsData);
  // }, []);

  // const nameof = upperCase(whatif.name);
  // // setDetailsData(whatif);
  // console.log(whatif, whatif.name);

  // If no Pokemons are selected, return nothing
  // if (!chosenId) {
  //   console.log(chosenId, 'id receive');
  //   return;
  // }

  // If Details Component is not active, return nothing.
  if (!isActive) {
    return;
  }

  // Uppercase Words
  function upperCase(str) {
    return str[0].toUpperCase() + str.slice(1);
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

  // Individual Pokemon Details
  const detailsData = actualData[chosenId];
  // what details data is receiving: eg. https://pokeapi.co/api/v2/pokemon/26/

  // Once Data is received:
  if (actualData.length > 0) {
    // Creating Post Title
    let postTitle = String(detailsData.order);
    while (postTitle.length < 3) {
      postTitle = '0' + postTitle;
    }
    let name1 = detailsData.name;
    // Might have to change this if Pokemon names contain >1 word
    name1 = upperCase(name1);
    postTitle = '#' + postTitle + ' ' + name1;

    // Pokemon Types
    let pokemonTypes = upperCase(detailsData.types[0].type.name);

    for (let i = 1; i < detailsData.types.length; i++) {
      pokemonTypes += ' • ' + upperCase(detailsData.types[i].type.name);
    }

    // Locally Stored Custom Data

    // check if current Pokemon details match any captured Pokemon
    const capturedPokemon = localStorage.filter((item) => {
      return item.name === detailsData.name;
    });

    return (
      <div className="details-container" id="details-container">
        <div className={`details-cover ${detailsData.types[0].type.name}-type`}>
          <img
            src={
              detailsData['sprites']['other']['official-artwork'][
                'front_default'
              ]
            }
            alt={detailsData.name}
            className="detail-img"
          />
          <h1 className="details-postTitle">{postTitle}</h1>
        </div>
        <div className="details-text details-about">
          <h1>About</h1>
          <p>Type(s): {pokemonTypes}</p>
          <p>Weight: {detailsData.weight / 10} kg</p>
          <p>Height: {detailsData.height / 10} m</p>
        </div>
        <div className="details-text details-stats">
          <h1>Base Stats</h1>
          <p>HP: {detailsData['stats'][0]['base_stat']}</p>
          <p>Attack: {detailsData['stats'][1]['base_stat']}</p>
          <p>Defense: {detailsData['stats'][2]['base_stat']}</p>
          <p>Special Attack: {detailsData['stats'][3]['base_stat']}</p>
          <p>Special Defense: {detailsData['stats'][4]['base_stat']}</p>
          <p>Speed: {detailsData['stats'][5]['base_stat']}</p>
        </div>
        {capturedPokemon.length > 0 ? (
          <div className="details-text capture-information">
            <h1>Capture Information</h1>
            <p>Nickname: {capturedPokemon[0]['nickname']}</p>
            <p>Captured on: {setDate(capturedPokemon[0]['captured_date'])}</p>
            <p>Captured Level: {capturedPokemon[0]['captured_level']}</p>
          </div>
        ) : (
          <button className="capture-button" onClick={enableModal}>
            Capture
          </button>
        )}
      </div>
    );
  }

  return;
};

export default Details;
