import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../includes/Footer";
import HomeHeader from "../includes/HomeHeader";
import "../assets/css/Dashboard.css";

const Dashboard = () => {
  const [patient, setPatient] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/fetch-patient").then((e) => {
      setPatient(e.data.list_of_patients);
    });
  }, []);

  const handleLogout = () => {
    navigate("/logout");
  };

  const DeleteFunction = async (e, id) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/patient-delete/${id}`);
      window.location.reload();
      alert("Deleted Successfully");
    } catch (error) {
      alert(error);
    }
  };

  const searchFunction = async (e) => {
    e.preventDefault();
    axios
      .get(`http://127.0.0.1:8000/api/patient-search?search=${search}`)
      .then((e) => {
        setPatient(e.data.searchList);
      });
  };

  return (
    <>
      <HomeHeader />
      <main>
        <div className="dashboard-container">
          <div></div>
          <div className="dashboard-header">
            <button
              onClick={handleLogout}
              className="btn btn-danger logout-btn "
            >
              Logout
            </button>
          </div>
          <div>
            <h2>Patient Records</h2>
          </div>
          <br></br>
          <div className="card">
            <div className="card-body">
              <div>
                <form onSubmit={searchFunction}>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search here...."
                  />
                  <input type="submit" value="Search" />
                </form>
              </div>
              <table className="table table-hover">
                <thead className="table-primary">
                  <tr id="table-header">
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>View</td>
                    <td>Update</td>
                    <td>Delete</td>
                  </tr>
                </thead>
                <tbody>
                  {patient.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>
                          <Link
                            to={`/view-patient/${item.id}`}
                            className="btn btn-success"
                          >
                            View
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/edit-patient/${item.id}`}
                            className="btn btn-primary"
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button
                            onClick={(e) => DeleteFunction(e, item.id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
