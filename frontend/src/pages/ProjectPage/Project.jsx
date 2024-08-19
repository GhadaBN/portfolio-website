import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
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
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      const adjustFontSize = () => {
        const containerWidth = titleRef.current.parentElement.offsetWidth;
        const title = titleRef.current;
        let fontSize = 170;
        const minFontSize = 16 * 4.5;

        title.style.fontSize = `${fontSize}px`;

        while (title.scrollWidth > containerWidth && fontSize > minFontSize) {
          fontSize -= 1;
          title.style.fontSize = `${fontSize}px`;
        }

        if (fontSize <= minFontSize) {
          title.style.whiteSpace = "normal";
        } else {
          title.style.whiteSpace = "nowrap";
        }
      };

      adjustFontSize();

      const resizeObserver = new ResizeObserver(adjustFontSize);
      resizeObserver.observe(titleRef.current.parentElement);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [project]);

  return (
    <div className="project-page">
      {project && (
        <>
          <div className="project-name-container">
            <h2 className="project-name" ref={titleRef}>
              {project.title}
            </h2>
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
                  <p className="role">{project.role}</p>
                </div>
                <div className="details">
                  <div className="team-text">
                    {project.team?.map((member, index) => (
                      <p key={index}>{member}</p>
                    ))}
                  </div>
                </div>
                <div className="technology-stack">
                  <div className="stack-text">
                    {project.technology?.map((tech, index) => (
                      <p key={index}>{tech}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section">
              <div className="project-info-container">
                <h3 className="project-info-title">Project Info</h3>
                <div className="demo-link">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="demo-tag"
                    >
                      Demo Website
                    </a>
                  )}
                </div>

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
          <div className="cover-img-container">
            <img src={project.photoCover} alt="" className="img-project" />
          </div>
          {project.videoCover?.map((video, index) => (
            <div key={index} className="cover-video-container">
              <video autoPlay muted loop className="project-video">
                <source src={video} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
          <div className="media-section">
            {project.videos?.map((video, index) => (
              <div key={index} className="video-wrapper">
                <video autoPlay muted loop className="project-video">
                  <source src={video} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
            {project.videos70W?.map((video, index) => (
              <div key={index} className="video-wrapper-70w">
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
                      "play",
                      "progress",
                      "current-time",
                      "mute",
                      "volume",
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
            {project.vimeoVideosPortrait?.map((video, index) => (
              <div key={index} className="video-wrapper-portrait">
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
                    loop: {
                      active: true,
                    },
                    controls: [
                      "play",
                      "progress",
                      "current-time",
                      "mute",
                      "volume",
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
            <div className="photo-section-wrapper">
              {project.photoSection1?.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt=""
                  className="img-project-half"
                />
              ))}
            </div>
            {project.photoSection2?.map((photo, index) => (
              <div key={index} className="photo-section-wrapper">
                <img src={photo} alt="" className="img-project" />
              </div>
            ))}

            {project.photo80?.map((photo, index) => (
              <div key={index} className="photo-wrapper-80">
                <img src={photo} alt="" className="img-project" />
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
