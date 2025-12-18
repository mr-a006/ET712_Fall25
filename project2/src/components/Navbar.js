import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/category1">Category 1 </Link>
      <Link to="/category2">Category 2 </Link>
      <Link to="/cart">Cart ({cartCount})</Link>
    </nav>
  );
}

export default Navbar;
