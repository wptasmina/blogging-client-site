import Carousel from './Carousel'
import img2 from '../assets/site-bg.png'
import { Link } from 'react-router-dom'
// import img2 from '../assets/blog-2.png'

export default function Banner() {
  return (
    // <Carousel />

    <>
      <section className='bg-blogImg w-full min-h-screen bg-bottom'>
        <div className='w-11/12 mx-auto min-h-screen flex justify-between md:flex-row flex-col flex-1 items-center gap-4 py-16'>
          <div data-aos="fade-up"
     data-aos-duration="3000" className='md:w-2/3'>
       <h2 className='text-gray-600 pb-2'>WELCOME Blogger</h2>
          <h1 className='text-white text-3xl font-bold'>
          Here’s a perfect tagline for your blogging website where anyone can write about topics like technology, news, gaming, lifestyle, and education:
          </h1>
          <p className='text-white/50 text-md py-4'>Where- Fresh stories, trending topics, and insights that matter.</p>

          <div className='pt-4'>
            <Link to="/addblog"><button className='px-4 py-2 bg-gradient-to-r from-indigo-600 via-purple-600
               to-[#272626] rounded-md text-white font-medium'>Create Blog</button></Link>
          </div>
          </div>

          <div data-aos="fade-up"
     data-aos-duration="3000">
            <img src={img2} className='w-full h-72 block bg-no-repeat object-cover ' />
          </div>
        </div>
      </section>


    </>

  )
}
