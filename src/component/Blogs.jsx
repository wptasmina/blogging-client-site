
import { FaHackerNews, FaRegHeart } from 'react-icons/fa'
import { TbListDetails } from 'react-icons/tb'
import { NavLink } from 'react-router-dom';

export default function Blogs({ blog }) {
  const { userName, email, userImage, title, imageUrl, date, shortDesc, longDesc, category} = blog

 return (

 <> 
 <div className="card card-compact border p-1 bg-white shadow-xl">

   <div className='flex flex-row items-center py-4 pl-2 gap-2'>
      <img src={userImage} className='w-12 h-12 object-cover rounded-full shadow border border-blue-300 p-1' alt="author image" />
      <div>
        <h4 className="text-md font-bold text-blue-500">Author: {userName} </h4>
        <p className="text-xs font-bold text-gray-500">Email: {email} </p>
      </div>
    </div>
    <figure>
      <img
        className="w-full h-[200px] object-cover"
        src={imageUrl}
        alt="Product image"
      />
    </figure>
    <div className="card-body ">
      <h2 className="card-title text-2xl text-gray-800 font-bold">{title}</h2>
      <p className='font-medium text-gray-900'>{date}</p>
      <p className='text-lg text-gray-800 font-medium'>{category}</p>
      <p className='font-normal'>{shortDesc}</p>
      <p className='text-gray-600 text-md font-normal'>{longDesc}</p>
      <div className="card-actions justify-center pt-4">
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
</> 


  );
}
