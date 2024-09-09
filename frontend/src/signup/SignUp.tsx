// Login.js
import React from "react";
import "./SignUp.css"; // Import CSS for styling

const SignUp = () => {
  return (
    <div className="signup-container">
      {/* Left section - Login form */}
      <div className="signup-section">
        <h2>Register your new account</h2>
        <form className="signup-form">
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="signup-button">
            Sign up
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

export default SignUp;
