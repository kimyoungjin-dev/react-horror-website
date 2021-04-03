import React from "react";
import Hero from "Components/Hero";
import InfoSection from "Components/InfoSection";
import { InfoData } from "data/InfoData";

const Home = ({ isOpen }) => {
  return (
    <>
      <Hero isOpen={isOpen} />
      <InfoSection {...InfoData} isOpen={isOpen} />
    </>
  );
};

export default Home;
