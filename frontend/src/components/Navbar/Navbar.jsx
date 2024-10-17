import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");

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
            style={{ backgroundColor: "transparent" }}
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
              onClick={() => setActiveTab("WebDev")}
            >
              WEB DEVELOPMENT
            </Link>
            <div
              className={`circle-navbar ${
                activeTab === "WebDev" ? "active-circle" : ""
              }`}
            ></div>
          </li>

          <li className="nav-link-container">
            <Link
              to="/designdirection"
              className={
                activeTab === "Design" ? "nav-link active" : "nav-link"
              }
              onClick={() => setActiveTab("Design")}
            >
              DESIGN/DIRECTION
            </Link>
            <div
              className={`circle-navbar ${
                activeTab === "Design" ? "active-circle" : ""
              }`}
            ></div>
          </li>

          <li className="nav-link-container">
            <Link
              to="/about"
              className={activeTab === "About" ? "nav-link active" : "nav-link"}
              onClick={() => setActiveTab("About")}
            >
              ABOUT
            </Link>
            <div
              className={`circle-navbar ${
                activeTab === "About" ? "active-circle" : ""
              }`}
            ></div>
          </li>

          <li className="nav-link-container">
            <Link
              to="/contact"
              className={
                activeTab === "Contact" ? "nav-link active" : "nav-link"
              }
              onClick={() => setActiveTab("Contact")}
            >
              CONTACT
            </Link>
            <div
              className={`circle-navbar ${
                activeTab === "Contact" ? "active-circle" : ""
              }`}
            ></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
