import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/category1">Computer Accessories </Link>
      <Link to="/category2">Computer Parts </Link>
      <Link to="/cart">Cart ({cartCount})</Link>
    </nav>
  );
}

export default Navbar;
