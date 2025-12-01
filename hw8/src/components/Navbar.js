import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }){
  return(
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "20px" }}>Products</Link>
      <Link to="/cart">Cart ({cartCount})</Link>
    </nav>
  );
}

export default Navbar;
