import styled from "styled-components";

export const Movie = styled.section`
  .movie__container {
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
  }
  .movie__line-gradient {
    padding: 30px 40px;
    background-image: linear-gradient(
      to right,
      rgba(20%, 15.69%, 20.39%, 1) 150px,
      rgba(20%, 15.69%, 20.39%, 0.84) 100%
    );
  }
`;

export const MovieImg = styled.div`
  img {
    border-radius: 7px;
  }
`;
// export const Movie =styled
