import React from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";

const Section = styled.div`
  padding: 4rem 0;
  width: 100%;
  height: 100%;
  ${({ isOpen }) =>
    isOpen
      ? css`
          filter: blur(5px);
        `
      : null}
`;
const Container = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 3;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? 1 : 2)};
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? 1 : 2)};
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? 2 : 1)};
  }

  img {
    width: 100%;
    height: 70%;
    border-radius: 10px;
    top: ${({ delay }) => (delay ? "0" : "-100%")};
    transition: 3s ease-in-out;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 70%;
    }
  }
`;

const InfoSectionTwo = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
  isOpen,
}) => {
  return (
    <Section isOpen={isOpen}>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/home" primary={true}>
            {buttonLabel}
          </Button>
        </ColumnLeft>

        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSectionTwo;
