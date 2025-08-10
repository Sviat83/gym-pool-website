import React from 'react'
import styles from "./location.module.css"
import bg from '../../assets/images/location/LocationBakground.jpg.webp'
import gym from '../../assets/images/location/Gym.webp.webp'
import boxing from '../../assets/images/location/boxing.webp'
import studio from '../../assets/images/location/studio.webp'
import pilates from '../../assets/images/location/Pilates.webp'
import pool from '../../assets/images/location/swimming-pools.webp'
import spa from '../../assets/images/location/Spa_area.webp'
import kidsClub from '../../assets/images/location/kids_club.webp'
import pingPong from '../../assets/images/location/Ping_pong.webp'
import ZoneCard from './zoneComponent/ZoneCard';


const zones = [
    { title: 'Тренажерний зал', image: gym },
    { title: 'Зона боксу', image: boxing },
    { title: 'Студії групових та персональних програм', image: studio },
    { title: 'Пілатес на реформерах', image: pilates },
    { title: 'Аквазона: великий та малий  басейн', image: pool },
    { title: 'Зона спа', image: spa },
    { title: 'Дитячий клуб', image: kidsClub },
    { title: 'Настільний теніс', image: pingPong },
];

const Location = () => {
    return (
        <section className={styles.container} style={{ backgroundImage: `url(${bg})`, }}>
            <h2 className={styles.heading} >Локації  </h2>
            <div className={styles.grid}>
{
    zones.map((zone,index)=>(<ZoneCard key={index} title={zone.title} image={zone.image}/>))
}
            </div>
        </section>
    )
}

export default Location