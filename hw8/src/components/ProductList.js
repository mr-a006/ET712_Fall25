import React from "react";

function ProductList({ addToCart }){
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      image: "/images/headphones.jpg"
    },
    {
      id: 2,
      name: "Office Mouse",
      price: 29.99,
      image: "/images/mouse.jpg"
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 89.99,
      image: "/images/keyboard.jpg"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "20px" }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "150px", display: "block" }}
          />

          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
