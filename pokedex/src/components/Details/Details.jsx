import React, { useEffect, useState } from 'react';

const Details = ({ actualData, loading, chosenId }) => {
  const [detailsData, setDetailsData] = useState('');
  // console.log(actualData, chosenId);

  useEffect(() => {
    const whatif = actualData[chosenId];
    setDetailsData(whatif);
  }, []);

  // useEffect(() => {
  //   const getDetailsData = data.filter((item) => {
  //     return item.id === chosenId;
  //   });
  //   setDetailsData(getDetailsData);
  // }, []);

  // const whatif = actualData[chosenId];
  // setDetailsData(whatif);
  // console.log(whatif, whatif.name);

  return (
    <div>
      <h1>Detailed view</h1>
      <h1>{actualData.order}</h1>
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
