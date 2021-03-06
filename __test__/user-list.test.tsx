import { render, screen } from "@testing-library/react";
import UserList from "../components/layouts/user-list";
import { AppContext } from "../context/state";
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
      <AppContext.Provider value={{ randomUsers: mockRandomUsers }}>
        <UserList />
      </AppContext.Provider>
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
      <AppContext.Provider value={{ randomUsers: mockRandomUsers }}>
        <UserList />
      </AppContext.Provider>
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
      <AppContext.Provider value={{ randomUsers: undefined }}>
        <UserList />
      </AppContext.Provider>
    );
    const loadingElement = screen.getByTestId("skeleton");
    expect(loadingElement).toBeInTheDocument();
  });
});
