import styled, { css } from "styled-components";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

export const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
`;
export const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
export const HeroSlider = styled.div`
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
export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
export const HeroContent = styled.div`
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
export const Arrow = styled(IoMdArrowRoundForward)`
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
export const SliderButton = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;
export const PrevArrow = styled(IoArrowBack)`
  ${ArrowButton}
`;
export const NextButton = styled(IoArrowForward)`
  ${ArrowButton}
`;
