import styled, { css } from "styled-components";
import {
  backgroundWhite,
  colorBlack,
  colorWhite,
} from "../../../styles/styles";

export const Movie = styled.section`
  margin-top: 40px;
  position: relative;
  .movie__container {
    display: flex;
    transform: translateX(-36px);
  }
  .movie__basic {
    &::after {
      content: "";
      width: 60px;
      height: 100%;
      position: absolute;
      z-index: 55;
      top: 0;
      right: 0%;
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        #fff 100%
      );
      pointer-events: none;
      -webkit-transition: all 150ms ease-in;
      transition: all 150ms ease-in;
    }
  }

  &.movie__scroll {
    .movie__basic {
      &::after {
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0) 100%,
          #fff 0%
        );
      }
    }
  }
`;

export const MovieBasic = styled.div`
  ${({ trailersBlock }) =>
    trailersBlock &&
    css`
      background: linear-gradient(
        to right,
        rgba(var(--darkBlue), 0.75) 0%,
        rgba(var(--darkBlue), 0.75) 100%
      );
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      color: #fff;
      transition: all 0.5s;
    `}
`;

export const MovieTitle = styled.div`
  h2 {
    font-size: 1.5em;
    font-weight: 600;
    ${colorBlack}
    margin-right: 20px;
    ${({ trailersBlock }) =>
      trailersBlock &&
      css`
        ${colorWhite}
      `}
  }
`;

export const MovieTabs = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  align-content: center;
  border: 1px solid rgba(var(--darkBlue), 1);
  border-radius: 14px;
  &.movie__tabs-wide {
    border: 1px solid rgba(var(--lightGreen), 1);
  }
`;

export const MovieTab = styled.li`
  padding: 4px 20px;
  ${backgroundWhite}
  border-radius: 14px;
  button {
    display: inline-flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1em;
    margin-bottom: 0;
    white-space: nowrap;
    transition: -webkit-text-fill-color 0.5s;
    color: rgba(var(--darkBlue), 1);
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  &.active {
    button {
      background: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    background-color: rgb(3, 37, 65);
  }
  ${({ trailersBlock }) =>
    trailersBlock &&
    css`
      button {
        ${colorWhite}
      }
      background-color: transparent;

      &.active {
        background-color: rgb(var(--lightGreen));

        button {
          background: rgba(var(--darkBlue), 1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    `}
`;
