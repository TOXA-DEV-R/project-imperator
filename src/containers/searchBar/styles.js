/** @format */

import styled from "styled-components";

export const Block = styled.div`
  width: 100%;
  transform: translateY(0);
  .search-bar {
    position: absolute;
    top: 64px;
    left: 0;
  }
  /* &.searching--hidden {
    transform: translateY(-300%);
  } */
`;
export const Section = styled.section`
  width: 100%;
  border-top: 1px solid rgba(var(--lightGrey), 1);
  border-bottom: 1px solid rgba(var(--lightGrey), 1);
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 70px;
  padding-right: 70px;
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

export const Form = styled.form`
  width: 100%;
  position: relative;
  height: 40px;
`;

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 40px;
  z-index: 100;
  transform: translateY(-50%);
  opacity: 0.8;
  transition: all 150ms ease-in-out;
  &:last-of-type {
    right: 40px;
    left: unset;
    cursor: pointer;
  }
`;
