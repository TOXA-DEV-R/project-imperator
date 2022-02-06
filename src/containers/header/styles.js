import styled, { css } from "styled-components";

const displayFlex = css`
  display: flex;
`;

export const Navbar = styled.header`
  background-color: rgb(3, 37, 65);
  position: relative;
`;

export const NavbarContainer = styled.div`
  max-width: 1358px;
  margin: 0 auto;
  padding: 0 40px;
  ${displayFlex}
  justify-content: space-between;
  align-items: center;
`;
