import styled, { css } from "styled-components";
const repeat_bagroundbg = css`
  background-color: red;
`;

const getFontsize = ({ size }) => {
  switch (size) {
    case "sm":
      return "13px";
    case "md":
      return "20px";
    case "lg":
      return "30px";
    case "xl":
      return "40px";
    default:
      return "50px";
  }
};

export const Container = styled.div`
  font-size: ${getFontsize};
  ${repeat_bagroundbg};
  display: ${({ displayl }) => (displayl ? "flex" : "block")};
`;
