import './App.css';
import Header from "./components/Header/Header"
import React, { useState, useEffect } from 'react'
import Post from "./components/Post/Post"
import Pagination from "./components/Pagination/Pagination"
import Details from "./components/Details/Details"
import CaptureModal from "./components/CaptureModal/CaptureModal"
import { v4 as uuidv4 } from "uuid"
import axios from "axios"

const App = () => {

  const [currentPage, setCurrentPage] = useState(1);
  // Number of Pokemon Shown Per Page
  const [postsPerPage, setPostsPerPage] = useState(12)
  // Pokemon Data: An array of objects
  const [actualData, setActualData] = useState([]);
  // Selected Pokemon's index in actualData
  const [chosenId, setChosenId] = useState();
  // Determines if Detail is shown
  const [isActive, setIsActive] = useState(false)
  // Determines if Capture Modal is shown
  const [showModal, setShowModal] = useState(false)
  // Captured Pokemon's data stored in local storage
  const [localStorage, setLocalStorage] = useState([])


  // using Axios

  // Fetch Pokemon Data from API
  useEffect(() => {
    const getPosts = async() => {
      // Number of Pokemon to Fetch: just the original 151
      const howMany = 151;

      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${howMany}&offset=0`)
        const res2 = res.data
        const res3 = res2.results

        let fullList = []
        for (let i=0; i < res3.length; i++) {
          const dip = await axios.get(res3[i]["url"])
          const dip2 = dip.data;
          fullList.push(dip2)
          console.log(fullList)
        }
        // console.log(fullList)
        // Set Data received to actualData
        setActualData(fullList)
      } catch(e) {
        console.log(e)
      }
    }
    getPosts()

  }, [])


  useEffect(()=> {
    // Grab Local Storage
    const checkLocal = window.localStorage.getItem('pokedex');
    const grabLocal = checkLocal ? JSON.parse(checkLocal.split(',')) : [];
    setLocalStorage(grabLocal)

    // updated everytime CapturedModal is opened/closed
  }, [showModal])

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = actualData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Pass the correct index to Details
  const selectPokemon = (id) => {
    setChosenId(id - 1)
  }


  return (
    <div className="App">
      <div className="container" id="container" >
        <Header actualData={actualData} localStorage={localStorage}removeDetails={()=> {setIsActive(false)}}/>
        <div className="list-container">
          {currentPosts.map(item => (
            <Post key={uuidv4()} data={item} selectPokemon={selectPokemon}
            showDetails={() => {setIsActive(true)}}/>
          ))}
        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={actualData.length} paginate={paginate}/>
      </div>
      <Details actualData={actualData} chosenId={chosenId} isActive={isActive} enableModal={() => {setShowModal(true)}} localStorage={localStorage}/>
      <CaptureModal active={showModal}  closeModal={()=> {setShowModal(false)}} chosenId={chosenId} actualData={actualData}/>
    </div>
  );
}

export default App;
