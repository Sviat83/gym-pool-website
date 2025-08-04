import React from'react';
import styles from './Burger.module.css';

const Burger = ({ isOpen, toggleMenu }) => {
    return (
        <div className={styles.burger} onClick={toggleMenu}>
            <span className={`${styles.burgerLine} ${isOpen ? styles.burgerLineOpen1 : ''}`}></span>
            <span className={`${styles.burgerLine} ${isOpen ? styles.burgerLineOpen2 : ''}`}></span>
            <span className={`${styles.burgerLine} ${isOpen ? styles.burgerLineOpen3 : ''}`}></span>
        </div>

    );
};

export default Burger;