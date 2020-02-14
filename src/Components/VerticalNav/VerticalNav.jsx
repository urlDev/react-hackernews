import React, { Component } from "react";
import SearchResults from "../SearchResults/SearchResults";
import SearchResultsHot from "../SearchResultsHot/SearchResultsHot";
import AskHN from "../AskHN/AskHN";
import ShowHN from "../ShowHN/ShowHN";
import Jobs from "../Jobs/Jobs";

import { NewsConsumer } from "../../Context";

import "./VerticalNav.scss";

//https://stackoverflow.com/questions/27969485/space-between-link-and-icon-fontawesome
//to stack all the nav elements in same line
class VerticalNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ""
    };
  }
  render() {
    return (
      <NewsConsumer>
        {value => {
          return (
            <div className="container verticalNav mt-5">
              <div className="row">
                <div className="col-3">
                  <div
                    className="nav flex-column  text-left"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className={
                      value.all.length > 0
                        ? "nav-link clicked"
                        : "nav-link"
                    }
                      onClick={() => {
                        value.getStoryIds();
                        value.clearVisible();
                      }}
                    >
                      <i className="fas fa-home fa-fw mr-3"></i>All
                    </a>
                    <a
                      className={
                      value.hot.length > 0
                        ? "nav-link clicked"
                        : "nav-link"
                    }
                      onClick={() => {
                        value.getTopIds();
                        value.clearVisible();
                      }}
                    >
                      <i className="fas fa-fire fa-fw mr-3"></i>Hot
                    </a>
                    <a
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
                      <i className="fas fa-volume-up fa-fw mr-3"></i>Show HN
                    </a>
                    <a
                      className={
                      value.ask.length > 0
                        ? "nav-link clicked"
                        : "nav-link"
                    }
                      onClick={() => {
                        value.getAskIds();
                        value.clearVisible();
                      }}
                    >
                      <i className="far fa-comment fa-fw mr-3"></i>Ask HN
                    </a>
                    <a
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
                      <i className="fas fa-file-invoice-dollar fa-fw mr-3"></i>
                      Jobs
                    </a>
                  </div>
                </div>
                <div className="col-9">
                  <SearchResults />
                  <SearchResultsHot />
                  <AskHN />
                  <ShowHN />
                  <Jobs />
                </div>
              </div>
            </div>
          );
        }}
      </NewsConsumer>
    );
  }
}

export default VerticalNav;

{
}
