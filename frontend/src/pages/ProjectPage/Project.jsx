import React from "react";
import { useParams } from "react-router-dom";
import "./Project.css";
import projectData from "../../assets/projectsData.json";
import HeaderDesign from "../../components/HeaderProjects/HeaderDesign";
import HeaderWeb from "../../components/HeaderProjects/HeaderWeb";
import CaseVideo from "../../components/ProjectLayout/CaseVideo/CaseVideo";
import VideoPortrait from "../../components/ProjectLayout/VideoPortrait/VideoPortrait";
import CoverProject from "../../components/ProjectLayout/CoverProject/CoverProject";
import DemoVideo from "../../components/ProjectLayout/DemoVideo/DemoVideo";
import Board01 from "../../components/ProjectLayout/Board01/Board01";
import Board02 from "../../components/ProjectLayout/Board02/Board02";

const Project = () => {
  const { projectId } = useParams();
  const projectIndex = projectData.findIndex(
    (project) => project.id === projectId
  );
  const project = projectData[projectIndex];

  return (
    <div className="project-page-wrapper">
      {project.type.includes("Graphic Design") ||
      project.type.includes("Art Direction") ? (
        <HeaderDesign
          title={project.title}
          type={project.type}
          description={project.description}
          client={project.client}
          agency={project.agency}
          team={project.team}
          awards={project.awards}
        />
      ) : (
        <HeaderWeb
          title={project.title}
          type={project.type}
          description={project.description}
          demo={project.demo}
          technology={project.technology}
        />
      )}
      {project.coverProject && (
        <CoverProject coverProject={project.coverProject} />
      )}

      {project.caseVideo && <CaseVideo caseVideo={project.caseVideo} />}
      {project.videoPortrait && (
        <VideoPortrait videoPortrait={project.videoPortrait} />
      )}
      {project.board01 && <Board01 board01={project.board01} />}
      {project.demoVideo && <DemoVideo demoVideo={project.demoVideo} />}
      {project.demoVideo && <Board02 board02={project.board02} />}
    </div>
  );
};

export default Project;
