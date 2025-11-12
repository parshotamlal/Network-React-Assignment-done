import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user already exists
    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.email === formData.email) {
      alert("⚠️ Email already registered! Please login.");
      navigate("/login");
      return;
    }

    // Save new user data
    localStorage.setItem("user", JSON.stringify(formData));
    alert("✅ Registration successful! Please login now.");
    navigate("/login");
  };

  return (
    <div className="register-page d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-lg border-0 p-4" style={{ width: "380px", borderRadius: "15px" }}>
        <h3 className="text-center fw-bold mb-4 text-primary">Create Account</h3>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
            />
            <label htmlFor="username">Username</label>
          </div>

          {/* Email */}
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          {/* Password */}
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-semibold rounded-3"
            style={{ letterSpacing: "0.5px" }}
          >
            Register
          </button>

          {/* Redirect Link (Fixed) */}
          <p className="text-center mt-3 mb-0">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none fw-semibold text-primary">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
