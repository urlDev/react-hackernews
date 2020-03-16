import React, { useContext } from "react";
import { NewsContext } from "../../Context";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import "./NavTop.scss";

const NavTop = () => {
  const {
    getStoryIds,
    clearVisible,
    onDifferentPage,
    cleanState,
    onStarPage,
    getTopIds,
    getShowIds,
    getAskIds,
    getJobsIds,
    all,
    hot,
    ask,
    show,
    jobs,
    star
  } = useContext(NewsContext);
  
  return (
    <div className="container navTop">
      <Navbar expand="lg">
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
            src={require("./logo_transparent.png")}
            className="brandImage"
            alt="hacker news brand logo"
          />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-2">
          {/* <span>MENU</span> */}
          <i className="fas fa-newspaper"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="flex-row d-flex ml-auto">
            <Link
              onClick={() => {
                cleanState();
                clearVisible();
                onStarPage();
                console.log(all, hot, show, ask, jobs)
              }}
              className="nav-link"
              to="/star"
            >
              {star.length > 0 ? (
                <i className="fas fa-star" style={{ color: "#1E90FF" }}></i>
              ) : (
                <i className="far fa-star" style={{ color: "#1E90FF" }}></i>
              )}
            </Link>
            <Link
              to="/"
              className={all.length > 0 ? "nav-link clicked" : "nav-link "}
              onClick={() => {
                getStoryIds();
                clearVisible();
                onDifferentPage();
              }}
            >
              ALL
            </Link>
            <Link
              to="/"
              className={hot.length > 0 ? "nav-link clicked" : "nav-link"}
              onClick={() => {
                getTopIds();
                clearVisible();
                onDifferentPage();
              }}
            >
              HOT
            </Link>
            <Link
              to="/"
              className={show.length > 0 ? "nav-link clicked" : "nav-link"}
              onClick={() => {
                getShowIds();
                clearVisible();
                onDifferentPage();
              }}
            >
              SHOW HN
            </Link>
            <Link
              to="/"
              className={ask.length > 0 ? "nav-link clicked" : "nav-link"}
              onClick={() => {
                getAskIds();
                clearVisible();
                onDifferentPage();
              }}
            >
              ASK HN
            </Link>
            <Link
              to="/"
              className={jobs.length > 0 ? "nav-link clicked" : "nav-link"}
              onClick={() => {
                getJobsIds();
                clearVisible();
                onDifferentPage();
              }}
            >
              JOBS
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavTop;
