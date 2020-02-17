import React, { Component } from "react";
import Search from "../Search/Search";
import { NewsConsumer } from "../../Context";

import "./NavTop.scss";

class NavTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NewsConsumer>
        {value => {
          return (
            <div className="container navTop">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                  <img
                    src={require("./logo_transparent.png")}
                    className="brandImage"
                    alt="hacker news brand logo"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto ">
                    <li className="nav-item ">
                      <button
                        className={
                          value.all.length > 0
                            ? "nav-link clicked"
                            : "nav-link "
                        }
                        onClick={() => {
                          value.getStoryIds();
                          value.clearVisible();
                        }}
                      >
                        ALL
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={
                          value.hot.length > 0 ? "nav-link clicked" : "nav-link"
                        }
                        onClick={() => {
                          value.getTopIds();
                          value.clearVisible();
                        }}
                      >
                        HOT
                      </button>
                    </li>
                    <li>
                      <button
                        className={
                          value.show.length > 0
                            ? "nav-link clicked"
                            : "nav-link"
                        }
                        onClick={() => {
                          value.getShowIds();
                          value.clearVisible();
                        }}
                      >
                        SHOW HN
                      </button>
                    </li>
                    <li>
                      <button
                        className={
                          value.ask.length > 0 ? "nav-link clicked" : "nav-link"
                        }
                        onClick={() => {
                          value.getAskIds();
                          value.clearVisible();
                        }}
                      >
                        ASK HN
                      </button>
                    </li>
                    <li>
                      <button
                        className={
                          value.jobs.length > 0
                            ? "nav-link clicked"
                            : "nav-link"
                        }
                        onClick={() => {
                          value.getJobsIds();
                          value.clearVisible();
                        }}
                      >
                        JOBS
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </NewsConsumer>
    );
  }
}

export default NavTop;