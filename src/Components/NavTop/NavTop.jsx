import React, { Component } from "react";
import Search from "../Search/Search";

import "./NavTop.scss";

class NavTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container navTop">
        <nav className="navbar navbar-expand-lg navbar-light p-0 mt-4">
          <a className="navbar-brand" href="#">
            <img
              src={require("./logo_transparent.png")}
              className="brandImage"
              alt="hacker news brand logo"
            />
          </a>
          <Search />
        </nav>
      </div>
    );
  }
}

export default NavTop;
