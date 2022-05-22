import { fireEvent, render, screen } from "@testing-library/react";
import FilterHandler from "../components/layouts/filter-handler";

describe("Filter Handler component", () => {
  it("should render search in filter handler", () => {
    render(
      <FilterHandler
        inputValue=""
        setInputValue={jest.fn()}
        genderValue=""
        setGenderValue={jest.fn()}
      />
    );
    const searchElement = screen.getByText("Search");
    expect(searchElement).toBeInTheDocument();
  });

  it("should render gender in filter handler", () => {
    render(
      <FilterHandler
        inputValue=""
        setInputValue={jest.fn()}
        genderValue=""
        setGenderValue={jest.fn()}
      />
    );
    const genderElement = screen.getByText(/gender/i);
    expect(genderElement).toBeInTheDocument();
  });

  it("should render text input", () => {
    render(
      <FilterHandler
        inputValue=""
        setInputValue={jest.fn()}
        genderValue=""
        setGenderValue={jest.fn()}
      />
    );
    const inputElement = screen.getByPlaceholderText(/search/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should render select input value 'all'", () => {
    render(
      <FilterHandler
        inputValue=""
        setInputValue={jest.fn()}
        genderValue=""
        setGenderValue={jest.fn()}
      />
    );
    const selectElement = screen.getByDisplayValue(/all/i);
    expect(selectElement).toBeInTheDocument();
  });

  it("should be able to type in input", () => {
    const { rerender } = render(
      <FilterHandler
        inputValue=""
        setInputValue={jest.fn()}
        genderValue=""
        setGenderValue={jest.fn()}
      />
    );
    const inputElement = screen.getByPlaceholderText(/search/i);
    fireEvent.change(inputElement, { target: { value: "test" } });
    rerender(
      <FilterHandler
        inputValue="test"
        setInputValue={jest.fn()}
        genderValue=""
        setGenderValue={jest.fn()}
      />
    );
    expect((inputElement as HTMLInputElement).value).toBe("test");
  });

  it("shoud have empty input when 'x' button is click", () => {
    const { rerender } = render(
      <FilterHandler
        inputValue=""
        setInputValue={jest.fn()}
        genderValue=""
        setGenderValue={jest.fn()}
      />
    );
    const inputElement = screen.getByPlaceholderText(/search/i);
    fireEvent.change(inputElement, { target: { value: "test" } });
    rerender(
      <FilterHandler
        inputValue="test"
        setInputValue={jest.fn()}
        genderValue=""
        setGenderValue={jest.fn()}
      />
    );
    const buttonCloseElement = screen.getByTestId("close-button");
    fireEvent.click(buttonCloseElement);
    rerender(
      <FilterHandler
        inputValue=""
        setInputValue={jest.fn()}
        genderValue=""
        setGenderValue={jest.fn()}
      />
    );
    expect((inputElement as HTMLInputElement).value).toBe("");
  });

  it("should render reser filter button", () => {
    render(
      <FilterHandler
        inputValue=""
        setInputValue={jest.fn()}
        genderValue=""
        setGenderValue={jest.fn()}
      />
    );
    const buttonResetElement = screen.getByRole("button", {
      name: /reset filter/i,
    });
    expect(buttonResetElement).toBeInTheDocument();
  });

  it("should change gender value", () => {
    const { rerender } = render(
      <FilterHandler
        inputValue=""
        setInputValue={jest.fn()}
        genderValue=""
        setGenderValue={jest.fn()}
      />
    );
    const selectElement = screen.getByTestId("gender");
    fireEvent.change(selectElement, { target: { value: "female" } });
    rerender(
      <FilterHandler
        inputValue=""
        setInputValue={jest.fn()}
        genderValue="female"
        setGenderValue={jest.fn()}
      />
    );
    expect(selectElement).toHaveValue("female");
  });

  it("should change gender to 'all'", () => {
    const { rerender } = render(
      <FilterHandler
        inputValue=""
        setInputValue={jest.fn()}
        genderValue=""
        setGenderValue={jest.fn()}
      />
    );
    const selectElement = screen.getByTestId("gender");
    fireEvent.change(selectElement, { target: { value: "female" } });
    rerender(
      <FilterHandler
        inputValue=""
        setInputValue={jest.fn()}
        genderValue="female"
        setGenderValue={jest.fn()}
      />
    );
    const buttonResetElement = screen.getByRole("button", {
      name: /reset filter/i,
    });
    fireEvent.click(buttonResetElement);
    rerender(
      <FilterHandler
        inputValue=""
        setInputValue={jest.fn()}
        genderValue=""
        setGenderValue={jest.fn()}
      />
    );
    expect(selectElement).toHaveValue("");
  });
});
