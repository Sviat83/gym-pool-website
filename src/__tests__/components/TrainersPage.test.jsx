import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TrainersPage from "../../components/TrainersPage/TrainersPage";

describe("TrainersPage Component", () => {
  it("renders without crashing", () => {
    render(<TrainersPage />);
    expect(screen.getByText(/ТРЕНАЖЕРНИЙ ЗАЛ/i)).toBeInTheDocument();
  });

  it("renders trainers from default tab (gym)", () => {
    render(<TrainersPage />);
    expect(screen.getByText(/Віталій Притула/i)).toBeInTheDocument();
    expect(screen.getByText(/Майстер-тренер вищої категорії/i)).toBeInTheDocument();
  });

  it("changes tab when user clicks another category", () => {
    render(<TrainersPage />);
    const aquaTab = screen.getByText(/АКВАЗОНА/i);
    fireEvent.click(aquaTab);
    expect(screen.getByText(/Олександр Шевченко/i)).toBeInTheDocument();
  });

  it("opens modal when clicking 'ДЕТАЛЬНІШЕ' button", () => {
    render(<TrainersPage />);
    const detailButton = screen.getAllByText(/ДЕТАЛЬНІШЕ/i)[0];
    fireEvent.click(detailButton);
    expect(screen.getByText(/Кваліфікація/i)).toBeInTheDocument();
    expect(screen.getByText(/Тренерський досвід/i)).toBeInTheDocument();
  });

  it("closes modal when clicking close button", () => {
    render(<TrainersPage />);
    const detailButton = screen.getAllByText(/ДЕТАЛЬНІШЕ/i)[0];
    fireEvent.click(detailButton);

    // знайдемо кнопку за aria-label, бо це accessibility name
    const closeButton = screen.getByRole("button", { name: /Закрити/i });
    fireEvent.click(closeButton);

    expect(screen.queryByText(/Кваліфікація/i)).not.toBeInTheDocument();
  });
});
