import React from "react";
import "./IntroText.css";
import { assets } from "../../../assets/assets";

const IntroText = () => {
  return (
    <div>
      <div className="header">
        <div className="hero-frame-links">
          <div className="intro-text">
            <div className="line-about">
              <span className="text-about">HELLO</span>
              <img
                src={assets.hand_peace}
                className="icon-intro-text"
                alt="Icon"
              />
              <span className="text-about"> I AM GHADA</span>
            </div>
            <div className="line-about">
              <span className="text-about">A DESIGNER AND</span>
            </div>
            <div className="line-about">
              <span className="text-about">DEVELOPER FR</span>
              <img
                src={assets.yellow_shape}
                className="yellow-icon"
                alt="Icon"
              />
              <span className="text-about">M</span>
            </div>
            <div className="line-about">
              <span className="text-about">TUNISIA BASED IN</span>
            </div>
          </div>
          <div className="line-about">
            <span className="text-about">BERLIN</span>
            <img src={assets.mars_icon} className="mars-icon" alt="Icon" />
            <span className="text-about">.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroText;
