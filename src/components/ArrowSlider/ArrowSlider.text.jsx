import { render, screen } from "@testing-library/react";
import ArrowSlider from "./ArrowSlider";
import "@testing-library/jest-dom";

// Мокаємо Swiper, щоб не тестувати його внутрішню логіку
jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div data-testid="mock-swiper">{children}</div>,
  SwiperSlide: ({ children }) => <div data-testid="mock-slide">{children}</div>,
}));

test("renders ArrowSlider with images", () => {
  const mockImages = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
  ];

  render(<ArrowSlider items={mockImages} />);

  // Перевіряємо, що Swiper рендериться
  expect(screen.getByTestId("mock-swiper")).toBeInTheDocument();

  // Перевіряємо, що всі слайди зображень з’явились
  mockImages.forEach((src) => {
    const img = screen.getByRole("img", { name: "" }); // alt="" → name=""
    expect(img).toHaveAttribute("src", src);
  });
});