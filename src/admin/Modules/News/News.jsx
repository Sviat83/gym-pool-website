import React, { useState, useEffect } from "react";
import { storage, db } from "../../../../src/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp, getDocs, deleteDoc, doc } from "firebase/firestore";
import styles from "./News.module.css";

function AddNews() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [newsList, setNewsList] = useState([]);

  // Завантаження всіх новин
  useEffect(() => {
    const fetchNews = async () => {
      const snap = await getDocs(collection(db, "news"));
      setNewsList(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchNews();
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setPreview(null);
    }
  };

  const handleSave = async () => {
  let imageUrl = null;

  if (file) {
    const storageRef = ref(storage, `newsImages/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    imageUrl = await getDownloadURL(storageRef);
  }

  const docRef = await addDoc(collection(db, "news"), {
    title,
    content,
    imageUrl, // буде null якщо фото не додано
    timestamp: serverTimestamp(),
  });

  setNewsList(prev => [...prev, { id: docRef.id, title, content, imageUrl }]);
  alert("Новина додана!");

  setTitle("");
  setContent("");
  setFile(null);
  setPreview(null);
};


  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "news", id));
    setNewsList(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className={styles.container}>
      <h2>Додати новину</h2>
      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <label>
            Заголовок
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.inputField}
            />
          </label>

          <label>
            Текст новини
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={styles.inputField}
            />
          </label>

          <label>
            Фото
            <input type="file" onChange={handleFileChange} className={styles.inputField} />
          </label>

          {preview && <img src={preview} alt="preview" className={styles.preview} />}

          <button className={styles.saveButton} onClick={handleSave}>
            Зберегти
          </button>
        </div>
      </div>

      <h2>Список новин</h2>
      <div className={styles.newsList}>
        {newsList.map((news) => (
          <div key={news.id} className={styles.newsCard}>
            <h3>{news.title}</h3>
            <p>{news.content}</p>
            {news.imageUrl && <img src={news.imageUrl} alt={news.title} className={styles.newsImage} />}
            <div className={styles.newsButtons}>
              <button onClick={() => handleDelete(news.id)}>Видалити</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddNews;
