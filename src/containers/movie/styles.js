/** @format */

import styled from "styled-components";

export const Movie = styled.section`
  .movie__container {
    position: relative;
    /* background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center; */
  }
  .movie__line-gradient {
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    padding: 30px 40px;
    background-image: linear-gradient(
      to right,
      rgba(20%, 15.69%, 20.39%, 1) 150px,
      rgba(20%, 15.69%, 20.39%, 0.84) 100%
    );
  }
  .movie__bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    span {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const MovieImg = styled.div`
  img {
    border-radius: 7px;
  }
`;
// export const Movie =styled
