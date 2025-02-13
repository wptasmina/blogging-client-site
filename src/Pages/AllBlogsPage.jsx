import React, { useState } from 'react';
import Blogs from '../component/Blogs';
import { useLoaderData } from 'react-router-dom';

export default function AllBlogsPage() {
  const blogs = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Filter blogs based on search term and category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      !selectedCategory || blog.category?.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      !searchTerm || blog.title?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Text Start Section */}
      <div className="flex flex-col justify-center items-center mt-6">
        <h2 className="text-3xl text-gray-800 font-extrabold text-center">All Blog Posts</h2>
        <p className="text-md text-gray-600 font-medium pt-2 text-center">
          Browse all blogs in one place! Discover a variety of stories, insights, and ideas curated
          just for you.
        </p>
      </div>

      {/* Filter and Search Section */}
      <div className="bg-white mt-6">
        <div className="bg-white mb-6 w-11/12 mx-auto md:flex justify-center items-center gap-4">
          {/* Filter by Category */}
          <div>
            <select
              className="select select-bordered sm:mb-0 mb-4 w-70 max-w-xs  outline-none focus:outline-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Filter By Category</option>
              <option>Technology</option>
              <option>Developer</option>
              <option>News</option>
              <option>Travel</option>
              <option>Sports</option>
              <option>Lifestyle</option>
              <option>Business</option>
            </select>
          </div>

          {/* Search by Title */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow  outline-none focus:outline-none"
              placeholder="Search by title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>

      {/* Blogs List */}
      <div className="md:w-11/12 mx-auto pb-8">
        {/* <p className="font-medium mb-4">Total Blogs: {filteredBlogs.length}</p> */}
        <div className="p-0 px-2 md:px-0 grid lg:grid-cols-4 md:grid-cols-3 pt-6 sm:grid-cols-2 grid-cols-1 gap-4">
          {filteredBlogs.map((blog) => (
            <Blogs key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
}
