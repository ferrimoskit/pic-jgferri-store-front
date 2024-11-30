import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: login, password: password }),
      });
      if(response.ok) {
              const data = await response.json();
      localStorage.setItem("token", data.token);      
      console.log("Hello! :)");
      navigate("/"); // Redirect to the home page

      }else{
        console.error("Login failed:", response.statusText);

      }


    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Login
        </h1>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Login"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-lime-500 text-white py-2 rounded-lg hover:bg-lime-600 transition duration-200"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
