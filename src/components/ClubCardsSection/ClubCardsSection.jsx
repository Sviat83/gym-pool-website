import React, { useState } from "react";
import "./ClubCardsSection.css";
import bg from "../../assets/images/location/LocationBakground.jpg.webp";

const DOCS = [
  { text: "Публічний договір-оферта про надання спортивних послуг", href: "#" },
  { text: "Додаток №1. ПРАВИЛА надання послуг", href: "#" },
  { text: "Договір №3 ЗГОДА на отримання повідомлень", href: "#" },
  { text: "Додаток №3 ЗГОДА на обробку персональних даних", href: "#" },
  { text: "Додаток №4 заява-приєднання", href: "#" }
];

const ADULT_PLANS = [
  {
    id: "a1",
    label: "1 МІСЯЦЬ",
    pricePerMonth: "ціна за місяць",
    price: "9 500 ₴",
    perks: ["Тренування на кардіо й БіоФіт", "Індивідуальна дієтологія", "Сауна", "Групові тренування", "Тренажерний зал", "Знижки: 50% оренди рушника", "Халат, рушник, гель для душу"]
  },
  {
    id: "a3",
    label: "3 МІСЯЦІ",
    pricePerMonth: "ціна за місяць",
    price: "7 666 ₴",
    perks: ["Тренування на кардіо й БіоФіт", "1 консультація дієтолога", "Заняття з тренером (разове)", "3 гостьові візити для друга", "2 дні заморозки", "SPA день у вихідні", "Халат, рушник, гель для душу"]
  },
  {
    id: "a6",
    label: "6 МІСЯЦІВ",
    pricePerMonth: "ціна за місяць",
    price: "6 333 ₴",
    perks: ["Тренування на кардіо й БіоФіт", "Індивідуальна дієтологія", "3 гостьові візити для друга", "5 днів заморозки", "Сауна", "Групові тренування", "Халат, рушник, гель для душу"]
  },
  {
    id: "a12",
    label: "12 МІСЯЦІВ",
    pricePerMonth: "ціна за місяць",
    price: "5 250 ₴",
    perks: ["Тренування на кардіо й БіоФіт", "Індивідуальна дієтологія", "7 гостьових візитів для друга", "10 днів заморозки", "Групові тренування", "Тренажерний зал", "SPA, душові, халат, рушник"]
  }
];

const KIDS_PLANS = [
  {
    id: "k3",
    label: "3 МІСЯЦІ",
    pricePerMonth: "ціна за місяць",
    price: "1 833 ₴",
    perks: ["7 днів заморозки", "Групові заняття", "Сімейні розваги", "Користування дитячим майданчиком", "Халат, рушник, гель для душу", "Класи з 1-2 років", "Розважальні ігри"]
  },
  {
    id: "k6",
    label: "6 МІСЯЦІВ",
    pricePerMonth: "ціна за місяць",
    price: "1 500 ₴",
    perks: ["15 днів заморозки", "Групові заняття", "Сімейні розваги", "Користування дитячим майданчиком", "Халат, рушник, гель для душу", "Класи з 1-2 років", "Розважальні ігри"]
  },
  {
    id: "k12",
    label: "1 РІК",
    pricePerMonth: "ціна за місяць",
    price: "1 042 ₴",
    perks: ["30 днів заморозки", "Групові заняття", "Сімейні розваги", "Користування дитячим майданчиком", "Халат, рушник, гель для душу", "Класи з 1-2 років", "Розважальні ігри"]
  }
];

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
      <div className="badge">
        <div className="badge-logo">UNI</div>
        <div className="badge-sub">ЗДОРОВІ! ЩАСЛИВІ! УСПІШНІ!</div>
      </div>
      <div className="plan-body">
        <div className="plan-meta">
          <div className="term">{plan.label}</div>
          <div className="ppm">{plan.pricePerMonth}</div>
          <div className="price">{plan.price}</div>
        </div>
        <ul className="perks">
          {plan.perks.map((perk, i) => <li key={i}>{perk}</li>)}
        </ul>
        <button className="buy">ПРИДБАТИ</button>
      </div>
    </article>
  );
}

function Tabs({ active, onChange }) {
  return (
    <div className="tabs">
      <button className={active === "adult" ? "tab active" : "tab"} onClick={() => onChange("adult")}>ДОРОСЛІ КАРТКИ</button>
      <button className={active === "kids" ? "tab active" : "tab"} onClick={() => onChange("kids")}>ДИТЯЧІ КАРТКИ</button>
    </div>
  );
}

export default function ClubCardsSection() {
  const [tab, setTab] = useState("adult");
  const plans = tab === "adult" ? ADULT_PLANS : KIDS_PLANS;

  return (
    <section
      className="club-cards"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflowX: "hidden"
      }}
    >
      <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
        <h1 className="title" style={{ textAlign: "center" }}>КЛУБНІ КАРТКИ</h1>
        <Tabs active={tab} onChange={setTab} />
        <DocumentLinks />
        <div className="grid">
          {plans.map((plan) => <PlanCard key={plan.id} plan={plan} />)}
        </div>
      </div>
    </section>
  );
}
