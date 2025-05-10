import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import Logout from "./pages/Logout"; // NEW IMPORT
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
                        <Route path="/add-student" element={<ProtectedRoute><AddStudent /></ProtectedRoute>} />
                        <Route path="/edit-student/:id" element={<ProtectedRoute><EditStudent /></ProtectedRoute>} />
                        <Route path="/logout" element={<Logout />} /> {/* NEW ROUTE */}
                    </Routes>
                </div>
            </Router>
        </AppProvider>
    );
}

export default App;