import React, { Component } from "react";



const NewsContext = React.createContext();



class NewsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
  
  }

  

  render() {
    return (
      <NewsContext.Provider
        //these methods will be able to used by consumer after putting them here
        value={{
          ...this.state,
          getPicture: this.getPicture
        }}
      >
        {this.props.children}
      </NewsContext.Provider>
    );
  }
}

//Variable for state consumers
const NewsConsumer = NewsContext.Consumer;

export { NewsProvider, NewsConsumer };
