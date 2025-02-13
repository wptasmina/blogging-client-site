import Marquee from "react-fast-marquee";
import LogoSlice from "../component/LogoSlice";

export default function MarqueeSlice() {
  return (
    <>
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-4xl text-center font-extrabold pb-4">
        Best 
        <span className='text-[#673596]'> Blogger</span>
      </h2>
      <p className="text-lg text-center font-medium mb-10 sm:w-2/3 mx-auto">Passionate blogger sharing engaging stories, expert insights, and creative ideas across various topics to inspire and connect with readers worldwide</p>
    <Marquee>
      <LogoSlice />
    </Marquee>
    </div>
    </>
  )
}
