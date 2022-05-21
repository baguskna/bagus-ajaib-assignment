import { render, screen } from "@testing-library/react";
import FilterHandler from "../components/filter-handler";

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
});
