import React from "react";
import Hero from "Components/Hero";
import InfoSection from "Components/InfoSection/InfoSection";
import InfoSectionTwo from "Components/InfoSectionTwo";
import InfoSectionThree from "Components/InfoSection/InfoSectionThree";
import {
  InfoData,
  InfoDataTwo,
  InfoDataThree,
  InfoDataFour,
  InfoDataFive,
} from "data/InfoData";
import InfoSectionFour from "Components/InfoSection/InfoSectionFour";
import InfoSectionFive from "Components/InfoSection/InfoSectionFive";

const Home = ({ isOpen }) => {
  return (
    <>
      <Hero isOpen={isOpen} />
      <InfoSection {...InfoData} isOpen={isOpen} />
      <InfoSectionTwo {...InfoDataTwo} isOpen={isOpen} />
      <InfoSectionThree {...InfoDataThree} isOpen={isOpen} />
      <InfoSectionFour {...InfoDataFour} isOpen={isOpen} />
      <InfoSectionFive {...InfoDataFive} isOpen={isOpen} />
    </>
  );
};

export default Home;
