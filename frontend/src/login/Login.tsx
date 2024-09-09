import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Import CSS for styling

const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: "",
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.email !== "" && input.password !== "") {
            // axios call to backend
        }
        alert("Enter valid email and password")
    }

    return (
        <div className="login-container">
        {/* Left section - Login form */}
        <div className="login-section">
            <h2>Sign in to your account</h2>
            <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" onChange={handleInput} required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" onChange={handleInput} required />
            </div>
            <button type="submit" className="login-button">
                Login
            </button>
            </form>
        </div>

        {/* Right section - Image */}
        <div className="image-section">
            <img
            src="https://via.placeholder.com/600x800" // Replace with your desired image URL
            alt="Login Illustration"
            />
        </div>
        </div>
    );
};

export default Login;
