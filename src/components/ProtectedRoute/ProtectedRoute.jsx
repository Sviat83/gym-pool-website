// // захищений маршрут, який перевіряє, чи користувач автентифікований, 
// // перш ніж надати доступ до певного компонента.
// // разом із React Router

// import React, { useState, useEffect } from"react";
// import { Navigate } from "react-router-dom";
// import { auth } from "../../firebase";

// function ProtectedRoute({ children }) {
//     const [loading, setLoading] = useState(true);
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//             // повертає функцію відписки, яку зручно викликати при розмонтуванні компонента.
//             setUser(currentUser);
//             setLoading(false);
//         });
//         return () => unsubscribe();
//         // коли компонент видаляється зі сторінки, підписка на зміни авторизації відключається,
//         //  щоб не було витоків пам’яті.
//     }, []);

//     if (loading) return <p>Завантаження...</p>;
//     if (!user) return <Navigate to={"/gym-pool-website/admin/login"} replace />;
//     return children;

// }

// export default ProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";

/** простий декодер JWT без перевірки підпису (для клієнта вистачає) */
function decodeJwt(token) {
  try {
    const [, payload] = token.split(".");
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}

/**
 * ProtectedRoute
 * - якщо немає токена або він прострочений — редірект на /admin/login
 * - якщо передано onlyAdmin і роль не admin — редірект на головну
 */
export default function ProtectedRoute({ children, onlyAdmin = false }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!token) {
    return <Navigate to="/gym-pool-website/admin/login" replace />;
  }

  // перевірка закінчення дії токена (exp — в секундах)
  const payload = decodeJwt(token);
  const nowSec = Math.floor(Date.now() / 1000);
  if (!payload || (payload.exp && payload.exp < nowSec)) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return <Navigate to="/gym-pool-website/admin/login" replace />;
  }

  if (onlyAdmin && user?.role !== "admin") {
    return <Navigate to="/gym-pool-website" replace />;
  }

  return children;
}
