import React from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";
import { SliderData } from "./SliderData";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

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
const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
const HeroContent = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100%-100px);
  color: white;
  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    font-size: 20px;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;
const Arrow = styled(IoMdArrowRoundForward)``;
const ArrowButton = css`
  width: 50px;
  height: 50px;
  background-color: red;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
  user-select: none;
  transition: 0.3s;
  &:hover {
    background-color: black;
    transform: scale(1.05);
  }
`;
const SliderButton = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;
const PrevArrow = styled(IoArrowBack)`
  ${ArrowButton}
`;
const NextButton = styled(IoArrowForward)`
  ${ArrowButton}
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroWrapper>
        {SliderData.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              <HeroSlider>
                <HeroImage src={slide.image} alt={slide.alt} />
                <HeroContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.place}</p>
                  <Button to={slide.path} primary={true}>
                    {slide.label}
                    <Arrow />
                  </Button>
                </HeroContent>
              </HeroSlider>
            </HeroSlide>
          );
        })}
        <SliderButton>
          <PrevArrow></PrevArrow>
          <NextButton></NextButton>
        </SliderButton>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
