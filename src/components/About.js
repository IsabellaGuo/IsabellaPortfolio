import React from 'react';

function About() {
    return (
        <div className="about__main">
        <img className="about__pic" src={"./assets/me.jpg"} alt="myPic" />
        <div className="about__texts">
          <p className="about__title">ABOUT ME</p>
          <p className="about__subtitle">Full Stack Developer</p>
          <p className="about__text">
            I am a full-stack web developer, with a business administration and marketing background. I am fueled by my passion for understanding what the client wants and turn it in to clean code. 
          </p>
          <p className="about__text">
            I consider myself a 'forever student', always eager to learn, keep improving and stay in tune with the latest frameworks. Besides coding, I love playing piano, trying different restaurants, and being curious about the world.
          </p>
          
        </div>
      </div>
    )
}

export default About;
