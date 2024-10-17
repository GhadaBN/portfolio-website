import React from "react";
import "./Contact.css";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  const obfuscateEmail = () => {
    const email = "contact.ghadabennasr[at]gmail[dot]com"
      .replace("[at]", "@")
      .replace("[dot]", ".");
    window.location.href = `mailto:${email}`;
  };

  return (
    <div>
      <div className="contact-page">
        <div className="text-contact-wrapper">
          <span className="text-contact">
            Let<span className="comma">'</span>s Connect
          </span>
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
            <div
              onClick={obfuscateEmail}
              className="accordion-title-wrapper demo-link clickable" 
              style={{ cursor: "pointer" }}
            >
              <p className="contact-title">EMAIL</p>
              <FiArrowUpRight className="demo-arrow" />{" "}
            </div>
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
