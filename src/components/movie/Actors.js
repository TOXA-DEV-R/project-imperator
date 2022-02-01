/** @format */

import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "../../styles/styles";
import {
  Actor,
  ActorsScroll,
  Card,
  CardBody,
  CardTop,
  ScrollList,
} from "./styles";
import http from "../../services/http/index";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
const KEY = "2dd08287b759101888b5a20c23399375";

const Actors = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    http
      .get(`/3/person/popular?api_key=${KEY}&language=en-US&page=1`)
      .then((data) => setData(data.data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Actor className="movie-actors">
      <Container fluid={true} className="padding-top-bootom">
        <Row>
          <Col md="9">
            <ActorsScroll className="movie-actors__scroll">
              <h2 className="movie-actors">Top Billed Cast</h2>
              <ScrollList className="scroll__list">
                {data.map((item) => (
                  <Card className="card" key={item.id}>
                    <CardTop className="card__top">
                      <Link
                        to={{
                          pathname: `/person/:${item.id}`,
                          state: { id: item.id },
                        }}
                      >
                        <LazyLoadImage
                          src={`https://www.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}`}
                          alt={item.name}
                          effect="blur"
                          delayTime={30}
                        />
                      </Link>
                    </CardTop>
                    <CardBody className="card__body">
                      <h3>
                        <Link
                          to={{
                            pathname: `/person/:${item.id}`,
                            state: { id: item.id },
                          }}
                        >
                          {item.name}
                        </Link>
                      </h3>
                      <p>{item.known_for_department}</p>
                    </CardBody>
                  </Card>
                ))}
              </ScrollList>
            </ActorsScroll>
          </Col>
          <Col md="3" style={{ background: "red" }}>
            row2
          </Col>
        </Row>
      </Container>
    </Actor>
  );
};

export default Actors;
