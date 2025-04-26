import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-gl.png";
import { useContext, useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs"; // Dark Mode Icons
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Successfully logged out!");
      })
      .catch((error) => {
        console.error("Failed to log out:", error.message);
      });
  };


  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-gray-950", "text-white");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-gray-950", "text-white");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#003E6F] via-[#4E0A4A] to-black backdrop:blur-lg">
      <div className="navbar p-0 w-11/12 mx-auto">
        <div className="navbar-start p-0">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn-ghost bg-[#003E6F] text-white dark:text-white p-1 rounded-lg mr-1 md:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#4E0A4A] rounded-b-lg z-[1] mt-4 w-60 p-2 py-10 gap-4 shadow"
            >
              <li className="text-white text-xl font-bold">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-white text-md font-medium rounded-md">
                <NavLink to="/about">About</NavLink>
              </li>
              {user && (
                <>
                  <li className="text-white text-xl font-bold">
                    <NavLink to="/addblog">Add Blogs</NavLink>
                  </li>
                  <li className="text-white  text-xl font-bold ">
                    <NavLink to="/wishlist">Wishlist</NavLink>
                  </li>
                </>
              )}
              <li className="text-white text-xl font-bold">
                <NavLink to="/allblogs">All Blogs</NavLink>
              </li>
              <li className="text-white text-xl font-bold">
                <NavLink to="/featuredblogs">Featured Blogs</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/">
            <div className="tooltip tooltip-bottom" data-tip="Galaxy Blogger.">
              <img src={logo} className="w-14 mt-1" alt="Blogger Logo" />
            </div>
          </NavLink>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li className="text-white text-md font-medium rounded-md ">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-white text-md font-medium rounded-md active">
              <NavLink to="/about">About</NavLink>
            </li>
            {user && (
              <>
                <li className="text-white text-md font-medium rounded-md">
                  <NavLink to="/addblog">Add Blogs</NavLink>
                </li>
                <li className="text-white text-md font-medium rounded-md">
                  <NavLink to="/wishlist">Wishlist</NavLink>
                </li>
              </>
            )}

            <li className="text-white text-md font-medium rounded-md">
              <NavLink to="/allblogs">All Blogs</NavLink>
            </li>
            <li className="text-white text-md font-medium rounded-md">
              <NavLink to="/featuredblogs">Featured Blogs</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="mr-4 text-xl bg-gray-800 text-gray-300 p-2 rounded-full border border-gray-700 dark:border-black shadow-2xl"
          >
            {theme === "light" ? <BsMoon /> : <BsSun className="text-white" />}
          </button>

          {user ? (
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar"
                aria-label="User Menu"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={user?.photoURL}
                  />
                </div>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-sm w-52 p-2 gap-1"
              >
                <li className="btn btn-xs rounded-sm border-none">
                  {user?.displayName}
                </li>
                <li className="btn btn-xs rounded-sm border-none">
                  {user?.email}
                </li>
                <li>
                  <Link
                    onClick={handleSignOut}
                    className=" btn pb-3 btn-xs border-none w-full text-black hover:bg-purple-800 rounded-sm"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/login"
              className=" md:px-6 py-2 px-4 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-700
               to-[#313030] duration-300 hover:bg-indigo-500 text-white text-sm sm:text-md border-none"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
