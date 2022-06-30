import React, { useEffect, useState } from 'react';

const Details = ({ data, loading, chosenId }) => {
  const [indData, setIndData] = useState();

  useEffect(() => {
    const detailsData = data.filter((item) => {
      return item.id === chosenId;
    });
    setIndData(detailsData);
  }, []);

  if (loading) {
    return <h1>loading.....</h1>;
  }

  return (
    <div>
      <h1>Detailed view</h1>
      {/* <h2>{indData.name}</h2> */}
    </div>
  );
};

export default Details;
