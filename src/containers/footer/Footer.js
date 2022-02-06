import React from "react";
import { Link } from "react-router-dom";
import { FooterBasic, FooterContainer, FooterLogo, FooterMenu } from "./styles";
import logo_2 from "../../assets/images/Logo_2.svg";
import data from "./FooterData";
import List from "../../components/footer/List";

const Footer = () => {
  return (
    <FooterBasic className="footer">
      <FooterContainer className="footer-container">
        <FooterLogo className="footer__logo">
          <div className="images">
            <img src={logo_2} alt="logo" />
          </div>
          <Link to="/">Join the Community</Link>
        </FooterLogo>
        <FooterMenu className="footer__menu">
          <h3>THE BASICS</h3>
          <List data={data.BASICS} />
        </FooterMenu>
        <FooterMenu className="footer__menu">
          <h3>GET INVOLVED</h3>
          <List data={data.INVOLVED} />
        </FooterMenu>
        <FooterMenu className="footer__menu">
          <h3>COMMUNITY</h3>
          <List data={data.COMMUNITY} />
        </FooterMenu>
        <FooterMenu className="footer__menu">
          <h3>LEGAL</h3>
          <List data={data.LEGAL} />
        </FooterMenu>
      </FooterContainer>
    </FooterBasic>
  );
};

export default Footer;
