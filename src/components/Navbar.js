import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 text-black p-4">
      <div className="flex items-center justify-between">
        <Link to="/" className=" font-bold text-xl">
          Logo
        </Link>
        <div>
          <Link to="/" className=" mx-4">
            Login
          </Link>
          <Link to="/home" className=" mx-4">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
