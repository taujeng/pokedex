import React, { useEffect, useState } from 'react'
import Post from "./Post/Post"

const PokedexList = (loading, pokedexData) => {
  // console.log(pokedexData)
  // console.log(pokedexData[1])
  // console.log(Array.isArray(pokedexData))
  // if (loading) {
  //   return <h1>Loading...</h1>
  // }
  const [realData, setRealData] = useState([1,2,3])
  const [toLoad, setToLoad] = useState(true)

  console.log(loading, pokedexData)




  // async function fetchRealData(pokedexData) {
  //   const lala = await pokedexData
  //   console.log(lala)
  // }
  // fetchRealData();
  // console.log(typeof pokedexData)
  // console.log(pokedexData)

  return (
    <div className="list-container">
      {pokedexData.map(item => {
        return <h1>{item.name}</h1>
      })}
    </div>
  )
}

export default PokedexList;
