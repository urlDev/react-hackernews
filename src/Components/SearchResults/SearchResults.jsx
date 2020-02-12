import React, { Component } from "react";
import { NewsConsumer } from "../../Context";

import "./SearchResults.scss";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NewsConsumer>
        {value => {
          const newsArray = Object.entries(value.news)  
          console.log(newsArray)
          return (
            <div className="SearchResults">
            {newsArray ? newsArray.forEach(i => {
                return ( 
                    <h1 key={i.id}>{i.title}</h1>
                )
            }) : "loading" }
              
            </div>
          );
        }}
      </NewsConsumer>
    );
  }
}

export default SearchResults;
