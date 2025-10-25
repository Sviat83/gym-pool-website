
// // import React, { useEffect, useMemo, useState } from "react";
// // import "./ClubCardsSection.css";
// // import bg from "../../assets/images/location/LocationBakground.jpg.webp";

// // const DOCS = [
// //   { text: "Публічна оферта-договір про надання спортивних послуг", href: "#" },
// //   { text: "Додаток №1 – ПРАВИЛА надання послуг", href: "#" },
// //   { text: "Додаток №2 ЗГОДА на отримання повідомлень", href: "#" },
// //   { text: "Додаток №3 ЗГОДА на обробку персональних даних", href: "#" },
// //   { text: "Додаток №4 заява-приєднання", href: "#" },
// // ];

// // const ADULT_PLANS = [
// //   {
// //     id: "a1",
// //     label: "1 МІСЯЦЬ",
// //     pricePerMonth: "ціна за місяць",
// //     price: "9 500 ₴",
// //     perks: [
// //       "Тренування на кардіо й БіоФіт",
// //       "Індивідуальна дієтологія",
// //       "Сауна",
// //       "Групові тренування",
// //       "Тренажерний зал",
// //       "Знижки: 50% оренди рушника",
// //       "Халат, рушник, гель для душу",
// //     ],
// //   },
// //   {
// //     id: "a3",
// //     label: "3 МІСЯЦІ",
// //     pricePerMonth: "ціна за місяць",
// //     price: "7 666 ₴",
// //     perks: [
// //       "Тренування на кардіо й БіоФіт",
// //       "1 консультація дієтолога",
// //       "Заняття з тренером (разове)",
// //       "3 гостьові візити для друга",
// //       "2 дні заморозки",
// //       "SPA день у вихідні",
// //       "Халат, рушник, гель для душу",
// //     ],
// //   },
// //   {
// //     id: "a6",
// //     label: "6 МІСЯЦІВ",
// //     pricePerMonth: "ціна за місяць",
// //     price: "6 333 ₴",
// //     perks: [
// //       "Тренування на кардіо й БіоФіт",
// //       "Індивідуальна дієтологія",
// //       "3 гостьові візити для друга",
// //       "5 днів заморозки",
// //       "Сауна",
// //       "Групові тренування",
// //       "Халат, рушник, гель для душу",
// //     ],
// //   },
// //   {
// //     id: "a12",
// //     label: "12 МІСЯЦІВ",
// //     pricePerMonth: "ціна за місяць",
// //     price: "5 250 ₴",
// //     perks: [
// //       "Тренування на кардіо й БіоФіт",
// //       "Індивідуальна дієтологія",
// //       "7 гостьових візитів для друга",
// //       "10 днів заморозки",
// //       "Групові тренування",
// //       "Тренажерний зал",
// //       "SPA, душові, халат, рушник",
// //     ],
// //   },
// // ];

// // const KIDS_PLANS = [
// //   {
// //     id: "k3",
// //     label: "3 МІСЯЦІ",
// //     pricePerMonth: "ціна за місяць",
// //     price: "1 833 ₴",
// //     perks: [
// //       "7 днів заморозки",
// //       "Групові заняття",
// //       "Сімейні розваги",
// //       "Користування дитячим майданчиком",
// //       "Халат, рушник, гель для душу",
// //       "Класи з 1-2 років",
// //       "Розважальні ігри",
// //     ],
// //   },
// //   {
// //     id: "k6",
// //     label: "6 МІСЯЦІВ",
// //     pricePerMonth: "ціна за місяць",
// //     price: "1 500 ₴",
// //     perks: [
// //       "15 днів заморозки",
// //       "Групові заняття",
// //       "Сімейні розваги",
// //       "Користування дитячим майданчиком",
// //       "Халат, рушник, гель для душу",
// //       "Класи з 1-2 років",
// //       "Розважальні ігри",
// //     ],
// //   },
// //   {
// //     id: "k12",
// //     label: "1 РІК",
// //     pricePerMonth: "ціна за місяць",
// //     price: "1 042 ₴",
// //     perks: [
// //       "30 днів заморозки",
// //       "Групові заняття",
// //       "Сімейні розваги",
// //       "Користування дитячим майданчиком",
// //       "Халат, рушник, гель для душу",
// //       "Класи з 1-2 років",
// //       "Розважальні ігри",
// //     ],
// //   },
// // ];

// // function DocumentLinks() {
// //   return (
// //     <div className="docs">
// //       <p className="docs-lead">
// //         Перед придбанням клубної картки ознайомтесь, будь ласка, з наступними
// //         документами:
// //       </p>
// //       <ul className="docs-list">
// //         {DOCS.map((link, idx) => (
// //           <li key={idx} className="docs-item">
// //             <a className="docs-link" href={link.href}>
// //               {link.text}
// //             </a>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // function PlanCard({ plan, onBuy }) {
// //   return (
// //     <article className="plan">
// //       <div className="badge" aria-hidden="true">
// //         <div className="badge-logo">UNI</div>
// //         <div className="badge-sub">ЗДОРОВІ! ЩАСЛИВІ! УСПІШНІ!</div>
// //       </div>

// //       <div className="plan-body">
// //         <header className="plan-meta">
// //           <div className="term">{plan.label}</div>
// //           <div className="ppm">{plan.pricePerMonth}</div>
// //           <div className="price">{plan.price}</div>
// //         </header>

// //         <ul className="perks">
// //           {plan.perks.map((perk, i) => (
// //             <li key={i}>{perk}</li>
// //           ))}
// //         </ul>

// //         <button className="buy" type="button" onClick={() => onBuy(plan)}>
// //           ПРИДБАТИ
// //         </button>
// //       </div>
// //     </article>
// //   );
// // }

// // /* ===================== МОДАЛКА ===================== */
// // function PurchaseModal({ open, onClose, plan }) {
// //   const [lastName, setLastName] = useState("");
// //   const [firstName, setFirstName] = useState("");
// //   const [middleName, setMiddleName] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [asGift, setAsGift] = useState(false);
// //   const [agree, setAgree] = useState(false);

// //   // закриття по ESC
// //   useEffect(() => {
// //     if (!open) return;
// //     const onEsc = (e) => {
// //       if (e.key === "Escape") onClose();
// //     };
// //     document.addEventListener("keydown", onEsc);
// //     return () => document.removeEventListener("keydown", onEsc);
// //   }, [open, onClose]);

// //   // блокування скролу фону, коли модалка відкрита
// //   useEffect(() => {
// //     if (open) {
// //       const prev = document.body.style.overflow;
// //       document.body.style.overflow = "hidden";
// //       return () => (document.body.style.overflow = prev);
// //     }
// //   }, [open]);

// //   if (!open) return null;

// //   const canSubmit =
// //     lastName.trim() && firstName.trim() && phone.trim() && agree;

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!canSubmit) return;
// //     // Тут інтеграція з бекендом/платіжною системою
// //     alert(
// //       `Оплата: ${plan?.label} (${plan?.price}).\n${lastName} ${firstName} ${middleName}\nТелефон: ${phone}\nПодарунок: ${asGift ? "так" : "ні"}`
// //     );
// //     onClose();
// //   };

// //   const titlePrice = plan?.price?.replace(/\s/g, "") || "";

// //   return (
// //     <div
// //       className="modal-backdrop"
// //       onMouseDown={onClose}
// //       role="dialog"
// //       aria-modal="true"
// //       aria-labelledby="purchase-title"
// //     >
// //       <div
// //         className="modal"
// //         onMouseDown={(e) => e.stopPropagation()}
// //         tabIndex={-1}
// //       >
// //         <button className="modal-close" onClick={onClose} aria-label="Закрити">
// //           ✕
// //         </button>

// //         <h2 className="modal-title" id="purchase-title">
// //           ПРИДБАТИ КАРТКУ UNIFORCE ЗА {titlePrice}
// //         </h2>

// //         <form className="modal-form" onSubmit={handleSubmit}>
// //           <label className="modal-label">
// //             Прізвище
// //             <input
// //               className="modal-input"
// //               type="text"
// //               value={lastName}
// //               onChange={(e) => setLastName(e.target.value)}
// //               placeholder=""
// //               required
// //             />
// //           </label>

// //           <label className="modal-label">
// //             Ім’я
// //             <input
// //               className="modal-input"
// //               type="text"
// //               value={firstName}
// //               onChange={(e) => setFirstName(e.target.value)}
// //               placeholder=""
// //               required
// //             />
// //           </label>

// //           <label className="modal-label">
// //             По батькові
// //             <input
// //               className="modal-input"
// //               type="text"
// //               value={middleName}
// //               onChange={(e) => setMiddleName(e.target.value)}
// //               placeholder=""
// //             />
// //           </label>

// //           <label className="modal-label">
// //             Номер телефону
// //             <input
// //               className="modal-input"
// //               type="tel"
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //               placeholder="+38 (0_) ___ __ __"
// //               required
// //             />
// //           </label>

// //           <label className="modal-check">
// //             <input
// //               type="checkbox"
// //               checked={asGift}
// //               onChange={(e) => setAsGift(e.target.checked)}
// //             />
// //             <span>На подарунок</span>
// //           </label>

// //           <label className="modal-check">
// //             <input
// //               type="checkbox"
// //               checked={agree}
// //               onChange={(e) => setAgree(e.target.checked)}
// //               required
// //             />
// //             <span>
// //               Перед придбанням клубної картки ознайомтесь, будь ласка, з
// //               наступними документами:&nbsp;
// //               {DOCS.map((d, i) => (
// //                 <React.Fragment key={i}>
// //                   <a href={d.href} target="_blank" rel="noreferrer">
// //                     {d.text}
// //                   </a>
// //                   {i < DOCS.length - 1 ? ", " : "."}
// //                 </React.Fragment>
// //               ))}
// //             </span>
// //           </label>

// //           <button className="pay-btn" type="submit" disabled={!canSubmit}>
// //             ОПЛАТИТИ
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ===================== ГОЛОВНИЙ КОМПОНЕНТ ===================== */
// // function Tabs({ active, onChange }) {
// //   return (
// //     <div className="tabs" role="tablist" aria-label="Категорії карток">
// //       <button
// //         className={active === "adult" ? "tab active" : "tab"}
// //         onClick={() => onChange("adult")}
// //         role="tab"
// //         aria-selected={active === "adult"}
// //         type="button"
// //       >
// //         ДОРОСЛІ КАРТКИ
// //       </button>
// //       <button
// //         className={active === "kids" ? "tab active" : "tab"}
// //         onClick={() => onChange("kids")}
// //         role="tab"
// //         aria-selected={active === "kids"}
// //         type="button"
// //       >
// //         ДИТЯЧІ КАРТКИ
// //       </button>
// //     </div>
// //   );
// // }

// // export default function ClubCardsSection() {
// //   const [tab, setTab] = useState("adult");
// //   const plans = tab === "adult" ? ADULT_PLANS : KIDS_PLANS;

// //   const [modalOpen, setModalOpen] = useState(false);
// //   const [selectedPlan, setSelectedPlan] = useState(null);

// //   const handleBuy = (plan) => {
// //     setSelectedPlan(plan);
// //     setModalOpen(true);
// //   };

// //   return (
// //     <section
// //       id="club-cards"
// //       className="club-cards"
// //       style={{ backgroundImage: `url(${bg})` }}
// //     >
// //       <div className="club-overlay" />
// //       <div className="container">
// //         <h1 className="title">КЛУБНІ КАРТКИ</h1>
// //         <Tabs active={tab} onChange={setTab} />
// //         <DocumentLinks />
// //         <div className="grid">
// //           {plans.map((plan) => (
// //             <PlanCard key={plan.id} plan={plan} onBuy={handleBuy} />
// //           ))}
// //         </div>
// //       </div>

// //       <PurchaseModal
// //         open={modalOpen}
// //         onClose={() => setModalOpen(false)}
// //         plan={selectedPlan}
// //       />
// //     </section>
// //   );
// // }

// import React, { useEffect, useMemo, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../firebase";
// import "./ClubCardsSection.css";
// import bg from "../../assets/images/location/LocationBakground.jpg.webp";

// /** ---- дефолт (fallback), якщо в БД ще немає документа ---- */
// const FALLBACK = {
//   adult: [
//     { id: "a1", label: "1 МІСЯЦЬ", pricePerMonth: "ціна за місяць", price: "9 500 ₴",
//       perks: ["Тренування на кардіо й БіоФіт","Індивідуальна дієтологія","Сауна","Групові тренування","Тренажерний зал","Знижки: 50% оренди рушника","Халат, рушник, гель для душу"] },
//     { id: "a3", label: "3 МІСЯЦІ", pricePerMonth: "ціна за місяць", price: "7 666 ₴",
//       perks: ["Тренування на кардіо й БіоФіт","1 консультація дієтолога","Заняття з тренером (разове)","3 гостьові візити для друга","2 дні заморозки","SPA день у вихідні","Халат, рушник, гель для душу"] },
//     { id: "a6", label: "6 МІСЯЦІВ", pricePerMonth: "ціна за місяць", price: "6 333 ₴",
//       perks: ["Тренування на кардіо й БіоФіт","Індивідуальна дієтологія","3 гостьові візити для друга","5 днів заморозки","Сауна","Групові тренування","Халат, рушник, гель для душу"] },
//     { id: "a12", label: "12 МІСЯЦІВ", pricePerMonth: "ціна за місяць", price: "5 250 ₴",
//       perks: ["Тренування на кардіо й БіоФіт","Індивідуальна дієтологія","7 гостьових візитів для друга","10 днів заморозки","Групові тренування","Тренажерний зал","SPA, душові, халат, рушник"] },
//   ],
//   kids: [
//     { id: "k3", label: "3 МІСЯЦІ", pricePerMonth: "ціна за місяць", price: "1 833 ₴",
//       perks: ["7 днів заморозки","Групові заняття","Сімейні розваги","Користування дитячим майданчиком","Халат, рушник, гель для душу","Класи з 1-2 років","Розважальні ігри"] },
//     { id: "k6", label: "6 МІСЯЦІВ", pricePerMonth: "ціна за місяць", price: "1 500 ₴",
//       perks: ["15 днів заморозки","Групові заняття","Сімейні розваги","Користування дитячим майданчиком","Халат, рушник, гель для душу","Класи з 1-2 років","Розважальні ігри"] },
//     { id: "k12", label: "1 РІК", pricePerMonth: "ціна за місяць", price: "1 042 ₴",
//       perks: ["30 днів заморозки","Групові заняття","Сімейні розваги","Користування дитячим майданчиком","Халат, рушник, гель для душу","Класи з 1-2 років","Розважальні ігри"] },
//   ],
// };

// const DOCS = [
//   { text: "Публічна оферта-договір про надання спортивних послуг", href: "#" },
//   { text: "Додаток №1 – ПРАВИЛА надання послуг", href: "#" },
//   { text: "Додаток №2 ЗГОДА на отримання повідомлень", href: "#" },
//   { text: "Додаток №3 ЗГОДА на обробку персональних даних", href: "#" },
//   { text: "Додаток №4 заява-приєднання", href: "#" },
// ];

// function Tabs({ active, onChange }) {
//   return (
//     <div className="tabs" role="tablist" aria-label="Категорії карток">
//       <button className={active === "adult" ? "tab active" : "tab"} onClick={() => onChange("adult")} type="button">ДОРОСЛІ КАРТКИ</button>
//       <button className={active === "kids" ? "tab active" : "tab"} onClick={() => onChange("kids")} type="button">ДИТЯЧІ КАРТКИ</button>
//     </div>
//   );
// }

// function DocumentLinks() {
//   return (
//     <div className="docs" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
//       <p>Перед придбанням клубної картки ознайомтесь, будь ласка, з наступними документами:</p>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {DOCS.map((link, idx) => (
//           <li key={idx} style={{ margin: "4px 0" }}>
//             <a href={link.href}>{link.text}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function PlanCard({ plan }) {
//   return (
//     <article className="plan">
//       <div className="badge" aria-hidden="true">
//         <div className="badge-logo">UNI</div>
//         <div className="badge-sub">ЗДОРОВІ! ЩАСЛИВІ! УСПІШНІ!</div>
//       </div>
//       <div className="plan-body">
//         <header className="plan-meta">
//           <div className="term">{plan.label}</div>
//           <div className="ppm">{plan.pricePerMonth}</div>
//           <div className="price">{plan.price}</div>
//         </header>
//         <ul className="perks">
//           {plan.perks?.map((perk, i) => <li key={i}>{perk}</li>)}
//         </ul>
//         <button className="buy" type="button">ПРИДБАТИ</button>
//       </div>
//     </article>
//   );
// }

// export default function ClubCardsPage() {
//   const [tab, setTab] = useState("adult");
//   const [data, setData] = useState(FALLBACK);
//   const [loading, setLoading] = useState(true);

//   // читаємо один документ: clubCards/current
//   useEffect(() => {
//     const load = async () => {
//       try {
//         const ref = doc(db, "clubCards", "current");
//         const snap = await getDoc(ref);
//         if (snap.exists()) {
//           const d = snap.data();
//           setData({
//             adult: Array.isArray(d.adult) ? d.adult : FALLBACK.adult,
//             kids: Array.isArray(d.kids) ? d.kids : FALLBACK.kids,
//           });
//         } else {
//           setData(FALLBACK);
//         }
//       } catch (e) {
//         console.error("ClubCards load error:", e);
//         setData(FALLBACK);
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, []);

//   const plans = useMemo(() => (tab === "adult" ? data.adult : data.kids), [tab, data]);

//   return (
//     <section
//       id="club-cards"
//       className="club-cards"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="club-overlay" />
//       <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
//         <h1 className="title" style={{ textAlign: "center" }}>КЛУБНІ КАРТКИ</h1>
//         <Tabs active={tab} onChange={setTab} />
//         <DocumentLinks />
//         {loading ? (
//           <p style={{ textAlign: "center", color: "#fff" }}>Завантаження…</p>
//         ) : (
//           <div className="grid">
//             {plans.map((plan) => <PlanCard key={plan.id} plan={plan} />)}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useMemo, useState } from "react";
import "./ClubCardsSection.css";
import bg from "../../assets/images/location/LocationBakground.jpg.webp";

const DOCS = [
  { text: "Публічна оферта-договір про надання спортивних послуг", href: "#" },
  { text: "Додаток №1 – ПРАВИЛА надання послуг", href: "#" },
  { text: "Додаток №2 ЗГОДА на отримання повідомлень", href: "#" },
  { text: "Додаток №3 ЗГОДА на обробку персональних даних", href: "#" },
  { text: "Додаток №4 заява-приєднання", href: "#" },
];

function Tabs({ active, onChange }) {
  return (
    <div className="tabs" role="tablist" aria-label="Категорії карток">
      <button
        className={active === "adult" ? "tab active" : "tab"}
        onClick={() => onChange("adult")}
        type="button"
      >
        ДОРОСЛІ КАРТКИ
      </button>
      <button
        className={active === "kids" ? "tab active" : "tab"}
        onClick={() => onChange("kids")}
        type="button"
      >
        ДИТЯЧІ КАРТКИ
      </button>
    </div>
  );
}

function DocumentLinks() {
  return (
    <div className="docs" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
      <p>Перед придбанням клубної картки ознайомтесь, будь ласка, з наступними документами:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {DOCS.map((link, idx) => (
          <li key={idx} style={{ margin: "4px 0" }}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlanCard({ plan }) {
  return (
    <article className="plan">
      <div className="badge" aria-hidden="true">
        <div className="badge-logo">UNI</div>
        <div className="badge-sub">ЗДОРОВІ! ЩАСЛИВІ! УСПІШНІ!</div>
      </div>
      <div className="plan-body">
        <header className="plan-meta">
          <div className="term">{plan.title}</div>
          <div className="ppm">{plan.type === "Adult" ? "Доросла картка" : "Дитяча картка"}</div>
          <div className="price">{plan.price} ₴</div>
        </header>
        <p>{plan.benefits}</p>
        <button className="buy" type="button">ПРИДБАТИ</button>
      </div>
    </article>
  );
}

export default function ClubCardsSection() {
  const [tab, setTab] = useState("adult");
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Отримати всі картки з бекенду
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/cards");
        const data = await res.json();
        setCards(data);
      } catch (error) {
        console.error("Помилка завантаження:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  // 🔹 Розділяємо за типом
  const plans = useMemo(() => {
    if (tab === "adult") return cards.filter((c) => c.type === "Adult");
    return cards.filter((c) => c.type === "Kids");
  }, [tab, cards]);

  return (
    <section
      id="club-cards"
      className="club-cards"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="club-overlay" />
      <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
        <h1 className="title" style={{ textAlign: "center" }}>КЛУБНІ КАРТКИ</h1>
        <Tabs active={tab} onChange={setTab} />
        <DocumentLinks />

        {loading ? (
          <p style={{ textAlign: "center", color: "#fff" }}>Завантаження…</p>
        ) : (
          <div className="grid">
            {plans.map((plan) => <PlanCard key={plan.id} plan={plan} />)}
          </div>
        )}
      </div>
    </section>
  );
}
