import React, { Suspense } from "react";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

import "./ShowResults.scss";

const All = React.lazy(() => import("../All/All"));
const Hot = React.lazy(() => import("../Hot/Hot"));
const AskHN = React.lazy(() => import("../AskHN/AskHN"));
const ShowHN = React.lazy(() => import("../ShowHN/ShowHN"));
const Jobs = React.lazy(() => import("../Jobs/Jobs"));

//https://stackoverflow.com/questions/27969485/space-between-link-and-icon-fontawesome
//to stack all the nav elements in same line
const ShowResults = () => {
  return (
    <div className="showResults col-md-12 mt-5">
      <div className="container">
        <Suspense fallback={<div>Loading</div>}>
          <ErrorBoundary>
            <All />
            <Hot />
            <AskHN />
            <ShowHN />
            <Jobs />
          </ErrorBoundary>
        </Suspense>
      </div>
    </div>
  );
};

export default ShowResults;
