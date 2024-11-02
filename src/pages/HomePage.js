import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <nav className="hidden md:block bg-slate-100 w-64 min-h-screen p-4 text-black">
        <div className="flex items-center mb-4">
          <img src="/applogo.png" alt="App Logo" />
        </div>
        <ul>
          {["Analytics", "Users", "Notifications", "Transactions"].map(
            (item) => (
              <li className="mb-2" key={item}>
                <a href="#" className="flex hover:bg-slate-200 p-2 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 me-2"
                  >
                    {/* Your SVG icon here */}
                  </svg>
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
      <div className="flex-grow">
        <div className="bg-slate-100 p-4 flex justify-between items-center md:hidden w-full">
          <img src="/applogo.png" alt="App Logo" className="h-8" />
          <button onClick={toggleMenu} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <nav
          className={`flex flex-col bg-slate-100 p-4 text-black space-y-2 md:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {["Analytics", "Users", "Notifications", "Transactions"].map(
            (item) => (
              <a href="#" className="hover:underline" key={item}>
                {item}
              </a>
            )
          )}
        </nav>
        <div className="flex justify-between w-full p-4">
          <h2 className="text-2xl text-black font-bold ">Analytics</h2>
          <input
            className="bg-slate-100 rounded p-2"
            placeholder="Select Date Range"
          ></input>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
          <div className="p-4 bg-white text-black rounded shadow-sm">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10 bg-green-100 p-1 m-2 text-success"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>

              <h4 className="font-semibold">Users</h4>
            </div>
            <div className="text-right text-success text-3xl">140</div>
          </div>
          <div className="p-4 bg-white text-black rounded shadow-sm">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-10 bg-blue-100 p-1 m-2 text-primary"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>

              <h4 className="font-semibold">Refferral Users</h4>
            </div>
            <div className="text-right text-primary text-3xl">64</div>
          </div>
          <div className="p-4 bg-white text-black rounded shadow-sm">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-10 bg-green-100 p-1 m-2 text-success"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>

              <h4 className="font-semibold">Today's Organic Users</h4>
            </div>
            <div className="text-right text-success text-3xl">76</div>
          </div>
          <div className="p-4 bg-white text-black rounded shadow-sm">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10 bg-blue-100 p-1 m-2 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>

              <h4 className="font-semibold">This Week Users</h4>
            </div>
            <div className="text-right text-primary text-3xl">679</div>
          </div>
          <div className="p-4 bg-white text-black rounded shadow-sm">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10 bg-blue-100 p-1 m-2 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>

              <h4 className="font-semibold">This Month Users</h4>
            </div>
            <div className="text-right text-primary text-3xl">22727</div>
          </div>
          <div className="p-4 bg-white text-black rounded shadow-sm">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10 bg-blue-100 p-1 m-2 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>

              <h4 className="font-semibold">Last Month Users</h4>
            </div>
            <div className="text-right text-primary text-3xl">71297</div>
          </div>
        </div>

        <div className="mb-6 bg-slate-100 p-5 mt-5">
          <h3 className="text-lg text-black font-semibold mb-2">
            Last 7 days Registrations vs Referrals
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sampleData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
              <Line
                type="monotone"
                dataKey="registrations"
                stroke="#0000FF"
                fill="#0000FF"
                fillOpacity={0.3}
              />
              <Line
                type="monotone"
                dataKey="referrals"
                stroke="#FF0000"
                fill="#FF0000"
                fillOpacity={0.3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
