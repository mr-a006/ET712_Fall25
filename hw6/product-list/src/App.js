import React from "react";
import "./App.css";

function App(){
  // array of product objects
  const products = [
    {
      name: "Apple iPhone 15",
      image: "./images/iphone15.jpg",
      price: "$999",
      inStock: true,
    },
    {
      name: "Samsung Galaxy S23",
      image: "./images/galaxys23.jpg",
      price: "$899",
      inStock: false,
    },
    {
      name: "Sony Headphones",
      image: "./images/sonyheadphones.jpg",
      price: "$199",
      inStock: true,
    },
    {
      name: "Dell Laptop",
      image: "./images/delllaptop.jpg",
      price: "$1200",
      inStock: true,
    },
    {
      name: "Canon Camera",
      image: "./images/canoncamera.jpg",
      price: "$799",
      inStock: false,
    },
    {
      name: "Apple Watch",
      image: "./images/applewatch.jpg",
      price: "$399",
      inStock: true,
    },
    {
      name: "Nintendo Switch",
      image: "./images/nintendoswitch.jpg",
      price: "$299",
      inStock: true,
    },
    {
      name: "Fitbit Charge 5",
      image: "./images/fitbitcharge5.jpg",
      price: "$149",
      inStock: true,
    },
    {
      name: "Google Pixel 7",
      image: "./images/pixel7.jpg",
      price: "$699",
      inStock: false,
    },
    {
      name: "Bose Speakers",
      image: "./images/bosespeakers.jpg",
      price: "$499",
      inStock: true,
    },
  ];

  // ProductCard component
  const ProductCard = ({name, image, price, inStock}) => {
    return (
      <div className="product-card">
        <img src={image}/>
        <h3>{name}</h3>
        <p>Price: {price}</p>
        <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Product Listing</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
