import { menuData } from "data/MenuData";
import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? "0.9" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.3s ease-in-out;
  background-color: transparent;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: white;
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
const DropdonwLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: gray;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Dropdown = ({ toggle, isOpen }) => {
  return (
    <Container isOpen={isOpen} onClick={() => toggle()}>
      <Icon onClick={() => toggle()}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => {
            return (
              <DropdonwLink to={item.link} key={index}>
                {item.title}
              </DropdonwLink>
            );
          })}
        </DropdownMenu>
        <BtnWrap>
          <Button primary={true} big={true} to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </Container>
  );
};

export default Dropdown;
