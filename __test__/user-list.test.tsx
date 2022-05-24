import { render, screen } from "@testing-library/react";
import UserList from "../components/layouts/user-list";
import { RandomUserSchema } from "../lib/interfaces";

const mockRandomUsers: RandomUserSchema[] = [
  {
    name: {
      first: "Leanne",
      last: "Ike",
      title: "ms",
    },
    gender: "female",
    email: "indahx@mail.com",
    login: {
      username: "leaindah",
    },
    registered: {
      date: "2015-05-09T03:29:32.255Z",
    },
  },
];

describe("User List component", () => {
  it("should render all req user lists", () => {
    render(
      <UserList
        buttonActive={1}
        setButtonActive={jest.fn()}
        randomUsers={mockRandomUsers}
      />
    );
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

  it("should render users", () => {
    render(
      <UserList
        buttonActive={1}
        setButtonActive={jest.fn()}
        randomUsers={mockRandomUsers}
      />
    );
    const fullnameElement = screen.getByTestId("user-fullname");
    const usernameElement = screen.getByTestId("user-name");
    const emailElement = screen.getByTestId("user-email");
    const genderElement = screen.getByTestId("user-gender");
    const registeredElement = screen.getByTestId("user-registered-date");
    expect(fullnameElement).toBeInTheDocument();
    expect(usernameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(genderElement).toBeInTheDocument();
    expect(registeredElement).toBeInTheDocument();
  });

  it("should render loading layout", () => {
    render(
      <UserList
        buttonActive={1}
        setButtonActive={jest.fn()}
        randomUsers={undefined}
      />
    );
    const loadingElement = screen.getByTestId("skeleton");
    expect(loadingElement).toBeInTheDocument();
  });
});
