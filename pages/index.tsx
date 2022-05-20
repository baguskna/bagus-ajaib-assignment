import type { NextPage } from "next";
import Head from "next/head";
import { css } from "@emotion/react";

const testStyle = css`
  background: red;
`;

const Home: NextPage = () => {
  return (
    <div css={testStyle}>
      <h1>Example With Search and Filter</h1>
    </div>
  );
};

export default Home;
