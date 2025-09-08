import { useState } from "react";
import visitBg from "../../../assets/images/location/LocationBakground.jpg.webp";
import card_purchase from "../../../assets/images/one-time-visit/card_purchase.png";
import styles from "./PurchaseModal.module.css";

function PurchaseModal() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Список допустимих кодів операторів
  const operatorCodes = [ 
    "050","066","095","099", // Vodafone
    "067","068","096","097","098", // Kyivstar
    "063","073","093", // Lifecell
    "091","092", // 3Mob
    "089" // Intertelecom
  ];

  // Маска і форматування номера під +38(0XX) XXX XX XX
  const handlePhoneChange = (e) => {
    let numbers = e.target.value.replace(/\D/g, "").slice(0, 12); // максимум 12 цифр

    // Автоматично додаємо 380 якщо потрібно
    if (!numbers.startsWith("380")) {
      if (numbers.startsWith("0")) numbers = "380" + numbers.slice(1);
      else if (numbers.startsWith("38")) numbers = "380" + numbers.slice(2);
      else numbers = "380" + numbers;
    }

    // Форматуємо
    let formatted = "+38";
    if (numbers.length >= 4) formatted += "(" + numbers.substring(2,5) + ")";
    else if (numbers.length > 2) formatted += "(" + numbers.substring(2);

    if (numbers.length > 5) formatted += " " + numbers.substring(5,8);
    if (numbers.length > 8) formatted += " " + numbers.substring(8,10);
    if (numbers.length > 10) formatted += " " + numbers.substring(10,12);

    setPhone(formatted);
    if (validatePhone(formatted)) setError("");
  };

  // Валідація номера
  const validatePhone = (value) => {
    const regex = /^\+38\(0\d{2}\) \d{3} \d{2} \d{2}$/;
    if (!regex.test(value)) return false;

    const code = value.slice(4,7); 
    return operatorCodes.includes(code);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validatePhone(phone)) {
      setError("Введіть номер у форматі +38(0XX) XXX XX XX з дійсним оператором");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mdklylka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      if (!response.ok) throw new Error("Помилка при відправці форми");

      setSuccess("Ваш запит успішно відправлено!");
      setPhone("");
    } catch (err) {
      setError("Не вдалося відправити. Спробуйте пізніше.");
    }
  };

  return (
    <div
        id="purchase-modal"
        className={styles.purchaseModal}
        style={{ backgroundImage: `url(${visitBg})` }}
    >
      <div className={styles.purchaseModalLeft}>
        <img
          src={card_purchase}
          alt="Картка разового візиту"
          className={styles.purchaseImage}
        />
      </div>

      <div className={styles.purchaseModalRight}>
        <h2 className={styles.title}>Час розпочати тренування</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Телефон:
            <input
              type="tel"
              className={styles.input}
              placeholder="+38(0XX) XXX XX XX"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </label>

          {error && <p className={styles.error}>{error}</p>}
          {success && <p className={styles.success}>{success}</p>}

          <button type="submit" className={styles.button}>
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}


export default  PurchaseModal;