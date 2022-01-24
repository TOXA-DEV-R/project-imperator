import styled from "styled-components";
import { backgroundWhite, colorBlack } from "../searching/SectionsStyle";

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

export const MTabsContentItems = styled.ul``;

export const MTabsContentItem = styled.li``;
// export const Movie = styled.
