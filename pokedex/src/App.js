import './App.css';
import Header from "./components/Header/Header"
import React, { useState, useEffect } from 'react'
import Post from "./components/Post/Post"
import PokedexList from './components/PokedexList';
import { v4 as uuidv4 } from "uuid"
import axios from "axios"

const App = () => {


  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [pokedexData, setPokedexData] = useState([])
  const [firstData, setFirstData] = useState();
  const [actualData, setActualData] = useState();
  


  // useEffect(() => {
  //   async function getPokemonData() {
  //     setLoading(true);
  //     console.log(loading)

  //     const rawData = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
  //       .then(res => res.json())
  //       // .then(data => console.log(data))
  //       // .then(data => {
  //       //   setPokedexData(data.results)
  //       //   console.log(pokedexData)
  //       // })
  //     setPokedexData(rawData)
  //     console.log(pokedexData)




  //     let listy = []
  //     for (let i=0; i < pokedexData.length; i++) {
  //       const dip = await fetch(pokedexData[i]["url"])
  //         .then(res => res.json())
  //         // .then(data => console.log(data))
  //       listy.push(dip)
  //     }
  //     console.log(listy)




  //     setLoading(false);

  //   }
  //   getPokemonData();
  // }, [])




  // using Axios


  useEffect(() => {
    const getPosts = async() => {
      setLoading(true)

      // can't just stack res.data.results

      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
        const res2 = res.data
        const res3 = res2.results
        setFirstData(res3);
        console.log(firstData, "first")

        let list1 = []
        for (let i=0; i < res3.length; i++) {
          const dip = await axios.get(res3[i]["url"])
          const dip2 = dip.data;
          // console.log(dip2)
          list1.push(dip2)
          // setActualData([...actualData, dip2])
        }
        console.log(list1)
        const setSecondData = list1
        setActualData(setSecondData)
        console.log(actualData, "here")
      } catch(e) {
        console.log(e)
      }

    }
    getPosts()
    console.log(actualData, "2nd")




      // setPokedexData(res.data)
      setLoading(false)

  }, [])

  useEffect(() => {
    setActualData(actualData)
    console.log(actualData)
  }, [actualData])


  return (
    <div className="App">
      <Header />
      <div className="list-container">
        <PokedexList actualData={actualData} />
        {/* {actualData.map(item => {
          <Post id={uuidv4()} data={actualData} loading={loading}/>
        })} */}
      </div>

    </div>
  );
}

export default App;
