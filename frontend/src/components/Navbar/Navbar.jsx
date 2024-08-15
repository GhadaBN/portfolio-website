import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/" className="nav-link">
          <video
            className="home-logo"
            src={assets.hand_spinning_vid}
            poster={assets.hand_static}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline=""
            crossOrigin="anonymous"
            alt="home logo"
          />
        </Link>
      </div>
      {/* <div className="link-container">
        <li className="about">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </div> */}
    </div>
  );
};

export default Navbar;
