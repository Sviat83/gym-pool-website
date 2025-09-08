import React from "react";
import styles from "./kids-training.module.css";

const ageGroups = [
  {
    age: "ВІД 3 МІСЯЦІВ ДО 1 РОКУ",
    trainings: [
      { type: "Персональні тренування в басейні для немовлят", description: "– спеціально розроблена методика для безпечного знайомства з водою;" },
      { type: "Ігрова кімната", description: "– зона для спільного відвідування з батьками, де малюки можуть гратися та взаємодіяти." },
    ],
  },
  {
    age: "1–4 РОКИ",
    trainings: [
      { type: "Басейн", description: "— дитячі групові заняття з плавання;" },
      { type: "Фітнес з батьками", description: " — тренування для малюків у супроводі батьків, які допомагають дітям виконувати вправи, пояснюючи інструкції тренера доступною мовою;" },
      { type: "Творчість", description: "— програми для розвитку уваги, пам'яті та концентрації відповідно до віку дитини." },
    ],
  },
  {
    age: "5–6 РОКІВ",
    trainings: [
      { type: "Басейн", description: "— дитячі групові заняття з плавання;" },
      { type: "Фітнес-програми для дітей ", description: "— заняття для базового фізичного розвитку та профілактики порушень постави (спілкування між тренером і дитиною будується на уяві та асоціативних вправах);" },
      { type: "Творчі заняття", description: "— програми для інтелектуального розвитку та креативності." },
    ],
  },
  {
    age: "7–9 РОКІВ",
    trainings: [
      { type: "Басейн", description: " – дитячі групові заняття з плавання." },
      { type: "Фітнес", description: "– інтенсивні заняття в ігровому форматі, зокрема, силові вправи з акцентом на техніці виконання." },
    ],
  },
  {
    age: "10–16 РОКІВ",
    trainings: [
      { type: "Басейн", description: " – дитячі групові заняття з плавання." },
      { type: "Фітнес – програми з обладнанням", description: "– тренування зі силовим та гімнастичним обладнанням (наприклад, легкі гантелі). До функціонального тренування ми додаємо коригувальні та танцювальні елементи. У цій віковій групі вже є широкий спектр вправ з гімнастичним і силовим обладнанням. Тренуємо витривалість, зміцнюємо м'язовий корсет. Обсяг навантаження зростає пропорційно до віку." },
    ],
  },
];

const KidsTraining = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Дитячі тренування</h2>
      <div className={styles.box}>
        {ageGroups.map((group, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.age}>{group.age}</h3>
            <ul className={styles.trainingList}>
              {group.trainings.map((training, i) => (
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