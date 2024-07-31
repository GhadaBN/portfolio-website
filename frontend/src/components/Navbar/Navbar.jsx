import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <li className="nav-link">Home</li>
      </div>
      <div className="link-container">
        <li className="nav-link">About</li>
      </div>
    </div>
  );
};

export default Navbar;
