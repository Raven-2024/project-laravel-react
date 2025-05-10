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
                            <h1>
                                Welcome to{" "}
                                <span className="logo1">LutongBahay</span>
                            </h1>
                            <p>
                                Your personal recipe management system to
                                organize, share, and discover delicious
                                home-cooked meals
                            </p>
                            <button className="btn" onClick={handleGetStarted}>
                                Get Started
                            </button>
                        </div>
                        <div className="image">
                            <img
                                src="/images/home.png"
                                alt="Recipe collection"
                            />
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="section about-section">
                    <div className="container">
                        <div className="content">
                            <h1>About Our Platform</h1>
                            <p>
                                LutongBahay helps home cooks manage their
                                recipes, create meal plans, and share culinary
                                creations with a community of food enthusiasts.
                            </p>
                        </div>
                        <div className="image">
                            <img
                                src="/images/about.png"
                                alt="About our recipe platform"
                            />
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="section services-section">
                    <div className="container vertical">
                        <h1>Our Features</h1>
                        <div className="card-container">
                            <div className="card">
                                <div className="card-image">
                                    <img
                                        src="/images/services1.png"
                                        alt="Recipe organization"
                                    />
                                </div>
                                <div className="card-content">
                                    <h3>Recipe Organization</h3>
                                    <p>
                                        Store and categorize all your favorite
                                        recipes in one convenient place.
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-image">
                                    <img
                                        src="/images/services2.png"
                                        alt="Meal planning"
                                    />
                                </div>
                                <div className="card-content">
                                    <h3>Meal Planning</h3>
                                    <p>
                                        Create weekly meal plans and generate
                                        shopping lists automatically.
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-image">
                                    <img
                                        src="/images/services3.png"
                                        alt="Dietary filters"
                                    />
                                </div>
                                <div className="card-content">
                                    <h3>Dietary Filters</h3>
                                    <p>
                                        Filter recipes by dietary needs and
                                        personal preferences.
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-image">
                                    <img
                                        src="/images/services4.png"
                                        alt="Community sharing"
                                    />
                                </div>
                                <div className="card-content">
                                    <h3>Community Sharing</h3>
                                    <p>
                                        Share your recipes and discover new
                                        favorites from other home cooks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <h1>Ready to organize your recipes?</h1>
                            <p>
                                Join our community today and take your meal
                                planning to the next level.
                            </p>
                            <button className="btn" onClick={handleGetStarted}>
                                Start Managing Recipes
                            </button>
                        </div>
                        <div className="image">
                            <img
                                src="/images/cta-image.png"
                                alt="Recipe management"
                            />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;
