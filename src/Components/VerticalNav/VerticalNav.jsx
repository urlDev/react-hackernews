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
                <div className="col-12">
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
