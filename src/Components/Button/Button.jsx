import React, { useContext } from "react";
import { NewsContext } from "../../Context";

import { LoadMore } from "./Button.styles.jsx";

const Button = () => {
  const { loadMore } = useContext(NewsContext);
  return (
    <LoadMore onClick={loadMore} type="button">
      Load more
    </LoadMore>
  );
};

export default Button;
