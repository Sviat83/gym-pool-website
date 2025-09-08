import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./Header.module.css";

const FeedbackForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState(false);

  const NAME_RE = /^[A-Za-zА-ЯІЇЄҐа-яіїєґ]+(?:[\s\-''`][A-Za-zА-ЯІЇЄҐа-яіїєґ]+)*$/;

  const validateName = (value) => {
    const trimmed = value.trim();

    if (!trimmed) return "Поле обов'язкове для заповнення";
    if (trimmed.length < 2) return "Ім'я повинно містити мінімум 2 символи";
    if (trimmed.length > 30) return "Ім'я занадто довге (максимум 30 символів)";
    if (/\d/.test(trimmed)) return "Ім'я не може містити цифри";
    if (/[!@#$%^&*()_+={}[\]|\\:";.<>?/~`]/.test(trimmed)) return "Ім'я містить недозволені символи";
    if (!NAME_RE.test(trimmed)) return "Некоректний формат імені";
    if (/[\s\-''`]{2,}/.test(trimmed)) return "Забагато пробілів або символів підряд";

    return "";
  };

  const validatePhone = (phoneValue) => {
    if (!phoneValue.trim()) return "Поле обов'язкове для заповнення";

    const numbers = phoneValue.replace(/\D/g, "");

    if (numbers.length < 12) return "Номер телефону неповний";
    if (!numbers.startsWith("380")) return "Номер повинен починатися з +380";

    const operatorCode = numbers.substring(3, 5);
    const validCodes = ["50", "63", "66", "67", "68", "73", "93", "95", "96", "97", "98", "99"];

    if (!validCodes.includes(operatorCode)) return "Некоректний код оператора";

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameValidation = validateName(name);
    const phoneValidation = validatePhone(phone);

    setNameError(nameValidation);
    setPhoneError(phoneValidation);

    if (nameValidation || phoneValidation) return;

    try {
      setLoading(true);

      // 1. Збереження у Firestore
      await addDoc(collection(db, "feedback"), {
        name: name.trim(),
        phone: phone.trim(),
        createdAt: new Date(),
      });

      // 2. Відправка на пошту через Formspree
      const response = await fetch("https://formspree.io/f/mdklylka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
        }),
      });

      if (!response.ok) {
        console.error("Formspree error:", await response.text());
      }

      alert(`Дякуємо, ${name.trim()}. Ми зателефонуємо Вам за ${phone} найближчим часом!`);

      // Скидаємо поля
      setName("");
      setPhone("");
      setNameError("");
      setPhoneError("");

      onClose();
    } catch (error) {
      console.error("Помилка при відправці:", error);
      alert("Сталася помилка. Спробуйте ще раз!");
    } finally {
      setLoading(false);
    }
  };

  const handleNameChange = (e) => {
    let filteredValue = e.target.value.replace(/[0-9!@#$%^&*()_+={}[\]|\\:";.<>?/~`]/g, "");
    if (filteredValue.length > 30) filteredValue = filteredValue.substring(0, 30);

    setName(filteredValue);
    setNameError(validateName(filteredValue));
  };

  const handlePhoneChange = (e) => {
    let rawNumbers = e.target.value.replace(/\D/g, "");

    if (rawNumbers.length === 0) {
      setPhone("");
      setPhoneError("");
      return;
    }

    let numbers = rawNumbers;

    if (numbers.startsWith("0")) {
      numbers = "380" + numbers.substring(1);
    } else if (numbers.startsWith("38") && !numbers.startsWith("380")) {
      numbers = "380" + numbers.substring(2);
    } else if (!numbers.startsWith("38") && numbers.length >= 9) {
      numbers = "380" + numbers;
    } else if (!numbers.startsWith("38")) {
      numbers = "380" + numbers;
    }

    numbers = numbers.substring(0, 12);

    let formatted = "";
    if (numbers.length <= 3) {
      formatted = "+380";
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
    setPhoneError(validatePhone(formatted));
  };

  return (
    <div>
      <h2 className={styles.modalTitle}>ЗВОРОТНИЙ ЗВ'ЯЗОК</h2>
      <a href="tel:+38067807277" className={styles.modalPhone}>+38067807277</a>

      <form onSubmit={handleSubmit}>
        <label className={styles.modalLabel}>Ваше ім'я</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className={`${styles.modalInput} ${nameError ? styles.inputError : ""}`}
          placeholder="Введіть ваше ім'я"
        />
        {nameError && <div className={styles.errorMessage}>{nameError}</div>}

        <label className={styles.modalLabel}>Ваш телефон</label>
        <input
          type="text"
          value={phone}
          onChange={handlePhoneChange}
          className={`${styles.modalInput} ${phoneError ? styles.inputError : ""}`}
          placeholder="+380 (XX) XXX-XX-XX"
        />
        {phoneError && <div className={styles.errorMessage}>{phoneError}</div>}

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? "Відправка..." : "ЗАТЕЛЕФОНУЙТЕ МЕНІ"}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
