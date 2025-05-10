import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../includes/Header';
import Footer from '../includes/Footer';

const AddStudent = () => {
    const [student, setStudent] = useState({
        firstname: '',
        lastname: '',
        age: '',
        address: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setStudent({...student, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/add-student', student, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            alert('Student added successfully!');
            navigate('/dashboard');
        } catch (error) {
            alert('Error adding student');
        }
    };

    return (
        <>
            <Header />
            <main className="container">
                <h2>Add New Student</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            type="text" 
                            name="firstname" 
                            value={student.firstname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            type="text" 
                            name="lastname" 
                            value={student.lastname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input 
                            type="number" 
                            name="age" 
                            value={student.age}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input 
                            type="text" 
                            name="address" 
                            value={student.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Student</button>
                </form>
            </main>
            <Footer />
        </>
    );
};

export default AddStudent;