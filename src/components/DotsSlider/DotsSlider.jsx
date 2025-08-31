import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';



import 'swiper/css';
import 'swiper/css/pagination';
import styles from './dots-slider.module.css'



const DotsSlider = ({images , className}) => {
  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        loop ={true}
        pagination={{ clickable: true }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`Slide ${idx + 1}`} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DotsSlider;
