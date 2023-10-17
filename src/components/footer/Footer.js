import React from "react";
import {
  FooterColumn,
  FooterContainer,
  FooterLine,
  CopyrightWraper,
  Copyright,
  ColumnIcons,
  ColumnHeading,
} from "./FooterElements";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterColumn>
          <ColumnHeading>Follow Me</ColumnHeading>
          <ColumnIcons>
            <a
              href="https://facebook.com/luke-olawale"
              style={{ textDecoration: "none", color: "white" }}
            >
              <BsFacebook />{" "}
            </a>
            <a
              href="https://twitter.com/lukeolawale1"
              style={{ textDecoration: "none", color: "white" }}
            >
              <AiFillTwitterCircle />{" "}
            </a>
            <a
              href="https://www.instagram.com/wale_luke"
              style={{ textDecoration: "none", color: "white" }}
            >
              <AiFillInstagram />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/luke-olawale"
              style={{ textDecoration: "none", color: "white" }}
            >
              <AiFillLinkedin />{" "}
            </a>
          </ColumnIcons>
        </FooterColumn>
        <FooterLine />
        <CopyrightWraper>
          <Copyright>
            <i className="fa fa-copyright" style={{ marginRight: "10px" }}></i>
            Copyright 2023. All Right Reserved By Luke Olawale
          </Copyright>
        </CopyrightWraper>
      </FooterContainer>
    </>
  );
};

export default Footer;
