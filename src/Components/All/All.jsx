import React, { useContext } from "react";
import { NewsContext } from "../../Context";
import Button from "../Button/Button";

import DefaultNewsComponent from "../DefaultNewsComponent/DefaultNewsComponent"

const All = () => {
  const { all, visible} = useContext(NewsContext);
  return (
    <div className="results">
      <DefaultNewsComponent hacker={all}/>
      {/* if value visible is smaller than popular.length then add button */}
      {visible < all.length && <Button />}
    </div>
  );
};

export default All;
