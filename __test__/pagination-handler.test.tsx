import { fireEvent, render, screen } from "@testing-library/react";
import PaginationHandler from "../components/uis/pagination-handler";

describe("UI Pagination", () => {
  it("should render pagination arrows", () => {
    render(<PaginationHandler />);
    const chevronLeftElement = screen.getByTestId("ChevronLeftIcon");
    const chevronRightElement = screen.getByTestId("ChevronRightIcon");
    expect(chevronLeftElement).toBeInTheDocument();
    expect(chevronRightElement).toBeInTheDocument();
  });

  it("should render pagination buttons", () => {
    render(<PaginationHandler />);
    const num1Element = screen.getByText(/1/i);
    const num2Element = screen.getByText(/2/i);
    const num3Element = screen.getByText(/3/i);
    const num4Element = screen.getByText(/4/i);
    const num5Element = screen.getByText(/5/i);
    expect(num1Element).toBeInTheDocument();
    expect(num2Element).toBeInTheDocument();
    expect(num3Element).toBeInTheDocument();
    expect(num4Element).toBeInTheDocument();
    expect(num5Element).toBeInTheDocument();
  });

  it("should change active value incremently", () => {
    render(<PaginationHandler />);
    const chevronRightButtonElement = screen.getByTestId("chevron-right");
    fireEvent.click(chevronRightButtonElement);
    const activeElement = screen.getByTestId("pagination-button-2-active");
    expect(activeElement).toBeInTheDocument();
  });

  it("should change active value decremently", () => {
    render(<PaginationHandler />);
    const chevronRightButtonElement = screen.getByTestId("chevron-right");
    fireEvent.click(chevronRightButtonElement);
    fireEvent.click(chevronRightButtonElement);
    fireEvent.click(chevronRightButtonElement);
    const chevronLeftButtonElement = screen.getByTestId("chevron-left");
    fireEvent.click(chevronLeftButtonElement);
    const activeElement = screen.getByTestId("pagination-button-3-active");
    expect(activeElement).toBeInTheDocument();
  });
});
