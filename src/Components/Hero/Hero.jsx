import React, { useContext } from "react";
import { NewsContext } from "../../Context";

import "./Hero.scss";

const Hero = () => {
  const { all, hot, ask, show, jobs, star } = useContext(NewsContext);
  
  return (
    <div className="hero container">
      {all.length > 0 ? (
        <h1 className="display-1 fade-in">all</h1>
      ) : hot.length > 0 ? (
        <h1 className="display-1 fade-in">hot</h1>
      ) : ask.length > 0 ? (
        <h1 className="display-1 fade-in">ask</h1>
      ) : show.length > 0 ? (
        <h1 className="display-1 welcome fade-in">show</h1>
      ) : jobs.length > 0 ? (
        <h1 className="display-1 fade-in">jobs</h1>
      ) : star.length > 0 ? (
        <h1 className="display-1 welcome fade-in">starred</h1>
      ) : (
        null
      )}
    </div>
  );
};

export default Hero;
