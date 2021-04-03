import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaGhost } from "react-icons/fa";
import { menuData } from "data/MenuData";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  background-color: blue;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0px 1rem;
  height: 100%;
  cursor: pointer;
`;

const Logo = styled(Link)`
  ${NavLink}
  color: white;
  font-size: 30px;
`;

const NavMenu = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
`;

const MenuBars = styled.i``;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const Header = () => {
  return (
    <Nav>
      <Logo to="/">
        <FaGhost />
      </Logo>
      <MenuBars>MenuBars</MenuBars>
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          );
        })}
      </NavMenu>
    </Nav>
  );
};

export default Header;
