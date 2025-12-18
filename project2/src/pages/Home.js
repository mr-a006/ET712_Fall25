import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Aqeel Hussain's Computer Products</h1>
      <p>Explore our products by the following categories:</p>
      <div className="category-links">
        <Link to="/category1">
          <button>Computer Accessories</button>
        </Link>
        <Link to="/category2">
          <button>Computer Parts</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
