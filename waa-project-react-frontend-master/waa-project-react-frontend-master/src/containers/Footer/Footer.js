import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import hasRole from "../../util/hasRole";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">NextHome © 2024</div>
                <div className="footer-developers">
                    🥳 Developed by
                    <a href=""> RASHI JAIN</a>
                    <a href="">RANGANATH</a>
                    {/*<a href="https://github.com/Aakartion">Aakarshan Simkhada</a>*/}
                    {/*<a href="https://github.com/sameerstha0012">Basanta Shrestha</a>*/}
                    {/*<a href="https://github.com/sanjeev-thapa">Sanjeev Thapa</a>*/}
                </div>
            </div>
        </footer>
    )
}


export default Footer;