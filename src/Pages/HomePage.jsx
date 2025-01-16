import { useLoaderData } from "react-router-dom";
import Banner from "../component/Banner";
import Newsletter from "../component/Newsletter";
import Blogs from "../component/Blogs";
import FAQs from "../component/FAQs";
import MarqueeSlice from "./MarqueeSlice";



export default function HomePage() {
  const blogs = useLoaderData()

  return (
    <>
    <Banner></Banner>

  
    <h1 className='text-3xl text-black font-extrabold text-center my-10'>
      Tech Trends to Watch in {new Date().getFullYear()}
    </h1>
    {/* <h1>blog: {blogs.length}</h1> */}
    <div className="md:w-11/12 mx-auto p-0 px-2 md:px-0 grid lg:grid-cols-4 md:grid-cols-3 
    sm:grid-cols-2 grid-cols-1 gap-4 mb-10">
      {Array.isArray(blogs) && blogs.length > 0 ? (
        blogs.map(blog => <Blogs key={blog._id} blog={blog} />)
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  
    <Newsletter />
    <MarqueeSlice/>
    <FAQs/>
    </>
  )
}
