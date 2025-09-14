import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ contacts }) => {
  const navigationLinks = [
    "Про клуб",
    "Тренери", 
    "Локації",
    "Клубні картки",
    "Разовий візит",
    "Розклад",
    "Дитячий клуб",
    "Prime Life Club"
  ];

  return (
    <footer className={styles.footer}>
      {/* Map Section */}
      <div className={styles.mapSection}>
        <div className={styles.mapOverlay}></div>
        
        {/* Placeholder for map */}
        <iframe 
  className={styles.googleMap}
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20597.92210983478!2d23.984927137005748!3d49.809750570940636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae709f1bd4f9d%3A0x46f72ce2040d60cf!2sVictoria%20Gardens!5e0!3m2!1sen!2sua!4v1754507705351!5m2!1sen!2sua"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

        {/* Contact Info Card */}
        <div className={styles.contactCard}>
          <h3 className={styles.contactTitle}>Контактна інформація</h3>
          <div className={styles.contactInfo}>
            <p>📍 {contacts.address}</p>
            <p>📞 {contacts.phone}</p>
            <p>🕒 {contacts.workHours}</p>
          </div>
          
          <button className={styles.getCardBtn}>
            ОТРИМАТИ КАРТУ
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className={styles.footerContent}>
        <div className={styles.container}>
          
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <h2 className={styles.brandTitle}>Prime Life Club</h2>
            <p className={styles.brandDescription}>
              Сучасний фітнес-клуб з найкращим обладнанням та професійними тренерами. 
              Ваш шлях до ідеальної форми починається тут!
            </p>
            
            {/* Social Media */}
<div className={styles.socialMedia}>
  {/* Instagram */}
  <a href="#" className={styles.socialLink}>
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>
  
  {/* Facebook */}
  <a href="#" className={styles.socialLink}>
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </a>
  
  {/* YouTube */}
  <a href="#" className={styles.socialLink}>
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  </a>
</div>
          </div>

          {/* Navigation Links */}
          <div className={styles.navigationSection}>
            <h3 className={styles.sectionTitle}>Навігація</h3>
            <div className={styles.navigationGrid}>
              {navigationLinks.map((link, index) => (
                <a 
                  key={index}
                  href="#"
                  className={styles.navLink}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Hours */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>Контакти</h3>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>Адреса:</p>
                <p className={styles.contactText}>{contacts.address}</p>
              </div>
              
              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>Телефон:</p>
                <a href={`tel:${contacts.phone}`} className={styles.phoneLink}>
                  {contacts.phone}
                </a>
              </div>

              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>Години роботи:</p>
                <p className={styles.contactText}>{contacts.workHours}</p>
              </div>

              <button className={styles.feedbackBtn}>
                Зворотній зв'язок
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - винесено за межі container */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <p className={styles.copyright}>
            © 2025 Prime Life Club. Усі права захищені.
          </p>
          
          <div className={styles.legalLinks}>
            
            <a href="#" className={styles.legalLink}>
              Політика конфіденційності
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;