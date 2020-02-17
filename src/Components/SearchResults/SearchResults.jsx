import React, { Component } from "react";
import { NewsConsumer } from "../../Context";
import { ReactTinyLink } from "react-tiny-link";
import Button from "../Button/Button"
import "./SearchResults.scss";

class SearchResults extends Component {
  render() {
    return (
      <NewsConsumer>
        {value => {
          return (
            <div className="SearchResults">
              {value.all
                ? value.all.slice(0, value.visible).map(story => {
                    // const url = new URL(`${story.url}`);
                    const getLocation = function(href) {
                      const l = document.createElement("a");
                      l.href = href;
                      return l;
                    };
                    const l = getLocation(`${story.url}`);

                    // getLinkPreview(
                    //   `https://cors-anywhere.herokuapp.com/${story.url}`
                    // ).then(data => {
                    //   const imagePreview = data.images[0];
                    // });

                    return (
                      <div key={story.id} className="story pl-0 fade-in">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="card md-col-4">
                              <ReactTinyLink
                                cardSize="large"
                                showGraphic={true}
                                maxLine={2}
                                minLine={1}
                                url={`https://cors-anywhere.herokuapp.com/${story.url}`}
                              />
                              <div className="card-body">
                                <a href={`${story.url}`} className="top mt-3">
                                  {story.title}
                                </a>
                                <p className="bottom mt-3">
                                  <i className="far fa-heart mr-2"></i>
                                  {story.score}
                                  <span className="bottom-user ml-5 mr-5">
                                    <i className="far fa-user mr-2"></i>
                                    {story.by}
                                  </span>
                                  <span className="bottom-link">
                                    (<a href={story.url}>{l.hostname}</a>)
                                  </span>
                                </p>
                                {/* <div className="col-md-2">
                            <h3>
                              <i className="fas fa-share-alt mr-4"></i>
                              <i className="far fa-star"></i>
                            </h3>
                          </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : "loading"}
              {/* if value visible is smaller than popular.length then add button */}
              {value.visible < value.all.length && (
                <Button/>
              )}
            </div>
          );
        }}
      </NewsConsumer>
    );
  }
}

export default SearchResults;
