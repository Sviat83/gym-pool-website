import React from 'react'
import styles from '../location.module.css'

const ZoneCard = ({title,image}) => {
  return (
        <div className={styles.card} >
          <img src={image} alt={title} className={styles.image} />
      <div className={styles.overlay}>
        <h3 className={styles.cardTitle}>{title} </h3>
      </div>
    </div>
  )
}

export default ZoneCard