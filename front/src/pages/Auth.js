import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import "../assets/css/Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Login logic
        const response = await axios.post("http://localhost:8000/api/login", {
          username: formData.username,
          password: formData.password,
        });
        localStorage.setItem("token", response.data);
        navigate("/dashboard");
      } else {
        // Register logic
        await axios.post("http://localhost:8000/api/register-user", formData);
        setIsLogin(true); // Switch to login after successful registration
        alert("Registration successful! Please login.");
      }
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <Header />
      <main className="auth-container">
        <div className="auth-form">
          <h2>{isLogin ? "Login" : "Register"}</h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div className="form-group">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              {isLogin ? "Sign In" : "Register"}
            </button>
            <p className="auth-switch">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                className="switch-btn"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Auth;
