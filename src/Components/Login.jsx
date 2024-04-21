import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Pages/AuthContext";
import * as yup from "yup"; // Import yup library
import toast, { Toaster } from "react-hot-toast";

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

  // Define validation schema using yup
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    age: yup
      .number()
      .required("Age is required")
      .positive("Age must be a positive number")
      .integer("Age must be an integer")
      .min(18, "Age must be at least 18 years"),
    mobile: yup.string().required("Mobile number is required")
    .max(10),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    aadharCardNumber: yup
      .string()
      .required("Aadhar card number is required")
      .min(12)
      .max(12),
    password: yup.string().required("Password is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate form data against the schema
      await validationSchema.validate(formData, { abortEarly: false });

      // If validation succeeds, proceed with form submission
      await axios.post("http://localhost:3000/user/signup", formData);

      // Display success toast if account is created successfully
      toast.success("Account created successfully!");

      setIsAuthenticated(true);
      setUserName(formData.name);
      navigate('/login');
    } catch (error) {
      // Handle validation errors
      if (error.name === "ValidationError") {
        // Display only the first validation error as a toast notification
        const errorMessage = error.inner[0].message;
        toast.error(errorMessage); // Display validation error toast
      } else {
        // Handle other errors
        toast.error("An error occurred. Please try again later."); // Display generic error toast
      }
    }
  };

  return (
    <div>
      <div className="py-12">
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
                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Phone Number:
                  </label>
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
                </div>
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
                <Link to="/login">
                <a
               
                  className="ml-1 font-semibold text-blue-600 hover:underline"
                >
                  Login here
                </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Toaster /> {/* Place the Toaster component outside of the form */}
    </div>
  );
};

export default Login;
