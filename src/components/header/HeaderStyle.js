import styled, { css } from "styled-components";
import { submenuCss, submenuDropup } from "./SubmenuStyle";

const white = css`
  color: var(--white);
`;

const displayFlex = css`
  display: flex;
`;

const transition = css`
  transition: all 180ms ease-in-out;
`;

// const repeat_font = css`
//   background-color: red;
// `;

// const getFontsize = ({ size }) => {
//   switch (size) {
//     case "sm":
//       return "13px";
//     case "md":
//       return "20px";
//     case "lg":
//       return "30px";
//     case "xl":
//       return "40px";
//     default:
//       return "50px";
//   }
// };

// export const Container = styled.div`
//   font-size: ${getFontsize};
//   ${repeat_bagroundbg};
//   display: ${({ displayl }) => (displayl ? "flex" : "block")};
// `;
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

export const NavbarLeft = styled.div`
  ${displayFlex}
  align-items: center;
  .navbar {
    &-brand {
      margin-right: 25px;
      img {
        width: 154px;
        height: 20px;
      }
    }
  }
`;

export const NavbarNav = styled.nav`
  ${displayFlex}
  align-items: center;
`;

export const NavbarNavList = styled.ul`
  ${displayFlex}
  align-items: center;
`;

export const NavbarNavItem = styled.li`
  position: relative;
  margin-right: 35px;
  padding: 20px 0;
  button {
    font-weight: 600;
    ${white}
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  &:hover {
    .navbar-inside__list {
      display: block;
    }
  }
`;

export const NavbarInsideList = styled.ul`
  position: absolute;
  z-index: 111;
  top: 47px;
  left: -20px;
  width: 173px;
  ${submenuCss}
  display: none;
`;

export const NavbarInsideLink = styled.li`
  a {
    color: #000;
    font-weight: 400;
    &:hover {
      color: #16181b;
    }
  }
  &:hover {
    background-color: #f8f9fa;
  }
`;

export const NavbarRight = styled.div``;

export const NavbarPrimary = styled.ul`
  margin: 16px 0;
  display: flex;
  align-items: center;
  li {
    margin-left: 30px;
    position: relative;
    z-index: 100;
  }
`;

export const NavbarAdd = styled.li`
  button {
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const NavbarTranslate = styled.li`
  span {
    width: 28px;
    height: 28px;
    ${displayFlex}
    justify-content: center;
    align-items: center;
    border: 1px solid var(--white);
    border-radius: 2px;
    font-size: 0.9em;
    text-transform: uppercase;
    font-weight: 600;
    ${white}
    cursor: pointer;
    ${transition}
    &:hover {
      background-color: var(--white);
      color: rgb(3, 37, 65);
    }
  }
`;

export const NavbarNotifications = styled.li`
  button {
    display: block;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  &-counter {
    position: absolute;
    top: -4px;
    right: -8px;
    z-index: 111;
    width: 15px;
    height: 15px;
    font-size: 0.6em;
    line-height: 4.6em;
    font-weight: 600;
    color: #fff;
    border-radius: 50%;
    border: none;
    ${displayFlex}
    justify-content: center;
    align-items: center;
    background-color: #c61439;
  }
`;

export const NavbarUser = styled.li`
  button {
    ${displayFlex}
    background-color: transparent;
    border: none;
    cursor: pointer;
    span {
      width: 32px;
      height: 32px;
      ${white}
      background-color: rgb(1,180,228);
      ${displayFlex}
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 0.9em;
      text-transform: uppercase;
    }
  }
`;

export const NavbarUserContent = styled.ul`
  position: absolute;
  top: 42px;
  left: 50%;
  transform: translateX(-50%);
  ${submenuDropup}
  .submenu__dropup {
    top: -17px;
  }
  ${submenuCss}
  li {
    padding: 6px 2px;
    font-size: 0.9em;
    display: flex;
    justify-content: center;
  }
  width: 150px;
`;

export const NavbarSearch = styled.li`
  button {
    background-color: transparent;
    border: unset;
    cursor: pointer;
  }
`;
