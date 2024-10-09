import React from "react";
import ReactPlayer from "react-player";
import "./ProjectLayout.css";

const Layout01 = ({ caseVideo }) => {
  return (
    <div className="video-wrapper">
      <ReactPlayer
        url={caseVideo} // Video URL from Dropbox
        playing={false} // Video starts paused
        controls={true} // Basic controls (no full-screen, no download)
        width="100%"
        height="100%"
        config={{
          file: {
            attributes: {
              controlsList: "nodownload nofullscreen", // Disable full-screen and download
              disablePictureInPicture: true, // Disable Picture-in-Picture mode
            },
          },
        }}
        className="minimalist-player"
      />
    </div>
  );
};

export default Layout01;
