import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      console.log("User logged in successfully:", user);
      navigate("/home");
    } else {
      setError("Invalid email or password");
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
            <Link to="/register" className=" mx-4">
              Register
            </Link>
          </div>
        </div>
      </nav>
      <div className="flex-grow flex items-center justify-center">
        <div className="card mx-auto max-w-md p-6 shadow-md">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="r-input mb-4">
              <label className="label">Email</label>
              <input
                className="input w-full p-2 rounded"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="r-input mb-4">
              <label className="">Password</label>
              <input
                className="input bg-slate-50 w-full p-2 rounded"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-100"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
