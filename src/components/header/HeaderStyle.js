import styled, { css } from "styled-components";

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
  .navbar {
    &__container {
      max-width: calc(1358px);
      margin: 0 auto;
      padding: 0 40px;
      ${displayFlex}
      justify-content: space-between;
      align-items: center;
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

export const NavbarRight = styled.div`
  .navbar {
    &__primary {
      margin: 16px 0;
      display: flex;
      align-items: center;
      li {
        margin-left: 30px;
        position: relative;
        z-index: 100;
      }
    }
    &__add {
      button {
        width: 20px;
        height: 20px;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
    &__inside-add {
      position: absolute;
      z-index: 101;
      top: 30px;
      left: 50%;
      padding: 2px 0;
      transform: translateX(-50%);
      width: 150.5px;
      border: 1px solid rgba(33, 37, 41, 0.15);
      border-radius: 4px;
      background-color: var(--white);
      li {
        padding: 6px 19px;
        margin: 0;
        display: block;
        &:hover {
          background-color: rgb(3, 37, 65);
          a {
            color: var(--white);
          }
        }
        a {
          color: rgba(0, 0, 0, 0.6);
          font-size: 0.8em;
          font-weight: 400;
        }
      }
    }
    &__dropup {
      position: absolute;
      top: -17px;
      left: 50%;
      transform: translateX(-50%);
    }
    &__translate {
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
    }
    &__notifications {
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
      .tooltip {
        position: absolute;
        left: 50%;
        top: 30px;
        padding: 0.8rem 0.8rem;
        transform: translateX(-50%);
        width: 273px;
        background-color: var(--white);
        border: 1px solid rgba(33, 37, 41, 0.15);
        li {
          margin-left: 0;
        }
        &__title {
          margin-bottom: 12px;
          h2 {
            font-size: 1.3em;
            font-weight: 700;
            color: #000;
            span {
              color: #666;
              font-weight: 600;
            }
          }
        }
        &__text {
          p {
            font-size: 1em;
            font-weight: 400;
            color: var(--black);
            a {
              font-size: 1em;
              color: #000;
              opacity: 0.6;
              text-decoration: underline;
            }
          }
        }
      }
    }
    &__user {
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
    }
  }
`;
