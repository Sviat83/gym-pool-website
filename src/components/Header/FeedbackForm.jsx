import React, { useState } from "react";
import styles from "./Header.module.css";

const FeedbackForm = ({ onClose }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const NAME_RE = /^[A-Za-zА-ЯІЇЄҐа-яіїєґ]+(?:[\s\-''`][A-Za-zА-ЯІЇЄҐа-яіїєґ]+)*$/;

    const validateName = (value) => {
        const trimmed = value.trim();
        
        if (!trimmed) {
            return "Поле обов'язкове для заповнення";
        }
        
        if (trimmed.length < 2) {
            return "Ім'я повинно містити мінімум 2 символи";
        }
        
        if (trimmed.length > 30) {
            return "Ім'я занадто довге (максимум 30 символів)";
        }
        
        if (/\d/.test(trimmed)) {
            return "Ім'я не може містити цифри";
        }
        
        if (/[!@#$%^&*()_+={}[\]|\\:";.<>?/~`]/.test(trimmed)) {
            return "Ім'я містить недозволені символи";
        }
        
        if (!NAME_RE.test(trimmed)) {
            return "Некоректний формат імені";
        }

        if (/[\s\-''`]{2,}/.test(trimmed)) {
            return "Забагато пробілів або символів підряд";
        }
        
        return "";
    };

    const validatePhone = (phoneValue) => {
        if (!phoneValue.trim()) {
            return "Поле обов'язкове для заповнення";
        }
        
        const numbers = phoneValue.replace(/\D/g, '');
        
        if (numbers.length < 12) {
            return "Номер телефону неповний";
        }
        
        if (!numbers.startsWith('380')) {
            return "Номер повинен починатися з +380";
        }
        const operatorCode = numbers.substring(3, 5);
        const validCodes = ['50', '63', '66', '67', '68', '73', '93', '95', '96', '97', '98', '99'];
        
        if (!validCodes.includes(operatorCode)) {
            return "Некоректний код оператора";
        }
        
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const nameValidation = validateName(name);
        const phoneValidation = validatePhone(phone);
        
        setNameError(nameValidation);
        setPhoneError(phoneValidation);
        
        if (nameValidation || phoneValidation) {
            return;
        }
        
        alert(`Дякуємо, ${name.trim()}. Ми зателефонуємо Вам за ${phone} найближчим часом!`);
        setName("");
        setPhone("");
        setNameError("");
        setPhoneError("");
        onClose();
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        let filteredValue = value.replace(/[0-9!@#$%^&*()_+={}[\]|\\:";.<>?/~`]/g, '');
 
        if (filteredValue.length > 30) {
            filteredValue = filteredValue.substring(0, 30);
        }
        
        setName(filteredValue);
        
        const error = validateName(filteredValue);
        setNameError(error);
    };

    const handlePhoneChange = (e) => {
        let rawNumbers = e.target.value.replace(/\D/g, '');
        
        if (rawNumbers.length === 0) {
            setPhone('');
            setPhoneError('');
            return;
        }

        let numbers = rawNumbers;
        
        if (numbers.startsWith('0')) {
            numbers = '380' + numbers.substring(1);
        } 
        else if (numbers.startsWith('38') && !numbers.startsWith('380')) {
            numbers = '380' + numbers.substring(2);
        }
        else if (!numbers.startsWith('38') && numbers.length >= 9) {
            numbers = '380' + numbers;
        }
        else if (!numbers.startsWith('38')) {
            numbers = '380' + numbers;
        }
        
        numbers = numbers.substring(0, 12);
        
    
        let formatted = '';
        
        if (numbers.length <= 3) {
            formatted = '+380';
        } else if (numbers.length <= 5) {
            formatted = `+380 (${numbers.substring(3)}`;
        } else if (numbers.length <= 8) {
            formatted = `+380 (${numbers.substring(3, 5)}) ${numbers.substring(5)}`;
        } else if (numbers.length <= 10) {
            formatted = `+380 (${numbers.substring(3, 5)}) ${numbers.substring(5, 8)}-${numbers.substring(8)}`;
        } else {
            formatted = `+380 (${numbers.substring(3, 5)}) ${numbers.substring(5, 8)}-${numbers.substring(8, 10)}-${numbers.substring(10)}`;
        }
        
        setPhone(formatted);
        
        // ВАЛІДУЄМО В РЕАЛЬНОМУ ЧАСІ і показуємо помилку
        const error = validatePhone(formatted);
        setPhoneError(error);
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
                    onChange={handleNameChange}
                    className={`${styles.modalInput} ${nameError ? styles.inputError : ''}`}
                    placeholder="Введіть ваше ім'я"
                />
                {nameError && <div className={styles.errorMessage}>{nameError}</div>}
                
                <label className={styles.modalLabel}>Ваш телефон</label>
                <input
                    type="text"
                    value={phone}
                    onChange={handlePhoneChange}
                    className={`${styles.modalInput} ${phoneError ? styles.inputError : ''}`}
                    placeholder="+380 (XX) XXX-XX-XX"
                />
                {phoneError && <div className={styles.errorMessage}>{phoneError}</div>}
                
                <button type="submit" className={styles.submitBtn}>
                    ЗАТЕЛЕФОНУЙТЕ МЕНІ
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;