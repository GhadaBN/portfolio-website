import React from "react";
import "./ImageSection.css";
const ImageSection01 = ({ imageSection01 }) => {
  return (
    <div className="section-wrapper">
      {imageSection01?.map((image, index) => (
        <div key={index} className="cover-item">
          <img src={image} alt="Cover" className="cover-project-img" />
        </div>
      ))}
    </div>
  );
};

export default ImageSection01;
