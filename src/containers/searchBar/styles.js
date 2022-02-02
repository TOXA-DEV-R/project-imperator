/** @format */

import styled from "styled-components";

export const Block = styled.div`
  width: 100%;
  .search-bar {
    position: absolute;
    top: 64px;
    left: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  padding: 0 40px;
  width: 100%;
  border-top: 1px solid rgba(var(--lightGrey), 1);
  border-bottom: 1px solid rgba(var(--lightGrey), 1);
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
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
  left: 0;
  z-index: 100;
  transform: translateY(-50%);
  opacity: 0.8;
  transition: all 150ms ease-in-out;
  &:last-of-type {
    right: 0;
    left: unset;
    cursor: pointer;
  }
`;
