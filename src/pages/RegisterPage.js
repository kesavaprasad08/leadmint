import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    const newErrors = {};
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email";
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const emailExists = users.some((user) => user.email === email);
      if (emailExists) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "This email is already registered",
        }));
        return;
      }

      const newUser = { email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrors({ email: "", password: "", confirmPassword: "" });
      console.log("User registered successfully:", newUser);
    }
  };

  return (
    <div className="bg-slate-50 h-screen flex flex-col">
      <nav className="bg-slate-100 text-black p-4">
        <div className="flex items-center justify-between">
          <Link to="/" className=" font-bold text-xl">
            <img src="/applogo.png" alt="Logo" className="mr-3" />
          </Link>
          <div>
            <Link to="/" className=" mx-4">
              Login
            </Link>
          </div>
        </div>
      </nav>
      <div className="flex-grow flex items-center justify-center">
        <div className="card mx-auto max-w-md p-6 shadow-md">
          <h2 className="text-center  mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="r-input mb-4">
              <label className="label ">Email</label>
              <input
                className="input w-full p-2 rounded"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="r-input mb-4">
              <label className="">Password</label>
              <input
                className="input bg-slate-50  w-full p-2 rounded"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
            <div className="r-input mb-4">
              <label className="">Confirm Password</label>
              <input
                className="input bg-slate-50  w-full p-2 rounded"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
              )}
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
