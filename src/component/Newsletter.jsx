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
    <section className="bg-bannerImg object-cover bg-bottom w-full py-20 flex flex-col items-center justify-center mb-10 ">
      <h2 className="text-xl text-white md:text-3xl font-bold mb-8">Subscribe to Our Newsletter</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center join"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border border-purple-600 outline-none md:rounded-l-md  w-72"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 md:w-28 font-medium w-full md:mt-0 mt-4 join-item border border-purple-800 bg-gradient-to-r from-[#003E6F] via-purple-600 to-black text-white md:rounded-r-md hover:bg-blue-600"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
