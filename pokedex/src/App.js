import './App.css';
import Header from "./components/Header/Header"
import React, { useState, useEffect } from 'react'
import Post from "./components/Post/Post"
import PokedexList from './components/PokedexList';
import Pagination from "./components/Pagination/Pagination"
import Details from "./components/Details/Details"
import { v4 as uuidv4 } from "uuid"
import axios from "axios"

const App = () => {


  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12)
  const [pokedexData, setPokedexData] = useState([])
  const [firstData, setFirstData] = useState();
  const [actualData, setActualData] = useState([]);
  const [chosenId, setChosenId] = useState();
  const [isActive, setIsActive] = useState(false)

  


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
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        const res2 = res.data
        const res3 = res2.results
        setFirstData(res3);


        let fullList = []
        for (let i=0; i < res3.length; i++) {
          const dip = await axios.get(res3[i]["url"])
          const dip2 = dip.data;
          fullList.push(dip2)
        }
        console.log(fullList)
        setActualData(fullList)
      } catch(e) {
        console.log(e)
      }

    }
    getPosts()
    // console.log(actualData, "2nd")

      setLoading(false)
  }, [])

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = actualData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Pass the correct index to Details
  const selectPokemon = (id) => {
    setChosenId(id - 1)
    console.log(id - 1, "Array Index for Details")
  }


  const dealDetails = () => {
    setIsActive(true)
    console.log("shou;d be truie")
  }

  const removeDetails = () => {
    setIsActive(false)
    console.log("remove it!")
  }

  return (
    <div className="App">
      <div className="container" id="container" >
        <Header removeDetails={removeDetails}/>
        <div className="list-container">
          {/* <PokedexList actualData={actualData} loading={loading}/> */}
          {currentPosts.map(item => (
            <Post key={uuidv4()} data={item} loading={loading} selectPokemon={selectPokemon}
            dealDetails={dealDetails}/>
          ))}
        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={actualData.length} paginate={paginate}/>
      </div>
      <Details actualData={actualData} loading={loading} chosenId={chosenId} isActive={isActive}/>



    </div>
  );
}

export default App;
