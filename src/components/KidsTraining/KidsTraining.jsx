import React from "react";
import styles from "./kids-training.module.css";
import { useAgeGroups } from "../../hooks/useAgeGroups";


const KidsTraining = () => {
  const {groups , loading , error} = useAgeGroups();
  if (loading) return <p>Завантаження…</p>;
  if (error) return <p>Помилка: {error.message}</p>;
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Дитячі тренування</h2>
      <div className={styles.box}>
        {groups.map((group, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.age}>{group.age}</h3>
            <ul className={styles.trainingList}>
              {Array.isArray(group.trainings) && group.trainings.map((training, i) => (
                <li key={i} className={styles.trainingItem}>
                  
                  <p className={styles.trainingDesc}><b>{training.type}</b>{training.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KidsTraining;