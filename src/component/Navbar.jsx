import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-gl.png';
import Profile from './Profile';
import { useContext } from 'react';
import { AuthContext } from '../Pages/AuthProvider/AuthProvider';

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

  return (
    <div className="sticky top-0 z-50 w-full bg-gray-800/90 backdrop:blur-lg">
      <div className="navbar p-0 w-11/12 mx-auto">
        <div className="navbar-start p-0">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn-ghost hover:bg-slate-400 bg-white p-1 rounded-lg mr-1 lg:hidden"
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
              className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-2 w-60 p-2 py-10 gap-4 shadow"
            >
              <li className="text-white bg-gray-800 text-xl font-bold">
                <NavLink to="/">Home</NavLink>
              </li>
              {user && (
                <>
                  <li className="text-white bg-gray-800 text-xl font-bold">
                    <NavLink to="/addblog">Add Blogs</NavLink>
                  </li>
                  <li className="text-white bg-gray-800 text-xl font-bold">
                    <NavLink to="/wishlist">Wishlist</NavLink>
                  </li>
                </>
              )}
              <li className="text-white bg-gray-800 text-xl font-bold">
                <NavLink to="/allblogs">All Blogs</NavLink>
              </li>
              <li className="text-white bg-gray-800 text-xl font-bold">
                <NavLink to="/featuredblogs">Featured Blogs</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/">
            <div className="tooltip tooltip-bottom" data-tip="Galaxy Blogger.">
              <img src={logo} className="md:w-24 w-14 mt-1" alt="Blogger Logo" />
            </div>
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li className="text-white bg-gray-800 text-md font-medium rounded-md">
              <NavLink to="/">Home</NavLink>
            </li>
            {user && (
              <>
                <li className="text-white bg-gray-800 text-md font-medium rounded-md">
                  <NavLink to="/addblog">Add Blogs</NavLink>
                </li>
                <li className="text-white bg-gray-800 text-md font-medium rounded-md">
                  <NavLink to="/wishlist">Wishlist</NavLink>
                </li>
              </>
            )}
            <li className="text-white bg-gray-800 text-md font-medium rounded-md">
              <NavLink to="/allblogs">All Blogs</NavLink>
            </li>
            <li className="text-white bg-gray-800 text-md font-medium rounded-md">
              <NavLink to="/featuredblogs">Featured Blogs</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <button onClick={handleSignOut} className="flex items-center gap-2">
              <Profile />
              <span className="text-white text-md font-medium rounded-md px-4 py-1 border-2 border-gray-800 ml-2">Logout</span>
            </button>
          ) : (
            <NavLink to="/login">
              <button className="text-white text-md font-medium px-6 py-1 border-2
               border-gray-800 focus:bg-gray-700 focus:border-gray-700 rounded-md bg-gray-800">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
