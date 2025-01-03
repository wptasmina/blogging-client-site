import React from 'react'
import { FaHackerNews, FaRegHeart } from 'react-icons/fa'
import { TbListDetails } from 'react-icons/tb'

export default function Blogs() {
  return (
<div className="md:w-11/12 mx-auto p-0 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
 <div className="card card-compact bg-red-300 shadow-xl">
    <figure>
      <img
        className="w-full h-[350px] object-cover"
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Product"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-center w-full gap-4 pt-4">
        <button className="btn bg-white text-black hover:text-white btn-primary px-7">
        <TbListDetails />
          Details
        </button>
        <button className="btn bg-white text-black hover:text-white btn-primary px-6">
        <FaRegHeart />
          Wishlist
        </button>
      </div>
    </div>
  </div>
 <div className="card card-compact bg-red-300 shadow-xl">
    <figure>
      <img
        className="w-full h-[350px] object-cover"
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Product"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-center w-full gap-2 pt-4">
        <button className="btn btn-primary px-7">
        <TbListDetails />
          Details
        </button>
        <button className="btn btn-primary px-6">
        <FaRegHeart />
          Wishlist
        </button>
      </div>
    </div>
  </div>
 <div className="card card-compact bg-red-300 shadow-xl">
    <figure>
      <img
        className="w-full h-[350px] object-cover"
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Product"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-center w-full gap-2 pt-4">
        <button className="btn btn-primary px-7">
        <TbListDetails />
          Details
        </button>
        <button className="btn btn-primary px-6">
        <FaRegHeart />
          Wishlist
        </button>
      </div>
    </div>
  </div>
 <div className="card card-compact bg-red-300 shadow-xl">
    <figure>
      <img
        className="w-full h-[350px] object-cover"
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Product"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-center w-full gap-4 pt-4">
        <button className="btn btn-primary px-7">
        <TbListDetails />
          Details
        </button>
        <button className="btn btn-primary px-6">
        <FaRegHeart />
          Wishlist
        </button>
      </div>
    </div>
  </div>

</div>


  )
}
