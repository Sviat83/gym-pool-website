
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

  //  Отримати всі картки з бекенду
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

  //  Розділяємо за типом
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
