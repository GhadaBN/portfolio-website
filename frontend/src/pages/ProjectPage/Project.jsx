import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Project.css";
import projectData from "../../assets/projectsData.json";
import HeaderDesign from "../../components/HeaderProjects/HeaderDesign";
import HeaderWeb from "../../components/HeaderProjects/HeaderWeb";
import CaseVideo from "../../components/ProjectLayout/CaseVideo/CaseVideo";
import VideoPortrait from "../../components/ProjectLayout/VideoPortrait/VideoPortrait";
import CoverProject from "../../components/ProjectLayout/CoverProject/CoverProject";
import { assets } from "../../assets/assets";

const Project = () => {
  const { projectId } = useParams();
  const projectIndex = projectData.findIndex(
    (project) => project.id === projectId
  );
  const project = projectData[projectIndex];

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("cover");

  const renderContent = () => {
    switch (activeTab) {
      case "cover":
        return <CoverProject coverProject={project.coverProject} />;
      case "video":
        return (
          <CaseVideo
            caseVideo={project.caseVideo}
            description2={project.description2}
          />
        );
      case "portrait":
        return <VideoPortrait videoPortrait={project.videoPortrait} />;
      default:
        return null;
    }
  };

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

      <div className="layout-container">
        <div className="empty-space"></div>
        <div className="binder-container">
          <div className="tabs-container">
            <div
              className={`tab ${activeTab === "cover" ? "active" : ""}`}
              onClick={() => setActiveTab("cover")}
              style={{ zIndex: activeTab === "cover" ? 11 : 1 }}
            >
              <img
                src={assets.tab_shape}
                alt="Binder Tab"
                className="tab-svg"
              />
              <span className="tab-title">Cover</span>
            </div>
            <div
              className={`tab ${activeTab === "video" ? "active" : ""}`}
              onClick={() => setActiveTab("video")}
              style={{ zIndex: activeTab === "video" ? 11 : 3 }}
            >
              <img
                src={assets.tab_shape}
                alt="Binder Tab"
                className="tab-svg"
              />
              <span className="tab-title">Case Video</span>
            </div>
            <div
              className={`tab ${activeTab === "portrait" ? "active" : ""}`}
              onClick={() => setActiveTab("portrait")}
              style={{ zIndex: activeTab === "portrait" ? 11 : 2 }}
            >
              <img
                src={assets.tab_shape}
                alt="Binder Tab"
                className="tab-svg"
              />
              <span className="tab-title">Video Portrait</span>
            </div>

            <div className="line-h-menu"></div>
          </div>

          <div className="tab-content">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
