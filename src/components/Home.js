import React from "react";
import About from "./About.js";
import "./About.css"
import "./Home.css";
import Skills from "./Skills.js";
import "./Skills.css";
import Contact from "./Contact.js";
import "./Contact.css";
import Footer from "./Footer.js";
import "./Footer.css";

function Home() {
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
            <button className="button__hire">Hire Me</button>
            <button className="button__cv">Download CV</button>
          </div>
        </div>

        <img src={"./assets/me.jpg"} alt="myPic" />
      </div>
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
