
import { Link } from "react-router-dom";

import logo1 from "../../Pictures/logo1.png";

import "./Navbar.css";
function Navbar() {
  return (
<nav className="navbar">
        <div className="nav_div_logo">
        <Link to="/" className="nav_logo"><img src={logo1} alt="Logo" /></Link>
        </div>
        <div className="nav_div_links">
        <Link to="/" className="nav_links"> Fooldal</Link>
        <Link to="/works" className="nav_links">Munkaim</Link>
        <Link to="/contact" className="nav_links"> Kapcsolat</Link>
        </div>
  
</nav>
  )
}

export default Navbar