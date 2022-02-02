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
  AdditionalInfos,
  Icons,
  SomeAdditionalInfo,
} from "./styles";
import http from "../../services/http/index";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import datas from "./data";
const KEY = "2dd08287b759101888b5a20c23399375";

const Actors = ({ production_companies = [], original_language }) => {
  const [data, setData] = useState([]);
  const scrollHandle = (e) => {};

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
              <ScrollList className="scroll__list" onScroll={scrollHandle}>
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
          <Col md="3">
            <AdditionalInfos className="additional-infos">
              <Icons className="icons">
                {datas.additonalInfos.map((item) => (
                  <Link to="/" key={item.id}>
                    {item.icon}
                  </Link>
                ))}
              </Icons>
              <SomeAdditionalInfo className="additional-infos__some">
                <h3 className="additional-infos__fact">Facts</h3>
                <div className="additional-infos__status">
                  <h4>Status</h4>
                  <p>Returning Series</p>
                </div>
                <div className="additional-infos__company">
                  <h3>Network</h3>
                  {production_companies.map((item) => (
                    <Link to="/" key={item.id}>
                      <LazyLoadImage
                        src={`https://www.themoviedb.org/t/p/h30${item.logo_path}`}
                        alt={"title"}
                        effect="blur"
                        delayTime={30}
                      />
                    </Link>
                  ))}
                </div>
                <div className="additional-infos__type">
                  <h3>Type</h3>
                  <p>Scripted</p>
                </div>
                <div className="additional-infos__language">
                  <h3>Original Language</h3>
                  <p>{original_language}</p>
                </div>
                <div className="additional-infos__keywords">
                  <h3>Keywords</h3>
                  <ul className="list">
                    <li>
                      <Link to={"/"}>Keywords</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Keywords</Link>
                    </li>
                  </ul>
                </div>
              </SomeAdditionalInfo>
            </AdditionalInfos>
          </Col>
        </Row>
      </Container>
    </Actor>
  );
};

export default Actors;
