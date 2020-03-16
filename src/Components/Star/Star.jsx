import React, { useContext } from "react";
import { NewsContext } from "../../Context";

import "./Star.scss";

const Star = () => {
  const { star, addFavorite } = useContext(NewsContext);
  return (
    <div className="container Star">
      {star.length ? (
        star.map(news => {
          return (
            <div className="col-md-4 news fade-out" key={news.title}>
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
                    <h6
                      className="card-title"
                      onClick={() => addFavorite(news)}
                    >
                      {star.includes(news) ? (
                        <i
                          className="fas fa-star"
                          aria-hidden="true"
                          style={{ color: "#1E90FF" }}
                        ></i>
                      ) : (
                        <i className="far fa-star" aria-hidden="true"></i>
                      )}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="ml-4 card" style={{ height: "15rem" }}>
          Oops! Forgot something?
        </h1>
      )}
    </div>
  );
};

export default Star;
