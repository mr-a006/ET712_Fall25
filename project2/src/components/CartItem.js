import React from 'react';

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.title}</h4>
        <p>Quantity: {item.quantity}</p>
        <p>Price per item: ${item.price.toFixed(2)}</p>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartItem;
