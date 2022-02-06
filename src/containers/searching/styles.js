/** @format */

import styled from "styled-components";

export const Searching = styled.section``;
export const Buttons = styled.div`
  .pagination {
    display: flex;
    margin-top: 30px;
    .page-item {
      padding: 0 5px;
      &.active {
        color: blue;
      }
    }
    .page-link {
      font-size: 1em;
      font-weight: 500;
      text-transform: capitalize;
      cursor: pointer;
    }
  }
`;
