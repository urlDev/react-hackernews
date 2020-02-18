import React, { Component } from "react";

import "./Social.scss";

class Social extends Component {
  render() {
    return (
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
        <h3 className="social-follow">follow us</h3>
      </div>
    );
  }
}

export default Social;
