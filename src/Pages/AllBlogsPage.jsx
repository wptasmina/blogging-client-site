import React from 'react'
import Blogs from '../component/Blogs'

export default function AllBlogsPage() {
  return (
   <>
   <div className='bg-white mb-10'>
   {/* Filter By Category */}
    <div className="bg-white my-10 w-11/12 mx-auto md:flex justify-center items-center gap-4">
    <div>
    <select className="select select-bordered  sm:mb-0 mb-4 w-70 max-w-xs">
      <option disabled selected>Filter By Category</option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select> 
    </div>
 {/* search fild */}

<div className="join">
  <div>
    <div>
      <input className="input border-blue-500 join-item" placeholder="Enter Your Job Title" />
    </div>
  </div>
  <div className="indicator">
    <button className="btn border-2 border-blue-500 focus:border-0 outline-none  bg-blue-700 text-white font-medium join-item hover:bg-blue-700">Search</button>
    
  </div>
</div>

{/* //sort by deadine */}
    <div>
    <select className="select select-bordered sm:mt-0 mt-4 w-70 max-w-xs">
      <option disabled selected>Sort By Deadine</option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>
    </div>
  
    </div>

    <Blogs />
    </div>
   </>
  )
}
