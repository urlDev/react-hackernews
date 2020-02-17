import React from "react";
import NavTop from "./Components/NavTop/NavTop.jsx";
import VerticalNav from "./Components/VerticalNav/VerticalNav.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Footer from "./Components/Footer/Footer.jsx"

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="all">
        <NavTop />
        <Hero />
      </div>
      <VerticalNav />
      <Footer/>
    </div>
  );
}

export default App;
