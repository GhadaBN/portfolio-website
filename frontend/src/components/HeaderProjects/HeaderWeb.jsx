import React, { useState } from "react";
import "./HeaderProjects.css";
import { FiArrowUpRight, FiPlus, FiMinus } from "react-icons/fi";

const HeaderWeb = ({ title, type, description, demo, technology }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="header-project-container">
      <div className="tags-container">
        {type.map((tag, index) => (
          <h3 key={index} className="type-tag">
            {tag}
          </h3>
        ))}
      </div>
      <div className="project-title-container">
        <h2 className="project-title">{title}</h2>
      </div>
      <div className="details-wrapper">
        <div className="details-left">
          <div className="accordion">
            {technology?.map((tech, index) => {
              const [techTitle, techDescription] = tech.split(": ");
              return (
                <div className="accordion-row" key={index}>
                  <div
                    className="accordion-title-wrapper"
                    onClick={() => toggleAccordion(index)}
                  >
                    <p className="accordion-title">{techTitle}</p>
                    <div
                      className={`icon-wrapper ${
                        openAccordion === index ? "open" : ""
                      }`}
                    >
                      {openAccordion === index ? (
                        <FiMinus className="react-icon" />
                      ) : (
                        <FiPlus className="react-icon" />
                      )}
                    </div>
                  </div>
                  {openAccordion === index && (
                    <p className="accordion-text">{techDescription}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="details-right">
          {demo && (
            <div className="accordion-row">
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="accordion-title-wrapper demo-link"
              >
                <p className="accordion-title">Demo Website</p>
                <FiArrowUpRight className="demo-arrow" />{" "}
              </a>
            </div>
          )}
          <p className="project-info-title">Project Info</p>
          <div className="description-text">
            {description.map((description, index) => (
              <p key={index} className="paragraph-text-header">
                {description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWeb;
