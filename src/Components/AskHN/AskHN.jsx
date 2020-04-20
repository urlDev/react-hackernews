import React, { useContext } from "react";
import { NewsContext } from "../../Context";
import Button from "../Button/Button";
import DefaultNewsComponent from "../DefaultNewsComponent/DefaultNewsComponent"

const AskHN = () => {
  const { ask, visible} = useContext(NewsContext);
  return (
    <div className="results">
      <DefaultNewsComponent hacker={ask}/>
      {/* if value visible is smaller than popular.length then add button */}
      {visible < ask.length && <Button />}
    </div>
  );
};

export default AskHN;
