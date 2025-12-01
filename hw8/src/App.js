import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product){
    if (!cart.find((item) => item.id === product.id)){
      setCart([...cart, product]);
    }
  }

  function removeFromCart(id){
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <Router>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route
          path="/"
          element={<ProductList addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
