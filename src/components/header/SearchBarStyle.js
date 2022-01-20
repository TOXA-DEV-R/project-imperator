import styled from "styled-components";

export const SearchBarBlock = styled.div`
  width: 100%;
  .search-bar {
    &__container {
    }
    &__section {
      width: 100%;
      position: absolute;
      top: 64px;
      left: 0;
      padding: 0 40px;
      border-top: 1px solid rgba(var(--lightGrey), 1);
      border-bottom: 1px solid rgba(var(--lightGrey), 1);
    }
  }
`;

export const SearchBarForm = styled.form`
  width: 100%;
  position: relative;
  height: 40px;
  .search-bar {
    &__input {
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
    }
    &__icon {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
`;
