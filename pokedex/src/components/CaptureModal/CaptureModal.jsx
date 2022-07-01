import React, { useState } from 'react';
import './captureModal.css';

const CaptureModal = ({ active, closeModal, chosenId, actualData }) => {
  const [nickname, setNickName] = useState();
  const [capturedDate, setCapturedDate] = useState();
  const [capturedLevel, setCapturedLevel] = useState();

  if (!active) {
    return;
  }

  const captureName = actualData[chosenId].name;
  const captureTitle =
    captureName.slice(0, 1).toUpperCase() + captureName.slice(1);

  const clickModal = () => {
    closeModal();

    // Grab all inputs
    let inputCollection = [];
    const inputHTML = document.getElementsByClassName('capture-input');
    for (let i = 0; i < inputHTML.length; i++) {
      inputCollection.push(inputHTML[i].value);
      // get back an array of strings
    }
    const toStore = {
      name: captureName,
      nickname: inputCollection[0],
      captured_date: inputCollection[1],
      captured_level: inputCollection[2],
    };

    // First Time Storing in Local Storage
    const anyData = localStorage.getItem('pokedex');
    console.log(anyData, 'anydata');

    const dataToStore = anyData ? JSON.parse(anyData.split(',')) : [];
    dataToStore.push(toStore);
    window.localStorage.setItem('pokedex', JSON.stringify(dataToStore));

    let newObject = window.localStorage.getItem('pokedex');
    console.log(JSON.parse(newObject));
  };

  return (
    <div className="capture-modal-container" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1>Capturing {captureTitle}</h1>
        <form>
          <input
            className="capture-input"
            type="text"
            placeholder="Nickname"
            required
          />
          <input
            className="capture-input"
            type="date"
            placeholder="Captured Date"
            required
          />
          <input
            className="capture-input"
            type="number"
            placeholder="Captured Level"
            required
          />
          <input type="submit" value="submit"></input>
        </form>
        <button type="submit" onClick={clickModal}>
          Capture
        </button>
      </div>
    </div>
  );
};

export default CaptureModal;
