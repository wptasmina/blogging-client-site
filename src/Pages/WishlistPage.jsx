import { RiDeleteBin5Fill } from "react-icons/ri";


export default function WishlistPage() {
  return (
    <>
    <div className='bg-white md:w-11/12 mx-auto my-10'>
      <div className='bg-white flex flex-col justify-center items-center '>
        <h2 className='text-3xl text-gray-800 text-center font-extrabold'>Your Peresonalized Wish List</h2>
        <p className='text-lg text-gray-600 font-medium md:w-1/2 px-2 text-center py-2'>Keep track of your favorite blogs with your personalized wish list. Save, revisit, and enjoy the content you love anytime!</p>
      </div>

<div className="overflow-x-auto bg-slate-50 mt-4 rounded-md border">
  <table className="table">
    {/* head */}
    <thead className="bg-black text-white text-lg">
      <tr>
        <th></th>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Quality Control Specialist</td>
        <td>Cy Ganderton</td>
        <td><RiDeleteBin5Fill className="text-xl text-red-500" /></td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Desktop Support Technician</td>
        <td>Hart Hagerty</td>
        <td><RiDeleteBin5Fill className="text-xl text-red-500" /></td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Tax Accountant</td>
        <td>Brice Swyre</td>
        <td><RiDeleteBin5Fill className="text-xl text-red-500" /></td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
    </>
  )
}
