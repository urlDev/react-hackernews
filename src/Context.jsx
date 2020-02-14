import React, { Component } from "react";
import axios from "axios";
import { Persist } from "react-persist";

const NewsContext = React.createContext();

const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
const newStoriesUrl = `${baseUrl}newstories.json`;
const topStoriesUrl = `${baseUrl}topstories.json`;
const askStoriesUrl = `${baseUrl}askstories.json`;
const showStoriesUrl = `${baseUrl}showstories.json`;
const jobStoriesUrl = `${baseUrl}jobstories.json`;
const getUrl = `${baseUrl}item/`;

class NewsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: [],
      all: [],
      hot: [],
      ask: [],
      show: [],
      jobs: [],
      //number of news that will be visible at first in homepage
      visible: 10
    };
  }

  componentDidMount() {
    this.getStoryIds();
    // this.getAll();

    this.cleanState();
  }

  //cleans the states for movie lists so they wouldnt stack up
  cleanState = () => {
    this.setState({
      all: [],
      hot: [],
      ask: [],
      show: [],
      jobs: []
    });
  };

  //clears the state of visible to go back to initial state of 10 movies
  clearVisible = () => {
    this.setState({
      visible: 10,
    });
  };


  //first, we get all story data from state(they are ids)
  //then we iterate through them and fetch data for each id
  //then we save them to the news state, with existing state
  //make it an array so we can iterate through them
  //💪🏽
  getAll = () => {
    this.cleanState();
    this.state.id.slice(0, 100).map(id => {
      return axios.get(`${getUrl + id}.json`).then(({ data }) =>
        this.setState({
          all: [...this.state.all, data]
        })
      );
    });
  };

  getAsk = () => {
    this.cleanState();
    this.state.id.map(id => {
      return axios.get(`${getUrl + id}.json`).then(({ data }) => {
        this.setState({
          ask: [...this.state.ask, data]
        });
      });
    });
  };

  getShow = () => {
    this.cleanState();
    this.state.id.map(id => {
      return axios.get(`${getUrl + id}.json`).then(({ data }) => {
        if (data.title.includes("Show HN:")) {
          this.setState({
            show: [...this.state.show, data]
          });
        }
      });
    });
  };

  getHot = () => {
    this.cleanState();
    this.state.id.map(id => {
     return axios.get(`${getUrl + id}.json`).then(({ data }) => {
        this.setState({
          hot: [...this.state.hot, data]
        });
      });
    });
  };

  getJobs = () => {
    this.cleanState();
    this.state.id.map(id => {
      return axios.get(`${getUrl + id}.json`).then(({ data }) => {
        this.setState({
          jobs: [...this.state.jobs, data]
        });
      });
    });
  };

  getStoryIds = async () => {
    await axios
      .get(`${newStoriesUrl}`)
      //this will structure out only data part of the api, cleaner call
      .then(({ data }) =>
        this.setState(
          {
            id: data
          },
          () => {
            this.getAll();
          }
        )
      )
      .catch(error => {
        console.log(error);
      });
  };

  getTopIds = async () => {
    this.setState({
      id: []
    });
    await axios
      .get(`${topStoriesUrl}`)
      //this will structure out only data part of the api, cleaner call
      .then(({ data }) =>
        this.setState(
          {
            id: data
          },
          () => {
            this.getHot();
          }
        )
      )
      .catch(error => {
        console.log(error);
      });
  };

  getAskIds = async () => {
    this.setState({
      id: []
    });
    await axios
      .get(`${askStoriesUrl}`)
      //this will structure out only data part of the api, cleaner call
      .then(({ data }) =>
        this.setState(
          {
            id: data
          },
          () => {
            this.getAsk();
          }
        )
      )
      .catch(error => {
        console.log(error);
      });
  };

  getShowIds = async () => {
    this.setState({
      id: []
    });
    await axios
      .get(`${showStoriesUrl}`)
      //this will structure out only data part of the api, cleaner call
      .then(({ data }) =>
        this.setState(
          {
            id: data
          },
          () => {
            this.getShow();
          }
        )
      )
      .catch(error => {
        console.log(error);
      });
  };

  getJobsIds = async () => {
    this.setState({
      id: []
    });
    await axios
      .get(`${jobStoriesUrl}`)
      //this will structure out only data part of the api, cleaner call
      .then(({ data }) =>
        this.setState(
          {
            id: data
          },
          () => {
            this.getJobs();
          }
        )
      )
      .catch(error => {
        console.log(error);
      });
  };

  //https://codepen.io/grantdotlocal/pen/zReNgE
  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 10 };
    });
  };

  render() {
    return (
      <NewsContext.Provider
        //these methods will be able to used by consumer after putting them here
        value={{
          ...this.state,
          getStoryIds: this.getStoryIds,
          getTopIds: this.getTopIds,
          getAskIds: this.getAskIds,
          getShowIds: this.getShowIds,
          getJobsIds: this.getJobsIds,
          loadMore: this.loadMore,
          clearVisible: this.clearVisible,
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
