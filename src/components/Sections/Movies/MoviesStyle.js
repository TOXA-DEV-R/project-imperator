import styled from "styled-components";
import {
  backgroundWhite,
  colorBlack,
  flex_double_center,
} from "../searching/SectionsStyle";

export const Movie = styled.section`
  margin-top: 50px;
  .movie__container {
    display: flex;
  }
`;

export const MovieTitle = styled.div`
  h2 {
    font-size: 1.5em;
    font-weight: 600;
    ${colorBlack}
    margin-right: 20px;
  }
`;

export const MovieTabs = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  align-content: center;
  border: 1px solid rgba(var(--darkBlue), 1);
  border-radius: 14px;
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
`;

export const MTabsContentCards = styled.ul`
  display: flex;
  overflow-x: scroll;
  overflow-y: unset;

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
    margin-left: 30px;
  }
  &:last-of-type {
    margin-right: 0;
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
