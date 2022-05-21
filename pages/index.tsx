import type { NextPage } from "next";
import { css } from "@emotion/react";
import FilterHandler from "../components/layouts/filter-handler";
import { H1 } from "../lib/design-system";
import LayoutWrapper from "../components/layouts/layout-wrapper";
import { bp } from "../lib/breakpoints";

const homeStyles = css`
  margin-top: 16px;

  ${bp[0]} {
    margin-top: 24px;
  }
`;

const Home: NextPage = () => {
  return (
    <LayoutWrapper>
      <div css={homeStyles}>
        <H1>Example With Search and Filter</H1>
        <FilterHandler />
      </div>
    </LayoutWrapper>
  );
};

export default Home;
