import React, { Component } from "react";

import "./Search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container search p-0">
        <form class="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn  my-2 my-sm-0" type="submit">
            <i className="fas fa-search "></i>
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
