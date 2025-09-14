// захищений маршрут, який перевіряє, чи користувач автентифікований, 
// перш ніж надати доступ до певного компонента.
// разом із React Router

import React, { useState, useEffect } from"react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";

function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            // повертає функцію відписки, яку зручно викликати при розмонтуванні компонента.
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
        // коли компонент видаляється зі сторінки, підписка на зміни авторизації відключається,
        //  щоб не було витоків пам’яті.
    }, []);

    if (loading) return <p>Завантаження...</p>;
    if (!user) return <Navigate to={"/gym-pool-website/admin/login"} replace />;
    return children;

}

export default ProtectedRoute;