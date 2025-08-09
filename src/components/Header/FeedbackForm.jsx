import React, { useState } from "react";
import styles from "./Header.module.css";

const FeedbackForm = ({ onClose }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Валідація
        if (!name.trim()) {
            alert("Будь ласка, введіть ваше ім'я");
            return;
        }
        
        if (!phone.trim()) {
            alert("Будь ласка, введіть ваш телефон");
            return;
        }
        
        // Перевірка формату телефону
        const phoneRegex = /^\+38\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
        if (!phoneRegex.test(phone)) {
            alert("Будь ласка, введіть телефон у правильному форматі: +38 (099) 999-99-99");
            return;
        }
        
        alert(`Дякуємо! Ваше ім'я: ${name}, Ваш телефон: ${phone}. Ми зателефонуємо вам найближчим часом!`);
        
        // Очищення форми та закриття модального вікна
        setName("");
        setPhone("");
        onClose();
    };

    const handlePhoneChange = (e) => {
        let value = e.target.value;
        
        // Видаляємо всі символи крім цифр
        let numbers = value.replace(/\D/g, '');
        
        // Якщо починається з 38, залишаємо як є
        // Якщо починається з 0, замінюємо на 38
        if (numbers.startsWith('0')) {
            numbers = '38' + numbers.substring(1);
        }
        // Якщо не починається з 38, додаємо 38
        else if (!numbers.startsWith('38')) {
            numbers = '38' + numbers;
        }
        
        // Обмежуємо довжину до 12 цифр (38 + 10 цифр)
        numbers = numbers.substring(0, 12);
        
        // Форматуємо номер
        let formatted = '';
        if (numbers.length >= 2) {
            formatted = '+38';
            if (numbers.length > 2) {
                formatted += ' (' + numbers.substring(2, 5);
                if (numbers.length >= 6) {
                    formatted += ') ' + numbers.substring(5, 8);
                    if (numbers.length >= 9) {
                        formatted += '-' + numbers.substring(8, 10);
                        if (numbers.length >= 11) {
                            formatted += '-' + numbers.substring(10, 12);
                        }
                    }
                }
            }
        } else {
            formatted = '+' + numbers;
        }
        
        setPhone(formatted);
    };

    return (
        <div>
            <h2 className={styles.modalTitle}>ЗВОРОТНИЙ ЗВ'ЯЗОК</h2>
            <div className={styles.modalPhone}>+38067807277</div>
            
            <form onSubmit={handleSubmit}>
                <label className={styles.modalLabel}>Ваше ім'я</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.modalInput}
                    placeholder="Введіть ваше ім'я"
                    required
                />
                
                <label className={styles.modalLabel}>Ваш телефон</label>
                <input
                    type="text"
                    value={phone}
                    onChange={handlePhoneChange}
                    className={styles.modalInput}
                    placeholder="+38 (0"
                    required
                />
                
                <button type="submit" className={styles.submitBtn}>
                    ЗАТЕЛЕФОНУЙТЕ МЕНІ
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;