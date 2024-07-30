import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header">
      <div className="hero-frame">
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
                <img src={assets.heart_wings_icon} className="icon" />
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
            <li>
              <Link to="/project/dev-roast">
                <span className="title-project">DEV ROAST</span>
                <img src={assets.thunderbolt_icon} className="icon" />
              </Link>
            </li>
          </ul>
        </div>
        <div id="line-4" className="line">
          <ul className="">
            <li>
              <Link to="/project/gorillas-delivery">
                <img src={assets.arrow_icon} className="icon" />
                <span className="title-project">GORILLAS DELIVERY</span>
                <img src={assets.gorillas_icon} className="thumbnail" />
              </Link>
            </li>
          </ul>
        </div>
        <div id="line-5" className="line">
          <ul className="">
            <li>
              <Link to="/project/bundesliga">
                <span className="title-project">BUNDESLIGA</span>
                <img src={assets.football_icon} className="icon" />
              </Link>
            </li>
            <li>
              <Link to="/project/adidas">
                <span className="title-project">ADIDAS SS20</span>
              </Link>
            </li>
          </ul>
        </div>
        <div id="line-6" className="line">
          <ul className="">
            <li>
              <Link to="/project/gorillas-eoy">
                <span className="title-project">GORILLAS EOY</span>
                <img src={assets.banana_icon} className="icon" />
              </Link>
            </li>
          </ul>
        </div>
        <div id="line-7" className="line">
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

export default Header;
