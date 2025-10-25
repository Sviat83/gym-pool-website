import React, { useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase"; 
import styles from "./ClubCardsAdmin.module.css";

const TYPES = [
  { id: "adult", label: "Дорослі" },
  { id: "kids", label: "Дитячі" },
];

const emptyForm = {
  title: "",
  type: "adult",
  price: "",
  duration: "",
  image: "",
  perksText: "", 
};

export default function ClubCardsAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all | adult | kids
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const colRef = useMemo(() => collection(db, "clubCards"), []);

  const load = async () => {
    setLoading(true);
    const q = query(colRef, orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    setItems(list);
    setLoading(false);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((i) => i.type === filter);
  }, [items, filter]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const parsePerks = (text) =>
    text
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

  const handleAdd = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        title: form.title.trim(),
        type: form.type,
        price: Number(form.price) || 0,
        duration: form.duration.trim(),
        image: form.image.trim(),
        perks: parsePerks(form.perksText),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };
      await addDoc(colRef, payload);
      setForm(emptyForm);
      await load();
    } finally {
      setSaving(false);
    }
  };

  const startEdit = (it) => {
    setEditingId(it.id);
    setForm({
      title: it.title || "",
      type: it.type || "adult",
      price: it.price ?? "",
      duration: it.duration || "",
      image: it.image || "",
      perksText: (it.perks || []).join(", "),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingId) return;
    setSaving(true);
    try {
      const ref = doc(db, "clubCards", editingId);
      const payload = {
        title: form.title.trim(),
        type: form.type,
        price: Number(form.price) || 0,
        duration: form.duration.trim(),
        image: form.image.trim(),
        perks: parsePerks(form.perksText),
        updatedAt: serverTimestamp(),
      };
      await updateDoc(ref, payload);
      cancelEdit();
      await load();
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Видалити цю картку?")) return;
    await deleteDoc(doc(db, "clubCards", id));
    setItems((s) => s.filter((x) => x.id !== id));
  };

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

      {/* Форма додавання / редагування */}
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
              placeholder="Adult Premium"
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

          <label>
            Тривалість
            <input
              name="duration"
              value={form.duration}
              onChange={onChange}
              placeholder="1 місяць"
              required
            />
          </label>
        </div>

        <div className={styles.row}>
          <label className={styles.grow}>
            Фото (URL)
            <input
              name="image"
              value={form.image}
              onChange={onChange}
              placeholder="https://..."
            />
          </label>
        </div>

        <label className={styles.grow}>
          Переваги (через кому)
          <textarea
            name="perksText"
            value={form.perksText}
            onChange={onChange}
            placeholder="Сауна, Групові тренування, Тренажерний зал"
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
                      {it.type === "adult" ? "Дорослі" : "Дитячі"}
                    </span>
                    <span className={styles.price}>{it.price} ₴</span>
                    <span className={styles.duration}>{it.duration}</span>
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
                {it.image && (
                  <img
                    className={styles.thumb}
                    src={it.image}
                    alt={it.title}
                    loading="lazy"
                  />
                )}
                {Array.isArray(it.perks) && it.perks.length > 0 && (
                  <ul className={styles.perks}>
                    {it.perks.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
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
