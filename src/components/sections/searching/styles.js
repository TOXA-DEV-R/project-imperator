import styled, { css } from "styled-components";
import searchin_bg from "../../../assets/images/searching-bg.svg";
import {
  backgroundWhite,
  colorBlack,
  colorWhite,
  flex_center,
} from "../../../styles/styles";

export const font_spaceMono = css`
  font-family: var(--spaceMono);
`;

export const transition = css`
  transition: all 250ms ease-in-out;
`;

export const SearchingPrimary = styled.section`
  width: 100%;
  /* margin-bottom: 40px !important; */
  ${backgroundWhite}
  background-image: url(${searchin_bg});
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
`;

export const SearchingNumbers = styled.div`
  width: 100%;
  ${flex_center}
  h2 {
    margin-top: 40px;
    ${font_spaceMono}
    font-size: 8em;
    color: #fff;
  }
`;
export const SearchingTaw = styled.div`
  text-align: center;
  h2 {
    font-size: 2.7em;
    ${colorWhite}
  }
  h3 {
    font-size: 1.6em;
    a {
      ${colorWhite}
      ${transition}
      &:hover {
        text-decoration: underline;
        opacity: 0.7;
      }
    }
  }
`;

export const SearchingForm = styled.form`
  margin-top: 60px;
  background-color: transparent;
`;

export const SearchingInputs = styled.div`
  width: 100%;
  height: 46px;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    line-height: 46px;
    font-size: 1.1em;
    color: rgba(0, 0, 0, 0.5);
    ${backgroundWhite}
    border: 2px solid rgba(var(--userscrollTrack1), 1);
    border-radius: 30px;
    outline: none;
  }
  button {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    ${colorBlack}
    background-color: transparent;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 150ms ease-in-out;
    &:hover {
      ${colorWhite}
    }
  }
`;
