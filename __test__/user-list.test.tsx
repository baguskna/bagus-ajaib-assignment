import { render, screen } from "@testing-library/react";
import UserList from "../components/layouts/user-list";

describe("User List component", () => {
  it("should render all req user lists", () => {
    render(<UserList />);
    const usernameElement = screen.getByText("Username");
    const nameElement = screen.getByText("Name");
    const emailElement = screen.getByText(/email/i);
    const genderElement = screen.getByText(/gender/i);
    const registeredDateElement = screen.getByText(/registered Date/i);
    expect(usernameElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(genderElement).toBeInTheDocument();
    expect(registeredDateElement).toBeInTheDocument();
  });
});
