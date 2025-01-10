import React from 'react'

export default function UpdateBlogePage() {

    const handleUpdateBlog = () =>{}

  return (
    <>
    <div className="bg-base-100 w-full md:w-11/12 mx-auto shadow-sm px-4 my-10 pt-4 pb-10">
        <h2 className="md:text-4xl text-2xl text-gray-800 font-extrabold pb-2 text-center">Update Blog</h2>
        <p className="text-md text-gray-600 font-medium text-center md:w-1/2 mx-auto">Fill in the details below to updata a new blog post. Make sure to provide accurate accurate and descriptive information.</p>

      <form onSubmit={handleUpdateBlog} className="mt-8">
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>

          <div className=''>
            <label className="block text-lg font-medium text-gray-700 pb-2">
            User Name:
            </label>
            <input type="userName" placeholder='Enter your name' name="userName" required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]" />
          </div>

          <div className=''>
            <label className="block text-lg font-medium text-gray-700 pb-2">
            User Name:
            </label>
            <input type="email" placeholder='Enter your Email' name="email" required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]" />
          </div>

          <div className=''>
            <label className="block text-lg font-medium text-gray-700 pb-2">
            Title:
            </label>
              <input type="text" placeholder='Enter your title' name="title" required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]" />
          </div>
          <div className=''>
            <label className="block text-lg font-medium text-gray-700 pb-2">
             Image URL:
            </label>
              <input type="text" placeholder='Enter your Image URL' name="imageUrl" required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]" />
          </div>
          
          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">
            Category:
            </label>
            <select name="category" className="select select-bordered w-full border border-gray-200  rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]">
                <option disabled selected>Category</option>
                <option>LifetSyle</option>
                <option>Technology</option>
                <option>Web Developer</option>
                <option>News</option>
                <option>Travel</option>
                <option>Sports</option>
                <option>Business</option>
            </select> 
          </div>

          <div className=''>
            <label className="block text-lg font-medium text-gray-700 pb-2">
             Date:
            </label>
              <input type="date" placeholder='Enter your date' name="date" required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">
              Short Description:
            </label>
            <textarea
              name="shortDesc"
              placeholder="Enter your short description"
              rows="1"
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]"
            />
          </div>
          <div className=''>
            <label className="block text-lg font-medium text-gray-700 pb-2">
              Long Description:
            </label>
            <textarea
              name="longDesc"
              placeholder="Enter your Long Description"
              rows="3"
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]"
            />
          </div>
        </div>
          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="w-full py-3 bg-[#0EA64F] text-white text-lg font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
