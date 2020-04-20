import React, { useContext } from "react";
import { NewsContext } from "../../Context";
import Button from "../Button/Button";
import DefaultNewsComponent from "../DefaultNewsComponent/DefaultNewsComponent"

const Jobs = () => {
  const { jobs, visible } = useContext(NewsContext);

  return (
    <div className="results">
      <DefaultNewsComponent hacker={jobs} />
      {/* if value visible is smaller than popular.length then add button */}
      {visible < jobs.length && <Button />}
    </div>
  );
};

export default Jobs;
