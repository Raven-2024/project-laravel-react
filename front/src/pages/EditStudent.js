import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../includes/Header';
import Footer from '../includes/Footer';

const EditStudent = () => {
    const { id } = useParams();
    const [student, setStudent] = useState({
        firstname: '',
        lastname: '',
        age: '',
        address: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/student-edit/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setStudent(response.data.student);
            } catch (error) {
                alert('Error fetching student data');
            }
        };
        fetchStudent();
    }, [id]);

    const handleChange = (e) => {
        setStudent({...student, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/student-update/${id}`, student, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            alert('Student updated successfully!');
            navigate('/dashboard');
        } catch (error) {
            alert('Error updating student');
        }
    };

    return (
        <>
            <Header />
            <main className="container">
                <h2>Edit Student</h2>
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
                    <button type="submit" className="btn btn-primary">Update Student</button>
                </form>
            </main>
            <Footer />
        </>
    );
};

export default EditStudent;