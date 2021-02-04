import React from 'react';

function About() {
    return (
        <div className="about__main">
        <img src={"./assets/me.jpg"} alt="myPic" />
        <div className="about__texts">
          <p className="about__title">ABOUT ME</p>
          <p className="about__subtitle">Full Stack Developer</p>
          <p className="about__text">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Eget parturient
            senectus commodo litora dolor taciti augue. Molestie molestie neque
            viverra lacinia praesent risus quis auctor.
          </p>
          <p className="about__text">
            Malesuada cursus lobortis nascetur; rutrum senectus dis tempus. Cras
            eu class ipsum proin platea felis torquent quam. Interdum neque
            aenean lacinia pulvinar ligula.
          </p>
          <button>Hire Me</button>
          <button>Download CV</button>
        </div>
      </div>
    )
}

export default About;
