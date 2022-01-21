import styled from "styled-components";
import { css } from "styled-components";

const black = css`
  color: var(--black);
`;
export const SearchingSuggestBlock = styled.div`
  .search-suggest__title {
    height: 40px;
    background: rgba(var(--lightGrey), 0.3);
    display: flex;
    align-items: center;
    h2 {
      font-size: 1.2em;
      font-weight: 700;
      ${black}
    }
  }
  .search-suggest__icon {
    margin-right: 7px;
  }
`;

export const SearchSuggestResults = styled.ul`
  .search-suggest__result {
    border-top: 1px solid rgba(var(--lightGrey), 1);
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    a {
      font-size: 1em;
      ${black}
    }
    &:last-of-type {
      border-bottom: 1px solid rgba(var(--lightGrey), 1);
    }
  }
`;
