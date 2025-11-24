import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
  return(
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/space">Space</Link>
      <Link to="/animals">Animals</Link>
    </nav>
  );
}

export default Navbar;
