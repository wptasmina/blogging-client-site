
import { FaHackerNews, FaRegHeart } from 'react-icons/fa'
import { TbListDetails } from 'react-icons/tb'
import { NavLink } from 'react-router-dom';

export default function Blogs({ blog}) {
  const {title, imageUrl, shortDesc, longDesc, category} = blog

  console.log(blog)

  return (

<div className="">
 <div className="card card-compact bg-white shadow-xl">
    <figure>
      <img
        className="w-full h-[350px] object-cover"
        src={imageUrl}
        alt="Product image"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-2xl text-gray-800 font-bold">{title}</h2>
      <p className=''>{shortDesc}</p>
      <p className=''>{longDesc}</p>
      <p className='text-lg text-gray-800 font-medium'>{category}</p>
      <div className="card-actions justify-center   pt-4">
       <NavLink to="/details">
        <button className="btn bg-white text-black md:w-full hover:text-white btn-primary px-7">
          <TbListDetails />
          Details
        </button>
       </NavLink>
        <NavLink to="/wishlist">
          <button className="btn bg-white text-black md:w-full hover:text-white btn-primary px-6">
            <FaRegHeart />
            Wishlist
          </button>
        </NavLink>
      </div>
    </div>
</div>
</div> 


  );
}
