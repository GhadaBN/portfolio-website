import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="header">
      <div className="hero-frame-links">
        <div className="text-about">
          <div className="line-about">
            <span className="title-project">HELLO</span>
            <img src={assets.yellow_shape} className="icons-about" />
            <span className="title-project"> I AM GHADA</span>
          </div>
          <div className="line-about">
            <span className="title-project">A DESIGNER AND </span>
            {/* <img src={assets.arrow_icon} className="icons-about" /> */}
          </div>
          <div className="line-about">
            <span className="title-project">
              DEVELOPER FROM TUNISIA, BASED IN BERLIN.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
