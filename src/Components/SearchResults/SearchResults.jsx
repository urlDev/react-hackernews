import React, { Component } from "react";
import { NewsConsumer } from "../../Context";
import Button from "../Button/Button";
import "./SearchResults.scss";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlError: true
    };
  }

  render() {
    return (
      <NewsConsumer>
        {value => {
          return (
            <div className="SearchResults">
              {value.all ? (
                value.all.slice(0, value.visible).map(news => {
                  // const url = new URL(`${story.url}`);
                  const getLocation = function(href) {
                    const l = document.createElement("a");
                    l.href = href;
                    return l;
                  };
                  const l = getLocation(`${news.url}`);

                  // getLinkPreview(
                  //   `https://cors-anywhere.herokuapp.com/${story.url}`
                  // ).then(data => {
                  //   const imagePreview = data.images[0];
                  // });

                  return (
                    <div className="col-md-4 news fade-in" key={news.title}>
                      <div className="card">
                        <div className="card-body">
                          <div className="top">
                            <a
                              href={news.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <h1>
                                {news.title.length >= 60
                                  ? `${news.title.slice(0, 60)}...`
                                  : news.title}
                              </h1>
                            </a>
                          </div>

                          <div className="bottom">

                            <span className="bottom-link">
                              (
                              <a
                                href={news.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {l.hostname}
                              </a>
                              )
                            </span>
                            <span
                              className="card-title"
                              onClick={() => value.addFavorite(news)}
                            >
                              {value.star.includes(news) ? (
                                <i
                                  className="fas fa-star"
                                  aria-hidden="true"
                                  style={{ color: "#1E90FF" }}
                                ></i>
                              ) : (
                                <i
                                  className="far fa-star"
                                  aria-hidden="true"
                                ></i>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h1>Loading</h1>
              )}
              {/* if value visible is smaller than popular.length then add button */}
              {value.visible < value.all.length && <Button />}
            </div>
          );
        }}
      </NewsConsumer>
    );
  }
}

export default SearchResults;
