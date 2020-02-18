import React, { Component } from "react";
import Search from "../Search/Search";
import { NewsConsumer } from "../../Context";
import { Link } from "react-router-dom";

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
                <Link
                  className="navbar-brand"
                  to="/"
                  onClick={() => {
                    value.getStoryIds();
                    value.clearVisible();
                  }}
                >
                  <img
                    src={require("./logo_transparent.png")}
                    className="brandImage"
                    alt="hacker news brand logo"
                  />
                </Link>
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
                      <Link
                        onClick={() => {
                          value.cleanState();
                          value.clearVisible();
                        }}
                        className="nav-link"
                        to="/star"
                      >
                        {value.star.length > 0 ? (
                          <i
                            className="fas fa-star"
                            style={{ color: "#1E90FF" }}
                          ></i>
                        ) : (
                          <i
                            className="far fa-star"
                            style={{ color: "#1E90FF" }}
                          ></i>
                        )}
                      </Link>
                    </li>

                    <li className="nav-item ">
                      <Link
                        to="/"
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
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/"
                        className={
                          value.hot.length > 0 ? "nav-link clicked" : "nav-link"
                        }
                        onClick={() => {
                          value.getTopIds();
                          value.clearVisible();
                        }}
                      >
                        HOT
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
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
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={
                          value.ask.length > 0 ? "nav-link clicked" : "nav-link"
                        }
                        onClick={() => {
                          value.getAskIds();
                          value.clearVisible();
                        }}
                      >
                        ASK HN
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
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
                      </Link>
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
