import React, { useEffect, useState } from 'react'
import Post from "./Post/Post"

const PokedexList = ({actualData, loading}) => {

  if (loading) {
    return <h2>load brad</h2>
  }




  // async function fetchRealData(pokedexData) {
  //   const lala = await pokedexData
  //   console.log(lala)
  // }
  // fetchRealData();
  // console.log(typeof pokedexData)
  // console.log(pokedexData)

  return (
    <div className="list-container">
      {actualData.map(item => (
        <h1>{item.name}</h1>
      ))}
    </div>
  )
}

export default PokedexList;
