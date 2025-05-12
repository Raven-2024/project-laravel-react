// src/includes/Header.js
import React from "react";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

const HomeHeader = () => {
  const { isMobileMenuOpen } = useAppContext();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">ClinicCare</div>

        <nav className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/add-patient" className="add-patient">Add Patient</Link>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
