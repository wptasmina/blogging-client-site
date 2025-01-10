import { useLoaderData } from "react-router-dom";
import Banner from "../component/Banner";
import Newsletter from "../component/Newsletter";
import TabCatagory from "../component/TabCatagory";
import Blogs from "../component/Blogs";



export default function HomePage() {
  const blogs = useLoaderData()

  console.log(blogs)


  return (
    <>
    <Banner></Banner>
    <TabCatagory />
 
    {/* Blog card  */}
    {/* <h1>blog: {blogs.length}</h1> */}
    <div className="md:w-11/12 mx-auto p-0 px-2 md:px-0 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {
        blogs.map(blog => <Blogs key={blog._id} blog={blog} />)
      }
    </div>
  

    <Newsletter />
    </>
  )
}
