import React from 'react';
import './captureModal.css';

const CaptureModal = ({ active, closeModal }) => {
  if (!active) {
    return;
  }

  return (
    <div className="capture-modal-container" onClick={closeModal}>
      <div className="modal-content">
        <h1>greetings</h1>
        <p>welcome to the motel of california</p>
        <button onClick={closeModal}>CLOSE IT MAN</button>
      </div>
    </div>
  );
};

export default CaptureModal;
