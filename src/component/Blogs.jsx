
import { FaRegHeart } from 'react-icons/fa'
import { TbListDetails } from 'react-icons/tb'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Blogs({ blog }) {
  const { userName, email, userImage, title, imageUrl, date, shortDesc, longDesc, category} = blog

  const navigate = useNavigate()

  const hendleWishList =() =>{

    const newWishList= { userName, email, userImage, title }

    fetch('http://localhost:5000/wishlist', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWishList)
    })
    .then(res => res.json())
    .then(data => {

      navigate('/wishlist')

    })
  }


 return (
 <> 
{/* <div className="border-red-400"> */}

<div data-aos="fade-up-left" className="card card-compact border bg-white shadow-xl">

<div className='flex flex-row items-center py-2 pl-2 gap-2'>
   <img src={userImage} className='w-12 h-12 object-cover rounded-full shadow border border-blue-300 p-1' alt="author image" />
   <div>
     <h4 className="text-md font-bold text-blue-500">Author: {userName} </h4>
     <p className="text-xs font-bold text-gray-500">Email: {email} </p>
   </div>
 </div>
 <figure>
   <img
     className="w-full h-[200px] object-cover rounded-t-lg"
     src={imageUrl}
     alt="Product image"
   />
 </figure>
 <div className="card-body">
   <h2 className="card-title text-2xl text-gray-800 font-bold">{title}</h2>
   <div className='flex justify-between items-center'>
     <div>
       <p className='text-md text-green-600 font-bold'>{category}</p>
     </div>
    <div>
      <p className='font-medium text-gray-900'>{date}</p>
    </div>
   </div>
   <p className='font-normal'>{shortDesc}...see Moer</p>
   {/* <p className='text-gray-600 text-md font-normal'>{longDesc}</p> */}
   <div className="card-actions flex justify-center pt-4">
    <NavLink to={`/details/${blog._id}`}>
     <button className="btn bg-white text-black hover:text-white btn-primary px-7">
       <TbListDetails />
       Details
     </button>
    </NavLink>

       <button onClick={hendleWishList} className="btn bg-white text-black  hover:text-white btn-primary px-7">
         <FaRegHeart />
         Wishlist
       </button>
   </div>
 </div>
</div>
{/* </div> */}
</> 


  );
}
