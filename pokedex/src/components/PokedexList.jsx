import React, { useEffect, useState } from 'react'
import Post from "./Post/Post"
import { v4 as uuidv4 } from "uuid"

const PokedexList = ({actualData, loading}) => {

  if (loading) {
    return <h2>load brad</h2>
  }

  console.log(actualData, "pokedexlist data")



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
        <Post key={uuidv4()} actualData={item} loading={loading}></Post>
      ))}
    </div>
  )
}

export default PokedexList;
