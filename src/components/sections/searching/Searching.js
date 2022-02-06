/** @format */
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Col, Container, Row } from "../../../styles/styles";
import { Form, Inputs, Numbers, Primary, Taw } from "./styles";
import { useGlobalContext } from "../../../context/context";

const Searching = () => {
  const { setGlobalSearchBar, globalSearchText, setGlobalSearchText } =
    useGlobalContext();
  const [inputValue, setInputValue] = useState(globalSearchText);
  const history = useHistory();

  const formHandel = (e) => {
    e.preventDefault();
    history.push({
      pathname: `/searching`,
      state: { inputValue },
    });
    setGlobalSearchBar(true);
    setGlobalSearchText(inputValue);
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
            <Form className="searching-primary__form" onSubmit={formHandel}>
              <Inputs className="searching-primary__inputs">
                <input
                  type="text"
                  value={inputValue}
                  className="searching-primary__input"
                  placeholder="Search for a movie, tv show,person..."
                  onChange={(e) => setInputValue(e.target.value)}
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
