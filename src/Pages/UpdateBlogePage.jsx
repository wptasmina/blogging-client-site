import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function UpdateBlogPage() {
  const blog = useLoaderData();
  const { _id, userImage, userName, email, title, imageUrl, shortDesc, longDesc, category, date } = blog;

  const navigate = useNavigate();

  const handleUpdateBlog = async (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedBlog = {
      userName: form.userName.value,
      email: form.email.value,
      userImage: form.userImage.value,
      title: form.title.value,
      imageUrl: form.imageUrl.value,
      date: form.date.value,
      category: form.category.value,
      shortDesc: form.shortDesc.value,
      longDesc: form.longDesc.value,
    };

    try {
      const response = await fetch(`https://blogging-server-alpha.vercel.app/blog/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBlog),
      });

      const data = await response.json();
      if (data.modifiedCount > 0) {
        toast.success("Blog updated successfully");
        navigate(`/details/${_id}`);
      } else {
        toast.info("No changes detected");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Failed to update blog");
    }
  };

  return (
    <div className="bg-base-100 w-full md:w-11/12 mx-auto shadow-sm px-4 my-10 pt-4 pb-10">
      <h2 className="md:text-4xl text-2xl text-gray-800 font-extrabold pb-2 text-center">Update Blog</h2>
      <p className="text-md text-gray-600 font-medium text-center md:w-1/2 mx-auto">
        Fill in the details below to update the blog post. Make sure to provide accurate and descriptive information.
      </p>

      <form onSubmit={handleUpdateBlog} className="mt-8">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">User Name:</label>
            <input type="text" name="userName" defaultValue={userName} required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#60e49991]" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">User Email:</label>
            <input type="email" name="email" defaultValue={email} required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#60e49991]" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">User Image:</label>
            <input type="text" name="userImage" defaultValue={userImage} required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#60e49991]" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">Blog Title:</label>
            <input type="text" name="title" defaultValue={title} required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#60e49991]" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">Image URL:</label>
            <input type="text" name="imageUrl" defaultValue={imageUrl} required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#60e49991]" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">Category:</label>
            <select name="category" defaultValue={category} className="select select-bordered w-full border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#60e49991]">
              <option disabled>Select Category</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Technology">Technology</option>
              <option value="Web Developer">Web Developer</option>
              <option value="News">News</option>
              <option value="Travel">Travel</option>
              <option value="Sports">Sports</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">Date:</label>
            <input type="date" name="date" defaultValue={date} required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#60e49991]" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">Short Description:</label>
            <textarea name="shortDesc" defaultValue={shortDesc} rows="1" required className="w-full p-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#60e49991]"></textarea>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">Long Description:</label>
            <textarea name="longDesc" defaultValue={longDesc} rows="3" required className="w-full p-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#60e49991]"></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button type="submit" className="w-full py-3 bg-[#0EA64F] text-white text-lg font-semibold rounded-lg hover:bg-blue-500 focus:ring-2 focus:ring-indigo-500">
            Update Blog
          </button>
        </div>
      </form>
    </div>
  );
}
