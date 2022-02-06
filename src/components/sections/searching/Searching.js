import { Link } from "react-router-dom";
import { Col, Container, Row } from "../../../styles/styles";
import {
  SearchingForm,
  SearchingInputs,
  SearchingNumbers,
  SearchingPrimary,
  SearchingTaw,
} from "./styles";

const Searching = () => {
  return (
    <SearchingPrimary className="searching-primary">
      <Container>
        <Row className="justify-center">
          <Col md="12">
            <SearchingNumbers className="searching-primary__numbers">
              <h2>2021</h2>
            </SearchingNumbers>
            <SearchingTaw>
              <h2>That's a Wrap</h2>
              <h3>
                <Link to="/">Let's dive into 2021's best and worst! → </Link>
              </h3>
            </SearchingTaw>
          </Col>
          <Col md="11">
            <SearchingForm className="searching-primary__form">
              <SearchingInputs className="searching-primary__inputs">
                <input
                  type="text"
                  className="searching-primary__input"
                  placeholder="Search for a movie, tv show,person..."
                />
                <button type="submit">search</button>
              </SearchingInputs>
            </SearchingForm>
          </Col>
        </Row>
      </Container>
    </SearchingPrimary>
  );
};

export default Searching;
