import React, { useState, useRef, useEffect } from "react";
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
    background: content-box radial-gradient(red, black);
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
  color: white;
  h1 {
    font-size: 30px;
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    color: black;
    margin-bottom: 1.2rem;
    font-size: 20px;
    text-shadow: 1px 1px 2px red, 0 0 1em white, 0 0 0.2em white;
  }
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 5px;
`;
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
    background-color: white;
    transform: scale(1.05);
    color: black;
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
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 4000);
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {SliderData.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
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
              )}
            </HeroSlide>
          );
        })}
        <SliderButton>
          <PrevArrow onClick={() => prevSlide()} />
          <NextButton onClick={() => nextSlide()} />
        </SliderButton>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
