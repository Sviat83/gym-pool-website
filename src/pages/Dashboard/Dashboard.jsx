import React from "react";
import styles from "./Dashboard.module.css";

function Dashboard() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Адмінпанель</h1>
            <p className={styles.text}>Ласкаво просимо!</p>
        </div>
    );
}

export default Dashboard;