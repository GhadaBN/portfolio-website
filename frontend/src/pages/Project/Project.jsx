import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Project.css";
import projectData from "../../assets/projectsData.json";

const Project = () => {
  let { projectId } = useParams();
  const project = projectData.find((project) => project.id === projectId);
  return (
    <div className="project-page">
      {project && (
        <>
          <div className="header-project">
            <h2 className="project-name">{project.title}</h2>
            <div className="tags-container">
              {project.type.map((type, index) => (
                <p key={index} className="type-tag">
                  {type}
                </p>
              ))}
            </div>
          </div>
          <div className="intro-text-container">
            <h3 className="">Project Details</h3>
            <p className="intro-text">{project.description.join(" ")}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
