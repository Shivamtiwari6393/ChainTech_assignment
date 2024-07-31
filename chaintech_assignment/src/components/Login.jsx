import { useState } from "react";
import "../styles/Login.css";
import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";

const Login = () => {
  // Hook for navigation

  const navigate = useNavigate();

  // State for storing login data

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // State for tracking form submission

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (response.status === 400) {
          alert("Invalid email or password");
          return;
        }
        if (response.status === 500) {
          alert("Server error");
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (data) {

            
          // Set the form as submitted and navigate to the manage account page

          setSubmitted(true);
          navigate("/manage");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <>
      <Navbar></Navbar>

      <div className="login">
        <h2>Login Form</h2>
        {submitted && <div className="submitted">Login successful!</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
