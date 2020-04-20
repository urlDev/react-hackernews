import React, { useContext } from "react";
import { NewsContext } from "../../Context";
import Button from "../Button/Button";
import DefaultNewsComponent from "../DefaultNewsComponent/DefaultNewsComponent"

const Hot = () => {
  const { hot, visible } = useContext(NewsContext);

  return (
    <div className="results">
      <DefaultNewsComponent hacker={hot} />
      {/* if value visible is smaller than popular.length then add button */}
      {visible < hot.length && <Button />}
    </div>
  );
};

export default Hot;
