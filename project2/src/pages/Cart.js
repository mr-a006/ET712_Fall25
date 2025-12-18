import React from 'react';

function Cart({ cart }) {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.0816;
  const total = subtotal + tax;

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          {item.title} - Quantity: {item.quantity} - Price: ${item.price || 10} {/* fallback price */}
        </div>
      ))}
      <hr />
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>NY Tax (8.16%): ${tax.toFixed(2)}</p>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default Cart;
