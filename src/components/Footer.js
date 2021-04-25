import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer__main">
            <div className="footer__social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
            </div>
            <p className="rights">All rights reserve by Isabella Guo</p>
        </div>
    )
}

export default Footer
