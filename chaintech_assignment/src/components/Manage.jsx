// src/components/ManageAccount.jsx
import { useState, useEffect } from "react";
import "../styles/Manage.css";

const ManageAccount = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    // Fetch user data on component mount

    const fetchUserData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/user");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUser(data);
        setFormData({
          username: data.username,
          email: data.email,
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update user data");
      }

      const data = await response.json();
      setUser(data);
      setEditMode(false);
      alert("User data updated successfully");
    } catch (error) {
      console.error("Error updating user data:", error);
      alert("Error updating user data");
    }
  };

  return (
    <>
      <div className="manage-account">
        <h2>Manage Account</h2>
        {user ? (
          <div>
            {editMode ? (
              <form onSubmit={handleUpdate}>
                <div>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password">New Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword">Confirm New Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="button">
                  {" "}
                  <button type="submit">Update</button>
                  <button type="button" onClick={() => setEditMode(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                
                <div className="edit"><button onClick={() => setEditMode(true)}>Edit</button></div>
              </div>
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default ManageAccount;
