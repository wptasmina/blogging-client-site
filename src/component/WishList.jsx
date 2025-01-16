import React, { useContext, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function WishList() {
  const wishLists = useLoaderData(); 
  console.log(wishLists)
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    
    <div className="bg-white md:w-11/12 mx-auto my-10">
      <div className="bg-white flex flex-col justify-center items-center">
        <h2 className="text-3xl text-gray-800 text-center font-extrabold">Your Personalized Wish List</h2>
        <p className="text-lg text-gray-600 font-medium md:w-1/2 px-2 text-center py-2">
          Keep track of your favorite blogs with your personalized wish list. Save, revisit, and enjoy the content you love anytime!
        </p>
      </div>

      <div className="overflow-x-auto bg-slate-50 mt-4 rounded-md border">
        <table className="table w-full">
          {/* Table Header */}
          <thead className="bg-black text-white text-lg">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Author</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {wishLists.length > 0? (
              wishLists.map((item, index) => (
                <tr key={item._id} >
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.userImage} alt="User Avatar" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.userName}</td>
                  <td>{item.email}</td>
                  <td>
                    <div className="flex justify-center items-center gap-1">
                      {/* Remove Button */}
                      <button onClick={() => handleRemoveWishlist(item._id)}>
                        <RiDeleteBin5Fill className="text-xl text-red-500 cursor-pointer hover:text-red-600" />
                      </button>
                      {/* Details Button */}
                      <button
                        onClick={() => navigate(`/details/${item._id}`)}
                        className="btn btn-ghost btn-xs text-md text-black font-medium"
                      >
                        Details
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-3xl font-bold text-red-500 py-4">
                  No items in your wishlist.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
