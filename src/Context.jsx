import React, { Component } from "react";
import axios from "axios";
import { Persist } from "react-persist";

const NewsContext = React.createContext();

const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
const newStoriesUrl = `${baseUrl}newstories.json`;
const storyUrl = `${baseUrl}item/`;

class NewsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: [],
      news: []
    };
  }

  componentDidMount() {
    this.getStoryIds();
  }

//first, we get all story data from state(they are ids)
//then we iterate through them and fetch data for each id 
//then we save them to the news state, with existing state
//make it an array so we can iterate through them
//💪🏽
  getStory = () => {
    this.state.all.slice(0, 20).map(id => {
      axios.get(`${storyUrl + id}.json`).then(({ data }) =>
        this.setState(
          {
            news: [...this.state.news, data]
          },
          () => console.log(this.state.news)
        )
      );
    });
  };

  getStoryIds = async () => {
    await axios
      .get(`${newStoriesUrl}`)
      //this will structure out only data part of the api, cleaner call
      .then(({ data }) =>
        this.setState(
          {
            all: data
          },
          () => {
            this.getStory();
          }
        )
      )
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <NewsContext.Provider
        //these methods will be able to used by consumer after putting them here
        value={{
          ...this.state
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
