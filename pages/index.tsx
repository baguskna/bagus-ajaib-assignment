import type { NextPage } from "next";
import { useState } from "react";
import { css } from "@emotion/react";
import FilterHandler from "../components/layouts/filter-handler";
import { H1 } from "../lib/design-system";
import LayoutWrapper from "../components/layouts/layout-wrapper";
import { bp } from "../lib/breakpoints";
import UserList from "../components/layouts/user-list";
import useRandomUser from "../shared/use-random-users";

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
  const { data, error } = useRandomUser(
    `page=${buttonActive}&results=10&gender=${genderValue}`
  );

  console.log(inputValue, genderValue);

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
          randomUsers={data?.results}
        />
      </div>
    </LayoutWrapper>
  );
};

export default Home;
