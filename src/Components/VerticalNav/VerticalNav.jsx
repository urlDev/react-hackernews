import React, { Component } from "react";
import SearchResults from "../SearchResults/SearchResults";

import "./VerticalNav.scss";

//https://stackoverflow.com/questions/27969485/space-between-link-and-icon-fontawesome
//to stack all the nav elements in same line
class VerticalNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container verticalNav mt-4">
        <div className="row">
          <div className="col-3">
            <div
              className="nav flex-column  text-left"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active "
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                <i className="fas fa-home fa-fw mr-3"></i>All
              </a>
              <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                <i className="fas fa-bolt fa-fw mr-3"></i>Hot
              </a>
              <a
                className="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                <i className="fas fa-volume-up fa-fw mr-3"></i>Show HN
              </a>
              <a
                className="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                <i className="far fa-comment fa-fw mr-3"></i>Ask HN
              </a>
              <a
                className="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                <i className="fas fa-file-invoice-dollar fa-fw mr-3"></i>Jobs
              </a>
            </div>
          </div>
          <div className="col-9">
            <SearchResults />
          </div>
        </div>
      </div>
    );
  }
}

export default VerticalNav;
