
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';

import img1 from '../assets/blog.png'
import img2 from '../assets/blog-2.png'
import img3 from '../assets/blog-3.png'



export default function Carousel() {
  return (
    <>
      <div className=''>
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper  max-h-screen"
        >
          <SwiperSlide className=''>
            <img src={img1} className='  bg-no-repeat w-full' />
            <div className='bg-black z-20'>
              <h1>DeveloperFree Lifestyle Photos

                Pexels
                https://www.pexels.com › search › lifestyle
                Lifestyle image from www.pexels.com
                Download and use 500000+ Lifestyle stock photos for free. ✓ Thousands of new images every day ✓ Completely Free to Use ✓ High-quality videos and images from ...</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-full'><img src={img2} className='  bg-no-repeat object-cover  w-full' /></SwiperSlide>
          <SwiperSlide className='w-full'><img src={img3} className=' bg-no-repeat object-cover w-full' /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

