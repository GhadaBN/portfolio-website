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
                src={assets.yellow_shape}
                className="icon-intro-text"
                alt="Icon"
              />
              <span className="text-about"> I AM GHADA</span>
            </div>
            <div className="line-about">
              <span className="text-about">A DESIGNER AND </span>
            </div>
            <div className="line-about">
              <span className="text-about">
                DEVELOPER FROM TUNISIA, BASED IN BERLIN, Aiming
              </span>
            </div>
            <div className="line-about">
              <span className="text-about">for</span>
              <img src={assets.mars_icon} className="mars-icon" alt="Icon" />
              <span className="text-about">.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroText;
