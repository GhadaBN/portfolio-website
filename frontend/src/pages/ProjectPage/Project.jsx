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

  // State to manage multiple expanded sections
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (section) => {
    setExpandedSections((prevSections) =>
      prevSections.includes(section)
        ? prevSections.filter((sec) => sec !== section)
        : [...prevSections, section]
    );
  };

  const titleBackgrounds = [
    "#fbfbf6", // First section title solid color
    "#eae4d3", // Second section title solid color
    "#fa97d8", // Third section title solid color
    "#a0a0a0", // Fourth section title solid color
  ];

  const sectionBackgrounds = [
    "#fbfbf6",
    "#eae4d3", // Second section gradient end color
    "#fa97d8", // Third section gradient end color
    "#a0a0a0", // Fourth section gradient end color
  ];

  // Define a mapping between section names and project data keys
  const sections = [
    { dataKey: "coverProject", defaultTitle: "Overview" },
    { dataKey: "caseVideo", defaultTitle: "Video" },
    { dataKey: "videoPortrait", defaultTitle: "Portrait" },
    { dataKey: "demoVideo", defaultTitle: "Demo Video" },
    { dataKey: "imageSection01", defaultTitle: "Image 1" },
    { dataKey: "imageSection02", defaultTitle: "Image 2" },
  ];

  // Filter out sections where project data does not exist
  const validSections = sections.filter(
    (section) => project[section.dataKey] !== undefined
  );

  const renderContent = (section) => {
    switch (section) {
      case "Overview":
        return <CoverProject coverProject={project.coverProject} />;
      case "Video":
        return (
          <CaseVideo
            caseVideo={project.caseVideo}
            description2={project.description2}
          />
        );
      case "Portrait":
        return <VideoPortrait videoPortrait={project.videoPortrait} />;
      case "Demo Video":
        return <DemoVideo demoVideo={project.demoVideo} />;
      case "Image 1":
        return <ImageSection01 imageSection01={project.imageSection01} />;
      case "Image 2":
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
              expandedSections.includes(section.dataKey) ? "expanded" : ""
            }`}
            onClick={() => toggleSection(section.dataKey)}
          >
            <div
              className="section-title"
              style={{
                backgroundColor: titleBackgrounds[index] || "#fbfbf6",
              }}
            >
              {index + 1}. {section.defaultTitle || ""}{" "}
            </div>
            {expandedSections.includes(section.dataKey) && (
              <div className="section-content">
                {renderContent(section.defaultTitle)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
