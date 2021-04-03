import React from "react";
import Hero from "Components/Hero";
import InfoSection from "Components/InfoSection";
import { InfoData, InfoDataTwo } from "data/InfoData";

const Home = ({ isOpen }) => {
  return (
    <>
      <Hero isOpen={isOpen} />
      <InfoSection {...InfoData} isOpen={isOpen} />
    </>
  );
};

export default Home;
