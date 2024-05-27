import React from "react";
import FeaturedWork from "../components/FeaturedWork";
import Gallery from "../components/Gallery";
import HeroImage from "../components/HeroImage";

const LandingPage = () => {
  return (
    <>
      <HeroImage />
      <Gallery />
      <FeaturedWork />
    </>
  );
};

export default LandingPage;
