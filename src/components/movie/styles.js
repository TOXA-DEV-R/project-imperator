import styled from "styled-components";
import { css } from "styled-components";
import {
  flex_double_center,
  colorBlack,
  colorWhite,
  backgroundBlack,
  backgroundWhite,
} from "../../styles/styles";
const trans = css`
  transition: all 150ms ease-in;
`;

export const BasicMenue = styled.ul`
  ${flex_double_center}
  background-color: var(--white);
`;

export const MenuBlock = styled.li`
  position: relative;
  margin-left: 30px;
  padding: 15px 0;
  button {
    display: flex;
    align-items: center;
    ${colorBlack}
    font-size: 1em;
    font-weight: 400;
    border: none;
    background: transparent;
    cursor: pointer;
    span {
      display: inline-flex;
    }
  }
  &:first-of-type {
    margin-left: 0;
  }

  &.active {
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #00b4e4;
    }
  }
  &:hover {
    .menu__list {
      transform: scale(1) translateY(0);
    }
  }
`;

export const List = styled.ul`
  position: absolute;
  left: 0;
  top: 36px;
  z-index: 111;
  width: 150px;
  padding: 4px 0;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  ${backgroundWhite};
  transition: all 200ms ease-in;
  transform: scale(0) translateY(100px);
`;

export const Item = styled.li`
  padding: 5px 20px;
  ${backgroundWhite}
  transition: all 100ms ease-in;
  a {
    font-size: 0.9rem;
    ${colorBlack}
  }
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const Info = styled.div`
  width: 100%;
`;

export const InfoTitle = styled.div`
  margin-top: 30px;
  h2 {
    font-size: 2.1rem;
    font-weight: 700;
    a {
      ${colorWhite}
      ${trans}
      &:hover {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      margin-left: 7px;
      ${colorWhite}
      font-weight: 400;
      opacity: 0.8;
    }
  }
`;

export const InfosFacts = styled.div`
  margin-top: 3px;
  display: flex;
  align-items: center;
  .infos__certification {
    font-size: 0.9em;
    padding: 0.06em 4px 0.15em 4px !important;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 2px;
    color: rgba(255, 255, 255, 0.6);
  }
  .infos__release {
    margin-left: 7px;
    font-size: 0.9em;
    ${colorWhite}
  }
  .infos__genres {
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      margin-left: 7px;
      .infos__dot {
        width: 5px;
        height: 5px;
        margin-right: 7px;
        background-color: var(--white);
        display: inline-block;
        border-radius: 50%;
      }
      .infos__runtime {
        ${colorWhite}
        opacity: .8;
      }
      a {
        ${colorWhite}
        opacity: 1;
        ${trans}
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;

export const InfosActions = styled.ul`
  height: 68px;
  display: flex;
  align-items: center;
`;

export const InfosAction = styled.li`
  margin-left: 30px;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #032540;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &:first-of-type {
    width: 114px;
    height: 100%;
    margin-left: 0;
    background-color: transparent;
    border-radius: none;
  }

  .infos__progressbar {
    width: 68px;
    height: 100%;
    display: inline-block;
    background-color: #081c22;
    border-radius: 50%;
    padding: 4px;
    .CircularProgressbar-text {
      font-size: 2em;
      font-weight: 700;
      fill: white;
    }
  }

  .infos__score {
    display: inline-block;
    ${colorWhite}
    font-size: .9em;
    font-weight: 600;
    margin-left: 7px;
  }

  span {
    display: flex;
  }

  .infos__show {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #032540;
    li {
      display: flex;
      flex: 0 0 auto;
    }
  }
`;

export const AllInfo = styled.div``;
export const AllInfosOverview = styled.div``;
export const AllInfosList = styled.ul``;
export const AllInfosItem = styled.li``;
