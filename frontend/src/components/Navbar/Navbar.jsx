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
            poster={assets.hand_static}
            autoPlay
            muted
            loop
            playsInline
            loading="lazy"
          >
            <source src={assets.hand_spin_logo_webm} type="video/webm" />
            <img src={assets.hand_spin_logo_gif} alt="logo fallback" />
          </video>
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
