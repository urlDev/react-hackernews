import React, { Component, createContext } from "react";
import axios from "axios";
import { Persist } from "react-persist";

export const NewsContext = createContext();

const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
const newStoriesUrl = `${baseUrl}newstories.json`;
const topStoriesUrl = `${baseUrl}topstories.json`;
const askStoriesUrl = `${baseUrl}askstories.json`;
const showStoriesUrl = `${baseUrl}showstories.json`;
const jobStoriesUrl = `${baseUrl}jobstories.json`;
const getUrl = `${baseUrl}item/`;

class NewsContextProvider extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      id: [],
      all: [],
      allImages: [],
      hot: [],
      ask: [],
      show: [],
      jobs: [],
      //number of news that will be visible at first in homepage
      visible: 10,
      //starred news array
      star: [],
      onStar: false,
    };
  }


//these are for ending subscription after fetching data.
//so there wouldnt be any memory leaks. 
//it only happened with storyIds, getall news.
  CancelToken = axios.CancelToken;
  source = this.CancelToken.source();

  abortController = new AbortController();

  componentDidMount() {
    this._isMounted = true;
    this.getStoryIds();
    this.cleanState();
    this.setState({
      onStar: false
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.abortController.abort();
  }

  //cleans the states for news lists so they wouldnt stack up
  cleanState = () => {
    this.setState({
      // star:[],
      all: [],
      hot: [],
      ask: [],
      show: [],
      jobs: [],
      allImages: []
    });
  };

  //clears the state of visible to go back to initial state of 10 news
  clearVisible = () => {
    this.setState({
      visible: 10
    });
  };


//i didnt like how the social component shows on star component
//so i wanted to check if user is in star page so i can make social components position absolute
  onStarPage = () => {
    this.setState({
      onStar: true
    })
  }

  onDifferentPage = () => {
    this.setState({
      onStar:false
    })
  }

  //first, we get all story data from state(they are ids)
  //then we iterate through them and fetch data for each id
  //then we save them to the news state, with existing state
  //make it an array so we can iterate through them
  //💪🏽
  getAll = () => {
    this.cleanState();
    this.state.id.slice(0, 50).map(id => {
     return fetch(`${getUrl + id}.json`, { signal: this.abortController.signal })
        .then(results => results.json())
        .then(data => 
          this.setState({
            all:[...this.state.all, data]
          })
        )
        .catch(err => {
          console.log("err", err.name);
          if (err.name === "AbortError") return;
          throw (err);
        });
    });
  };

/***********************/

//wanted to get images too but cors issues and rate limiting.

/*******************************/
  // allImages: [ ...this.state.allImages,  `${data.images[0]}`]
  // getAllImages = () => {
  //   this.cleanState()
  //   this.state.jobs.map(id => {
  //     return getLinkPreview(
  //       `https://cors-anywhere.herokuapp.com/${id.url}`
  //     ).then(data => {
  //       this.setState({
  //         allImages: [...this.state.allImages, data]
  //       }, console.log(this.state.allImages))
  //     });
  //   });
  // };

  getAsk = () => {
    this.cleanState();
    this.state.id.map(id => {
      return axios.get(`${getUrl + id}.json`).then(({ data }) => {
        if (this._isMounted) {
          this.setState({
            ask: [...this.state.ask, data]
          });
        }
      });
    });
  };

  getShow = () => {
    this.cleanState();
    this.state.id.map(id => {
      return axios.get(`${getUrl + id}.json`).then(({ data }) => {
        if (this._isMounted) {
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
        if (this._isMounted) {
          this.setState({
            hot: [...this.state.hot, data]
          });
        }
      });
    });
  };

  getJobs = () => {
    this.cleanState();
    this.state.id.map(id => {
      return axios.get(`${getUrl + id}.json`).then(({ data }) => {
        if (this._isMounted) {
          this.setState({
            jobs: [...this.state.jobs, data]
          });
        }
      });
    });
  };

  getStoryIds = async () => {
    await axios
      .get(`${newStoriesUrl}`)
      //this will structure out only data part of the api, cleaner call
      .then(({ data }) => {
        if (this._isMounted) {
          this.setState(
            {
              id: data
            },
            () => {
              this.getAll();
              // this.getAllImages();
            }
          );
        }
      })
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
      .then(({ data }) => {
        if (this._isMounted) {
          this.setState(
            {
              id: data
            },
            () => {
              this.getHot();
            }
          );
        }
      })
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
      .then(({ data }) => {
        if (this._isMounted) {
          this.setState(
            {
              id: data
            },
            () => {
              this.getAsk();
            }
          );
        }
      })
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
      .then(({ data }) => {
        if (this._isMounted) {
          this.setState(
            {
              id: data
            },
            () => {
              this.getShow();
            }
          );
        }
      })
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
      .then(({ data }) => {
        if (this._isMounted) {
          this.setState(
            {
              id: data
            },
            () => {
              this.getJobs();
              // this.getAllImages();
            }
          );
        }
      })
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


//in scriptbase project, i thought adding url only adds url. but in here, i learned that this way it add whole object elements
//so now i can use whatever is inside that object.
  addFavorite = (url) => {
    const {star } = this.state;
    let copyStar = [...star];
    //if it doesnt include, add
    if (!star.includes(url)) {
      copyStar.push(url);
      this.setState({ star: copyStar });
      //if it includes, remove
      //https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript
    } else {
      copyStar = copyStar.filter(news => news !== url);
      this.setState({ star: copyStar });
    }
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
          addFavorite: this.addFavorite,
          cleanState: this.cleanState,
          onStarPage: this.onStarPage,
          onDifferentPage: this.onDifferentPage
        }}
      >
        {this.props.children}
        <Persist
          name="news"
          data={this.state}
          debounce={500}
          onMount={data => this.setState(data)}
        />
      </NewsContext.Provider>
    );
  }
}


export default NewsContextProvider;
