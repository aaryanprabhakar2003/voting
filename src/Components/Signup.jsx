import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    address: "",
    aadharCardNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/user/signup", formData);
      alert("Signup successful!");
      navigate("/")
      
    
      // Optionally, you can redirect the user to the login page or do other actions after successful signup
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Server responded with an error:", error.response.data);
        alert("jj")

      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
        alert(
          "No response received from the server. Please check your network connection."
        );
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error setting up the request:", error.message);
        alert(
          "An error occurred while setting up the request. Please try again later."
        );
      }
    }
  };

  return (
    <div>
  <h2>Signup</h2>
  <form onSubmit={handleSubmit}>
    <label>Your Name:</label>
    <input type="text" name="name" defaultValue="{formData.name}" onChange={handleChange} />
    <label>Your Age:</label>
    <input type="text" name="age" defaultValue="{formData.age}" onChange={handleChange} />
    <label>Your Mobile Number:</label>
    <input type="text" name="mobile" defaultValue="{formData.mobile}" onChange={handleChange} />
    <label>Your Email:</label>
    <input type="email" name="email" defaultValue="{formData.email}" onChange={handleChange} />
    <label>Your Address:</label>
    <input type="text" name="address" defaultValue="{formData.address}" onChange={handleChange} />
    <label>Your Aadhar Number:</label>
    <input type="number" name="aadharCardNumber" defaultValue="{formData.aadharCardNumber}" onChange={handleChange} />
    <label>Set a Password:</label>
    <input type="password" name="password" defaultValue="{formData.password}" onChange={handleChange} />
    <button type="submit">Signup</button>
  </form>
</div>

  );
};

export default Signup;
