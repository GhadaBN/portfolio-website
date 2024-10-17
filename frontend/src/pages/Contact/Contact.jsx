import React from "react";
import "./Contact.css";
import { assets } from "../../assets/assets";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <div className="contact-page">
        <div className="text-contact-wrapper">
          <span className="text-contact">Let's Connect</span>
        </div>
        <div className="contact-links">
          <div className="contact-row">
            <a
              href={"https://www.linkedin.com/in/ghadabennasr/"}
              target="_blank"
              rel="noopener noreferrer"
              className="accordion-title-wrapper demo-link"
            >
              <p className="contact-title">LINKEDIN</p>
              <FiArrowUpRight className="demo-arrow" />{" "}
            </a>
          </div>
          <div className="contact-row">
            <a
              href={""}
              target="_blank"
              rel="noopener noreferrer"
              className="accordion-title-wrapper demo-link"
            >
              <p className="contact-title">EMAIL</p>
              <FiArrowUpRight className="demo-arrow" />{" "}
            </a>
          </div>
          <div className="contact-row">
            <a
              href={"https://github.com/GhadaBN"}
              target="_blank"
              rel="noopener noreferrer"
              className="accordion-title-wrapper demo-link"
            >
              <p className="contact-title">GITHUB</p>
              <FiArrowUpRight className="demo-arrow" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
