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
              <span className="text-about"> DEVELOPER AND</span>
            </div>
            <div className="line-about">
              <span className="text-about">DESIGNER</span>
              <img
                src={assets.flower_pink}
                className="flower-icon"
                alt="Icon"
              />
              <span className="text-about">BRIDGING </span>
            </div>
            <div className="line-about">
              <span className="text-about">CREATIVITY AND</span>
            </div>
            <div className="line-about">
              <span className="text-about">CODE. I AM FR</span>
              <img src={assets.blue_shape} className="yellow-icon" alt="Icon" />
              <span className="text-about">M</span>
            </div>
            <div className="line-about">
              <span className="text-about">Tunisia, BASED IN</span>
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
