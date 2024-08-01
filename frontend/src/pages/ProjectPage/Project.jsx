import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Project.css";
import projectData from "../../assets/projectsData.json";

const Project = () => {
  let { projectId } = useParams();
  const projectIndex = projectData.findIndex(
    (project) => project.id === projectId
  );
  const project = projectData[projectIndex];
  const prevProjectId = projectData[projectIndex - 1]?.id;
  const nextProjectId = projectData[projectIndex + 1]?.id;

  return (
    <div className="project-page">
      {project && (
        <>
          <div className="project-name-container">
            <h2 className="project-name">{project.title}</h2>
          </div>
          <div className="intro-sections-wrapper">
            <div className="left-section">
              <div className="tags-container">
                {project.type.map((type, index) => (
                  <h3 key={index} className="type-tag">
                    {type}
                  </h3>
                ))}
              </div>
            </div>
            <div className="right-section">
              <div className="project-info-container">
                <h3 className="project-info-title">Project Info</h3>
                <p className="project-info-text">{project.description.join(" ")}</p>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="navigation-buttons">
        {prevProjectId && (
          <Link to={`/project/${prevProjectId}`} className="nav-button">
            Previous
          </Link>
        )}
        {nextProjectId && (
          <Link to={`/project/${nextProjectId}`} className="nav-button">
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default Project;
