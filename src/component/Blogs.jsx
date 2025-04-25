
import { FaRegHeart } from 'react-icons/fa'
import { TbListDetails } from 'react-icons/tb'
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Blogs({ blog }) {
  const { userName, email, userImage, title, imageUrl, date, shortDesc, longDesc, category } = blog
  const navigate = useNavigate()

  const hendleWishList = () => {
    const newWishList = { userName, email, userImage, title }

    fetch('https://blogging-server-omega.vercel.app/wishlist', {
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
        data-aos-duration="3000"
        className="card bg-base-200 dark:bg-gray-900 p-4 border dark:border-gray-800 shadow-xl">
        {/* user name and image  */}
        <div className='flex flex-row items-center pb-2 gap-2'>
          <img src={userImage} className='w-12 h-12 object-cover rounded-full shadow border border-purple-600 p-1' alt="author image" />
          <div>
            <h4 className="text-md font-bold text-indigo-800 dark:text-[#36a7fd]">{userName} </h4>
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

        <div className=" space-y-4 dark:bg-gray-900">
          <h2 className="card-title text-2xl text-gray-800 dark:text-gray-200 font-bold pt-4">{title}</h2>
          <div className='flex justify-between items-center'>
            <div>
              <p className='text-md text-indigo-800 dark:text-[#36a7fd] font-bold'>{category}</p>
            </div>
            <div>
              <p className='font-medium text-gray-900 dark:text-gray-400'>{date}</p>
            </div>
          </div>
          <p className='font-normal'>{shortDesc}<span className=' text-green-600'><Link to={`/details/${blog._id}`}>...see more</Link></span></p>
          {/* <p className=' text-gray-400 text-md font-normal'>{longDesc}</p> */}

          <div className="flex justify-center gap-2 pt-4">
            <NavLink to={`/details/${blog._id}`}>
              <button className="inline-flex items-center bg-white font-medium bg-gradient-to-r from-indigo-800 via-purple-600 to-[#2b2a2a] bg-clip-text text-transparent border border-purple-600 px-4 py-2 rounded-md">
                <TbListDetails className="mr-1 text-xl text-purple-900" />
                Details
              </button>
            </NavLink>

            <button
              onClick={hendleWishList}
              className="inline-flex items-center bg-white font-medium bg-gradient-to-r from-indigo-800 via-purple-600 to-[#2b2a2a] bg-clip-text text-transparent border border-purple-600 px-4 py-2 rounded-md"
            >
              <FaRegHeart className="mr-1 text-xl text-purple-900" />
              Wishlist
            </button>
          </div>

        </div>

      </div>

    </>


  );
}
