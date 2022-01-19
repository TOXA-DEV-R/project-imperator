import styled from "styled-components";

export const SubmenuContainer = styled.aside`
  position: absolute;
  z-index: 101;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

export const SubmenuColumnAdd = styled.ul`
  padding: 2px 0;
  width: 150.5px;
  border: 1px solid rgba(33, 37, 41, 0.15);
  border-radius: 4px;
  background-color: var(--white);

  li {
    padding: 6px 19px;
    margin: 0;
    display: block;
    &:hover {
      background-color: rgb(3, 37, 65);
      a {
        color: var(--white);
      }
    }
    a {
      color: rgba(0, 0, 0, 0.6);
      font-size: 0.8em;
      font-weight: 400;
    }
  }

  .submenu-add__column-dropup {
    position: absolute;
    top: -17px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
