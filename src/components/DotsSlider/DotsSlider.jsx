import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import studio from '../../assets/images/location/studio.webp';
import pilates from '../../assets/images/location/Pilates.webp';
import pool from '../../assets/images/location/swimming-pools.webp';


import 'swiper/css';
import 'swiper/css/pagination';
import styles from './dots-slider.module.css'

const images = [studio, pilates, pool];

const DotsSlider = () => {
  return (
    <div className={styles.wrapper}>
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