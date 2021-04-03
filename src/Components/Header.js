import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaGhost } from "react-icons/fa";
import { menuData } from "data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background-color: black;
`;

const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  padding: 0px 1rem;
  height: 100%;
  cursor: pointer;
`;

const Logo = styled(NavLink)`
  font-size: 25px;
`;

const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: white;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(NavLink)``;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <Nav>
      <Logo to="/">
        <FaGhost />
      </Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          );
        })}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary={true}>
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Header;
