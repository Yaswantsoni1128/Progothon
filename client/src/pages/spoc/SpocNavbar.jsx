import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const SpocNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/spoc/dashboard" },
    { name: "Add Farmer", path: "/spoc/add-farmer" },
    { name: "Farmer Listing", path: "/spoc/farmer-listing" },
    { name: "Order Request", path: "/spoc/paralis-request" },
    { name: "Profile", path: "/spoc/profile" },
  ];

  return (
    <nav className="w-full bg-green-950 text-white px-6 sm:px-10 py-4 shadow-lg">
      <div className="flex justify-between items-center container mx-auto">
        {/* Left: Brand & Nav Links */}
        <div className="flex items-center justify-center space-x-8 lg:w-[95%]">
          {/* Hamburger Icon for Mobile */}
          <button
            className="text-white text-2xl sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-6 text-md font-semibold">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-gray-300 
                  after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 
                  hover:after:scale-x-100 ${
                    isActive ? "border-b-2 border-white" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Right: Profile Image */}
        <Link to="/spoc/profile" className="w-20 flex justify-end items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="profile_image"
            className="w-8 h-8 rounded-full"
          />
        </Link>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="sm:hidden mt-3 bg-green-900 p-4 rounded-md flex flex-col space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block py-2 px-4 text-center rounded-md transition-colors ${
                  isActive ? "bg-green-800 text-white" : "hover:bg-green-800"
                }`
              }
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default SpocNavbar;
