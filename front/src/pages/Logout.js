import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios
            .post(
                "http://localhost:8000/api/logout",
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then(() => {
                localStorage.removeItem("token");
                navigate("/auth");
            })
            .catch(error => {
                console.error(
                    "Logout failed:",
                    error.response?.data || error.message
                );

                localStorage.removeItem("token");
                navigate("/auth");
            });
    }, [navigate]);

    return <p>Logging out...</p>;
}

export default Logout;
