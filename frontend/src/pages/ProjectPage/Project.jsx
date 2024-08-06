import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Project.css";
import projectData from "../../assets/projectsData.json";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

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
                {project.type?.map((type, index) => (
                  <h3 key={index} className="type-tag">
                    {type}
                  </h3>
                ))}
              </div>
              <div className="details-wrapper">
                <div className="details">
                  <p className="client">{project.client}</p>
                  <p className="agency">{project.agency}</p>
                  <p className="award">{project.awards}</p>
                </div>
                <div className="details">
                  <div className="team-text">
                    {project.team?.map((member, index) => (
                      <p key={index}>{member}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section">
              <div className="project-info-container">
                <h3 className="project-info-title">Project Info</h3>
                <div className="project-info-text">
                  {project.description.map((description, index) => (
                    <p key={index} className="paragraph-text">
                      {description}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="media-section">
            {project.videos?.map((video, index) => (
              <div key={index} className="video-wrapper">
                <video autoPlay muted loop className="project-video">
                  <source src={video} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
            {project.vimeoVideos?.map((video, index) => (
              <div key={index} className="video-wrapper">
                <Plyr
                  source={{
                    type: "video",
                    sources: [
                      {
                        src: video,
                        provider: "vimeo",
                      },
                    ],
                  }}
                  options={{
                    controls: [
                      "play-large",
                      "play",
                      "progress",
                      "current-time",
                      "mute",
                      "volume",
                      "settings",
                    ],
                    vimeo: {
                      dnt: true,
                      title: false,
                      byline: false,
                      portrait: false,
                    },
                  }}
                />
              </div>
            ))}
          </div>
        </>
      )}
      <div className="navigation-buttons">
        {prevProjectId && (
          <Link to={`/project/${prevProjectId}`}>
            <h3 className="nav-button">Previous</h3>
          </Link>
        )}
        {nextProjectId && (
          <Link to={`/project/${nextProjectId}`}>
            <h3 className="nav-button">Next</h3>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Project;
