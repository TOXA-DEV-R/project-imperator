import React from "react";
import Menu from "../../components/movie/Menu";
import Infos from "../../components/movie/Info";
import AllInfos from "../../components/movie/AllInfos";
import { Col, Container, Row } from "../../styles/styles";
import { Movie, MovieImg } from "./styles";

const Index = () => {
  return (
    <Movie className="movie">
      <Menu />
      <Container
        fluid={true}
        className="movie__container"
        style={{
          backgroundImage:
            "url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg)",
        }}
      >
        <div className="movie__line-gradient">
          <Row>
            <Col md="3">
              <MovieImg className="movie__img">
                <img
                  src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
                  alt=""
                />
              </MovieImg>
            </Col>
            <Col md="9">
              <Infos />
              <AllInfos />
            </Col>
          </Row>
        </div>
      </Container>
    </Movie>
  );
};

export default Index;
