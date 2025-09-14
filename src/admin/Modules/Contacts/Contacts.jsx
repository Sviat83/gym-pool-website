import React, { useState, useEffect } from "react";
import { collection, addDoc, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../../../../src/firebase";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import styles from "./Contacts.module.css";
import { initialContacts } from "../../../data/contactsData";

function Contacts() {
  const [contacts, setContacts] = useState(initialContacts);

  useEffect(() => {
    const fetchLatest = async () => {
      const colRef = collection(db, "contacts");
      const q = query(colRef, orderBy("timestamp", "desc"), limit(1));
      const snap = await getDocs(q);
      if (!snap.empty) {
        setContacts(snap.docs[0].data());
      }
    };
    fetchLatest();
  }, []);

  const handleChange = (e) => {
    setContacts({ ...contacts, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const colRef = collection(db, "contacts");
      await addDoc(colRef, {
        ...contacts,
        timestamp: Date.now(),
      });
      alert("Контакти успішно збережено!");
    } catch (error) {
      console.error(error);
    }
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
