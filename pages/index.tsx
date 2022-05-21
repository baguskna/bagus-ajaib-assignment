import type { NextPage } from "next";
import { css } from "@emotion/react";
import FilterHandler from "../components/filter-handler";
import { H1 } from "../lib/design-system";

const testStyle = css``;

const Home: NextPage = () => {
  return (
    <div css={testStyle}>
      <H1>Example With Search and Filter</H1>
      <FilterHandler />
    </div>
  );
};

export default Home;
