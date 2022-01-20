import styled from "styled-components";
import { css } from "styled-components";

export const submenuCss = css`
  padding: 2px 0;
  border: 1px solid rgba(33, 37, 41, 0.15);
  border-radius: 4px;
  background-color: var(--white);
  li {
    padding: 6px 19px;
    margin: 0;
    display: block;
  }
`;

export const submenuDropup = css`
  .submenu__dropup {
    position: absolute;
    top: -17px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const SubmenuContainer = styled.aside`
  position: absolute;
  z-index: 101;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

export const SubmenuColumnAdd = styled.ul`
  ${submenuCss}
  li {
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
  ${submenuDropup}
`;

export const SubmenuColumnTooltip = styled.ul`
  ${submenuCss}
  width: 300px;
  li {
    margin-left: 0;
  }
  .submenu-tooltip {
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
  ${submenuDropup}
`;

export const SubmenuUser = styled.div`
  ${submenuCss}
  ${submenuDropup}
  width: 178px;
  .user {
    &__profile {
      padding: 16px 0 16px 0;
      padding-left: 20px;
      h2 {
        font-size: 1rem;
        font-weight: 600;
        a {
          color: var(--black);
        }
      }
      h2 + a {
        font-size: 0.8em;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.5);
      }
    }
    &__gruop {
      border-top: 1px solid rgba(33, 37, 41, 0.15);
      a {
        display: block;
        padding-left: 20px;
        color: var(--white);
        padding: 6px 20px;
        font-size: 0.9em;
        color: rgba(0, 0, 0, 0.6);
        &:hover {
          color: var(--white);
          background-color: rgba(var(--darkBlue), 1);
        }
      }
    }
  }
`;
