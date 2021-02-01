import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header.js";
import "./components/Header.css";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Projects from "./components/Projects.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route path="/projects">
            <Header />
            <Projects />
            <Footer />
          </Route>
          

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
