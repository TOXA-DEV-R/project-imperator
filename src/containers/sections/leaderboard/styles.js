import styled from "styled-components";
import { css } from "styled-components";
import { colorBlack } from "../../../styles/styles";

export const linearGradientFirst = css`
  background: linear-gradient(
    to right,
    rgba(var(--lighterGreen), 1) 0%,
    rgba(var(--lightGreen), 1) 100%
  );
`;

export const linearGradientSecond = css`
  background: linear-gradient(
    to right,
    rgba(var(--logoOrange), 1) 0%,
    rgba(var(--logoRed), 1) 100%
  );
`;

export const Leaderboards = styled.section`
  background-color: var(--white);
`;

export const LeaderboardsInfo = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-size: 1.5em;
    white-space: nowrap;
    font-weight: 550;
    ${colorBlack}
  }
`;

export const LeaderboardsInfoAll = styled.div`
  p {
    ${colorBlack}
    font-size:0.9em;
    font-weight: 500;
    margin-left: 20px;
    &:last-of-type {
      margin-top: 10px;
      span {
        ${linearGradientSecond}
      }
    }
    display: flex;
    align-items: center;
    span {
      border-radius: 50%;
      display: inline-block;
      width: 8px;
      height: 8px;
      margin-right: 10px;
      ${linearGradientFirst}
    }
  }
`;
