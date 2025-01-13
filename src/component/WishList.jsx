// import { useState, useEffect } from 'react';/

import { RiDeleteBin5Fill } from "react-icons/ri"



export default function WishList({item}) {
  
    const {_id, userImage, userName, email, title,} =item
    

    //  const handleSubmit = (e) => {
    //     e.preventDefault();
    
    
    //   // send data to the server
    //   fetch('http://localhost:5000/wishlist', {
    //     method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(newWishBlog)
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //     toast.success("WishList blog success!")
    
    //     console.log(data)

    //   })
    console.log(item)

//   const handleDelete = (id) => {
//     const updatedWishlist = wishlist.filter((item) => item.id !== id);
//     setWishlist(updatedWishlist);
//     console.log(`Deleted item with ID: ${id}`);
//   };


  return (
    <>
<div className='bg-white md:w-11/12 mx-auto my-10'>
    <div className='bg-white flex flex-col justify-center items-center '>
        <h2 className='text-3xl text-gray-800 text-center font-extrabold'>Your Peresonalized Wish List</h2>
        <p className='text-lg text-gray-600 font-medium md:w-1/2 px-2 text-center py-2'>
        Keep track of your favorite blogs with your personalized wish list. Save, revisit, and enjoy the content you love anytime!
        </p>
    </div>

<div className="overflow-x-auto bg-slate-50 mt-4 rounded-md border">
  <table className="table">
    {/* head */}
    <thead className="bg-black text-white text-lg">
      <tr>
        <th>
         #
        </th>
        <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            1
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={userImage}
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
          Zemlak, Daniel and Leannon Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>{userName}</td>
        <th>
          <td>
            <div className="flex justify-center items-center gap-1">
            <button onClick={() => handleDelete(item.id)}>
                <RiDeleteBin5Fill className="text-xl text-red-500 cursor-pointer hover:text-red-600" />
            </button>
            <div>
              <button className="btn btn-ghost btn-xs text-md text-black font-medium">details</button>
            </div>
            </div>
         </td>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            2
          </label>
        </th>
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
        <td>Red</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
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
        <td>Crimson</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
     
    </tbody>
    {/* foot */}
   
  </table>
</div>
</div>
    </>
  )
}

