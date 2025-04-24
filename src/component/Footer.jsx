import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../assets/logo-gl.png";
import { FaSquareFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      toast.error('Please enter a valid email address!');
    } else {
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  return (
    <div className='bg-blogImg bg-bottom'>
      <footer className=" text-gray-400 body-font">
        <div className="w-11/12 mx-auto pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start col-span-1">
            <Link to='/' className="flex flex-col items-center md:items-start">
              <img src={logo} className='w-28' alt="Logo" />
              <span className="text-gray-500 md:text-xl text-lg font-bold mb-10">Galaxy Blogger</span>
            </Link>
          </div>

          {/* Company */}
          <div className="px-4">
            <h2 className="title-font font-bold  text-gray-400 tracking-widest text-sm mb-3">COMPANY</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a className=" text-gray-400 hover:text-gray-600">About</a></li>
              <li><a className=" text-gray-400 hover:text-gray-600">Blog</a></li>
              <li><a className=" text-gray-400 hover:text-gray-600">Jobs</a></li>
              <li><a className=" text-gray-400 hover:text-gray-600">FAQ</a></li>
            </nav>
          </div>

          {/* Help & Support */}
          <div className="px-4">
            <h2 className="title-font font-bold  text-gray-400 tracking-widest text-sm mb-3">HELP & SUPPORT</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a className=" text-gray-400 hover:text-gray-600">Login</a></li>
              <li><a className=" text-gray-400 hover:text-gray-600">Contact & Support</a></li>
              <li><a className=" text-gray-400 hover:text-gray-600">VIP Support</a></li>
              <li><a className=" text-gray-400 hover:text-gray-600">Plans</a></li>
            </nav>
          </div>

          {/* Legal */}
          <div className="px-4">
            <h2 className="title-font font-bold  text-gray-400 tracking-widest text-sm mb-3">LEGAL</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a className=" text-gray-400 hover:text-gray-600">Terms of Service</a></li>
              <li><a className=" text-gray-400 hover:text-gray-600">Support Policy</a></li>
              <li><a className=" text-gray-400 hover:text-gray-600">Privacy Policy</a></li>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400 w-11/12 mx-auto">
          <div className="py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500 sm:mt-0 mt-4">
              © {new Date().getFullYear()} All Rights Reserved —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className=" text-gray-400 ml-1" target="_blank">@Galaxy Blogger</a>
            </p>
            <span className="inline-flex gap-4 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <NavLink to="https://www.facebook.com/wptasmina" target="_blank">
                <FaSquareFacebook className="text-2xl text-blue-600" />
              </NavLink>
              <NavLink to="https://www.twitter.com/wptasmina" target="_blank">
                <FaXTwitter className="text-2xl text-black" />
              </NavLink>
              <NavLink to="https://www.instagram.com/wptasmina" target="_blank">
                <FaInstagram className="text-2xl text-pink-500" />
              </NavLink>
              <NavLink to="https://www.linkedin.com/in/wptasmina" target="_blank">
                <FaLinkedinIn className="text-2xl text-blue-500" />
              </NavLink>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
