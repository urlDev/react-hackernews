import React, { Component } from "react";
import { NewsConsumer } from "../../Context";
import { Link } from "react-router-dom";

import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <NewsConsumer>
          {value => {
            return (
              <div className="container p-0">
                <Link
                  className="navbar-brand"
                  to="/"
                  onClick={() => {
                    value.getStoryIds();
                    value.clearVisible();
                  }}
                >
                  <img
                    src={require("../NavTop/logo_transparent.png")}
                    className="brandImage"
                    alt="hacker news brand logo"
                  />
                </Link>
              </div>
            );
          }}
        </NewsConsumer>
      </div>
    );
  }
}

export default Footer;
