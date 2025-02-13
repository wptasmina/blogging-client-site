import React, { useState, useEffect } from "react";
import axios from "axios";

const calculateWordCount = (text) => text.split(" ").length;


const Featured = () => {

  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    axios.get("https://blogging-server-alpha.vercel.app/blog")
    .then((res) => {
    const blogs = res.data;

      const sortedBlogs = blogs
        .map((blog) => ({
          ...blog,
          wordCount: calculateWordCount(blog.longDesc),
        }))
        .sort((a, b) => b.wordCount - a.wordCount)
        .slice(0, 10);

      setTopPosts(sortedBlogs);
    });
  }, []);

  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Top 10 Blog Posts by Word Count
      </h1>
      <table className="min-w-full border border-gray-300 bg-white rounded-md shadow-md">
        <thead className=" bg-black text-white">
          <tr>
            <th className="text-left py-2 px-4">#</th>
            <th className="text-left py-2 px-4">Title</th>
            <th className="text-left py-2 px-4">Author</th>
            <th className="text-left py-2 px-4">Date</th>
            <th className="text-left py-2 px-4">Word Count</th>
          </tr>
        </thead>
        <tbody>
          {topPosts.map((post, index) => (
            <tr
              key={post._id}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-50`}
            >
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{post.title}</td>
              <td className="py-2 px-4">{post.userName}</td>
              <td className="py-2 px-4">{post.date}</td>
              <td className="py-2 px-4">{post.wordCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Featured;
