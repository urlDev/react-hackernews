import React, { Component } from "react";
import { NewsConsumer } from "../../Context";
import "./Button.scss";

class Button extends Component {
  render() {
    return (
      <NewsConsumer>
        {value => {
          return (
            <button
              onClick={value.loadMore}
              type="button"
              className="load-more"
            >
              Load more
            </button>
          );
        }}
      </NewsConsumer>
    );
  }
}

export default Button;
