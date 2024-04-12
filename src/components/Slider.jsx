import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper rounded-md " >
        <SwiperSlide className=''><img className='' src="https://www.papercitymag.com/wp-content/uploads/2023/08/TheAllenLevel35Penthouse_Interior_SuitB_Cam2_081123-1-2048x1152.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.papercitymag.com/wp-content/uploads/2023/08/TheAllenLevel35Penthouse_Interior_SuitA_Cam5_082423-2048x1802.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.papercitymag.com/wp-content/uploads/2023/08/TheAllenLevel35Penthouse_Interior_SuitA_Cam1_082423-1536x864.jpg" alt=""/></SwiperSlide>
      </Swiper>
    </>
  );
}
