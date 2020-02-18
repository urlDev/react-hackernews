import React, { Component } from "react";
import { NewsConsumer } from "../../Context";
import { ReactTinyLink } from "react-tiny-link";
import Button from "../Button/Button"

import "./ShowHN.scss";

class ShowHN extends Component {
  render() {
    return (
      <NewsConsumer>
        {value => {
          return (
            <div className="ShowHN">
              {value.show
                ? value.show.slice(0, value.visible).map(story => {
                    // const url = new URL(`${story.url}`);
                    const getLocation = function(href) {
                      const l = document.createElement("a");
                      l.href = href;
                      return l;
                    };
                    const l = getLocation(`${story.url}`);
                    return (
                      <div key={story.id} className="story pl-0 fade-in">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="card md-col-4">
                            <div className="card-body">
                              <div className="top">
                                <a href={`${story.url}`} className="top mt-3" target="_blank" rel="noopener noreferrer">
                                  {story.title.length >= 60 ? `${story.title.slice(0, 60)}...` : story.title}
                                </a>
                              </div>

                              <p className="bottom mt-3">
                                {/* <i className="far fa-heart mr-2"></i>
                                {story.score}
                                <span className="bottom-user ml-5 mr-5">
                                  <i className="far fa-user mr-2"></i>
                                  {story.by}
                                </span> */}
                                <span className="bottom-link">
                                  (<a href={story.url} target="_blank" rel="noopener noreferrer">{l.hostname}</a>)
                                </span>
                                <span onClick={() => value.addFavorite(story)}>
                                  {value.star.includes(story) ? (
                                    <i
                                      className="fas fa-star"
                                      style={{ color: "#1E90FF" }}
                                    ></i>
                                  ) : (
                                    <i className="far fa-star"></i>
                                  )}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    );
                  })
                : "loading"}
                {/* if value visible is smaller than popular.length then add button */}
                      {value.visible < value.show.length && (
                        <Button/>
                      )}
            </div>
          );
        }}
      </NewsConsumer>
    );
  }
}

export default ShowHN;
