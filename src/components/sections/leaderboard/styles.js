/** @format */

import styled, { css } from "styled-components";
import {
  linearGradientFirst,
  linearGradientSecond,
} from "../../../containers/sections/leaderboard/styles";

const colorWhite = css`
  color: var(--white);
`;
const colorBlack = css`
  color: var(--black);
`;
const flex_double_center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeaderboardsAvatar = styled.div`
  span {
    ${flex_double_center}
    ${colorWhite}
    border-radius: 50%;
  }
`;

export const LeaderboardsList = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const LeaderboardsProgresses = styled.div`
  width: 100%;
  margin-left: 10px;

  h3 {
    font-size: 1.2em;
    font-weight: 600;
    a {
      display: flex;
      ${colorBlack}
      &:hover {
        color: rgba(var(--lightGreen), 1);
      }
    }
  }
`;

export const LeaderboardsProgress = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 0.9em;
    font-weight: 600;
    ${colorBlack}
  }
  span {
    display: block;
    border-radius: 4px;
    margin-right: 10px;
  }

  &:first-of-type {
    span {
      ${linearGradientFirst}
    }
  }
  &:last-of-type {
    span {
      ${linearGradientSecond}
    }
  }
`;
