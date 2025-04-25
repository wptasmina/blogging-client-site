import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from './AuthProvider/AuthProvider';

export default function AddBlogPage() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const newAddBlog = {
      userName: form.userName.value.trim(),
      email: form.email.value.trim(),
      userImage: form.userImage.value.trim(),
      title: form.title.value.trim(),
      imageUrl: form.imageUrl.value.trim(),
      date: form.date.value,
      category: form.category.value,
      shortDesc: form.shortDesc.value.trim(),
      longDesc: form.longDesc.value.trim(),
    };

    if (!newAddBlog.category) {
      toast.error('Please select a category!');
      setLoading(false);
      return;
    }
 

    try {
      const response = await fetch('https://blogging-server-omega.vercel.app/blogger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAddBlog),
      });

      if (!response.ok) throw new Error('Failed to add blog');

      toast.success('Blog added successfully!');
      form.reset();
    } catch (error) {
      toast.error('Failed to add blog. Please try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-950 w-full md:w-11/12 mx-auto shadow-md rounded-md md:px-10 px-4 my-10 pt-4 pb-10 border dark:border-gray-800">
      <h2 className="md:text-4xl text-2xl text-gray-800 dark:text-white font-extrabold pb-2 text-center">
        Add a New <span className='text-[#673596]'>Blog</span>
      </h2>
      <p className="text-md  text-gray-600 dark:text-gray-400 font-medium text-center md:w-1/2 mx-auto">
        Start your journey as a blogger! Share your ideas, stories, or knowledge with the world.
      </p>

      <form onSubmit={handleSubmit} className="dark:bg-gray-900 py-4 text-gray-800 dark:text-gray-800 mt-8 md:px-16 rounded-md">
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
          {/* User Info (Read-Only) */}
          <InputField label="User Name" name="userName" value={user?.displayName} readOnly />
          <InputField label="Email" name="email" value={user?.email} type="email" readOnly />

          {/* Blog Info */}
          <InputField label="User Image URL" name="userImage" placeholder="Enter your Photo URL" />
          <InputField label="Blog Title" name="title" placeholder="Enter your title" />
          <InputField label="Image URL" name="imageUrl" placeholder="Enter your Image URL" />
          <InputField label="Date" name="date" type="date" />

          {/* Category Dropdown */}
          <div>
            <label className="block text-lg font-medium  text-gray-400 pb-2 dark:text-gray-400">Category:</label>
            <select name="category" defaultValue="" required className="select select-bordered w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#8845C8]">
              <option value="" disabled>Select a Category</option>
              <option>News</option>
              <option>Web Developer</option>
              <option>Travel</option>
              <option>Sports</option>
              <option>Technology</option>
              <option>Lifestyle</option>
              <option>Business Growth</option>
            </select>
          </div>

          {/* Descriptions */}
          <TextareaField label="Short Description" name="shortDesc" rows="1" />
          <TextareaField label="Long Description" name="longDesc" rows="2" />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-[#003f6fbb] via-[#49226d] to-black text-white text-lg cursor-pointer font-semibold rounded-lg focus:outline-none"
            disabled={loading}
          >
            {loading ? 'Adding Blog...' : 'Add Blog'}
          </button>
        </div>
      </form>
    </div>
  );
}

// Reusable Input Component
const InputField = ({ label, name, type = "text", value, readOnly, placeholder }) => (
  <div>
    <label className="block text-lg font-medium  text-gray-400 pb-2">{label}:</label>
    <input
      type={type}
      name={name}
      defaultValue={value}
      readOnly={readOnly}
      placeholder={placeholder}
      required
      className="w-full outline-none px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#8845C8]"
    />
  </div>
);

// Reusable Textarea Component
const TextareaField = ({ label, name, rows }) => (
  <div>
    <label className="block text-lg font-medium  text-gray-400 pb-2">{label}:</label>
    <textarea
      name={name}
      rows={rows}
      required
      placeholder={`Enter your ${label.toLowerCase()}`}
      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#8845C8]"
    />
  </div>
);
