import React from "react";
import "./Footer.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="content">
                <div className="row">
                    <div className="column-logo">
                        <h2 className="logo">
                        </h2>
                    </div>
                    <div className="column">
                        <h4>About Us</h4>
                        <ul className="list">
                            <li>Team</li>
                            <li>Clients</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Services</h4>
                        <ul className="list">
                            <li>Places</li>
                            <li>Products</li>
                            <li>Recipes</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Contact Us</h4>
                        <ul className="list">
                            <li>E-Mail</li>
                            <li>Facebook</li>
                            <li>Call US</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="rights">
                    <p>&copy; {new Date().getFullYear()} <span className="logo"></span> | All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;