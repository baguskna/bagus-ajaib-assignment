import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("should render title in header", () => {
    render(<Home />);
    const headingElement = screen.getByText(/Example With Search and Filter/i);
    expect(headingElement).toBeInTheDocument();
  });
});
