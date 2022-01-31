import { useEffect } from "react";
import http from "../../services/http/index";
import { Searching } from "./styles";
import { useContainersContext } from "../context";
import { useGlobalContext } from "../../context/context";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import Left from "../../components/searching/Left";
import Right from "../../components/searching/Right";
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
    <Searching
      className="container section-cards"
      style={{ marginTop: "30px" }}
    >
      <Container fluid={true} className="padding-top-bootom">
        <Row>
          <Col md="2.5">
            <Left />
          </Col>
          <Col md="9.5">
            <Right data={data} />
          </Col>
        </Row>
      </Container>
    </Searching>
  );
};

export default Index;
