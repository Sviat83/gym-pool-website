import React, { useState, useEffect } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../../../src/firebase";

import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { initialContacts } from "../../../../src/data/contactsData";
import styles from "./Contacts.module.css";

function Contacts() {
  const [contacts, setContacts] = useState(initialContacts);

  useEffect(() => {
    const docRef = doc(db, "contacts", "main");
    const unsubscribe = onSnapshot(docRef, (snap) => {
      if (snap.exists()) {
        setContacts(snap.data());
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setContacts({ ...contacts, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const docRef = doc(db, "contacts", "main");
    await setDoc(docRef, contacts);
    alert("Контакти успішно збережено!");
  };

  return (
    <div className={styles.container}>
      <h2>Контакти</h2>

      <div className={styles.cardsWrapper}>
        {/* Address */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>Address</span>
          </div>
          <textarea
            name="address"
            value={contacts.address}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>

        {/* Contact Details */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaPhoneAlt className={styles.icon} />
            <span>Contact Details</span>
          </div>
          <label>
            Phone Number
            <input
              type="text"
              name="phone"
              value={contacts.phone}
              onChange={handleChange}
              className={styles.inputField}
            />
          </label>
          <label>
            Email Address
            <input
              type="email"
              name="email"
              value={contacts.email}
              onChange={handleChange}
              className={styles.inputField}
            />
          </label>
        </div>

        {/* Operating Hours */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaClock className={styles.icon} />
            <span>Operating Hours</span>
          </div>
          <textarea
            name="workHours"
            value={contacts.workHours}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>
      </div>

      <button className={styles.saveButton} onClick={handleSave}>
        Зберегти
      </button>
    </div>
  );
}

export default Contacts;
