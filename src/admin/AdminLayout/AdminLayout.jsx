// загальний макет адмінки (Sidebar + Outlet)

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./AdminLayout.module.css";

function AdminLayout() {
    return (
        <div className={styles.adminContainer}>
            <Sidebar />
            <main className={styles.mainContent}>
                <Outlet /> {/* сюди підставляються Settings, Trainers і т.д. */}
            </main>
        </div>
    );
}
export default AdminLayout;