import React, { useState } from "react";
import "./HeaderProjects.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const HeaderDesign = ({
  title,
  type,
  description,
  client,
  agency,
  awards,
  team,
}) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  // Toggle Accordion Function
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="header-project-container">
      {type && (
        <div className="tags-container">
          {type.map((tag, index) => (
            <h3 key={index} className="type-tag">
              {tag}
            </h3>
          ))}
        </div>
      )}
      {title && (
        <div className="project-title-container">
          <h2 className="project-title">{title}</h2>
        </div>
      )}
      <div className="details-wrapper">
        <div className="details-left">
          <div className="accordion">
            {/* Render "Client" section only if client exists */}
            {client && (
              <div className="accordion-row">
                <div
                  className="accordion-title-wrapper"
                  onClick={() => toggleAccordion(0)}
                >
                  <p className="accordion-title">Client</p>
                  <div
                    className={`icon-wrapper ${
                      openAccordion === 0 ? "open" : ""
                    }`}
                  >
                    {openAccordion === 0 ? (
                      <FiMinus className="react-icon rotate" />
                    ) : (
                      <FiPlus className="react-icon rotate" />
                    )}
                  </div>
                </div>
                {openAccordion === 0 && (
                  <p className="accordion-text">{client}</p>
                )}
              </div>
            )}

            {/* Render "Agency" section only if agency exists */}
            {agency && (
              <div className="accordion-row">
                <div
                  className="accordion-title-wrapper"
                  onClick={() => toggleAccordion(1)}
                >
                  <p className="accordion-title">Agency</p>
                  <div
                    className={`icon-wrapper ${
                      openAccordion === 1 ? "open" : ""
                    }`}
                  >
                    {openAccordion === 1 ? (
                      <FiMinus className="react-icon rotate" />
                    ) : (
                      <FiPlus className="react-icon rotate" />
                    )}
                  </div>
                </div>
                {openAccordion === 1 && (
                  <p className="accordion-text">{agency}</p>
                )}
              </div>
            )}

            {/* Render "Awards" section only if awards exist */}
            {awards && awards.length > 0 && (
              <div className="accordion-row">
                <div
                  className="accordion-title-wrapper"
                  onClick={() => toggleAccordion(2)}
                >
                  <p className="accordion-title">Awards</p>
                  <div
                    className={`icon-wrapper ${
                      openAccordion === 2 ? "open" : ""
                    }`}
                  >
                    {openAccordion === 2 ? (
                      <FiMinus className="react-icon rotate" />
                    ) : (
                      <FiPlus className="react-icon rotate" />
                    )}
                  </div>
                </div>
                {openAccordion === 2 && (
                  <div className="accordion-text">
                    {awards.map((award, index) => (
                      <p key={index}>{award}</p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Render "Team" section only if team exists */}
            {team && team.length > 0 && (
              <div className="accordion-row">
                <div
                  className="accordion-title-wrapper"
                  onClick={() => toggleAccordion(3)}
                >
                  <p className="accordion-title">Team</p>
                  <div
                    className={`icon-wrapper ${
                      openAccordion === 3 ? "open" : ""
                    }`}
                  >
                    {openAccordion === 3 ? (
                      <FiMinus className="react-icon rotate" />
                    ) : (
                      <FiPlus className="react-icon rotate" />
                    )}
                  </div>
                </div>
                {openAccordion === 3 && (
                  <div className="accordion-text">
                    {team.map((member, index) => (
                      <p key={index} className="">
                        {member}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Render description only if it exists */}
        {description && (
          <div className="details-right">
            <p className="project-info-title">Project Info</p>
            <div className="description-text">
              {description.map((desc, index) => (
                <p key={index} className="paragraph-text">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderDesign;
