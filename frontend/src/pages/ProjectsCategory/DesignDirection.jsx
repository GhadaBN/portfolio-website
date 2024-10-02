import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./ProjectsCategory.css";
const DesignDirection = () => {
  return (
    <div className="header">
      <div className="hero-frame-links">
        <div id="line-1" className="line">
          <ul className="">
            <li>
              <Link to="/project/gorillas-delivery">
                <span className="title-project">GORILLAS DELIVERY</span>
                <img src={assets.gorillas_icon} className="thumbnail" />
              </Link>
            </li>
          </ul>
        </div>
        <div id="line-2" className="line">
          <ul>
            <li>
              <Link to="/project/adidas">
                <span className="title-project">ADIDAS UNIFORIA SS20</span>
              </Link>
            </li>
          </ul>
        </div>
        <div id="line-3" className="line">
          <ul className="">
            <li>
              <Link to="/project/gorillas-eoy">
                <span className="title-project">GORILLAS EOY</span>
                <img src={assets.banana_icon} className="icon" />
              </Link>
            </li>
          </ul>
        </div>
        <div id="line-4" className="line">
          <ul className="">
            <li>
              <Link to="/project/bundesliga">
                <span className="title-project">BUNDESLIGA</span>
                <img src={assets.football_icon} className="icon" />
              </Link>
            </li>
          </ul>
        </div>

        <div id="line-5" className="line">
          <ul className="">
            <li>
              <Link to="/project/bmw">
                <img src={assets.spiral_icon} className="spiral-icon" />
                <span className="title-project">BMW</span>
                <img src={assets.bmw_icon} className="thumbnail" />
              </Link>
            </li>
            <li>
              <Link to="/project/tinder">
                <span className="title-project">TINDER</span>
                <img src={assets.love_message_icon} className="love-message" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DesignDirection;
