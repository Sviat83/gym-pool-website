
import React, { useEffect, useMemo, useState } from "react";
import styles from "./ClubCardsAdmin.module.css";


const TYPES = [
  { id: "Adult", label: "Дорослі" },
  { id: "Kids", label: "Дитячі" },
];

const emptyForm = {
  title: "",
  type: "Adult",
  price: "",
  perksText: "", // це піде в benefits
};

export default function ClubCardsAdmin() {
  const API_URL = "http://localhost:3001/api";

  const [items, setItems] = useState([]);          // всі картки з бекенду
  const [loading, setLoading] = useState(true);    // лоадер
  const [filter, setFilter] = useState("all");     // all | Adult | Kids
  const [form, setForm] = useState(emptyForm);     // форма створення/редагування
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState(null); 

  // ЗАВАНТАЖЕННЯ ДАНИХ З БЕКЕНДУ
  const loadCards = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/cards`);
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error("Помилка завантаження карток:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCards();
    
  }, []);

  // ФІЛЬТР ЗА ТИПОМ 
  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((i) => i.type === filter);
  }, [items, filter]);

  // ОНОВЛЕННЯ ФОРМИ 
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  //ПОЧАТИ РЕДАГУВАННЯ
  const startEdit = (it) => {
    setEditingId(it.id);
    setForm({
      title: it.title || "",
      type: it.type || "Adult",
      price: it.price ?? "",
      perksText: it.benefits || "", // benefits з бази -> у textarea
    });

    // щоб адмін зверху бачив форму
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  // СТВОРЕННЯ КАРТКИ (POST /api/cards)
  const handleAdd = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        title: form.title.trim(),
        type: form.type,
        price: parseFloat(form.price) || 0,
        benefits: form.perksText.trim(),
      };

      const res = await fetch(`${API_URL}/cards`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        alert(" Помилка при додаванні картки");
      } else {
        cancelEdit();
        await loadCards();
      }
    } catch (err) {
      console.error("Помилка створення:", err);
    } finally {
      setSaving(false);
    }
  };

  // ОНОВЛЕННЯ КАРТКИ (PUT /api/cards/:id) 
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingId) return;
    setSaving(true);

    try {
      const payload = {
        title: form.title.trim(),
        type: form.type,
        price: parseFloat(form.price) || 0,
        benefits: form.perksText.trim(),
      };

      const res = await fetch(`${API_URL}/cards/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        alert(" Помилка при оновленні картки");
      } else {
        cancelEdit();
        await loadCards();
      }
    } catch (err) {
      console.error("Помилка оновлення:", err);
    } finally {
      setSaving(false);
    }
  };

  // ВИДАЛЕННЯ КАРТКИ (DELETE /api/cards/:id)
  const handleDelete = async (id) => {
    if (!window.confirm("Видалити цю картку?")) return;

    try {
      const res = await fetch(`${API_URL}/cards/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        alert(" Помилка при видаленні");
      } else {
        // оптимістичне оновлення
        setItems((s) => s.filter((x) => x.id !== id));
      }
    } catch (err) {
      console.error("Помилка видалення:", err);
    }
  };

  // РЕНДЕР 
  return (
    <div className={styles.wrap}>
      <h1>Клубні картки (адмін)</h1>

      {/* Фільтр */}
      <div className={styles.filter}>
        <button
          className={filter === "all" ? styles.active : ""}
          onClick={() => setFilter("all")}
        >
          Усі
        </button>

        {TYPES.map((t) => (
          <button
            key={t.id}
            className={filter === t.id ? styles.active : ""}
            onClick={() => setFilter(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Форма створення / редагування */}
      <form
        onSubmit={editingId ? handleUpdate : handleAdd}
        className={styles.form}
      >
        <div className={styles.row}>
          <label>
            Назва
            <input
              name="title"
              value={form.title}
              onChange={onChange}
              placeholder="12 МІСЯЦІВ / Premium / etc"
              required
            />
          </label>

          <label>
            Тип
            <select name="type" value={form.type} onChange={onChange}>
              {TYPES.map((t) => (
                <option value={t.id} key={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            Ціна (₴)
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={onChange}
              min="0"
              step="1"
              placeholder="1800"
              required
            />
          </label>
        </div>

        <label className={styles.grow}>
          Переваги (benefits, через кому або як текстовий опис)
          <textarea
            name="perksText"
            value={form.perksText}
            onChange={onChange}
            placeholder="Сауна, Групові тренування, Тренажерний зал..."
            rows={3}
          />
        </label>

        <div className={styles.actions}>
          {editingId ? (
            <>
              <button disabled={saving} type="submit">
                Зберегти зміни
              </button>
              <button
                type="button"
                className={styles.secondary}
                onClick={cancelEdit}
              >
                Скасувати
              </button>
            </>
          ) : (
            <button disabled={saving} type="submit">
              Додати картку
            </button>
          )}
        </div>
      </form>

      {/* Список карток */}
      <div className={styles.list}>
        {loading ? (
          <p>Завантаження…</p>
        ) : filtered.length === 0 ? (
          <p>Немає карток.</p>
        ) : (
          filtered.map((it) => (
            <article key={it.id} className={styles.card}>
              <div className={styles.cardHead}>
                <div>
                  <h3 className={styles.title}>{it.title}</h3>
                  <div className={styles.meta}>
                    <span className={styles.badge}>
                      {it.type === "Adult" ? "Дорослі" : "Дитячі"}
                    </span>
                    <span className={styles.price}>{it.price} ₴</span>
                  </div>
                </div>

                <div className={styles.cardActions}>
                  <button onClick={() => startEdit(it)}>Редагувати</button>
                  <button
                    className={styles.danger}
                    onClick={() => handleDelete(it.id)}
                  >
                    Видалити
                  </button>
                </div>
              </div>

              <div className={styles.body}>
                {it.benefits && (
                  <ul className={styles.perks}>
                    {it.benefits
                      .split(",")
                      .map((p, i) => <li key={i}>{p.trim()}</li>)}
                  </ul>
                )}
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
