import React from 'react';

function ModalWindow({ product, closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>X</button>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ModalWindow;
