import React, {useEffect, useState} from 'react';
import styles from './Header.module.css';
import Burger from './Burger/Burger';
import logoImg from '../../assets/images/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen); 

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
    
    window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header className={`${styles.header}  ${isScrolled ? styles.headerScrolles : ''}`}>
            <div className={styles.logoWrapper}>
                <img src={logoImg} alt="Logo" className={styles.logoImg} />
                <div className={styles.logo}>Prime Life Club</div>
            </div>
            <nav className={styles.navMenu}>
                <ul className={`${styles.navList} ${isOpen ? styles.navOpen : ''}`}>
                    <li className={styles.navItem}><a href='#home'>Про клуб</a></li>
                    <li className={styles.navItem}><a href='#trainers'>Тренери</a></li>
                    <li className={styles.navItem}><a href='#locations'>Локації</a></li>
                    <li className={styles.navItem}><a href='#club-cards'>Клубні картки</a></li>
                    <li className={styles.navItem}><a href='#one-time-visit'>Разовий візит</a></li>
                    <li className={styles.navItem}><a href='#schedule'>Розклад</a></li>
                    <li className={styles.navItem}><a href='#children-club'>Дитячий клуб</a></li>
                    <li className={styles.navItem}><a href='#cafe'>Prime Life Club</a></li>
                </ul>
            </nav>
            <button className={styles.feedbackBtn}>Зворотній зв'язок</button>

            <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
        </header>
    );
};

export default Header;