import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
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
    <div className="flex flex-col items-center justify-center bg-gray-400 mb-10 py-16">
      <h2 className="text-xl md:text-3xl font-bold mb-8">Subscribe to Our Newsletter</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center join"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border outline-none border-gray-300 md:rounded-l-md rounded-md w-72"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 md:w-28 font-medium w-full md:mt-0 mt-4 join-item border border-blue-500 bg-blue-500 text-white md:rounded-r-md rounded-md hover:bg-blue-600"
        >
          Subscribe
        </button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Newsletter;
