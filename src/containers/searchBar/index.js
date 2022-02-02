/** @format */

import React, { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { Block, Container, Form, Icon, Input, Section } from "./styles";
// import Suggest from "../../../components/header/searchBar/Suggest";
import OutsideClickHandler from "react-outside-click-handler";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

const Index = () => {
  const { setSearchBarControl, strongCtrSubmenu, setSearchingText } =
    useGlobalContext();
  const [inputValue, setiNputValue] = useState("");
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

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        strongCtrSubmenu && setSearchBarControl((ct) => !ct);
      }}
    >
      <Block className="search-bar__block">
        <Container className="search-bar__container">
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
    </OutsideClickHandler>
  );
};

export default Index;
