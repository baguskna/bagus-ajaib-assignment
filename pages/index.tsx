import type { NextPage } from "next";
import { css } from "@emotion/react";
import FilterHandler from "../components/layouts/filter-handler";
import { H1 } from "../lib/design-system";
import LayoutWrapper from "../components/layouts/layout-wrapper";
import { bp } from "../lib/breakpoints";
import UserList from "../components/layouts/user-list";

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
  return (
    <LayoutWrapper>
      <div css={homeStyles}>
        <H1 css={titleStyles}>Example With Search and Filter</H1>
        <FilterHandler />
        <UserList />
      </div>
    </LayoutWrapper>
  );
};

export default Home;
