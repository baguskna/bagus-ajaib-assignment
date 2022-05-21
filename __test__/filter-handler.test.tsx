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
    const searchElement = screen.getByText(/gender/i);
    expect(searchElement).toBeInTheDocument();
  });
});
