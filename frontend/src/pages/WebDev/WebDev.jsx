import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const WebDev = () => {
  return (
    <div className="header">
      <div className="hero-frame">
        <div id="line-1" className="line">
          <ul className="">
            <li>
              <Link to="/project/tomato-social-club">
                <span className="title-project">MOBILE WALLET APP</span>
                {/* <img src={assets.hot_sticker} className="hot_sticker" /> */}
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
                <img src={assets.heart_wings_icon} className="icon-start" />
                <span className="title-project">POUR DECISIONS</span>
                <img src={assets.pour_decisions_icon} className="thumbnail" />
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
      </div>
    </div>
  );
};

export default WebDev;
