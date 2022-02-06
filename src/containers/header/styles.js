/** @format */

import styled, { css } from "styled-components";

const displayFlex = css`
  display: flex;
`;

export const Navbar = styled.header`
  background-color: rgb(3, 37, 65);
  position: relative;
  transition: all 150ms ease-in;
  transform: translateY(0);

  &.nav-bar--hidden {
    transform: translateY(-100%);
  }
`;

export const NavbarContainer = styled.div`
  max-width: 1358px;
  margin: 0 auto;
  padding: 0 40px;
  ${displayFlex}
  justify-content: space-between;
  align-items: center;
`;
