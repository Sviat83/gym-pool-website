import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css";

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <h2 className={styles.title}>Адмін-панель</h2>
            <ul className={styles.menu}>
                <li>
                    <NavLink
                        to="/gym-pool-website/admin/dashboard"
                        end
                        className={({ isActive }) => isActive ? styles.isActive : ""}
                    >
                        Головна
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/gym-pool-website/admin/trainers"
                        className={({ isActive }) => isActive ? styles.isActive : ""}
                    >
                        Тренери
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/gym-pool-website/admin/schedule"
                        className={({ isActive }) => isActive ? styles.isActive : ""}
                    >
                        Розклад
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/gym-pool-website/admin/gallery"
                        className={({ isActive }) => isActive ? styles.isActive : ""}
                    >
                        Галерея
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/gym-pool-website/admin/news"
                        className={({ isActive }) => isActive ? styles.isActive : ""}
                    >
                        Новини
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/gym-pool-website/admin/AgeGroup"
                        className={({ isActive }) => isActive ? styles.isActive : ""}
                    >
                        Дитячі тренування
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/gym-pool-website/admin/contacts"
                        className={({ isActive }) => isActive ? styles.isActive : ""}
                    >
                        Контакти
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/gym-pool-website/admin/settings"
                        className={({ isActive }) => isActive ? styles.isActive : ""}
                    >
                        Налаштування
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}
export default Sidebar;