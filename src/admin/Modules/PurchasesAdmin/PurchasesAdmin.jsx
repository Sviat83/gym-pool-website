import React, { useEffect, useState } from "react";
import styles from "./PurchasesAdmin.module.css";

export default function PurchasesAdmin() {
  const API_URL = "http://localhost:3001/api";

  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  const loadPurchases = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/purchases`);
      const data = await res.json();
      setPurchases(data);
    } catch (err) {
      console.error("Помилка завантаження покупок:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPurchases();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Видалити цю покупку?")) return;
    try {
      await fetch(`${API_URL}/purchases/${id}`, { method: "DELETE" });
      setPurchases((s) => s.filter((p) => p.id !== id));
      if (selected?.id === id) setSelected(null);
    } catch (err) {
      console.error("Помилка видалення:", err);
    }
  };

  return (
    <div className={styles.wrap}>
      <h1>Покупки клубних карток</h1>

      {loading ? (
        <p>Завантаження…</p>
      ) : purchases.length === 0 ? (
        <p>Поки що немає покупок.</p>
      ) : (
        <div className={styles.layout}>
          {/* Ліва частина — список покупок */}
          <div className={styles.list}>
            {purchases.map((p) => (
              <article
                key={p.id}
                className={`${styles.card} ${
                  selected?.id === p.id ? styles.active : ""
                }`}
                onClick={() => setSelected(p)}
              >
                <div className={styles.cardHead}>
                  <div>
                    <h3 className={styles.title}>
                      {p.firstName} {p.lastName}
                    </h3>
                    <div className={styles.meta}>
                      <span className={styles.badge}>
                        {p.ClubCard?.title || `Картка ID ${p.card_id}`}
                      </span>
                      {p.ClubCard?.price && (
                        <span className={styles.price}>
                          {p.ClubCard.price} ₴
                        </span>
                      )}
                    </div>
                    <p className={styles.phone}>{p.phone}</p>
                    <p className={styles.gift}>
                      Подарунок: {p.asGift ? "Так 🎁" : "Ні"}
                    </p>
                  </div>
                  <div className={styles.actions}>
                    <button
                      className={styles.deleteBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(p.id);
                      }}
                    >
                      Видалити
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Права частина — деталі покупки */}
          <div className={styles.details}>
            {selected ? (
              <>
                <h2>Деталі покупки</h2>
                <p>
                  <strong>Покупець:</strong> {selected.firstName}{" "}
                  {selected.lastName}
                </p>
                <p>
                  <strong>Телефон:</strong> {selected.phone}
                </p>
                <p>
                  <strong>Подарунок:</strong> {selected.asGift ? "Так 🎁" : "Ні"}
                </p>
                <p>
                  <strong>Картка:</strong>{" "}
                  {selected.ClubCard?.title || `ID ${selected.card_id}`}
                </p>
                {selected.ClubCard?.benefits && (
                  <div>
                    <strong>Переваги:</strong>
                    <ul className={styles.perks}>
                      {selected.ClubCard.benefits.split(",").map((b, i) => (
                        <li key={i}>{b.trim()}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <p>
                  <strong>Ціна:</strong> {selected.ClubCard?.price} ₴
                </p>
              </>
            ) : (
              <p className={styles.placeholder}>
                Оберіть покупку зліва, щоб переглянути деталі.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
