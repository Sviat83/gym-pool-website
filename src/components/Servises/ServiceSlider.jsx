import React, { useState } from "react";
import "./ServiceSlider.css";

const services = [
  {
    title: "ДИТЯЧА КІМНАТА",
    image: "/images/kids.jpg",
  },
  {
    title: "UNI CAFE",
    image: "/images/cafe.jpg",
  },
  {
    title: "ПАРКІНГ",
    image: "/images/parking.jpg",
  },
  {
    title: "UNI SHOP",
    image: "/images/shop.jpg",
  },
];

export default function ServiceSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      (prev + 1) % services.length
    );
  };

  const visibleItems = services.slice(startIndex, startIndex + itemsToShow);
  const items =
    visibleItems.length < itemsToShow
      ? [...visibleItems, ...services.slice(0, itemsToShow - visibleItems.length)]
      : visibleItems;

  return (
    <div className="slider-wrapper">
      <h2 className="slider-title">
        СЕРВІСИ <span className="arrow">↘</span>
      </h2>

      <div className="slider-container">
        <div className="slider-buttons">
          <button onClick={handlePrev} className="slider-btn">←</button>
          <button onClick={handleNext} className="slider-btn">→</button>
        </div>

        <div className="slider-content">
          {items.map((item, index) => (
            <div className="slider-card" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="slider-caption">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
