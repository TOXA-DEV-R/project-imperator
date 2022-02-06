import { Fragment, useEffect } from "react";
import http from "../../services/http/index";
import { Searching } from "./styles";
import { useContainersContext } from "../context";
import { useGlobalContext } from "../../context/context";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import Left from "../../components/searching/Left";
import { Col, Container, Row } from "../../styles/styles";
const KEY = "2dd08287b759101888b5a20c23399375";

const Index = () => {
  const { setSubmenuContol } = useContainersContext();
  const { searchingText } = useGlobalContext();
  const [pages, setPages] = useState(1);
  const [data, setData] = useState([]);

  // console.log(useHis);
  useEffect(() => {
    http
      .get(
        `/3/search/movie?api_key=${KEY}&language=en-US&query=${searchingText}&page=${pages}&include_adult=false`
      )
      .then((data) => {
        setData(data.data.results);
        setSubmenuContol(true);
      })
      .catch((err) => console.log(err));
  }, [searchingText, pages]);

  return (
    <Fragment>
      <Searching className="container section-cards">
        <Container fluid={true} className="padding-top-bootom">
          <Row>
            <Col md="2">
              <Left />
            </Col>
            <Col md="10">
              <div className="right-section">
                {data.map((item) => {
                  const { title, release_date, poster_path, overview, id } =
                    item;
                  return (
                    <div class="card-long">
                      <div class="card-img">
                        <Link to={id}>
                          <img
                            src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2/${poster_path}`}
                            alt={title}
                          />
                        </Link>
                      </div>
                      <div class="card-texT">
                        <h3>{title}</h3>
                        <p class="data">{release_date}</p>
                        <p class="lorem-text">{overview}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </Searching>
    </Fragment>
  );
};

export default Index;
