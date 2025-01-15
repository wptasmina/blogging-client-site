import React, { useContext } from 'react'
import AuthContext from './AuthProvider/AuthContext';
import { toast } from 'react-toastify';


export default function AddBlogPage() {

  const contextValue = useContext(AuthContext) 

  const handleSubmit = (e) => {
    e.preventDefault();

  const form = e.target;

  const userName = form.userName.value;
  const email = form.email.value;
  const userImage = form.userImage.value;
  const title = form.title.value;
  const imageUrl = form.imageUrl.value;
  const date = form.date.value;
  const category = form.category.value;
  const shortDesc = form.shortDesc.value;
  const longDesc = form.longDesc.value;

  const newAddBlog = { userName, email, userImage, title, imageUrl,
     date, category, shortDesc, longDesc }

  // send data to the server
  fetch('http://localhost:5000/blogger', {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAddBlog)
  })
  .then(res => res.json())
  .then(data => {
    toast.success("Add blog success!")

    // console.log(data)
    form.reset()
  })

}
  return (
    <>
    <div className="bg-base-100 w-full md:w-11/12 mx-auto shadow-sm md:px-10 px-4 my-10 pt-4 pb-10">
        <h2 className="md:text-4xl text-2xl text-gray-800 font-extrabold pb-2 text-center">Add a New Blog</h2>
        <p className="text-md text-gray-600 font-medium text-center md:w-1/2 mx-auto">Start your journey as a blogger! Create a new blog to share your unique ideas,
      stories, or knowledge with the world.</p>


      <form onSubmit={handleSubmit} className="mt-8">
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">
            User Name:
            </label>
            <input
            type="text"
            name="userName"
            placeholder='Enter your title'  className="w-full outline-none
             px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1
              focus:ring-[#60e49991]" required />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">
            Email:
            </label>
              <input type="email" placeholder='Enter your email' name="email" required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">
             User Image:
            </label>
            <input type="text" id="fileInput" placeholder='Enter your Photo' name="userImage" required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]" />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">
              Blog Title:
            </label>
            <input type="text" placeholder='Enter your title' name="title" required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]" />
          </div>
          <div className=''>
            <label className="block text-lg font-medium text-gray-700 pb-2">
             Image URL:
            </label>
              <input type="text" placeholder='Enter your Image URL' name="imageUrl" required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]" />
          </div>

          <div className=''>
            <label className="block text-lg font-medium text-gray-700 pb-2">
             Date:
            </label>
              <input type="date" placeholder='Enter your Image URL' name="date" required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]" />
          </div>
          
          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">
            Category:
            </label>
          <select name="category" defaultValue="" className="select select-bordered w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]">
          <option value="" disabled>Select a Category</option> 
            <option>News</option>
            <option>Web Developer</option>
            <option>Travel</option>
            <option>Sports</option>
            <option>Technology</option>
            <option>LifetSyle</option>
            <option>Business growth</option>
          </select> 
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
            <input
            
              type="submit"
              value="Add Blog"
              className="w-full py-3 bg-gray-800/90 text-white text-lg font-semibold rounded-lg focus:outline-none focus:bg-[#0EA64F]"
            />
              
           
          </div>
        </form>
      </div>
    </>
  )
}
