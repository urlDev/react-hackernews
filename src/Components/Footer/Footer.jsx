import React, { useContext } from "react";
import { NewsContext } from "../../Context";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  const { getStoryIds, clearVisible, onDifferentPage } = useContext(
    NewsContext
  );
  return (
    <div className="footer">
      <div className="container p-0">
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => {
            getStoryIds();
            clearVisible();
            onDifferentPage();
          }}
        >
          <img
            src={require("../NavTop/logo_transparent.png")}
            className="brandImage"
            alt="hacker news brand logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
