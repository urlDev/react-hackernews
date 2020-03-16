import React from "react";
import All from "../All/All";
import Hot from "../Hot/Hot";
import AskHN from "../AskHN/AskHN";
import ShowHN from "../ShowHN/ShowHN";
import Jobs from "../Jobs/Jobs";

import "./ShowResults.scss";

//https://stackoverflow.com/questions/27969485/space-between-link-and-icon-fontawesome
//to stack all the nav elements in same line
const ShowResults = () => {
  return (
    <div className="showResults col-md-12 mt-5">
      <div className="container">
        <All />
        <Hot />
        <AskHN />
        <ShowHN />
        <Jobs />
      </div>
    </div>
  );
};

export default ShowResults;
