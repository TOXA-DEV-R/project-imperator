import styled from "styled-components";

export const SearchBarBlock = styled.div`
  width: 100%;
  .search-bar {
    position: absolute;
    top: 64px;
    left: 0;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchBarSection = styled.section`
  padding: 0 40px;
  width: 100%;
  border-top: 1px solid rgba(var(--lightGrey), 1);
  border-bottom: 1px solid rgba(var(--lightGrey), 1);
`;

export const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 40px;
  border: none;
  outline: none;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.4);
  font-style: italic;
  &::placeholder {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.4);
    font-style: italic;
  }
`;

export const SearchBarForm = styled.form`
  width: 100%;
  position: relative;
  height: 40px;
`;

export const SearchBarIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  transition: all 150ms ease-in-out;
  &:last-of-type {
    right: 0;
    left: unset;
    cursor: pointer;
  }
`;
