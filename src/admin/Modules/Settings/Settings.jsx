import React from "react";
import styles from "./Settings.module.css";

function Settings() {
  return (
    <div className={styles.container}>
      <h1>Settings</h1>
      <p>Тут адмін може змінювати логотип, контактні дані, соцмережі.</p>
    </div>
  );
}

export default Settings;
