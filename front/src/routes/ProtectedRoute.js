// src/routes/ProtectedRoute.js
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/auth" replace />; // Redirect to auth if no token
    }
    return children;
};

export default ProtectedRoute;