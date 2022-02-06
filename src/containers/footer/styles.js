import styled from "styled-components";
import { flex_double_center } from "../../styles/styles";

export const FooterBasic = styled.footer`
  margin-top: 40px;
  height: 322px;
  width: 100%;
  background-color: #032541;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.div`
  height: 185px;
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
`;

export const FooterLogo = styled.div`
  width: 250px;
  text-align: end;

  .images {
    display: flex;
    justify-content: flex-end;
    align-items: end;
  }

  img {
    width: 139px;
    height: 100px;
  }

  a {
    background-color: white;
    padding: 12px 0;
    color: #00b6e1;
    font-size: 1.2em;
    font-weight: 800;
    text-transform: uppercase;
    ${flex_double_center}
    border-radius: 4px;
    margin-top: 40px;
  }
`;

export const FooterMenu = styled.div`
  margin-top: 40px;
  h3 {
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 1.1em;
    line-height: 1.4em;
    text-transform: uppercase;
    letter-spacing: 0.2px;
    color: var(--white);
    white-space: nowrap;
    -webkit-font-smoothing: antialiased;
  }
`;
