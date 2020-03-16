import React, { useContext } from "react";
import { NewsContext } from "../../Context";
import Button from "../Button/Button";

const Jobs = () => {
  const { jobs, star, visible, addFavorite } = useContext(NewsContext);

  return (
    <div className="results">
      {jobs
        ? jobs.slice(0, visible).map(news => {
            // const url = new URL(`${story.url}`);
            const getLocation = function(href) {
              const l = document.createElement("a");
              l.href = href;
              return l;
            };
            const l = getLocation(`${news.url}`);
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
                      <span
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
                      </span>
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
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : "loading"}
      {/* if value visible is smaller than popular.length then add button */}
      {visible < jobs.length && <Button />}
    </div>
  );
};

export default Jobs;
