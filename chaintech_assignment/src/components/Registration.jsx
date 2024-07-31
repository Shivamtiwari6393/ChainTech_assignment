import { useState } from "react";

import "../styles/Registration.css";

const Registration = () => {
  // State for registration form data

  const [registrationData, setRegistrationData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State to track if the form has been submitted successfully

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  };

  //   Handle form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if password and confirm password match

    if (registrationData.password != registrationData.confirmPassword) {
      alert("Password and Confirm Password are not matching");
      return;
    }

    // Making a POST request to the backend API

    fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    })
      .then((response) => {
        if (response.status == 400) {
          alert("Email already in use");
          return;
        }
        if (Response.status == 500) {
          alert("Server error");
          return;
        }

        // If successful, set the submitted state to true

        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="registration">
      <h2>Registration Form</h2>
      {submitted && <div className="submitted">Registration successful!</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={registrationData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={registrationData.email}
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
            value={registrationData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={registrationData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
