import React, { useContext } from "react";
import { NewsContext } from "../../Context";

import { FooterContainer, NavbarBrand } from "./Footer.styles";

const Footer = () => {
  const { getStoryIds, clearVisible, onDifferentPage } = useContext(
    NewsContext
  );
  return (
    <FooterContainer>
      <div className="container p-0">
        <NavbarBrand
          to="/"
          onClick={() => {
            getStoryIds();
            clearVisible();
            onDifferentPage();
          }}
        >
          <img
            src={require("../NavTop/logo_transparent.png")}
            alt="hacker news brand logo"
          />
        </NavbarBrand>
      </div>
    </FooterContainer>
  );
};

export default Footer;
