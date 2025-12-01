import React from "react";

function Cart({ cart, removeFromCart }){
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>No items in cart.</p>}

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "15px" }}>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "120px", display: "block" }}
          />

          <h3>{item.name}</h3>
          <p>${item.price.toFixed(2)}</p>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <h3>Total: ${total.toFixed(2)}</h3>
      )}
    </div>
  );
}

export default Cart;
