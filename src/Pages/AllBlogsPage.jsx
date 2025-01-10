import React from 'react'
import Blogs from '../component/Blogs'
import { useLoaderData } from 'react-router-dom'

export default function AllBlogsPage() {
  const blogs = useLoaderData()
  if (!blogs || !Array.isArray(blogs)) {
    return <p>Loading...</p>; // ডেটা লোড হওয়ার আগে একটি লোডিং বার্তা দেখান
  }

  return (
   <>
  {/* Text Start Section */}

   <div className=' flex flex-col justify-center items-center'>
    <h2 className='text-3xl text-gray-800 font-extrabold text-center'>All Blog Posts </h2>

    <p className='text-md text-gray-600 font-medium pt-2 text-center'>Browse all blogs in one place! Discover a variety of stories, insights, and ideas curated just for you.</p>
   </div>
   <div className='bg-white mb-10'>
   {/* Filter By Category */}
    <div className="bg-white my-10 w-11/12 mx-auto md:flex justify-center items-center gap-4">
    <div>
    <select defaultValue="" className="select select-bordered  sm:mb-0 mb-4 w-70 max-w-xs">
      <option value="" disabled>Filter By Category</option>
      <option>Technology</option>
      <option>Developer</option>
      <option>News</option>
      <option>Travel</option>
      <option>Sports</option>
      <option>LifetSyle</option>
      <option>Business</option>
    </select> 
    </div>

 {/* search input fild */}
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search by title" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>

{/* //sort by deadine */}
    <div>
    <select className="select select-bordered sm:mt-0 mt-4 w-70 max-w-xs">
      <option disabled selected>Sort By Deadine</option>
      <option>LifetSyle</option>
      <option>Technology</option>
      <option>Web Developer</option>
      <option>News</option>
      <option>Food</option>
      <option>Travel</option>
      <option>Sports</option>
      <option>Business</option>
    </select>
    </div>
    </div>
    </div>

    <div className='md:w-11/12 mx-auto '>
      <p className='font-medium mb-4'>Total Blogs: {blogs.length}</p>
      {/* All Blogs List card */}
       <div className="p-0 px-2 md:px-0 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {
              blogs.map(blog => <Blogs key={blog._id} blog={blog} />)
            }
        </div>
    </div>
   </>
  )
}
