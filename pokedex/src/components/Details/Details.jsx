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
  // Uppercase Words
  function upperCase(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  const detailsData = actualData[chosenId];

  // Once Data is received:
  if (actualData.length > 0) {
    // Creating Post Title
    let postTitle = String(detailsData.id);
    while (postTitle.length < 3) {
      postTitle = '0' + postTitle;
    }
    let name1 = detailsData.name;
    // Might have to change this if Pokemon names contain >1 word
    name1 = upperCase(name1);
    postTitle = '#' + postTitle + ' ' + name1;

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
          <h1>{postTitle}</h1>
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
