import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import "./Admin.css"
function Admin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Validate email
        if (!email.endsWith("@edusity.com")) {
            setError("Email must end with @edusity.com");
            return;
        }

        // Password validation (you can add more checks here)
        if (!password) {
            setError("Password cannot be empty");
            return;
        }

        // Clear error and redirect to dashboard
        setError("");
        navigate("/admindashboard")
    };
  return (
    <div>
        <div className="admin-login-container">
            <form className="admin-login-form" onSubmit={handleLogin}>
                <h2>Admin Login</h2>
                {error && <p className="error-message">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Admin
