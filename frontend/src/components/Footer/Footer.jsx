import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links-container">
        <a
          href="https://github.com/GhadaBN"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
      </div>
      <div className="circle-container">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Footer;
