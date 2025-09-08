// src/pages/ErrorPage.jsx
import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ padding: 20 }}>
      <h1>Щось пішло не так 😵</h1>
      <p>{error.statusText || error.message}</p>
      <a href="/gym-pool-website">Повернутися на головну</a>
    </div>
  );
}
