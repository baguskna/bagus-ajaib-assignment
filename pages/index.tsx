import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import FilterHandler from "../components/layouts/filter-handler";
import { H1 } from "../lib/design-system";
import LayoutWrapper from "../components/layouts/layout-wrapper";
import { bp } from "../lib/breakpoints";
import UserList from "../components/layouts/user-list";
import useRandomUser from "../shared/use-random-users";
import { RandomUserSchema } from "../lib/interfaces";

const homeStyles = css`
  margin-top: 16px;

  ${bp[0]} {
    margin-top: 24px;
  }
`;

const titleStyles = css`
  ${bp[1]} {
    margin-left: 50px;
  }
`;

const Home: NextPage = () => {
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
    <LayoutWrapper>
      <div css={homeStyles}>
        <H1 css={titleStyles}>Example With Search and Filter</H1>
        <FilterHandler
          inputValue={inputValue}
          setInputValue={setInputValue}
          genderValue={genderValue}
          setGenderValue={setGenderValue}
        />
        <UserList
          buttonActive={buttonActive}
          setButtonActive={setButtonActive}
          randomUsers={randomUsers}
        />
      </div>
    </LayoutWrapper>
  );
};

export default Home;
