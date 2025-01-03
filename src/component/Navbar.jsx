import React, { useState } from "react";
import logo from '../assets/logo-gl.png'
import { NavLink } from "react-router-dom";

function Navbar() {
  // const [user, setUser] = useState({
  //   isLoggedIn: true, // Change to `false` to test non-logged-in state
  //   profilePic: "https://via.placeholder.com/40", // Replace with actual profile picture URL
  //    // https://ibb.co.com/kKF8MxN
  // });

  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const handleLogout = () => {
  //   setUser({ isLoggedIn: false, profilePic: "" });
  //   alert("Logged out successfully!");
  // };

  return (
    <nav className="bg-gray-800 text-white hover:text-green-600">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">

        <NavLink to="/" className="text-xl font-bold">
        <div className="tooltip tooltip-right text-[#0EA64F] " data-tip="Galaxy Blogger">
          <img src={logo} className="w-14" alt="Galaxy Blogger" />
        </div>
        </NavLink>

        <button
          className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div
          className={`lg:flex lg:items-center lg:space-x-6 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <NavLink to="/" className="block py-2 lg:py-0">
            Home
          </NavLink>
          {user.isLoggedIn && (
            <>
              <a href="#" className="block py-2 lg:py-0">
                Add Blog
              </a>
              <a href="#" className="block py-2 lg:py-0">
                Wishlist
              </a>
            </>
          )}
          <NavLink to="/allblogs" className="block py-2 lg:py-0">
            All Blogs
          </NavLink>
          <a href="#" className="block py-2 lg:py-0">
            Featured Blogs
          </a>
          {!user.isLoggedIn ? (
            <div className="flex flex-col lg:flex-row lg:space-x-4 mt-2 lg:mt-0">
              <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                Login
              </button>
              <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
                Register
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4 mt-2 lg:mt-0">
              <img
                src={user.profilePic}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
