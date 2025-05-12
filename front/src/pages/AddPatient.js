import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AddPatientHeader from "../includes/AddPatientHeader";
import Footer from "../includes/Footer";
import "../assets/css/AddPatient.css";

const AddPatient = () => {
  const [patient, setPatient] = useState({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    address: "",
    medicalHistory: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/add-patient", patient, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("Patient added successfully!");
      navigate("/dashboard");
    } catch (error) {
      alert("Error adding patient");
    }
  };

  return (
    <>
      <AddPatientHeader />
      <main className="container">
        <form onSubmit={handleSubmit} className="patient-form" noValidate>
          <div className="patient-form-container">
            <div className="form-card">
              <div className="form-header">
                <h3 className="form-title">🩺 Add New Patient</h3>
              </div>
              <div className="form-body">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstname" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      id="firstname"
                      name="firstname"
                      value={patient.firstname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastname" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      id="lastname"
                      name="lastname"
                      value={patient.lastname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="age" className="form-label">
                      Age
                    </label>
                    <input
                      type="number"
                      className="form-input"
                      id="age"
                      name="age"
                      value={patient.age}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Gender</label>
                    <div className="gender-options">
                      <div className="gender-option">
                        <input
                          type="radio"
                          name="gender"
                          id="genderMale"
                          value="Male"
                          checked={patient.gender === "Male"}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="genderMale">Male</label>
                      </div>
                      <div className="gender-option">
                        <input
                          type="radio"
                          name="gender"
                          id="genderFemale"
                          value="Female"
                          checked={patient.gender === "Female"}
                          onChange={handleChange}
                        />
                        <label htmlFor="genderFemale">Female</label>
                      </div>
                      <div className="gender-option">
                        <input
                          type="radio"
                          name="gender"
                          id="genderOther"
                          value="Other"
                          checked={patient.gender === "Other"}
                          onChange={handleChange}
                        />
                        <label htmlFor="genderOther">Other</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      id="address"
                      name="address"
                      value={patient.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="medicalHistory" className="form-label">
                      Medical History
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      id="medicalHistory"
                      name="medicalHistory"
                      value={patient.medicalHistory}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-submit">
                    <button type="submit" className="submit-button">
                      ➕ Add Patient
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default AddPatient;
