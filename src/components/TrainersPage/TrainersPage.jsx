import React, { useMemo, useState } from "react";
import "./TrainersPage.css";

// Фото-заглушки для карток
const FEMALE_IMG =
  "https://uniforce.ua/photos/cat/f/20250321_150737_16888-NR2P8F.jpg";
const MALE_IMG =
  "https://static5.depositphotos.com/1049184/509/i/450/depositphotos_5099757-stock-photo-the-man-with-no-face.jpg";

// Фото басейну в CTA (праворуч)
const POOL_IMG = "https://uniforce.ua/img/about/1.jpg";

// Вкладки
const TABS = [
  { id: "gym",    label: "ТРЕНАЖЕРНИЙ ЗАЛ" },
  { id: "aqua",   label: "АКВАЗОНА" },
  { id: "groups", label: "ГРУПОВІ ЗАНЯТТЯ" },
  { id: "kids",   label: "ДИТЯЧИЙ КЛУБ" },
  { id: "med",    label: "ЛІКАР–ТЕРАПЕВТ ТА ДІЄТОЛОГ" },
];

// Дані тренерів (приклад)
const DATA = {
  gym: [
    { id: 1,  name: "Віталій Притула",     role: "Майстер-тренер",          photo: MALE_IMG },
    { id: 2,  name: "Микита Терещенко",    role: "Майстер-тренер",          photo: MALE_IMG },
    { id: 3,  name: "Тетяна Кравецька",    role: "Майстриня-тренерка",      photo: FEMALE_IMG },
    { id: 4,  name: "Руслан Фляк",         role: "Майстер-тренер",          photo: MALE_IMG },
  ],
  aqua: [
    { id: 5,  name: "Олександр Шевченко",  role: "Інструктор з плавання",   photo: MALE_IMG },
    { id: 6,  name: "Катерина Литвиненко", role: "Інструкторка з плавання", photo: FEMALE_IMG },
    { id: 7,  name: "Дмитро Коваленко",    role: "Інструктор з плавання",   photo: MALE_IMG },
    { id: 8,  name: "Анна Романюк",        role: "Інструкторка з плавання", photo: FEMALE_IMG },
  ],
  groups: [
    { id: 9,  name: "Світлана Гончар",     role: "Тренерка групових програм", photo: FEMALE_IMG },
    { id: 10, name: "Ігор Петренко",       role: "Тренер групових програм",   photo: MALE_IMG },
    { id: 11, name: "Марина Бондар",       role: "Тренерка групових програм", photo: FEMALE_IMG },
    { id: 12, name: "Олег Дяченко",        role: "Тренер групових програм",   photo: MALE_IMG },
  ],
  kids: [
    { id: 13, name: "Наталія Сидоренко",   role: "Дитяча тренерка",        photo: FEMALE_IMG },
    { id: 14, name: "Віктор Андрущенко",   role: "Дитячий тренер",         photo: MALE_IMG },
    { id: 15, name: "Ірина Кравчук",       role: "Дитяча тренерка",        photo: FEMALE_IMG },
    { id: 16, name: "Павло Козак",         role: "Дитячий тренер",         photo: MALE_IMG },
  ],
  med: [
    { id: 17, name: "Лариса Ткаченко",     role: "Лікарка-терапевт",       photo: FEMALE_IMG },
    { id: 18, name: "Андрій Савченко",     role: "Дієтолог",               photo: MALE_IMG },
    { id: 19, name: "Олена Мельник",       role: "Лікарка-терапевт",       photo: FEMALE_IMG },
    { id: 20, name: "Сергій Поліщук",      role: "Дієтолог",               photo: MALE_IMG },
  ],
};

function Tabs({ active, onChange }) {
  return (
    <div className="tabs">
      {TABS.map((t) => (
        <button
          key={t.id}
          type="button"
          className={"tab" + (active === t.id ? " active" : "")}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

function TrainerCard({ name, role, photo }) {
  return (
    <article className="coach">
      <img className="coach-img" src={photo} alt={name} />
      <div className="coach-content">
        <h3 className="coach-name">{name}</h3>
        <p className="coach-role">{role}</p>
        <button className="coach-btn" type="button">ДЕТАЛЬНІШЕ</button>
      </div>
    </article>
  );
}

export default function TrainersPage() {
  const [tab, setTab] = useState("gym");
  const items = useMemo(() => DATA[tab] || [], [tab]);

  return (
    <>
      {/* СЕКЦІЯ ТРЕНЕРІВ: той самий fixed background + білий overlay */}
      <section className="trainers-page">
        <div className="trainers-overlay">
          <Tabs active={tab} onChange={setTab} />
          <div className="cards">
            {items.map((t) => (
              <TrainerCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* СЕКЦІЯ CTA: той самий fixed background, без overlay + зображення праворуч */}
      <section className="cta">
        <div className="cta-inner">
          <div className="cta-copy">
            <h2 className="cta-title">
              ЧАС РОЗПОЧАТИ <br /> ТРЕНУВАННЯ
            </h2>

            <label className="cta-input-wrap">
              <span className="cta-prefix">+38</span>
              <input
                type="tel"
                className="cta-input"
                placeholder="(0_) ___ __ __"
                aria-label="Номер телефону"
              />
            </label>

            <button type="button" className="cta-btn">
              ЗАТЕЛЕФОНУЙТЕ МЕНІ
            </button>
          </div>

          {/* Зображення басейну праворуч — лишається завжди */}
          <figure className="cta-figure" aria-label="Басейн UNI FORCE">
            <img className="cta-img" src={POOL_IMG} alt="UNI FORCE pool" />
          </figure>
        </div>
      </section>
    </>
  );
}
