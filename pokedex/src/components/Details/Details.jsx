import React from 'react';

const Details = ({ data, loading, id = 1 }) => {
  console.log('data', data);
  console.log('loading', loading);
  console.log('id', id);
  if (loading) {
    return <h1>loading.....</h1>;
  }

  const detailsData = data.filter((item) => {
    return item.id === id;
  });

  console.log(detailsData);
  let myName = detailsData.name;

  return (
    <div>
      <h1>butta butta</h1>
      <h2>{myName}</h2>
    </div>
  );
};

export default Details;
