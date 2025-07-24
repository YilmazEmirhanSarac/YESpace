import React from "react";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InfoOutlineIcon from "@mui/icons-material/InfoOutlined";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
      setServerError("");
      return; 
    }

    setErrors({});

    if (email !== "test@test.com" || password !== "123456") {
      setServerError("Your email address and/or password is incorrect.");
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
        <form onSubmit={handleSubmit} className="w-3/5 max-w-md">
          <p className="text-center text-2xl font-semibold mb-4">
            Sign in to <span className="text-primary">YESpace</span>
          </p>
          {serverError && (
            <div className="flex items-start gap-2 bg-red-100 border border-red-400 text-red-700 p-3 rounded text-sm mt-6 mb-3">
              <InfoOutlineIcon />
              <span>{serverError}</span>
            </div>
          )}
          <p className="pt-3 pb-2">Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className={`w-full p-2 border rounded ${
              errors.email ? "border-red-500" : "border-borderGray"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
          <p className="pt-3 pb-2">Password</p>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className={`w-full p-2 border rounded pr-10 ${
                errors.password ? "border-red-500" : "border-borderGray"
              }`}
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 cursor-pointer text-gray-500"
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-2">{errors.password}</p>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-indigo-700 mt-8"
          >
            Sign in
          </button>

          <div className="flex items-center mt-6">
            <div className="flex-grow border-t-[1.5px] border-borderGray" />
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t-[1.5px] border-borderGray" />
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-borderGray py-3 rounded-lg mt-4"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700 font-medium">
              Continue with Google
            </span>
          </button>

          <p className="text-center text-sm text-textGray mt-6">
            Don't have an account?{" "}
            <span className="text-black font-medium cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
