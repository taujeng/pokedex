import './App.css';
import Header from "./components/Header/Header"
import React, { useState, useEffect } from 'react'
import Post from "./components/Post/Post"

const App = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [pokedexData, setPokedexData] = useState([])

  // useEffect(() => {
  //   async function getPokemonData() {
  //     setLoading(true);
  //     console.log(loading)
  //     try {
  //       const rawData = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
  //         .then(res => res.json())
  //         // .then(data => console.log(data))
  //       setPokedexData(rawData.results)
  //       return rawData;  
  
  //     } catch (err) {
  //       console.log(err)
  //     }
  //     setLoading(false);
  //   }
  //   getPokemonData();
  // }, [loading])


  useEffect(() => {
    async function getPosts() {
      setLoading(true)
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
  
      const response = await fetch(URL);
      const data = await response.json();
      setPokedexData(data.results)
      setLoading(false)

    
      console.log(data.results);
      return data.results;
    }
    getPosts()
  }, [])



  console.log(pokedexData)
  console.log(pokedexData[1])
  console.log(typeof pokedexData)
  console.log(Array.isArray(pokedexData))






  return (
    <div className="App">
      <Header />
      
      {pokedexData.map(item => {
        return <Post data={item} loading={loading}></Post>
      })}
    </div>
  );
}

export default App;
