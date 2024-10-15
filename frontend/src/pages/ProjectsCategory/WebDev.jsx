import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./ProjectsCategory.css";
const WebDev = () => {
  return (
    <div className="header-category">
      <div className="hero-frame-links">
        <div id="line-1" className="line">
          <ul className="">
            <li>
              <Link to="/project/wallet-app">
                <span className="title-project">MOBILE WALLET</span>
                <img src={assets.a_icon} className="icon-letter" />
                <span className="title-project">PP</span>
              </Link>
            </li>
          </ul>
        </div>
        <div id="line-1" className="line">
          <ul className="">
            <li>
              <Link to="/project/tomato-social-club">
                <span className="title-project">TOMATO SOCIAL</span>
                <img src={assets.hot_sticker} className="hot_sticker" />
                <span className="title-project">CLUB</span>
              </Link>
            </li>
          </ul>
        </div>
        <div id="line-2" className="line">
          <ul className="">
            <li>
              <Link to="/project/pour-decisions">
                <span className="title-project">POUR DECISIONS</span>
                <img src={assets.pour_decisions_icon} className="thumbnail" />
              </Link>
            </li>
          </ul>
        </div>
        <div id="line-3" className="line">
          <ul className="">
            <li>
              <Link to="/project/dev-roast">
                <span className="title-project">DEV ROAST</span>
                <img src={assets.thunderbolt_icon} className="icon" />
              </Link>
            </li>
          </ul>
        </div>
        <div id="line-3" className="line">
          <ul className="">
            <li>
              <Link to="/project/fluffy-dog">
                <span className="title-project">FLUFFY DOG</span>
                <img src={assets.fluffy_dog_icon} className="thumbnail" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
