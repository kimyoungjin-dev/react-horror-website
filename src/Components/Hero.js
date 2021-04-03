import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroWrapper>
        <h1>hello</h1>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
