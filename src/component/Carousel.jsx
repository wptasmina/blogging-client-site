
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// image import
import img1 from '../assets/banner.jpg'
import img2 from '../assets/news.jpg'
import img3 from '../assets/technology.jpg'
import img4 from '../assets/sport.jpg'

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} className=' bg-no-repeat w-full md:h-[550px] ' /></SwiperSlide>
        <SwiperSlide><img src={img2} className=' bg-no-repeat w-full md:h-[550px] ' /></SwiperSlide>
        <SwiperSlide><img src={img3} className=' bg-no-repeat w-full md:h-[550px] ' /></SwiperSlide>
        <SwiperSlide><img src={img4} className=' bg-no-repeat w-full md:h-[550px] ' /></SwiperSlide>        
      </Swiper>
    </>
  )
}

