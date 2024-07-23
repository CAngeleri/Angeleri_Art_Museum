import React from "react";

const HeroImage = () => {
  return (
    <div className="hero-container">
      <img
        src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/236068/478277/main-image"
        alt="Hero"
        className="hero-image"
      />
      <div className="hero-text">
        <p>a new way to experience</p>
        <h1>art for all</h1>
      </div>
    </div>
  );
};

export default HeroImage;
