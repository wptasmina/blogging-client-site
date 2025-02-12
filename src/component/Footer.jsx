import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../assets/logo-gl.png"

import { FaSquareFacebook,FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6"
import { Link, NavLink } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent page reload
      if (email.trim() === '') {
        toast.error('Please enter a valid email address!');
      } else {
        toast.success('Thank you for subscribing to our newsletter!');
        setEmail(''); // Clear the input field
      }
    };

  return (
<div className=' bg-blogImg bg-bottom'>
<footer class="text-gray-600 body-font">
  <div class="w-11/12 mx-auto pt-10">
    <div class="flex flex-wrap md:text-left text-center order-first">

      <div class="lg:w-1/4 md:w-1/2 w-full ">
        <Link to='/' className="flex flex-col md:justify-start md:items-start justify-center items-center">
        <img src={logo} className='w-28' />
          <span class="ml-3 text-gray-500 text-xl font-bold mb-10">Galaxy Blogger</span>
        </Link>
      </div>

      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-gray-700 tracking-widest text-sm mb-3">COMPANY</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">About</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Blog</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Jobe</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">FAQ</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-gray-700 tracking-widest text-sm mb-3">HELP & SUPPORT</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Login</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Contact & Support</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">VIP Priority Support</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Plan Comparison</a>
          </li>
        </nav>
      </div>

       <div class="lg:w-1/4 md:w-1/2 w-full ">
        <h2 class="title-font text-gray-700 font-bold tracking-widest text-sm mb-3">LEGAL</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Support Policy</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
        </nav>
      </div>

    </div>
  </div>
  
  <div class="border-t border-gray-400 w-11/12 mx-auto">
    <div class="py-6 mx-auto flex items-center sm:flex-row flex-col">
     
      <p className="text-sm text-gray-500 sm:mt-0 mt-4">Copyright © {new Date().getFullYear()} All Right reserved  —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@Galaxy Blogger</a>
      </p>
      <span className="inline-flex gap-4 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <NavLink to="https://www.facebook.com/wptasmina">
        <FaSquareFacebook className="text-2xl text-blue-600" />
      </NavLink>
      <NavLink to="https://www.twitter.com/wptasmina">
        <FaXTwitter className="text-2xl text-black" />
      </NavLink>
      <NavLink to="https://www.instagram.com/wptasmina">
        <FaInstagram className="text-2xl text-red-500" />
      </NavLink>
      <NavLink to="https://www.linkedin.com/in/wptasmina">
        <FaLinkedinIn className="text-2xl text-blue-500" />
      </NavLink>
      </span>
    </div>
  </div>

</footer>
  </div>
  )
}
