import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
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
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20597.92210983478!2d23.984927137005748!3d49.809750570940636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae709f1bd4f9d%3A0x46f72ce2040d60cf!2sVictoria%20Gardens!5e0!3m2!1sru!2sua!4v1754507705351!5m2!1sru!2sua"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

        {/* Contact Info Card */}
        <div className={styles.contactCard}>
          <h3 className={styles.contactTitle}>Контактна інформація</h3>
          <div className={styles.contactInfo}>
            <p>📍 вул. Кульпарківська 226А</p>
            <p>📞 +380987072572</p>
            <p>🕒 Пн-Нд: 06:00 - 24:00</p>
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
              <a href="#" className={styles.socialLink}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink}>
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.749-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
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
                <p className={styles.contactText}>вул. Кульпарківська 226А<br />м. Львів, Україна</p>
              </div>
              
              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>Телефон:</p>
                <a href="tel:+380987072572" className={styles.phoneLink}>
                  +38 (098) 707-25-72
                </a>
              </div>

              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>Години роботи:</p>
                <p className={styles.contactText}>Пн-Нд: 06:00 - 24:00</p>
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
              Правила користування сайтом
            </a>
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