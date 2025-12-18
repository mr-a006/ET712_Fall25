import React, { useState } from 'react';
import ModalWindow from './ModalWindow';

function Card({ product, addToCart }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} onClick={() => setShowModal(true)} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <input type="number" min="1" defaultValue="1" id={`qty-${product.id}`} />
      <button onClick={() => addToCart({ ...product, quantity: Number(document.getElementById(`qty-${product.id}`).value) })}>
        Add to Cart
      </button>

      {showModal && (
        <ModalWindow
          product={product}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default Card;
