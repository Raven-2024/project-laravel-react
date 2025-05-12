import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import AddPatient from "./pages/AddPatient";
import EditPatient from "./pages/EditPatient";  
import Dashboard from "./pages/Dashboard";
import ViewPatient from "./pages/ViewPatient"
import Logout from "./pages/Logout";
import ProtectedRoute from "./routes/ProtectedRoute";
import GuestRoute from "./routes/GuestRoute";
import "./assets/css/App.css";


function App() {
    return (
        <AppProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<GuestRoute><Home /></GuestRoute>} />
                        <Route path="/auth" element={<GuestRoute><Auth /></GuestRoute>} />
                        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                        <Route path="/add-patient" element={<ProtectedRoute><AddPatient /></ProtectedRoute>} />
                        <Route path="/view-patient/:id" element={<ProtectedRoute><ViewPatient /></ProtectedRoute>} />
                        <Route path="/edit-patient/:id" element={<ProtectedRoute><EditPatient /></ProtectedRoute>} />
                        <Route path="/logout" element={<Logout />} /> {/* NEW ROUTE */}
                    </Routes>
                </div>
            </Router>
        </AppProvider>
    );
}

export default App;