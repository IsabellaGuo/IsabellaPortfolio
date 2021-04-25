import React from "react";

import About from "./About.js";
import "./About.css"
import "./Home.css";
import Projects from "./Projects.js";
import "./Projects.css";
import Contact from "./Contact.js";
import "./Contact.css";
import Footer from "./Footer.js";
import "./Footer.css";
import { Link, useHistory } from "react-router-dom";

function Home() {

  const history = useHistory();

  const routeToContact = () => {
    history.push("/contact")
  }
  return (
    <div className="home__main">
      <div className="home__banner">
        <div className="home__bannerinfo">
          <div className="home__text">
            <p>Hello,</p>
            <p>I'M ISABELLA</p>
            <p>I am a Full-Stack Developer</p>
          </div>
          <div className="home__button">
            <button className="button__hire" onClick={routeToContact}>Hire Me</button>
            <a className="a__cv" href="./assets/cv.pdf" target="_blank">Download CV</a>
            
          </div>
        </div>

        <img src={"./assets/me.jpg"} alt="myPic" />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
