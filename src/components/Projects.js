import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div classsName="projects__main">
            <div className="skills__texts">
                    <p className="skills__title">
                        SKILL TITLE
                    </p>
                    {/*
                    <p className="projects__subtitle">
                        Skill Subtitle
                    </p>
                    */}
                    <p className="skills__text">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Eget parturient
                    senectus commodo litora dolor taciti augue. Molestie molestie neque
                    viverra lacinia praesent risus quis auctor.
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
                    <button className="projects__link">
                       Project
                    </button>

                </div>
                <div className="projects__card">
                    <p className="projects__title">
                        Sang & Isabella
                    </p>
                    <p className="projects__des">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Eget parturient
                    senectus commodo litora dolor taciti augue.
                    </p>
                    <button className="projects__link">
                        Coming Soon!
                    </button>

                </div>
                <div className="projects__card">
                    <p className="projects__title">
                        Ming's Moving
                    </p>
                    <p className="projects__des">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Eget parturient
                    senectus commodo litora dolor taciti augue.
                    </p>
                    <button className="projects__link">
                        Coming Soon!
                    </button>

                </div>

            </div>
           
        </div>
    )
}

export default Projects;
