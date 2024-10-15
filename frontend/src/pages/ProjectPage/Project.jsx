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
import DemoVideo from "../../components/ProjectLayout/DemoVideo/DemoVideo";
import ImageSection01 from "../../components/ProjectLayout/ImageSection/ImageSection01";
import ImageSection02 from "../../components/ProjectLayout/ImageSection/ImageSection02";

const Project = () => {
  const { projectId } = useParams();
  const projectIndex = projectData.findIndex(
    (project) => project.id === projectId
  );
  const project = projectData[projectIndex];

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("cover");

  const renderContent = () => {
    if (activeTab === "cover" && project.coverProject) {
      return <CoverProject coverProject={project.coverProject} />;
    }

    if (activeTab === "video" && project.caseVideo) {
      return (
        <CaseVideo
          caseVideo={project.caseVideo}
          description2={project.description2}
        />
      );
    }

    if (activeTab === "portrait" && project.videoPortrait) {
      return <VideoPortrait videoPortrait={project.videoPortrait} />;
    }

    if (activeTab === "demo-vid" && project.demoVideo) {
      return <DemoVideo demoVideo={project.demoVideo} />;
    }

    if (activeTab === "image-01" && project.imageSection01) {
      return <ImageSection01 imageSection01={project.imageSection01} />;
    }

    if (activeTab === "image-02" && project.imageSection02) {
      return <ImageSection02 imageSection02={project.imageSection02} />;
    }

    return null;
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
            {project.coverProject && (
              <div
                className={`tab ${activeTab === "cover" ? "active" : ""}`}
                onClick={() => setActiveTab("cover")}
                style={{ zIndex: activeTab === "cover" ? 20 : 6 }} // Adjust z-index
              >
                <img
                  src={assets.tab_shape}
                  alt="Binder Tab"
                  className="tab-svg"
                />
                <span className="tab-title">Overview</span>
              </div>
            )}
            <div className="line-h-menu"></div>

            {project.caseVideo && (
              <div
                className={`tab ${activeTab === "video" ? "active" : ""}`}
                onClick={() => setActiveTab("video")}
                style={{ zIndex: activeTab === "video" ? 20 : 5 }} // Adjust z-index
              >
                <img
                  src={assets.tab_shape}
                  alt="Binder Tab"
                  className="tab-svg"
                />
                <span className="tab-title">Case Film</span>
              </div>
            )}

            {project.videoPortrait && (
              <div
                className={`tab ${activeTab === "portrait" ? "active" : ""}`}
                onClick={() => setActiveTab("portrait")}
                style={{ zIndex: activeTab === "portrait" ? 20 : 4 }} // Adjust z-index
              >
                <img
                  src={assets.tab_shape}
                  alt="Binder Tab"
                  className="tab-svg"
                />
                <span className="tab-title">Teasers</span>
              </div>
            )}

            {project.demoVideo && (
              <div
                className={`tab ${activeTab === "demo-vid" ? "active" : ""}`}
                onClick={() => setActiveTab("demo-vid")}
                style={{ zIndex: activeTab === "demo-vid" ? 20 : 3 }} // Adjust z-index
              >
                <img
                  src={assets.tab_shape}
                  alt="Binder Tab"
                  className="tab-svg"
                />
                <span className="tab-title">04</span>
              </div>
            )}

            {project.imageSection01 && (
              <div
                className={`tab ${activeTab === "image-01" ? "active" : ""}`}
                onClick={() => setActiveTab("image-01")}
                style={{ zIndex: activeTab === "image-01" ? 20 : 2 }} // Adjust z-index
              >
                <img
                  src={assets.tab_shape}
                  alt="Binder Tab"
                  className="tab-svg"
                />
                <span className="tab-title">04</span>
              </div>
            )}

            {project.imageSection02 && (
              <div
                className={`tab ${activeTab === "image-02" ? "active" : ""}`}
                onClick={() => setActiveTab("image-02")}
                style={{ zIndex: activeTab === "image-02" ? 20 : 1 }} // Adjust z-index
              >
                <img
                  src={assets.tab_shape}
                  alt="Binder Tab"
                  className="tab-svg"
                />
                <span className="tab-title">04</span>
              </div>
            )}
          </div>

          <div className="tab-content">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
