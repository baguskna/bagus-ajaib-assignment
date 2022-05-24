import { fireEvent, render, screen } from "@testing-library/react";
import PaginationHandler from "../components/uis/pagination-handler";
import { AppContext } from "../context/state";

describe("UI Pagination", () => {
  it("should render pagination arrows", () => {
    render(
      <AppContext.Provider
        value={{ buttonActive: 1, setButtonActive: jest.fn() }}
      >
        <PaginationHandler />
      </AppContext.Provider>
    );
    const chevronLeftElement = screen.getByTestId("ChevronLeftIcon");
    const chevronRightElement = screen.getByTestId("ChevronRightIcon");
    expect(chevronLeftElement).toBeInTheDocument();
    expect(chevronRightElement).toBeInTheDocument();
  });

  it("should render pagination buttons", () => {
    render(
      <AppContext.Provider value={{ buttonActive: 1 }}>
        <PaginationHandler />
      </AppContext.Provider>
    );
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

  it("should change active value incremently", async () => {
    const { rerender } = render(
      <AppContext.Provider
        value={{ buttonActive: 1, setButtonActive: jest.fn() }}
      >
        <PaginationHandler />
      </AppContext.Provider>
    );
    const chevronRightButtonElement = await screen.findByTestId(
      "chevron-right"
    );
    fireEvent.click(chevronRightButtonElement);
    rerender(
      <AppContext.Provider
        value={{ buttonActive: 2, setButtonActive: jest.fn() }}
      >
        <PaginationHandler />
      </AppContext.Provider>
    );
    const activeElement = await screen.findByTestId(
      "pagination-button-2-active"
    );
    expect(activeElement).toBeInTheDocument();
  });

  it("should change active value decremently", () => {
    const { rerender } = render(
      <AppContext.Provider
        value={{ buttonActive: 1, setButtonActive: jest.fn() }}
      >
        <PaginationHandler />
      </AppContext.Provider>
    );
    const chevronRightButtonElement = screen.getByTestId("chevron-right");
    fireEvent.click(chevronRightButtonElement);
    fireEvent.click(chevronRightButtonElement);
    fireEvent.click(chevronRightButtonElement);
    rerender(
      <AppContext.Provider
        value={{ buttonActive: 4, setButtonActive: jest.fn() }}
      >
        <PaginationHandler />
      </AppContext.Provider>
    );
    const chevronLeftButtonElement = screen.getByTestId("chevron-left");
    fireEvent.click(chevronLeftButtonElement);
    rerender(
      <AppContext.Provider
        value={{ buttonActive: 3, setButtonActive: jest.fn() }}
      >
        <PaginationHandler />
      </AppContext.Provider>
    );
    const activeElement = screen.getByTestId("pagination-button-3-active");
    expect(activeElement).toBeInTheDocument();
  });
});
