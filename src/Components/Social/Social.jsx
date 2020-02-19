import React, { Component } from "react";
import { NewsConsumer } from "../../Context";

import "./Social.scss";

class Social extends Component {
  render() {
    return (
      <NewsConsumer>
        {value => {
          return value.onStar > 0 ? (
            <div
              className="social d-flex flex-column"
              style={{ position: "absolute", top:"21.5%" }}
            >
              <h1>
                <a
                  href="https://twitter.com/urlDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </h1>
              <h1>
                <a
                  href="https://github.com/urlDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </h1>
              <h3 className="social-follow">follow me</h3>
            </div>
          ) : (
            <div className="social d-flex flex-column">
              <h1>
                <a
                  href="https://twitter.com/urlDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </h1>
              <h1>
                <a
                  href="https://github.com/urlDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </h1>
              <h3 className="social-follow">follow me</h3>
            </div>
          );
        }}
      </NewsConsumer>
    );
  }
}

export default Social;
