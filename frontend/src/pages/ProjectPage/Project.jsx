import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Project.css";
import projectData from "../../assets/projectsData.json";
import HeaderDesign from "../../components/HeaderProjects/HeaderDesign";
import HeaderWeb from "../../components/HeaderProjects/HeaderWeb";
import CaseVideo from "../../components/ProjectLayout/CaseVideo/CaseVideo";
import VideoPortrait from "../../components/ProjectLayout/VideoPortrait/VideoPortrait";
import CoverProject from "../../components/ProjectLayout/CoverProject/CoverProject";
import DemoVideo from "../../components/ProjectLayout/DemoVideo/DemoVideo";
import ImageSection01 from "../../components/ProjectLayout/ImageSection/ImageSection01";
import ImageSection02 from "../../components/ProjectLayout/ImageSection/ImageSection02";

const Project = () => {
  const { projectId } = useParams();
  const projectIndex = projectData.findIndex(
    (project) => project.id === projectId
  );
  const project = projectData[projectIndex];

  // State to manage the currently expanded section
  const [expandedSection, setExpandedSection] = useState(null);

  // Refs to scroll into view when a section expands
  const sectionRefs = useRef([]);

  useEffect(() => {
    if (expandedSection !== null) {
      const index = validSections.findIndex(
        (section) => section.dataKey === expandedSection
      );
      if (sectionRefs.current[index]) {
        sectionRefs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    }
  }, [expandedSection]);

  const toggleSection = (section) => {
    setExpandedSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  const titleBackgrounds = ["#fbfbf6", "#eae4d3", "#fb84c7", "#a0a0a0"];

  const sections = [
    { dataKey: "coverProject", defaultTitle: "Overview" },
    { dataKey: "caseVideo", defaultTitle: "Campaign Ad" },
    { dataKey: "videoPortrait", defaultTitle: "Digital" },
    { dataKey: "demoVideo", defaultTitle: "Demo Video" },
    { dataKey: "imageSection01", defaultTitle: null },
    { dataKey: "imageSection02", defaultTitle: null },
  ];

  const validSections = sections.filter(
    (section) => project[section.dataKey] !== undefined
  );

  const renderContent = (sectionKey) => {
    switch (sectionKey) {
      case "coverProject":
        return <CoverProject coverProject={project.coverProject} />;
      case "caseVideo":
        return (
          <CaseVideo
            caseVideo={project.caseVideo}
            description2={project.description2}
          />
        );
      case "videoPortrait":
        return <VideoPortrait videoPortrait={project.videoPortrait} />;
      case "demoVideo":
        return <DemoVideo demoVideo={project.demoVideo} />;
      case "imageSection01":
        return <ImageSection01 imageSection01={project.imageSection01} />;
      case "imageSection02":
        return <ImageSection02 imageSection02={project.imageSection02} />;
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

      <div className="sections-container">
        {validSections.map((section, index) => (
          <div
            key={section.dataKey}
            className={`accordion-section clickable ${
              expandedSection === section.dataKey ? "expanded" : ""
            }`}
            ref={(el) => (sectionRefs.current[index] = el)}
          >
            <div
              className="section-title"
              onClick={() => toggleSection(section.dataKey)}
              style={{
                backgroundColor: titleBackgrounds[index] || "#fbfbf6",
              }}
            >
              {index + 1}. {section.defaultTitle || ""}{" "}
            </div>
            {expandedSection === section.dataKey && (
              <div className="section-content">
                {renderContent(section.dataKey)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
