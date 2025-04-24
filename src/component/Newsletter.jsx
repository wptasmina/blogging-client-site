import React, { useState } from 'react';
import { toast } from 'react-toastify';
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
    <section className="bg-bannerImg bg-no-repeat bg-cover bg-center h-70 w-full flex flex-col items-center justify-center mb-10">
      <form
        onSubmit={handleSubmit}>
      <h2 className="text-xl text-gray-800 dark:text-gray-800 md:text-3xl font-bold pt-20 pb-8">Subscribe to Our Newsletter</h2>
        <div className="flex flex-col sm:flex-row sm:gap-0 gap-4 items-center join pb-20">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border border-purple-600 dark: text-gray-400 outline-none  rounded-lg sm:rounded-l-md sm:rounded-none  w-72"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 w-full sm:w-28 font-medium md:mt-0 join-item border border-purple-800 bg-gradient-to-r from-[#003E6F] via-purple-600 to-black text-white rounded-lg sm:rounded-r-md sm:rounded-none hover:bg-blue-600"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
