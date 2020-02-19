import React, { Component } from "react";
import { NewsConsumer } from "../../Context";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

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
              <Navbar expand="lg">
                <Link
                  className="navbar-brand"
                  to="/"
                  onClick={() => {
                    value.getStoryIds();
                    value.clearVisible();
                    value.onDifferentPage();
                  }}
                >
                  <img
                    src={require("./logo_transparent.png")}
                    className="brandImage"
                    alt="hacker news brand logo"
                  />
                </Link>

                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="mb-2"
                >
                  {/* <span>MENU</span> */}
                  <i className="fas fa-newspaper"></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="">
                  <Nav className="flex-row d-flex ml-auto">
                    <Link
                      onClick={() => {
                        value.cleanState();
                        value.clearVisible();
                        value.onStarPage();
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
                    <Link
                      to="/"
                      className={
                        value.all.length > 0 ? "nav-link clicked" : "nav-link "
                      }
                      onClick={() => {
                        value.getStoryIds();
                        value.clearVisible();
                        value.onDifferentPage();
                      }}
                    >
                      ALL
                    </Link>
                    <Link
                      to="/"
                      className={
                        value.hot.length > 0 ? "nav-link clicked" : "nav-link"
                      }
                      onClick={() => {
                        value.getTopIds();
                        value.clearVisible();
                        value.onDifferentPage();
                      }}
                    >
                      HOT
                    </Link>
                    <Link
                      to="/"
                      className={
                        value.show.length > 0 ? "nav-link clicked" : "nav-link"
                      }
                      onClick={() => {
                        value.getShowIds();
                        value.clearVisible();
                        value.onDifferentPage();
                      }}
                    >
                      SHOW HN
                    </Link>
                    <Link
                      to="/"
                      className={
                        value.ask.length > 0 ? "nav-link clicked" : "nav-link"
                      }
                      onClick={() => {
                        value.getAskIds();
                        value.clearVisible();
                        value.onDifferentPage();
                      }}
                    >
                      ASK HN
                    </Link>
                    <Link
                      to="/"
                      className={
                        value.jobs.length > 0 ? "nav-link clicked" : "nav-link"
                      }
                      onClick={() => {
                        value.getJobsIds();
                        value.clearVisible();
                        value.onDifferentPage();
                      }}
                    >
                      JOBS
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          );
        }}
      </NewsConsumer>
    );
  }
}

export default NavTop;
