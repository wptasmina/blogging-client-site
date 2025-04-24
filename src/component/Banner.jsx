import { Link } from 'react-router-dom'
import Lottie from "lottie-react";
import galaxy from "../assets/galaxy.json";


export default function Banner() {
  return (

    <>
      <section className='bg-blogImg w-full min-h-screen bg-bottom'>
        <div className='w-11/12 mx-auto min-h-screen flex justify-between md:flex-row flex-col-reverse items-center gap-4 md:py-16 py-10'>
          <div data-aos="fade-up"
            data-aos-duration="3000" className='md:w-2/3'>
            <h2 className='text-gray-400 pb-2 uppercase'>WELCOME Blogger</h2>
            <h1 className='text-white md:text-3xl text-2xl font-bold'>
              Here’s a perfect tagline for your blogging website where anyone can write about topics like technology, news, gaming, lifestyle, and education:
            </h1>
            <p className='text-white/70 text-md py-4'>Where- Fresh stories, trending topics, and insights that matter.</p>

            <div className='pt-4'>
              <Link to="/addblog"><button className='px-4 py-2 bg-gradient-to-r from-indigo-600 via-purple-600
               to-[#272626] rounded-md text-white font-medium'>Create Blog</button></Link>
            </div>
          </div>

          <div className="md:w-3/6  w-full">
            <Lottie animationData={galaxy} />
          </div>
        </div>
      </section>


    </>

  )
}
