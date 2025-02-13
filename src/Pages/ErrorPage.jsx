import { FaArrowAltCircleLeft } from "react-icons/fa";
import error from "../assets/404.png"
import { Link } from "react-router-dom";
// import HomePage from './HomePage';

export default function ErrorPage() {
  return (
    <div  className="flex flex-col justify-center items-center w-full mt-14">
      <img src={error} className="bg-no-repeat bg-center bg-cover" alt="error" />

      <div className="mt-8">
         <Link to="/">
        <button className="flex justify-center items-center gap-1 bg-black px-4 py-2 rounded-md text-[#01DEBF] font"> 
         <FaArrowAltCircleLeft />
         <div>Back Home</div>
         </button>
         </Link>
      </div>
    </div>
  )
}
