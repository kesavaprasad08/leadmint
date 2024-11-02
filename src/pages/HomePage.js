// src/pages/HomePage.js
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer, // Import ResponsiveContainer
} from "recharts"; // Import recharts for the graph

// Updated sampleData to include both registrations and referrals
const sampleData = [
  { name: "Day 1", registrations: 750, referrals: 300 },
  { name: "Day 2", registrations: 700, referrals: 250 },
  { name: "Day 3", registrations: 600, referrals: 400 },
  { name: "Day 4", registrations: 520, referrals: 350 },
  { name: "Day 5", registrations: 520, referrals: 450 },
  { name: "Day 6", registrations: 540, referrals: 200 },
  { name: "Day 7", registrations: 260, referrals: 300 },
];

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Side Navbar for larger screens */}
      <nav className="hidden md:block bg-slate-100 w-64 min-h-screen p-4 text-black">
        <div className="flex items-center mb-4">
          <img src="/applogo.png" alt="App Logo" />
        </div>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Analytics
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Users
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Notifications
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Transactions
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow p-6">
        {/* Top Bar for smaller screens */}
        <div className="bg-slate-100 p-4 flex justify-between items-center md:hidden">
          <img src="/applogo.png" alt="App Logo" className="h-8" />
          <button onClick={toggleMenu} className="text-black">
            {isMenuOpen ? "Hide Menu" : "Show Menu"}
          </button>
        </div>

        {/* Mobile Navbar */}
        <nav
          className={`flex flex-col bg-slate-100 p-4 text-black space-y-2 md:hidden ${isMenuOpen ? "block" : "hidden"}`}
        >
          <a href="#" className="hover:underline">
            Analytics
          </a>
          <a href="#" className="hover:underline">
            Users
          </a>
          <a href="#" className="hover:underline">
            Notifications
          </a>
          <a href="#" className="hover:underline">
            Transactions
          </a>
        </nav>

        <h2 className="text-2xl text-black font-bold mb-4">Analytics</h2>

        {/* Cards Section */}
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="p-4 shadow-md bg-white text-black card">
              <h4 className="font-semibold mb-2">Card {index + 1}</h4>
              <p>This is a sample description for card {index + 1}.</p>
            </div>
          ))}
        </div>

        {/* Sample Graph */}
        <div className="mb-6 bg-slate-100 p-5 mt-5">
          <h3 className="text-lg text-black font-semibold mb-2">
            Last 7 days Registrations vs Referrals
          </h3>
          <ResponsiveContainer width="100%" height={300}> {/* Wrap LineChart in ResponsiveContainer */}
            <LineChart data={sampleData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
              <Line type="monotone" dataKey="registrations" stroke="#0000FF" fill="#0000FF" fillOpacity={0.3} /> {/* Blue line for registrations */}
              <Line type="monotone" dataKey="referrals" stroke="#FF0000" fill="#FF0000" fillOpacity={0.3} /> {/* Red line for referrals */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
