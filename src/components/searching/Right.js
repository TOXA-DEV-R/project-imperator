import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTop, ResultList, CardBody } from "./styles";

const Right = ({ data }) => {
  return (
    <ResultList className="result__list" style={{ marginLeft: "30px" }}>
      {data.map((item) => {
        const { title, release_date, poster_path, overview, id } = item;
        const KONTRO_TEXTS = 240;

        return (
          <Card className="card" key={id}>
            <CardTop className="card__top">
              <Link to={`movie/:${id}`}>
                <img
                  src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2/${poster_path}`}
                  alt={title}
                />
              </Link>
            </CardTop>
            <CardBody className="card__body">
              <div>
                <h3 className="card__title">
                  <Link to={`movie/:${id}`}>{title}</Link>
                </h3>
                <span className="card__data">{release_date}</span>
              </div>

              <p className="card__texts">
                {overview && overview.slice(0, KONTRO_TEXTS) + "..."}
              </p>
            </CardBody>
          </Card>
        );
      })}
    </ResultList>
  );
};

export default Right;
