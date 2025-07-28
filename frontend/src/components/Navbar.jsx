import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;