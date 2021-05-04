import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <nav className="header__main">
            <img className="header__logo" src={"./assets/logo.jpg"} alt="logo"  />
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
                    <span>Contact</span>
                </Link>
                
            </div>
        </nav>
    )
}

export default Header
