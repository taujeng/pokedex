import React, { useEffect, useState } from 'react';
import './details.css';

const Details = ({ actualData, loading, chosenId }) => {
  // const [detailsData, setDetailsData] = useState('');
  // console.log(actualData, chosenId);

  // Problem with wrapping everything in a useEffect is that
  // would have to use useState to access things
  // and first render the useState is empty -> giving us errors

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
  if (!chosenId) {
    return;
  }

  // Uppercase Words
  function upperCase(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  // Individual Pokemon Details
  const detailsData = actualData[chosenId];
  // what details data is receiving: eg. https://pokeapi.co/api/v2/pokemon/26/

  // Once Data is received:
  if (actualData.length > 0) {
    console.log(detailsData);
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

    return (
      <div className="details-container">
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
      </div>
    );
  }

  return (
    <div>
      <h1>Detailed view</h1>

      {/* {actualData.length > 0 && <h1>{actualData[0].name}</h1>}
      {actualData.length > 0 && <h1>{nameof}</h1>} */}

      {/* {actualData.length > 0 && <h2>{whatif.name}</h2>} */}
      {/* <h1>{actualData.order}</h1> */}

      {/* --> app runs, but above isn't rendered */}

      {/* <h1>{whatif.name}</h1> */}
      {/* --> app doesn't run, cannot read properties of undefined. */}

      {/* {detailsData.name.length > 0 && <h1>{detailsData.name}</h1>} */}
      {/* --> app doesn't run, says can't read properties of undefined (reading 'length') */}

      {/* {chosenId > 0 && <h1>{detailsData.name}</h1>} */}
      {/* --> app runs, but nothing is rendered */}
    </div>
  );
};

export default Details;
