import React from "react";
import NavTop from "./Components/NavTop/NavTop.jsx";
import VerticalNav from "./Components/VerticalNav/VerticalNav.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Social from "./Components/Social/Social.jsx";
import Star from "./Components/Star/Star.jsx"

import { Switch, Route } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="all">
        <NavTop />
        <Hero />
      </div>
      <Switch>
        <Route exact path="/" component={VerticalNav} />
        <Route path="/star" component={Star} />
      </Switch>
      <Social />
      <Footer />
    </div>
  );
}

export default App;
