import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AddPatientHeader from "../includes/AddPatientHeader";
import Footer from "../includes/Footer";
import "../assets/css/AddPatient.css";

const EditPatient = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    address: "",
    medicalHistory: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/patient-edit/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setPatient(response.data.patient);
      } catch (error) {
        alert("Error fetching patient data");
      }
    };
    fetchPatient();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8000/api/patient-update/${id}`,
        patient,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Patient updated successfully!");
      navigate("/dashboard");
    } catch (error) {
      alert("Error updating patient");
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
                <h3 className="form-title">Patient Record</h3>
              </div>
              <div className="form-body">
                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="firstname" className="form-label ">
                      First Name:
                    </label>
                    {patient.firstname}
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastname" className="form-label">
                      Last Name:
                    </label>
                    {patient.lastname}
                  </div>

                  <div className="form-group">
                    <label htmlFor="age" className="form-label">
                      Age:
                    </label>
                    {patient.age}
                  </div>

                  <div className="form-group">
                    <label htmlFor="gender" className="form-label">
                      Gender:
                    </label>
                    {patient.gender}
                  </div>

                  <div className="form-group">
                    <label htmlFor="address" className="form-label">
                      Address:
                    </label>
                    {patient.address}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="medicalHistory" className="form-label">
                      Medical History:
                    </label>
                    {patient.medicalHistory}
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

export default EditPatient;
