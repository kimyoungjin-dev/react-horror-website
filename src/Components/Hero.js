import React, { useState, useRef, useEffect } from "react";
import { Button } from "./Button";
import { SliderData } from "./SliderData";
import {
  HeroContent,
  HeroImage,
  HeroSection,
  HeroSlide,
  HeroSlider,
  HeroWrapper,
  Arrow,
  NextButton,
  PrevArrow,
  SliderButton,
} from "Components/HeroStyles";

const Hero = ({ isOpen }) => {
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
    <HeroSection isOpen={isOpen}>
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
