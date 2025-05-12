// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import "../assets/css/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/auth");
  };

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="section hero-section">
          <div className="container reverse">
            <div className="content">
              <h1 >
                Welcome to <span className="logo1">ClinicCare</span>
              </h1>
              <p>
                ClinicCare is a user-friendly clinic management system designed
                to help healthcare providers.
              </p>
              <button className="btn" onClick={handleGetStarted}>
                Get Started
              </button>
            </div>
            <div className="image">
              <img src="/images/clinic1.jpg" alt="ClinicCare collection" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about-section">
          <div className="container">
            <div className="content">
              <h1>About Our Platform</h1>
              <p>
                ClinicCare is a user-friendly platform that helps clinics
                efficiently manage patients, appointments, staff, and medical
                records—all in one secure.
              </p>
            </div>
            <div className="image">
              <img src="/images/clinic2.jpg" alt="About our ClinicCare platform" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Ready to organize your records?</h1>
              <p>
                Join our community today and take your clinic management to the
                next level.
              </p>
              <button className="btn" onClick={handleGetStarted}>
                Start Managing Records
              </button>
            </div>
            <div className="image">
              <img src="/images/clinic3.jpg" alt="Record management" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
