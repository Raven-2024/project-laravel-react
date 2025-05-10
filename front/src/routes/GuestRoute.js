// src/routes/GuestRoute.js
import { Navigate } from 'react-router-dom';

const GuestRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (token) {
        return <Navigate to="/dashboard" replace />; // Redirect if logged in
    }
    return children;
};

export default GuestRoute;