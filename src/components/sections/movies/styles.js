/** @format */

import styled from "styled-components";
import {
  backgroundWhite,
  colorWhite,
  flex_double_center,
} from "../../../styles/styles";

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
  margin-top: 25px;
  margin-bottom: 20px;
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

export const TabCardPlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
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
  z-index: 20;
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
