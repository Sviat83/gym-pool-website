import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './dots-slider.module.css'



const DotsSlider = ({ images, className }) => {
  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      <Swiper
        modules={[Pagination ,Autoplay]}
        speed={1000}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
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
