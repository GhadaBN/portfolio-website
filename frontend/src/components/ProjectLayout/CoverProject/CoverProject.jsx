import React from "react";
import "./CoverProject.css";

const CoverProject = ({ coverProject }) => {
  return (
    <div className="cover-project-container">
      <img src={coverProject} className="cover-project-img" />
    </div>
  );
};

export default CoverProject;
