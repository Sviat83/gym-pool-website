import React, { useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../../../firebase";
import styles from "./age-group-admin.module.css";

const AgeGroupAdmin = () => {
  const [age, setAge] = useState("");
  const [trainings, setTrainings] = useState([{ type: "", description: "" }]);
  const [status, setStatus] = useState("");

  const handleTrainingChange = (index, field, value) => {
    const updated = [...trainings];
    updated[index][field] = value;
    setTrainings(updated);
  };

  const addTrainingField = () => {
    setTrainings([...trainings, { type: "", description: "" }]);
  };

  const getNextOrder = async () => {
    const q = query(collection(db, "ageGroups"), orderBy("order", "desc"), limit(1));
    const snapshot = await getDocs(q);
    const maxOrder = snapshot.docs[0]?.data()?.order ?? -1;
    return maxOrder + 1;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Додаємо...");
    try {
      const order = await getNextOrder();
      await addDoc(collection(db, "ageGroups"), {
        age,
        trainings,
        order,
      });
      setStatus("✅ Успішно додано!");
      setAge("");
      setTrainings([{ type: "", description: "" }]);
    } catch (err) {
      setStatus("❌ Помилка: " + err.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Додати вікову групу</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Вік (наприклад: 6–8 років)"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        {trainings.map((training, index) => (
          <div key={index} className={styles.trainingBlock}>
            <input
              type="text"
              placeholder="Тип тренування"
              value={training.type}
              onChange={(e) =>
                handleTrainingChange(index, "type", e.target.value)
              }
              required
            />
            <input
              type="text"
              placeholder="Опис"
              value={training.description}
              onChange={(e) =>
                handleTrainingChange(index, "description", e.target.value)
              }
              required
            />
          </div>
        ))}
        <button type="button" onClick={addTrainingField}>
          ➕ Додати тренування
        </button>
        <button type="submit">💾 Зберегти</button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </div>
  );
};

export default AgeGroupAdmin;