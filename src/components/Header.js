import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <nav className="header__main">
            <a href="#" className="header__logo">Logo</a>
            <div className="header__nav">
                <Link to="/" className="header__link">
                    <span>Home</span>
                </Link>
                <Link to="/about" className="header__link">
                    <span>About</span>
                </Link>
                <Link to="/projects" className="header__link">
                    <span>Projects</span>
                </Link>
                <Link to="/contact" className="header__link">
                    <span>Contact Me</span>
                </Link>
                
            </div>
        </nav>
    )
}

export default Header
