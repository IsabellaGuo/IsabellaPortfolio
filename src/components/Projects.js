import React from "react";

function Projects() {
  return (
    <div classsName="projects__main">
      <p className="skills__title">SKILLS & PROJECTS</p>
      {/*
                    <p className="projects__subtitle">
                        Skill Subtitle
                    </p>
                    */}
      <div className="skills__icons">
        <a href="#">
          <i className="skill_icon" class="fab fa-html5"></i>
        </a>
        <a href="#">
          <i className="skill_icon" class="fab fa-css3-alt"></i>
        </a>
        <a href="#">
          <i className="skill_icon" class="fab fa-js-square"></i>
        </a>
        <a href="#">
          <i className="skill_icon" class="fab fa-react"></i>
        </a>
        <a href="#">
          <i className="skill_icon" class="fab fa-node-js"></i>
        </a>
        <a href="#">
          <i className="skill_icon" class="fab fa-python"></i>
        </a>
      </div>
      <div className="projects__cards">
        <div className="projects__card">
          <p className="projects__title">SKL Properties</p>
          <p className="projects__des">
          A responsive, full-stack and single-page application built for a client to help him with his property management.
          </p>
          <a
            className="projects__link"
            href="https://skl-properties.herokuapp.com/"
            target="_blank"
          >
            Project
          </a>
        </div>
        <div className="projects__card">
          <p className="projects__title">Sang & Isabella</p>
          <p className="projects__des">
            The pandemic stopped many things, but not love. Sang & Isabella's wedding website will be released on their first wedding anniversary!
          </p>
          <a className="projects__link" href="" target="_blank">
            Coming Soon!
          </a>
        </div>
        <div className="projects__card">
          <p className="projects__title">Ming's Moving</p>
          <p className="projects__des">
            This website will be designed for a local moving business. It will allow customers able to see Ming's availabilities and book his service online. 
          </p>
          <a className="projects__link" href="" target="_blank">
            Coming Soon!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
