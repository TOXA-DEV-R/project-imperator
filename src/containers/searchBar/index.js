/** @format */

import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { Block, Form, Icon, Input, Section } from "./styles";
// import Suggest from "../../../components/header/searchBar/Suggest";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import { Container } from "../../styles/styles";
import useScrollListener from "../header/useScrollListener";
import Sticky from "react-stickynode";

const Index = () => {
  const [searchingUpAndDown, setSearchingUpAndDown] = useState(64);
  const scroll = useScrollListener();
  const { setSearchingText, searchingText } = useGlobalContext();
  const [inputValue, setiNputValue] = useState(searchingText);
  const history = useHistory();

  const submitHandle = (event) => {
    event.preventDefault();
    if (inputValue.length < 1) {
      alert("Enter value, please");
    } else if (inputValue.length > 1) {
      setSearchingText(inputValue);
      history.push("/searching");
    }
  };

  useEffect(() => {
    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
      setSearchingUpAndDown(0);
    } else {
      setSearchingUpAndDown(64);
    }
  }, [scroll.lastY, scroll.y]);

  return (
    <Sticky innerZ={1000} top={searchingUpAndDown}>
      <Block className={`search-bar__block`}>
        <Container fluid={true} className="search-bar__container">
          <Section className="search-bar__section">
            <Form className="search-bar__form" onSubmit={submitHandle}>
              <Input
                type="input"
                name="search"
                value={inputValue}
                placeholder="Search for a movie, tv show,person..."
                onChange={(e) => setiNputValue(e.target.value)}
                className="search-bar__input"
              />
              <Icon className="search-bar__icon">
                <FaSearch size={15} />
              </Icon>
              <Icon
                className="search-bar__icon"
                onClick={() => setiNputValue("")}
              >
                <GrFormClose size={18} />
              </Icon>
            </Form>
          </Section>
          {/* <Suggest /> */}
        </Container>
      </Block>
    </Sticky>
  );
};

export default Index;
