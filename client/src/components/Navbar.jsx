import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdDashboard, MdLogout, MdMenu, MdClose } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/landingPage");
  };

  const navigateToDashboard = () => {
    const userRole = localStorage.getItem("role");
    if (userRole === "spoc") {
      navigate("/spoc/dashboard");
    } else {
      navigate("/powerplant/dashboard");
    }
  };

  const navItems = [
    { content: "Who we are?", path: "/landingPage/whoweare" },
    { content: "What we do?", path: "/landingPage/whatwedo" },
    { content: "Sustainability", path: "/landingPage/sustainability" },
    { content: "FAQs", path: "/landingPage/faqs" },
  ];

  return (
    <>
      <nav className="bg-green-950 px-6 md:px-20 py-4 flex items-center justify-between relative">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold cursor-pointer text-lime-400 hover:text-lime-300 flex justify-center items-center gap-1">
            <p><GoHomeFill /></p>
            Grevion
          </h1>
        </Link>

        <div className="hidden md:flex space-x-6 text-white">
          {navItems.map((item, idx) => (
            <Link
              to={item.path}
              key={idx}
              className={`relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-gray-300 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-lime-300 ${
                location.pathname === item.path ? "text-lime-300" : ""
              }`}
            >
              {item.content}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-lime-400 text-2xl">
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        <div className="hidden md:flex items-center px-2 space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-5">
              <MdDashboard
                onClick={navigateToDashboard}
                className="text-lime-400 hover:text-lime-300 w-8 h-8 cursor-pointer"
              />
              <MdLogout
                onClick={handleLogout}
                className="text-lime-400 w-6 h-6 hover:text-red-500 cursor-pointer"
              />
            </div>
          ) : (
            <button className="px-4 py-2 font-medium text-gray-900 rounded-full shadow-lg bg-lime-300 hover:font-semibold hover:bg-lime-400">
              <Link to="/login">Get Started</Link>
            </button>
          )}
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-green-900 opacity-95 text-white absolute top-16 left-0 w-full px-6 py-4 flex flex-col space-y-4 shadow-lg z-50 border-green-800 border-2">
          {navItems.map((item, idx) => (
            <Link
              to={item.path}
              key={idx}
              className="block text-center py-2 hover:text-lime-300 "
              onClick={() => setMenuOpen(false)}
            >
              {item.content}
            </Link>
          ))}

          {isLoggedIn ? (
            <div className="flex flex-col justify-center items-center space-y-4">
              <button onClick={navigateToDashboard} className="flex items-center space-x-2 text-lime-400 hover:text-lime-300 ">
                <MdDashboard className="w-6 h-6" />
                <span>Dashboard</span>
              </button>
              <button onClick={handleLogout} className="flex items-center space-x-2 text-lime-400 hover:text-red-500">
                <MdLogout className="w-6 h-6" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <Link to="/login" className="text-lime-300 hover:text-lime-400">Get Started</Link>
          )}
        </div>
      )}

      <hr className="border-green-900 opacity-99 shadow-sm" />
    </>
  );
};

export default Navbar;
