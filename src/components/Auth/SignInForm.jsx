import SetMealSharp from "@mui/icons-material/SetMealSharp";
import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email) {
      newErrors.email = "Please enter your email";
    }

    if (!password) {
      newErrors.password = "Please enter your password";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (email !== "test@test.com" || password !== "123456") {
      setServerError("Email and/or password is incorrect.");
      return;
    }
    setServerError("");
    console.log("Login success!");
  };

  return (
    <div className="flex h-screen">
      {/* Sol taraf */}
      <div className="w-3/5 bg-gradient-to-br from-indigo-300 to-purple-300">
        {/* İstersen buraya görsel ekleyebilirsin */}
      </div>

      {/* Sağ taraf (form) */}
      <div className="w-2/5 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-3/5 max-w-md space-y-2">
          {serverError && (
            <div className="bg-red-100 border border-red-400 text-red-700 p-3 rounded text-sm">
              {serverError}
            </div>
          )}
          <p className="text-center text-2xl font-semibold mb-4">Sign in to <span className="text-primary">YESpace</span></p>
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className={`w-full p-2 border rounded ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className={`w-full p-2 border rounded ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
