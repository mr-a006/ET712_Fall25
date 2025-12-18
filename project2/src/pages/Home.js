import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Aqeel Hussain's Computer Products</h1>
      <p>Explore our products by category:</p>
      <div className="category-links">
        <Link to="/category1">
          <button>Category 1</button>
        </Link>
        <Link to="/category2">
          <button>Category 2</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
