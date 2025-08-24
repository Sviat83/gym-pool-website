import React, {useEffect, useState} from 'react';
import styles from './Header.module.css';
import Burger from './Burger/Burger';
import logoImg from '../../assets/images/logo.png';
import FeedbackForm from './FeedbackForm';
import Modal from '../LocationMap/Modal/Modal';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const [showLocationModal, setShowLocationModal] = useState(false);

    const location = useLocation();
    
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeFeedback = () => setShowFeedback(false);
    const closeLocationModal = () => setShowLocationModal(false);
    
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Закриття модального вікна при кліку на backdrop
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeFeedback();
        }
    };

    // Закриття меню та модалки dropdown при зміні шляху
    useEffect(() => {
        setIsOpen(false);
        setShowLocationModal(false);
    }, [location.pathname]);
    
    return (
        <>
            <header className={`${styles.header} ${isScrolled ? styles.headerScrolles : ''}`}>
                <div className={styles.logoWrapper}>
                    <img src={logoImg} alt="Logo" className={styles.logoImg} />
                    <div className={styles.logo}>Prime Life Club</div>
                </div>

                <nav className={styles.navMenu}>
                    <ul className={`${styles.navList} ${isOpen ? styles.navOpen : ''}`}>
                        <li className={styles.navItem}><Link to=''>Про клуб</Link></li>
                        <li className={styles.navItem}><Link to="/gym-pool-website/trainers">Тренери</Link></li>
                        <li 
                            className={styles.navItem}
                            onMouseEnter={() => setShowLocationModal(true)}
                            onMouseLeave={() => setShowLocationModal(false)}
                        >
                            <Link to='locations'>Локації</Link>
                        </li>
                        <li className={styles.navItem}><Link to='club-cards'>Клубні картки</Link></li>
                        <li className={styles.navItem}><Link to='one-time-visit'>Разовий візит</Link></li>
                        <li className={styles.navItem}><Link to='schedule'>Розклад</Link></li>
                        <li className={styles.navItem}><Link to='kids-club'>Дитячий клуб</Link></li>
                        <li className={styles.navItem}><Link to='prime-cafe'>Prime Life Cafe</Link></li>
                    </ul>
                </nav>
                <button 
                    className={styles.feedbackBtn}
                    onClick={() => setShowFeedback(true)}
                >
                    Зворотній зв'язок
                </button>
                
                <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
            </header>


            {showFeedback && (
                <div className={styles.modalBackDrop} onClick={handleBackdropClick}>
                    <div className={styles.modalContent}>
                        <button 
                            className={styles.closeBtn}
                            onClick={closeFeedback}
                        >
                            ×
                        </button>
                        <FeedbackForm onClose={closeFeedback} />
                    </div>
                </div>
            )}

            {showLocationModal && (
                <div 
                    onMouseEnter={() => setShowLocationModal(true)}
                    onMouseLeave={() => setShowLocationModal(false)}
                >
                    <Modal onClose={closeLocationModal} />
                </div>
            )}
        </>
    );
};

export default Header;