import React from 'react';
import './captureModal.css';

const CaptureModal = ({ active, closeModal, chosenId, actualData }) => {
  if (!active) {
    return;
  }

  let captureName = actualData[chosenId].name;
  captureName = captureName.slice(0, 1).toUpperCase() + captureName.slice(1);

  return (
    <div className="capture-modal-container" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1>Capturing {captureName}</h1>
        <form>
          <input type="text" placeholder="Nickname" required />
          <input type="date" placeholder="Captured Date" required />
          <input type="number" placeholder="Captured Level" required />
        </form>
        <button onClick={closeModal}>Capture</button>
      </div>
    </div>
  );
};

export default CaptureModal;
