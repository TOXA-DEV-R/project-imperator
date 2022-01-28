import styled, { css } from "styled-components";
import {
  backgroundWhite,
  colorBlack,
  colorWhite,
  flex_double_center,
} from "../searching/SectionsStyle";

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

export const MTabsContentCards = styled.ul`
  display: flex;
  overflow-x: scroll;
  overflow-y: unset;
  position: relative;

  &::-webkit-scrollbar {
    height: 0.5em;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(219, 219, 219);
    outline: none;
    border-radius: 6px;
  }
`;

export const MovieTabCard = styled.li`
  margin-right: 20px;
  &:first-of-type {
    margin-left: 40px;
  }
  &:last-of-type {
    margin-right: 0;
  }
  &.wide-card {
    .tab-card__top {
      width: 300px;
      height: 168px;
      transform: scale(1);
      transition: all 250ms ease-in-out;
      &:hover {
        transform: scale(1.1, 1.1);
      }
    }
    .tab-card__bottom a,
    .tab-card__bottom,
    p {
      text-align: center;
      ${colorWhite}
    }
  }
`;

export const MovieTabCardTop = styled.div`
  width: 150px;
  height: 225px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: var(--imageBorderRadius);
  background: #dbdbdb;
  position: relative;
  a {
    width: 100%;
    height: 100%;
    display: block;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: var(--imageBorderRadius);
    object-fit: cover;
  }
  .progressbar {
    position: absolute;
    left: 12px;
    bottom: -16px;
    background-color: #081c22;
    width: 38px;
    height: 38px;
    padding: 2.5px;
    border-radius: 50%;
    .CircularProgressbar {
      &-text {
        fill: var(--white);
        font-size: 30px;
        font-weight: 600;
      }
    }
  }
`;

export const TabCardPlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  button {
    width: 100%;
    height: 100%;
    ${flex_double_center}
    background-color: transparent;
    border: none;
    transform: scale(1);
    transition: all 100ms ease-in;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const MovieTabCardBottom = styled.div`
  h2 {
    margin-top: 25px !important;
    font-size: 0.9em;
    margin: 0;
    width: 100%;
    word-wrap: normal;
    overflow-wrap: break-word;
    a {
      font-weight: 700;
      color: #000;
    }
  }
  p {
    margin-top: 5px !important;
    font-size: 1em;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const MovieTabCardAddList = styled.ul`
  position: absolute;
  top: 35px;
  right: -40px;
  z-index: 100;
  ${backgroundWhite}
  color: #000;
  border: 1px solid rgba(33, 37, 41, 0.15);
  border-radius: 0.25rem;
  padding: 2px 0;
`;

export const MovieTabCardAdditem = styled.li`
  a {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    ${backgroundWhite}
    transition: all 100ms ease-in;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
    background-color: transparent;
    font-size: 0.8em;
    border-bottom: 1px solid rgba(33, 37, 41, 0.15);

    &:hover {
      color: var(--white);
      background-color: rgba(var(--darkBlue), 1);
    }
    span {
      ${flex_double_center}
      margin-right: 5px;
    }
  }
  &:last-of-type {
    a {
      border: none;
    }
  }
`;

export const TabCardAddBtn = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 7px;
  right: 7px;
  cursor: pointer;
  svg {
    color: #ffffffa8;
  }
  &:hover {
    svg {
      color: #20b9d6;
    }
  }
`;
// export const Movie = styled.
