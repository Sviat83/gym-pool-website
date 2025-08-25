import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import studio from '../../assets/images/location/studio.webp';
import pilates from '../../assets/images/location/Pilates.webp';
import pool from '../../assets/images/location/swimming-pools.webp';


import 'swiper/css';
import 'swiper/css/navigation';
import styles from './arrow-slider.module.css'


const items = [studio, pilates, pool, pool, pilates, studio, pilates, pool]

const ArrowSlider = () => {
    return (
        <div className={styles.slider}>
            <Swiper
                modules={[Navigation, Autoplay]}
                grabCursor={true}
                spaceBetween={24}
                slidesPerView={'auto'}
                loop={true}
                navigation
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
            >
                {items.map((srs, i) => (
                    <SwiperSlide key={i} className={styles.slide}>
                        <div className={styles.imageWrapper}>
                            <img src={srs} alt="" className={styles.image} />
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    )
}

export default ArrowSlider