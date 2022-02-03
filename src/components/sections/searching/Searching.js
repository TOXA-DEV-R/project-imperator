/** @format */

import { Link, useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useGlobalContext } from "../../../context/context";
import { Col, Container, Row } from "../../../styles/styles";
import { Form, Inputs, Numbers, Primary, Taw } from "./styles";

const Searching = () => {
  const [inputValue, setInputValue] = useState();
  const { setSearchingText, setSearchBarControl } = useGlobalContext();
  const history = useHistory();

  const inputHandel = (e) => {
    e.preventDefault();
    history.push("/searching");
    setSearchingText(inputValue);
    setSearchBarControl(true);
  };
  return (
    <Primary className="searching-primary">
      <Container>
        <Row className="justify-center">
          <Col md="12">
            <Numbers className="searching-primary__numbers">
              <h2>2021</h2>
            </Numbers>
            <Taw>
              <h2>That's a Wrap</h2>
              <h3>
                <Link to="/">Let's dive into 2021's best and worst! → </Link>
              </h3>
            </Taw>
          </Col>
          <Col md="11">
            <Form className="searching-primary__form" onSubmit={inputHandel}>
              <Inputs className="searching-primary__inputs">
                <input
                  typeof="input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="searching-primary__input"
                  placeholder="Search for a movie, tv show,person..."
                />
                <button type="submit">search</button>
              </Inputs>
            </Form>
          </Col>
        </Row>
      </Container>
    </Primary>
  );
};

export default Searching;
