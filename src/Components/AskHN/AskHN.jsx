import React, { Component } from "react";
import { NewsConsumer } from "../../Context";

import "./AskHN.scss";

class AskHN extends Component {
  render() {
    return (
      <NewsConsumer>
        {value => {
          return (
            <div className="AskHN">
              {value.ask
                ? value.ask.slice(0, value.visible).map(story => {
                    return (
                      <div className="story pl-0 fade-in">
                        <div className="row">
                          {/* <div className="col-md-2">
                          
                          </div> */}
                          <div className="col-md-10">
                            <a href={`${story.url}`} className="story__top">
                              {story.title}
                            </a>
                            <p className="story__bottom">
                              <i className="far fa-heart mr-2"></i>
                              {story.score}
                              <span className="story__bottom-user ml-5 mr-5">
                                <i className="far fa-user mr-2"></i>
                                {story.by}
                              </span>
                            </p>
                          </div>
                          <div className="col-md-2">
                            <h3>
                              <i className="fas fa-share-alt mr-4"></i>
                              <i className="far fa-star"></i>
                            </h3>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : "loading"}
              {/* if value visible is smaller than popular.length then add button */}
              {value.visible < value.ask.length && (
                <button
                  onClick={value.loadMore}
                  type="button"
                  className="load-more"
                >
                  Load more
                </button>
              )}
            </div>
          );
        }}
      </NewsConsumer>
    );
  }
}

export default AskHN;
