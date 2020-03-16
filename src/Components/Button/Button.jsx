import React, { useContext } from "react";
import { NewsContext } from "../../Context";
import "./Button.scss";

const Button = () => {
  const { loadMore } = useContext(NewsContext);
  return (
    <button onClick={loadMore} type="button" className="load-more">
      Load more
    </button>
  );
};

export default Button;
