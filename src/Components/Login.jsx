import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Pages/AuthContext";


const Login = () => {
  const navigate = useNavigate();
const { setIsAuthenticated, setUserName } = useAuth();

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
      await axios.post(
        "https://voting-app-2-grlv.onrender.com/user/signup",
        formData
      );

      alert("Signup successful!");
        setIsAuthenticated(true);
        setUserName(formData.name);
      navigate(`/home?name=${formData.name}`);
    

      // Optionally, you can redirect the user to the login page or do other actions after successful signup
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Server responded with an error:", error.response.data);
        alert("Server responded with an error. Please try again later.");
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
      <div>
        <div className="mx-auto flex max-w-4xl items-center bg-white p-4 font-[sans-serif] text-gray-800 md:h-screen">
          <div className="grid items-center overflow-hidden rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] md:grid-cols-3">
            <div className="flex min-h-full flex-col justify-center space-y-16 bg-gradient-to-r from-gray-900 to-gray-700 px-4 py-4 max-md:order-1 max-md:mt-16 lg:px-8">
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Create Your Account
                </h4>
                <p className="mt-2 text-[13px] text-white">
                  Welcome to our registration page! Get started by creating your
                  account.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Simple & Secure Registration
                </h4>
                <p className="mt-2 text-[13px] text-white">
                  Our registration process is designed to be straightforward and
                  secure. We prioritize your privacy and data security.
                </p>
              </div>
            </div>
            <form className="grid w-full grid-cols-1 gap-y-4 px-6 py-6 sm:px-16 md:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Create an account</h3>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-bold">Name:</label>
                  <div className="relative flex items-center">
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm outline-blue-500"
                      placeholder="Enter name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold">Age:</label>
                  <div className="relative flex items-center">
                    <input
                      name="age"
                      type="text"
                      required
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm outline-blue-500"
                      placeholder="Enter Age"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* <div>
            <label className="mb-2 block text-sm font-bold">Phone Number:</label>
            <div className="relative flex items-center">
              <input
                name="mobile"
                type="text"
                required
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm outline-blue-500"
                placeholder="Enter Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
          </div> */}
                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Email Id:
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm outline-blue-500"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Adhaar Number:
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="aadharCardNumber"
                      type="text"
                      required
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm outline-blue-500"
                      placeholder="Enter Adhaar Number"
                      value={formData.aadharCardNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Password:
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm outline-blue-500"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  I accept the{" "}
                  <a
                    href="javascript:void(0);"
                    className="ml-1 font-semibold text-blue-600 hover:underline"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <div className="!mt-10">
                <button
                  type="submit"
                  className="w-full rounded bg-gray-700 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800 focus:outline-none"
                  onClick={handleSubmit}
                >
                  Create an account
                </button>
              </div>
              <p className="mt-6 text-center text-sm">
                Already have an account?{" "}
                <a
                  href="javascript:void(0);"
                  className="ml-1 font-semibold text-blue-600 hover:underline"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
