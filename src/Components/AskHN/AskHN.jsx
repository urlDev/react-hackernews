import React, { Component } from "react";
import { NewsConsumer } from "../../Context";
import Button from "../Button/Button";

import "./AskHN.scss";

class AskHN extends Component {
  render() {
    return (
      <NewsConsumer>
        {value => {
          return (
            <div className="AskHN">
              {value.ask
                ? value.ask.slice(0, value.visible).map(news => {
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

                            {/* <span className="bottom-link">
                              (
                              <a
                                href={news.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {l.hostname}
                              </a>
                              )
                            </span> */}
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
                : "loading"}
              {/* if value visible is smaller than popular.length then add button */}
              {value.visible < value.ask.length && <Button />}
            </div>
          );
        }}
      </NewsConsumer>
    );
  }
}

export default AskHN;
