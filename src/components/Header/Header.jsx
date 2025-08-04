import React, {useState} from 'react';
import styles from './Header.module.css';

import Burger from './Burger/Burger';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen); 

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Uni Force</div>
            <nav className={styles.navMenu}>
                <ul className={`${styles.navList} ${isOpen ? styles.navOpen : ''}`}>
                    <li className={styles.navItem}><a href='#home'>Про клуб</a></li>
                    <li className={styles.navItem}><a href='#trainers'>Тренери</a></li>
                    <li className={styles.navItem}><a href='#locations'>Локації</a></li>
                    <li className={styles.navItem}><a href='#club-cards'>Клубні картки</a></li>
                    <li className={styles.navItem}><a href='#one-time-visit'>Разовий візит</a></li>
                    <li className={styles.navItem}><a href='#schedule'>Розклад</a></li>
                    <li className={styles.navItem}><a href='#children-club'>Дитячий клуб</a></li>
                    <li className={styles.navItem}><a href='#cafe'>Uni Cafe</a></li>
                </ul>
            </nav>
            <button className={styles.feedbackBtn}>Зворотній зв'язок</button>

            <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
        </header>
    );
};

export default Header;