import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, username: email, password , type: "USER"}),
      });

      if (response.ok) {
        navigate("/login"); // Redirect to the login page
      } else {
        const errorData = await response.json();
        alert(`Failed to create account: ${errorData.message || response.statusText}`);
      }
    } catch (e) {
      console.error("Error creating account:", e);
      alert("An error occurred while creating the account. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Create Account
        </h1>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className="w-full bg-lime-500 text-white py-2 rounded-lg hover:bg-lime-600 transition duration-200"
            onClick={handleCreateAccount}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
