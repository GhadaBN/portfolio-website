import React from "react";
import "./ImageSection.css";
const ImageSection02 = ({ imageSection02 }) => {
  return (
    <div className="section-wrapper">
      {imageSection02?.map((image, index) => (
        <div key={index} className="cover-item">
          <img src={image} alt="Cover" className="cover-project-img" />
        </div>
      ))}
    </div>
  );
};

export default ImageSection02;
