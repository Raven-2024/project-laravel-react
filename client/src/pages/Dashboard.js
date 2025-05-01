import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../includes/Footer";
import "../assets/css/Dashboard.css";

const Dashboard = () => {
    const [student, setStudent] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/fetch-student").then(e => {
            setStudent(e.data.list_of_students);
        });
    }, []);

    const handleLogout = () => {
        navigate("/logout");
    };

    const DeleteFunction = async (e, id) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/student-delete/${id}`);
            alert("Deleted Successfully");
        } catch (error) {
            alert(error);
        }
    };

    const searchFunction = async e => {
        e.preventDefault();
        axios
            .get(`http://127.0.0.1:8000/api/student-search?search=${search}`)
            .then(e => {
                setStudent(e.data.searchList);
            });
    };

    return (
        <>
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <div className="dashboard-actions">
                        <Link to="/add-student" className="btn btn-primary">
                            Add Student
                        </Link>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="btn btn-danger logout-btn"
                    >
                        Logout
                    </button>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div>
                            <form onSubmit={searchFunction}>
                                <input
                                    type="text"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    placeholder="Search here...."
                                />
                                <input type="submit" value="Search" />
                            </form>
                        </div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <td>First Name</td>
                                    <td>Last Name</td>
                                    <td>Age</td>
                                    <td>Address</td>
                                    <td>Update</td>
                                    <td>Delete</td>
                                </tr>
                            </thead>
                            <tbody>
                                {student.map(item => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.firstname}</td>
                                            <td>{item.lastname}</td>
                                            <td>{item.age}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <Link
                                                    to={`/display-student-edit/${item.id}`}
                                                    className="btn btn-success"
                                                >
                                                    Edit
                                                </Link>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={e =>
                                                        DeleteFunction(
                                                            e,
                                                            item.id
                                                        )
                                                    }
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
        </>
    );
};

export default Dashboard;
