import React, { useState } from "react";
import ReactPlayer from "react-player";
import { IoIosPlay } from "react-icons/io";
import "./CaseVideo.css";

const Layout01 = ({ caseVideo }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className="video-wrapper"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <ReactPlayer
        url={caseVideo}
        playing={isPlaying}
        controls={showControls}
        width="100%"
        height="100%"
        onPlay={handlePlay}
        onEnded={handleVideoEnd}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload nofullscreen",
              disablePictureInPicture: true,
            },
          },
        }}
        className="minimalist-player"
      />
      {!isPlaying && (
        <div className="play-button-overlay" onClick={handlePlay}>
          <IoIosPlay className="play-icon" />
        </div>
      )}
    </div>
  );
};

export default Layout01;
