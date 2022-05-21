import { fireEvent, render, screen } from "@testing-library/react";
import FilterHandler from "../components/layouts/filter-handler";

describe("Filter Handler component", () => {
  it("should render search in filter handler", () => {
    render(<FilterHandler />);
    const searchElement = screen.getByText(/search/i);
    expect(searchElement).toBeInTheDocument();
  });

  it("should render gender in filter handler", () => {
    render(<FilterHandler />);
    const genderElement = screen.getByText(/gender/i);
    expect(genderElement).toBeInTheDocument();
  });

  it("should render text input", () => {
    render(<FilterHandler />);
    const inputElement = screen.getByPlaceholderText(/search/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should render select input value 'all'", () => {
    render(<FilterHandler />);
    const selectElement = screen.getByDisplayValue(/all/i);
    expect(selectElement).toBeInTheDocument();
  });

  it("should be able to type in input", () => {
    render(<FilterHandler />);
    const inputElement = screen.getByPlaceholderText(/search/i);
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect((inputElement as HTMLInputElement).value).toBe("test");
  });

  it("shoud have empty input when 'x' button is click", () => {
    render(<FilterHandler />);
    const inputElement = screen.getByPlaceholderText(/search/i);
    fireEvent.change(inputElement, { target: { value: "test" } });
    const buttonCloseElement = screen.getByTestId("close-button");
    fireEvent.click(buttonCloseElement);
    expect((inputElement as HTMLInputElement).value).toBe("");
  });
});
