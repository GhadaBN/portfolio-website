import React from "react";
import "./ImageSection.css";
const ImageSection01 = ({ imageSection01 }) => {
  return (
    <div className="section-wrapper">
      {imageSection01?.map((image, index) => (
        <div key={index} className="">
          <img src={image} alt="Cover" className="image-section" />
        </div>
      ))}
    </div>
  );
};

export default ImageSection01;
