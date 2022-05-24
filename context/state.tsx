import { createContext, useContext, useEffect, useState } from "react";
import { AppContextValueSchema, RandomUserSchema } from "../lib/interfaces";
import useRandomUser from "../shared/use-random-users";

interface AppWrapperProps {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextValueSchema | undefined>(
  undefined
);

export function AppWrapper({ children }: AppWrapperProps): JSX.Element {
  const [buttonActive, setButtonActive] = useState<number>(1);
  const [genderValue, setGenderValue] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [randomUsers, setRandomUsers] = useState<
    RandomUserSchema[] | undefined
  >();
  const { data, error } = useRandomUser(
    `page=${buttonActive}&results=10&gender=${genderValue}`
  );

  useEffect(() => {
    const users = data?.results;
    if (inputValue) {
      const filteredUsers = filterUserHandler(users, inputValue);
      setRandomUsers(filteredUsers);
    } else {
      setRandomUsers(users);
    }
  }, [data, inputValue]);

  const filterUserHandler = (
    users: RandomUserSchema[] | undefined,
    inputValue: string
  ) => {
    const inputValueNormalize = inputValue.toLowerCase();
    const filteredUsers = users?.filter((user: RandomUserSchema) => {
      const fullName = user.name.first + " " + user.name.last;
      return (
        fullName.toLowerCase().includes(inputValueNormalize) ||
        user.email.toLowerCase().includes(inputValueNormalize) ||
        user.login.username.toLowerCase().includes(inputValueNormalize)
      );
    });
    return filteredUsers;
  };

  return (
    <AppContext.Provider
      value={{
        randomUsers,
        buttonActive,
        setButtonActive,
        genderValue,
        setGenderValue,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): any | undefined {
  return useContext(AppContext);
}
