import { FaCommentDots, FaPenToSquare } from 'react-icons/fa6'
import profile from '/profile.jpg'
import { Link, NavLink } from 'react-router-dom'

export default function BlogDetailsPage() {

  // const {title, imageUrl, shortDesc, longDesc, category} = blog

  return (
    <>
   <div className=' bg-white md:w-11/12 mx-auto '>
   <div className="card bg-gradient-to-r from-indigo-50 md:w-2/3 mx-auto md:p-6 py-6 px-4 my-8 shadow">
    <div className="card-body flex-row justify-between items-center gap-4 p-0 mb-4">
{/* profile img, name & img  */}
      <div className='flex flex-row items-center gap-2'>
        <img src={profile} className='w-12 h-12 object-cover rounded-full shadow border border-blue-300 p-1' alt="author image" />
        <div>
          <h2 className="text-lg font-bold text-blue-600">Samira Sarwar</h2>
          <p className="text-xs font-bold text-gray-500">Email: tasmi345@gmail.com </p>
        </div>
      </div>

    <div>
      <Link to="/updateBloge" ><FaPenToSquare className="text-2xl shadow cursor-pointer" /></Link>
    </div>
  </div>

  {/* profile title & img  */}
  <h2 className="text-3xl font-extrabold text-gray-800 mb-5">Title:</h2>
    <img className='rounded-xl'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EsQholonmGMIu1r1lJM7bUMibkFj8WQ9oTyJiVFuwR5wNoWBQ-rKZmhe8Yd3LyCjxvs&usqp=CAU"
      alt="image" />

    {/* Description Box  */}
      <div className='mt-6'>
        <h4 className='text-lg font-bold'>Description:</h4>
        <p className='text-md text-gray-500 font-medium pt-2'>Sent bird i or raven nights caught not form least fancy, till bird thrilled quaff than and repeating quoth myself...see more</p>
      </div>

    {/* Comment input Box  */}
      <div className='flex mt-6 gap-2 items-center'>
      <img src={profile} className='hidden sm:block w-14 h-14 object-cover rounded-full shadow border border-blue-200 p-1' alt="author image" />
      <div className="join border border-blue-100 w-full">
        <input className="input w-full join-item focus:outline-none border-none" placeholder="Add to comment" required />
        <button className="btn join-item bg-blue-400 text-md text-white hover:text-black font-medium rounded-r-md focus:border-blue-300" >Comment</button>
      </div>
      </div>
    {/* Comment Text Box  */}
      <div className='flex justify-items-center items-center text-lg gap-1 mt-6 '>
       <FaCommentDots className="text-2xl pt-1" />
       <p className='text-md text-black font-bold '>commemts (2) </p>
      </div>

    {/* Update btn  */}
    <button className="btn w-32 bg-blue-500 mt-6 text-lg text-white font-medium hover:bg-blue-600 focus:bg-none">
     Update
      <Link><FaPenToSquare /></Link>
    </button>

</div>



   </div>
    </>
  )
}
