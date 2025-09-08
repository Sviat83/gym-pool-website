// import React, { useMemo, useState } from "react";
// import "./TrainersPage.css";

// // Фото-заглушки для карток
// const FEMALE_IMG =
//   "https://uniforce.ua/photos/cat/f/20250321_150737_16888-NR2P8F.jpg";
// const MALE_IMG =
//   "https://static5.depositphotos.com/1049184/509/i/450/depositphotos_5099757-stock-photo-the-man-with-no-face.jpg";

// // Фото басейну в CTA (праворуч)
// const POOL_IMG = "https://uniforce.ua/img/about/1.jpg";

// // Вкладки
// const TABS = [
//   { id: "gym",    label: "ТРЕНАЖЕРНИЙ ЗАЛ" },
//   { id: "aqua",   label: "АКВАЗОНА" },
//   { id: "groups", label: "ГРУПОВІ ЗАНЯТТЯ" },
//   { id: "kids",   label: "ДИТЯЧИЙ КЛУБ" },
//   { id: "med",    label: "ЛІКАР–ТЕРАПЕВТ ТА ДІЄТОЛОГ" },
// ];

// // Дані тренерів (приклад)
// const DATA = {
//   gym: [
//     { id: 1,  name: "Віталій Притула",     role: "Майстер-тренер",          photo: MALE_IMG },
//     { id: 2,  name: "Микита Терещенко",    role: "Майстер-тренер",          photo: MALE_IMG },
//     { id: 3,  name: "Тетяна Кравецька",    role: "Майстриня-тренерка",      photo: FEMALE_IMG },
//     { id: 4,  name: "Руслан Фляк",         role: "Майстер-тренер",          photo: MALE_IMG },
//   ],
//   aqua: [
//     { id: 5,  name: "Олександр Шевченко",  role: "Інструктор з плавання",   photo: MALE_IMG },
//     { id: 6,  name: "Катерина Литвиненко", role: "Інструкторка з плавання", photo: FEMALE_IMG },
//     { id: 7,  name: "Дмитро Коваленко",    role: "Інструктор з плавання",   photo: MALE_IMG },
//     { id: 8,  name: "Анна Романюк",        role: "Інструкторка з плавання", photo: FEMALE_IMG },
//   ],
//   groups: [
//     { id: 9,  name: "Світлана Гончар",     role: "Тренерка групових програм", photo: FEMALE_IMG },
//     { id: 10, name: "Ігор Петренко",       role: "Тренер групових програм",   photo: MALE_IMG },
//     { id: 11, name: "Марина Бондар",       role: "Тренерка групових програм", photo: FEMALE_IMG },
//     { id: 12, name: "Олег Дяченко",        role: "Тренер групових програм",   photo: MALE_IMG },
//   ],
//   kids: [
//     { id: 13, name: "Наталія Сидоренко",   role: "Дитяча тренерка",        photo: FEMALE_IMG },
//     { id: 14, name: "Віктор Андрущенко",   role: "Дитячий тренер",         photo: MALE_IMG },
//     { id: 15, name: "Ірина Кравчук",       role: "Дитяча тренерка",        photo: FEMALE_IMG },
//     { id: 16, name: "Павло Козак",         role: "Дитячий тренер",         photo: MALE_IMG },
//   ],
//   med: [
//     { id: 17, name: "Лариса Ткаченко",     role: "Лікарка-терапевт",       photo: FEMALE_IMG },
//     { id: 18, name: "Андрій Савченко",     role: "Дієтолог",               photo: MALE_IMG },
//     { id: 19, name: "Олена Мельник",       role: "Лікарка-терапевт",       photo: FEMALE_IMG },
//     { id: 20, name: "Сергій Поліщук",      role: "Дієтолог",               photo: MALE_IMG },
//   ],
// };

// function Tabs({ active, onChange }) {
//   return (
//     <div className="tabs">
//       {TABS.map((t) => (
//         <button
//           key={t.id}
//           type="button"
//           className={"tab" + (active === t.id ? " active" : "")}
//           onClick={() => onChange(t.id)}
//         >
//           {t.label}
//         </button>
//       ))}
//     </div>
//   );
// }

// function TrainerCard({ name, role, photo }) {
//   return (
//     <article className="coach">
//       <img className="coach-img" src={photo} alt={name} />
//       <div className="coach-content">
//         <h3 className="coach-name">{name}</h3>
//         <p className="coach-role">{role}</p>
//         <button className="coach-btn" type="button">ДЕТАЛЬНІШЕ</button>
//       </div>
//     </article>
//   );
// }

// export default function TrainersPage() {
//   const [tab, setTab] = useState("gym");
//   const items = useMemo(() => DATA[tab] || [], [tab]);

//   return (
//     <>
//       {/* СЕКЦІЯ ТРЕНЕРІВ: той самий fixed background + білий overlay */}
//       <section className="trainers-page">
//         <div className="trainers-overlay">
//           <Tabs active={tab} onChange={setTab} />
//           <div className="cards">
//             {items.map((t) => (
//               <TrainerCard key={t.id} {...t} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* СЕКЦІЯ CTA: той самий fixed background, без overlay + зображення праворуч */}
//       <section className="cta">
//         <div className="cta-inner">
//           <div className="cta-copy">
//             <h2 className="cta-title">
//               ЧАС РОЗПОЧАТИ <br /> ТРЕНУВАННЯ
//             </h2>

//             <label className="cta-input-wrap">
//               <span className="cta-prefix">+38</span>
//               <input
//                 type="tel"
//                 className="cta-input"
//                 placeholder="(0_) ___ __ __"
//                 aria-label="Номер телефону"
//               />
//             </label>

//             <button type="button" className="cta-btn">
//               ЗАТЕЛЕФОНУЙТЕ МЕНІ
//             </button>
//           </div>

//           {/* Зображення басейну праворуч — лишається завжди */}
//           <figure className="cta-figure" aria-label="Басейн UNI FORCE">
//             <img className="cta-img" src={POOL_IMG} alt="UNI FORCE pool" />
//           </figure>
//         </div>
//       </section>
//     </>
//   );
// }

import React, { useMemo, useState, useEffect } from "react";
import "./TrainersPage.css";

/* Фото-заглушки */
const FEMALE_IMG =
  "https://uniforce.ua/photos/cat/f/20250321_150737_16888-NR2P8F.jpg";
const MALE_IMG =
  "https://static5.depositphotos.com/1049184/509/i/450/depositphotos_5099757-stock-photo-the-man-with-no-face.jpg";

/* Вкладки */
const TABS = [
  { id: "gym", label: "ТРЕНАЖЕРНИЙ ЗАЛ" },
  { id: "aqua", label: "АКВАЗОНА" },
  { id: "groups", label: "ГРУПОВІ ЗАНЯТТЯ" },
  { id: "kids", label: "ДИТЯЧИЙ КЛУБ" },
  { id: "med", label: "ЛІКАР–ТЕРАПЕВТ ТА ДІЄТОЛОГ" },
];

/* Дані тренерів з детальною інформацією у форматі:
   { id, name, role, photo, about: { qualification, experience, skills: [] } }  */
const DATA = {
  gym: [
    {
      id: 1,
      name: "Віталій Притула",
      role: "Майстер-тренер вищої категорії",
      photo: MALE_IMG,
      about: {
        qualification:
          "Сертифікований тренер тренажерної зали, спеціаліст з функціонального тренінгу, МFR та TRX.",
        experience: "10 років",
        skills: [
          "Тренування з різноманітним обладнанням",
          "Функціональні тренування",
          "CrossFit-тренування",
          "Стретчинг",
        ],
      },
    },
    {
      id: 2,
      name: "Микита Терещенко",
      role: "Майстер-тренер",
      photo: MALE_IMG,
      about: {
        qualification:
          "CPT (Certified Personal Trainer). Персональний коуч із силової підготовки та м’язового набору.",
        experience: "8 років",
        skills: [
          "Силовий тренінг та гіпертрофія",
          "Корекція техніки базових вправ",
          "Функціональна підготовка",
          "Складання індивідуальних програм",
        ],
      },
    },
    {
      id: 3,
      name: "Тетяна Кравецька",
      role: "Майстриня-тренерка",
      photo: FEMALE_IMG,
      about: {
        qualification:
          "Сертифікована тренерка групових та персональних програм. Спеціаліст з мобільності та реабілітації після навантажень.",
        experience: "7 років",
        skills: [
          "Мобільність і профілактика травм",
          "Функціональні комплекси",
          "TRX та петлі підвісу",
          "Корекція постави",
        ],
      },
    },
    {
      id: 4,
      name: "Руслан Фляк",
      role: "Майстер-тренер",
      photo: MALE_IMG,
      about: {
        qualification:
          "Силова підготовка та кондиціонування. Підготовка до змагань та складання періодизації.",
        experience: "9 років",
        skills: [
          "Пауерліфтинг і важка атлетика",
          "Періодизація тренувань",
          "Відновлення після навантажень",
          "Набір м’язової маси",
        ],
      },
    },
  ],

  aqua: [
    {
      id: 5,
      name: "Олександр Шевченко",
      role: "Інструктор з плавання",
      photo: MALE_IMG,
      about: {
        qualification:
          "Майстер спорту з плавання. Працює з дітьми та дорослими від рівня «з нуля».",
        experience: "6 років",
        skills: [
          "Постановка техніки кролю/брасу/батерфляю",
          "Плавання для реабілітації",
          "Підготовка до стартів",
        ],
      },
    },
    {
      id: 6,
      name: "Катерина Литвиненко",
      role: "Інструкторка з плавання",
      photo: FEMALE_IMG,
      about: {
        qualification:
          "Сертифікована тренерка з гідрореабілітації. Веде індивідуальні заняття з техніки.",
        experience: "5 років",
        skills: [
          "Аква-фітнес",
          "Плавання з нуля для дорослих",
          "Постановка дихання і координації",
        ],
      },
    },
    {
      id: 7,
      name: "Дмитро Коваленко",
      role: "Інструктор з плавання",
      photo: MALE_IMG,
      about: {
        qualification:
          "Колишній спортсмен збірної регіону. Спеціалізація — швидкісна техніка та витривалість.",
        experience: "7 років",
        skills: [
          "Швидкісна витривалість",
          "Силова підготовка плавця",
          "Відеоаналіз техніки",
        ],
      },
    },
    {
      id: 8,
      name: "Анна Романюк",
      role: "Інструкторка з плавання",
      photo: FEMALE_IMG,
      about: {
        qualification:
          "Дипломований фахівець із фізреабілітації. Мʼяка корекція рухових патернів у воді.",
        experience: "6 років",
        skills: [
          "Гідрореабілітація",
          "Виправлення помилок техніки",
          "Робота з дітьми 5+",
        ],
      },
    },
  ],

  groups: [
    {
      id: 9,
      name: "Світлана Гончар",
      role: "Тренерка групових програм",
      photo: FEMALE_IMG,
      about: {
        qualification:
          "Ліцензована інструкторка LES MILLS. Веде силові та кардіо класи.",
        experience: "6 років",
        skills: [
          "BodyPump/BodyAttack",
          "Інтервальні тренування (HIIT)",
          "Стретчинг і реліз",
        ],
      },
    },
    {
      id: 10,
      name: "Ігор Петренко",
      role: "Тренер групових програм",
      photo: MALE_IMG,
      about: {
        qualification:
          "Сертифікований тренер функціональних класів та bootcamp.",
        experience: "5 років",
        skills: [
          "Функціональні кола",
          "Атлетична підготовка",
          "Меткон/інтервали",
        ],
      },
    },
    {
      id: 11,
      name: "Марина Бондар",
      role: "Тренерка групових програм",
      photo: FEMALE_IMG,
      about: {
        qualification:
          "Пілатес-інструктор, спеціалістка з мобільності та стабілізації корпусу.",
        experience: "7 років",
        skills: [
          "Пілатес мат/обладнання",
          "Мобільність суглобів",
          "Робота з болем у спині",
        ],
      },
    },
    {
      id: 12,
      name: "Олег Дяченко",
      role: "Тренер групових програм",
      photo: MALE_IMG,
      about: {
        qualification:
          "Функціональний тренер, складає комплекси будь-якої складності.",
        experience: "6 років",
        skills: [
          "Крос-тренінг",
          "Силовий витривалий тренінг",
          "TRX/гантелі/медболи",
        ],
      },
    },
  ],

  kids: [
    {
      id: 13,
      name: "Наталія Сидоренко",
      role: "Дитяча тренерка",
      photo: FEMALE_IMG,
      about: {
        qualification:
          "Педагог та тренер дітей 3–12 років. Ігрові тренування, розвиток координації.",
        experience: "8 років",
        skills: [
          "Загальна фізпідготовка",
          "Моторика та координація",
          "Ігрові заняття",
        ],
      },
    },
    {
      id: 14,
      name: "Віктор Андрущенко",
      role: "Дитячий тренер",
      photo: MALE_IMG,
      about: {
        qualification:
          "Силова та координаційна підготовка для дітей і підлітків.",
        experience: "5 років",
        skills: [
          "ОФП для підлітків",
          "Початкова атлетика",
          "Корекція постави",
        ],
      },
    },
    {
      id: 15,
      name: "Ірина Кравчук",
      role: "Дитяча тренерка",
      photo: FEMALE_IMG,
      about: {
        qualification:
          "Тренерка з дитячої гімнастики. Делікатний підхід та безпека.",
        experience: "6 років",
        skills: [
          "Базова гімнастика",
          "Мобільність і баланс",
          "Профілактика сколіозу",
        ],
      },
    },
    {
      id: 16,
      name: "Павло Козак",
      role: "Дитячий тренер",
      photo: MALE_IMG,
      about: {
        qualification:
          "Інструктор з рухливих ігор та функціональної підготовки для дітей.",
        experience: "4 роки",
        skills: [
          "Рухливі ігри",
          "Силова підготовка (безпечні варіанти)",
          "Командна взаємодія",
        ],
      },
    },
  ],

  med: [
    {
      id: 17,
      name: "Лариса Ткаченко",
      role: "Лікарка-терапевт",
      photo: FEMALE_IMG,
      about: {
        qualification:
          "Лікарка загальної практики. Спортивна терапія та супровід клієнтів у тренуваннях.",
        experience: "12 років",
        skills: [
          "Консультації з навантажень",
          "Планування відновлення",
          "Медичний супровід",
        ],
      },
    },
    {
      id: 18,
      name: "Андрій Савченко",
      role: "Дієтолог",
      photo: MALE_IMG,
      about: {
        qualification:
          "Клінічний дієтолог. Індивідуальні плани харчування під тренування та відновлення.",
        experience: "9 років",
        skills: [
          "Зниження ваги/набір маси",
          "Спортивне харчування",
          "Корекція харчових звичок",
        ],
      },
    },
    {
      id: 19,
      name: "Олена Мельник",
      role: "Лікарка-терапевт",
      photo: FEMALE_IMG,
      about: {
        qualification:
          "Терапевтка з досвідом у кардіонавантаженнях та профілактиці травм.",
        experience: "10 років",
        skills: [
          "Обстеження перед стартом",
          "Рекомендації щодо навантажень",
          "Профілактика травм",
        ],
      },
    },
    {
      id: 20,
      name: "Сергій Поліщук",
      role: "Дієтолог",
      photo: MALE_IMG,
      about: {
        qualification:
          "Спортивний дієтолог. Працює з атлетами та аматорами.",
        experience: "7 років",
        skills: [
          "Періодизація харчування",
          "Гідратація та мікронутрієнти",
          "Супровід під змагання",
        ],
      },
    },
  ],
};

function Tabs({ active, onChange }) {
  return (
    <div className="tabs">
      {TABS.map((t) => (
        <button
          key={t.id}
          className={"tab" + (active === t.id ? " active" : "")}
          onClick={() => onChange(t.id)}
          type="button"
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

function TrainerCard({ data, onMore }) {
  return (
    <article className="coach">
      <img className="coach-img" src={data.photo} alt={data.name} />
      <div className="coach-content">
        <h3 className="coach-name">{data.name}</h3>
        <p className="coach-role">{data.role}</p>
        <button className="coach-btn" type="button" onClick={() => onMore(data)}>
          ДЕТАЛЬНІШЕ
        </button>
      </div>
    </article>
  );
}

/* ---------- Модальне вікно "Детальніше" ---------- */
function TrainerModal({ open, onClose, trainer }) {
  // закриття по Esc
  useEffect(() => {
    if (!open) return;
    const onEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  // блокування скролу під модалкою
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [open]);

  if (!open || !trainer) return null;

  const { name, role, photo, about } = trainer;

  return (
    <div className="tmodal-backdrop" onMouseDown={onClose} role="dialog" aria-modal="true">
      <div className="tmodal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="tmodal-close" onClick={onClose} aria-label="Закрити">
          ✕
        </button>

        <div className="tmodal-grid">
          <div className="tmodal-photo">
            <img src={photo} alt={name} />
          </div>

          <div className="tmodal-body">
            <h3 className="tmodal-name">{name}</h3>
            <p className="tmodal-role">{role}</p>

            <div className="tmodal-row">
              <span className="tmodal-label">Кваліфікація:&nbsp;</span>
              <span>{about?.qualification}</span>
            </div>

            <div className="tmodal-row">
              <span className="tmodal-label">Тренерський досвід:&nbsp;</span>
              <span>{about?.experience}</span>
            </div>

            <div className="tmodal-row">
              <span className="tmodal-label">Спеціалізації:</span>
              <ul className="tmodal-list">
                {about?.skills?.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TrainersPage() {
  const [tab, setTab] = useState("gym");
  const items = useMemo(() => DATA[tab] || [], [tab]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openMore = (trainer) => {
    setSelected(trainer);
    setModalOpen(true);
  };

  return (
    <>
      <section className="trainers-page">
        <div className="trainers-overlay">
          <Tabs active={tab} onChange={setTab} />

          <div className="cards">
            {items.map((t) => (
              <TrainerCard key={t.id} data={t} onMore={openMore} />
            ))}
          </div>
        </div>
      </section>

      {/* модалка */}
      <TrainerModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        trainer={selected}
      />
    </>
  );
}
