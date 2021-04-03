import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background-color: ${({ primary }) => (primary ? "white" : "CD853F")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "black" : "#000d1a")};
  font-weight: bold;
  border-radius: 3px;
  font-size: ${({ big }) => (big ? "24px" : "14px")};
  &:hover {
    transform: translateY(-2px);
  }
`;
