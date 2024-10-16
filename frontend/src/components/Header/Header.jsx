import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header">
      <div className="hero-frame">
        <div className="line-header">
          <ul>
            <li className="hover-title">
              <Link to="/webdev">
                <h1 className="title-category">WEB DEVELOPMENT</h1>
              </Link>
              <div className="hover-content">
                <p>Web Development Projects</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="line-header">
          <ul>
            <li className="hover-title">
              <Link to="/designdirection">
                <h1 className="title-category">DESIGN / ART DIRECTION</h1>
              </Link>
              <div className="hover-content">
                <p>Design and Art Direction Projects</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="line-header">
          <ul>
            <li className="hover-title">
              <Link to="/about">
                <h1 className="title-category">ABOUT</h1>
              </Link>
              <div className="hover-content">
                <p>Hello, I am Ghada</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
