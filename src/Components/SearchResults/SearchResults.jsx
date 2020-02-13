import React, { Component } from "react";
import { NewsConsumer } from "../../Context";

import "./SearchResults.scss";

class SearchResults extends Component {
  render() {
    return (
      <NewsConsumer>
        {value => {
          return (
            <div className="SearchResults">
              {value.news
                ? value.news.map(story => {
                    // const url = new URL(`${story.url}`);
                    const getLocation = function(href) {
                      const l = document.createElement("a");
                      l.href = href;
                      return l;
                    };
                    const l = getLocation(`${story.url}`);
                    return (
                      <div className="story">
                        <div className="row">
                          <div className="col-md-10">
                            <h3>{story.title}</h3>
                            <p className="story__bottom">
                              <i className="far fa-heart mr-2"></i>
                              {story.score}
                              <span className="story__bottom-user ml-5 mr-5">
                                <i className="far fa-user mr-2"></i>
                                {story.by}
                              </span>
                              <span className="story__bottom-link">
                                (<a href={story.url}>{l.hostname}</a>)
                              </span>
                            </p>
                          </div>
                          <div className="col-md-2">
                            <h3>
                              <i className="fas fa-share-alt mr-4"></i>
                              <i className="far fa-star" ></i>
                            </h3>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : "loading"}
            </div>
          );
        }}
      </NewsConsumer>
    );
  }
}

export default SearchResults;
