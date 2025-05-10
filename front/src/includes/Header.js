// src/includes/Header.js
import React from "react";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Header.css";

const Header = () => {
    const { isMobileMenuOpen, toggleMobileMenu } = useAppContext();

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">LutongBahay</div>

                <nav
                    className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}
                >
                    <Link to="/">Home</Link>
                    <Link to="#about">About</Link>
                    <Link to="#services">Services</Link>
                    <Link to="/auth" className="get-started">
                        Get Started
                    </Link>
                </nav>

                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </header>
    );
};

export default Header;
