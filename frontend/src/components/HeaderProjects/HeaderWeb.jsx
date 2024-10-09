import React from "react";
import "./HeaderProjects.css";

const HeaderWeb = () => {
  return (
    <div>
      <div className="tags-container">
        {type?.map((tag, index) => (
          <h3 key={index} className="type-tag">
            {tag}
          </h3>
        ))}
      </div>
      <div className="project-title-container">
        <h2 className="project-name">{title}</h2>
      </div>
      <div className="description-container">
        <h3 className="project-info-title">Project Info</h3>
        <div className="description-text">
          {description.map((description, index) => (
            <p key={index} className="paragraph-text">
              {description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderWeb;
