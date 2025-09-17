import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import KidsTraining from "./KidsTraining";
import { useAgeGroups } from "../../hooks/useAgeGroups";

// Мокаємо хук, щоб не тягнути реальні дані з Firebase
jest.mock("../../hooks/useAgeGroups");

test("renders loading state", () => {
  useAgeGroups.mockReturnValue({ groups: [], loading: true, error: null });
  render(<KidsTraining />);
  expect(screen.getByText(/Завантаження/i)).toBeInTheDocument();
});

test("renders error state", () => {
  useAgeGroups.mockReturnValue({ groups: [], loading: false, error: { message: "Test error" } });
  render(<KidsTraining />);
  expect(screen.getByText(/Помилка: Test error/i)).toBeInTheDocument();
});

test("renders age groups", () => {
  useAgeGroups.mockReturnValue({
    loading: false,
    error: null,
    groups: [
      {
        age: "6–8 років",
        trainings: [{ type: "Плавання", description: "Базовий рівень" }],
      },
    ],
  });
  render(<KidsTraining />);
  expect(screen.getByText("6–8 років")).toBeInTheDocument();
  expect(screen.getByText(/Плавання/)).toBeInTheDocument();
});