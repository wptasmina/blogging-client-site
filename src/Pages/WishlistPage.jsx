import { useLoaderData } from "react-router-dom"
import WishList from "../component/WishList"


export default function WishlistPage() {
  const wishLists = useLoaderData()



  return (
    <>
    <h1>wishLists: {wishLists.length}</h1>
    {/* <div className=" p-0 px-2 md:px-0 mb-10"> */}
    
      {
        wishLists.map(item => <WishList key={item._id} item={item} />)
      }

      {/* <button onClick={() => handleRemove(item._id)}>Remove from Wishlist</button>
      <button onClick={() => window.location.href = `/blog-details/${item.blogId._id}`}>View Details</button> */}
    {/* </div> */}



   

    </>
  )
}
