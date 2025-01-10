import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FeaturedBlogs() {
  return (
    <>
   <div className='md:w-11/12 mx-auto mt-10'>
    <h2 className="text-center text-3xl text-gray-800 font-extrabold">Top-10 Featured List</h2>
    <p className="text-center text-lg md:w-1/2 mx-auto text-gray-600 font-medium pt-2">Discover the top 10 features that make it the future of healthcare, technology, news, travel, business and lifestyle.</p>
  

  <div className="overflow-x-auto bg-[#f8fafcec] border rounded-md my-10">
  <table className="table">
    {/* head */}
    <thead className='bg-black text-white text-xl'>
      <tr >
        <th>Top 10</th>
        <th>Image & Auther</th>
        <th>Title</th>
        <th>Catagory</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th className='pr-0'>1</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Developer</td>
        <th>
        <NavLink to="/details"><button className="btn btn-ghost btn-xs">details</button></NavLink>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th className='pr-0'>2</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br />
          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
        <td>News</td>
        <th>
        <NavLink to="/details"><button className="btn btn-ghost btn-xs">details</button></NavLink>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th className='pr-0'>
         3
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br />
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>Business</td>
        <th>
        <NavLink to="/details"><button className="btn btn-ghost btn-xs">details</button></NavLink>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th className='pr-0'>
         4
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br />
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>LifeStyle</td>
        <th>
          <NavLink to="/details"><button className="btn btn-ghost btn-xs">details</button></NavLink>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}
  </table>
</div>
</div>
    </>
  )
}

