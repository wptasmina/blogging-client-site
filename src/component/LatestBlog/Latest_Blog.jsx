import { useLoaderData } from "react-router-dom";
import Blogs from '../Blogs'

export default function Latest_Blog() {

    const blogs = useLoaderData()

  return (
  <div className="md:w-11/12 mx-auto px-4 sm:px-0">
   <h1 className='text-3xl text-gray-700 font-bold text-center my-10'>
      Latest Blog <span className="text-purple-800">Posts</span> {new Date().getFullYear()}
    </h1>

    {/* <h1>blog: {blogs.length}</h1> */}
    <div className="dark:bg-gray-900 text-gray-800 dark:text-white grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-6 mb-10">
      {Array.isArray(blogs) && blogs.length > 0 ? (
        blogs.map(blog => <Blogs key={blog._id} blog={blog} />)
      ) : (
        <p>No blogs available</p>
      )}
    </div>
    </div>

  )
}
