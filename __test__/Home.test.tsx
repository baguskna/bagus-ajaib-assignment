import { render, screen } from "@testing-library/react";
import { AppContext } from "../context/state";
import { RandomUserSchema } from "../lib/interfaces";
import Home from "../pages/index";

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

describe("Home", () => {
  it("should render title in header", () => {
    render(
      <AppContext.Provider value={{ randomUsers: mockRandomUsers }}>
        <Home />
      </AppContext.Provider>
    );
    const headingElement = screen.getByText(/Example With Search and Filter/i);
    expect(headingElement).toBeInTheDocument();
  });
});
