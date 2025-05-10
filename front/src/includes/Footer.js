// src/includes/Footer.js
import React from "react";
import "../assets/css/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="copyright">
                <p>
                    &copy; {new Date().getFullYear()} ClinicCare. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
