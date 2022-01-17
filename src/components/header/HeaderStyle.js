import styled, { css } from "styled-components";

const white = css`
  color: white;
`;

const displayFlex = css`
  display: flex;
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
  max-width: 1278px;
  padding: 0 40px;
  background-color: rgb(3, 37, 65);
  .navbar {
    &__container {
      ${displayFlex}
    }
  }
`;

export const NavbarLeft = styled.div`
  ${displayFlex}
  .navbar {
    &__logo {
      margin-right: 25px;
      img {
        width: 154px;
        height: 20px;
      }
    }
  }
`;
export const NavbarMenu = styled.nav`
  .navbar {
    &__list {
      list-style-type: none;
      ${displayFlex}
    }

    &__link {
      font-weight: 600;
      margin-right: 35px;
      a {
        ${white}
      }
    }
  }
`;
export const NavbarRight = styled.div``;
