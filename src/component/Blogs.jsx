
import { FaRegHeart } from 'react-icons/fa'
import { TbListDetails } from 'react-icons/tb'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Blogs({ blog }) {
  const { userName, email, userImage, title, imageUrl, date, shortDesc, longDesc, category} = blog

  const navigate = useNavigate()

  const hendleWishList =() =>{

    const newWishList= { userName, email, userImage, title }

    fetch('https://blogging-server-alpha.vercel.app/wishlist', {
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
<div data-aos="fade-up"
     data-aos-duration="3000" className="card bg-base-100 p-4 border shadow-xl">
  {/* user name and image  */}
  <div className='flex flex-row items-center pb-2 gap-2'>
   <img src={userImage} className='w-12 h-12 object-cover rounded-full shadow border border-purple-600 p-1' alt="author image" />
   <div>
     <h4 className="text-md font-bold text-indigo-800">{userName} </h4>
     <p className="text-xs font-bold text-gray-500">{email} </p>
   </div>
 </div>

 {/* card larg image  */}
<figure>
   <img
     className="w-full h-[200px] object-cover rounded-t-lg"
     src={imageUrl}
     alt="Product image"
   />
 </figure>

  
 <div className=" space-y-4">
   <h2 className="card-title text-2xl text-gray-800 font-bold pt-4">{title}</h2>
   <div className='flex justify-between items-center'>
     <div>
       <p className='text-md text-indigo-800 font-bold'>{category}</p>
     </div>
    <div>
      <p className='font-medium text-gray-900'>{date}</p>
    </div>
   </div>
   <p className='font-normal'>{shortDesc}...see Moer</p>
   {/* <p className='text-gray-600 text-md font-normal'>{longDesc}</p> */}

   <div className="card-actions flex justify-center md:gap-2 gap-4 pt-4">
    <NavLink to={`/details/${blog._id}`}>
     <button className="btn bg-white text-white/70 text-white bg-gradient-to-r from-indigo-800 via-purple-600 to-[#2b2a2a] px-4">
       <TbListDetails />
       Details
     </button>
    </NavLink>

    <button onClick={hendleWishList} className="btn bg-white text-white/70 bg-gradient-to-r from-indigo-800 via-purple-600 to-[#2b2a2a] px-4">
      <FaRegHeart />
      Wishlist
    </button>
   </div>
 </div>

</div>

</> 


  );
}
