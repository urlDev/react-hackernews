import React, { Component } from "react";
import { NewsConsumer } from "../../Context";
import { ReactTinyLink } from "react-tiny-link";
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
                            <ReactTinyLink
                              cardSize="large"
                              showGraphic={true}
                              maxLine={2}
                              minLine={1}
                              url={`https://cors-anywhere.herokuapp.com/${story.url}`}
                            ><img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/></ReactTinyLink>
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
                              <span className="story__bottom-link">
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
                    );
                  })
                : "loading"}
              {/* if value visible is smaller than popular.length then add button */}
              {value.visible < value.all.length && (
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

export default SearchResults;
