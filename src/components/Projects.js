import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div classsName="projects__main">
            <div className="skills__texts">
                    <p className="skills__title">
                        SKILL & PROJECTS
                    </p>
                    {/*
                    <p className="projects__subtitle">
                        Skill Subtitle
                    </p>
                    */}
                    <p className="skills__text">
                    I have a diverse set of skills, ranging from front-end to back-end. My favorite languages are Javascript and Python. 
                    </p>
            </div>
            <div className="projects__cards">
                <div className="projects__card">
                    <p className="projects__title">
                        SKL Properties
                    </p>
                    <p className="projects__des">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Eget parturient
                    senectus commodo litora dolor taciti augue.
                    </p>
                    <a className="projects__link" href="https://skl-properties.herokuapp.com/" target="_blank">Project</a>

                </div>
                <div className="projects__card">
                    <p className="projects__title">
                        Sang & Isabella
                    </p>
                    <p className="projects__des">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Eget parturient
                    senectus commodo litora dolor taciti augue.
                    </p>
                    <a className="projects__link" href="" target="_blank">Coming Soon!</a>

                </div>
                <div className="projects__card">
                    <p className="projects__title">
                        Ming's Moving
                    </p>
                    <p className="projects__des">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Eget parturient
                    senectus commodo litora dolor taciti augue.
                    </p>
                    <a className="projects__link" href="" target="_blank">Coming Soon!</a>

                </div>

            </div>
           
        </div>
    )
}

export default Projects;
