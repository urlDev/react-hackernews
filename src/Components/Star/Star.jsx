import React, { Component } from "react";
import { NewsConsumer } from "../../Context";

import "./Star.scss";

class Star extends Component {
  render() {
    return (
      <NewsConsumer>
        {value => {
          return (
            <div className="container Star">
              {value.star.length ? (
                value.star.map(news => {
                  return (
                    <div className="col-md-4 news" key={news.title}>
                      <div className="card">
                        <div className="card-body">
                          <div className="top">
                            <a href={news.url} target="_blank" rel="noopener noreferrer">
                              <h1>{news.title}</h1>
                            </a>
                          </div>

                          <div className="bottom">
                            <h6
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
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h1 className="ml-4 card" style={{height:"15rem"}}>Oops! Forgot something?</h1>
              )}
            </div>
          );
        }}
      </NewsConsumer>
    );
  }
}

export default Star;
