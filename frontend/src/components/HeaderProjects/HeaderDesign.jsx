import React, { useState } from "react";
import "./HeaderProjects.css";
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
  //Toggle Accordion Function
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
            <div className="accordion-row">
              <div
                className="accordion-title-wrapper"
                onClick={() => toggleAccordion(0)}
              >
                <p className="accordion-title">Client</p>
                <p className="accordion-title">
                  {openAccordion === 0 ? "-" : "+"}
                </p>
              </div>

              {openAccordion === 0 && (
                <p className="accordion-text">{client}</p>
              )}
            </div>

            <div className="accordion-row">
              <div
                className="accordion-title-wrapper"
                onClick={() => toggleAccordion(1)}
              >
                <p className="accordion-title">Agency</p>
                <p className="accordion-title">
                  {openAccordion === 1 ? "-" : "+"}
                </p>
              </div>
              {openAccordion === 1 && (
                <p className="accordion-text">{agency}</p>
              )}
            </div>
            <div className="accordion-row">
              <div
                className="accordion-title-wrapper"
                onClick={() => toggleAccordion(2)}
              >
                <p className="accordion-title">Awards</p>
                <p className="accordion-title">
                  {openAccordion === 2 ? "-" : "+"}
                </p>
              </div>

              {openAccordion === 2 && (
                <div className="accordion-text">
                  {awards?.map((award, index) => (
                    <p key={index}>{award}</p>
                  ))}
                </div>
              )}
            </div>
            <div className="accordion-row">
              <div
                className="accordion-title-wrapper"
                onClick={() => toggleAccordion(3)}
              >
                <p className="accordion-title">Team</p>
                <p className="accordion-title">
                  {openAccordion === 3 ? "-" : "+"}
                </p>
              </div>
              {openAccordion === 3 && (
                <div className="accordion-text">
                  {team.map((team, index) => (
                    <p key={index} className="">
                      {team}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="details-right">
          <p className="project-info-title">Project Info</p>
          <div className="description-text">
            {description.map((description, index) => (
              <p key={index} className="paragraph-text">
                {description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesign;
