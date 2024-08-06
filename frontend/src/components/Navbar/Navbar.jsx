import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <li className="home">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
      </div>
      <div className="link-container">
        <li className="about">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
