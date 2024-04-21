import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [aadharCardNumber, setAadharNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        aadharCardNumber,
        password,
      });
      const { token, name } = response.data;
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");

      navigate("/home"); // Navigate to the home page on successful login
    } catch (error) {
      alert("Failed to login");
    }
  };

  return (
    <div class="mx-auto flex max-w-4xl items-center bg-white p-4 font-[sans-serif] text-gray-800 md:h-screen">
      <div class="grid items-center overflow-hidden rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] md:grid-cols-3">
        <div class="flex min-h-full flex-col justify-center space-y-16 bg-gradient-to-r from-gray-900 to-gray-700 px-4 py-4 max-md:order-1 max-md:mt-16 lg:px-8">
          <div>
            <h4 class="text-lg font-semibold text-white">
              Create Your Account
            </h4>
            <p class="mt-2 text-[13px] text-white">
              Welcome to our registration page! Get started by creating your
              account.
            </p>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-white">
              Simple & Secure Registration
            </h4>
            <p class="mt-2 text-[13px] text-white">
              Our registration process is designed to be straightforward and
              secure. We prioritize your privacy and data security.
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          class="w-full px-6 py-6 sm:px-16 md:col-span-2"
        >
          <div class="mb-6">
            <h3 class="text-2xl font-bold">Create an account</h3>
          </div>
          <div class="space-y-5">
            <div>
              <label class="mb-2 block text-sm font-bold">
                Adhaar Card Number:
              </label>
              <div class="relative flex items-center">
                <input
                  name="aadharCardNumber"
                  type="text"
                  required
                  class="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm outline-blue-500"
                  placeholder="Enter Adhaar Number"
                  value={aadharCardNumber}
                  onChange={(e) => setAadharNumber(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label class="mb-2 block text-sm font-bold">Password:</label>
              <div class="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  class="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm outline-blue-500"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div class="!mt-10">
            <button
              type="submit"
              class="w-full rounded bg-gray-700 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
