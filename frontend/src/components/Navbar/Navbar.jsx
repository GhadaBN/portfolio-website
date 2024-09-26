import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [activeTab, seAtctiveTab] = useState("Home");
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link
          to="/"
          className={activeTab === "Home" ? "nav-link active" : "nav-link"}
          onClick={() => setActiveTab("Home")}
        >
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
      <div className="links-container">
        <ul
          style={{
            display: "flex",
            flexGrow: 1,
            padding: 0,
            margin: 0,
            listStyle: "none",
          }}
        >
          <li className="nav-link-container">
            <Link
              to="/webdev"
              className={
                activeTab === "WebDev" ? "nav-link active" : "nav-link"
              }
              onClick={() => setActiveTab("WebDeb")}
            >
              WEB DEVELOPMENT
            </Link>
          </li>
          <li className="nav-link-container">
            <Link
              to="/designdirection"
              className={
                activeTab === "Design" ? "nav-link active" : "nav-link"
              }
              onClick={() => setActiveTab("Design")}
            >
              DESIGN/ART DIRECTION
            </Link>
          </li>
          <li className="nav-link-container">
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
