import { css } from "@emotion/react";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { Skeleton } from "@mui/material";
import { memo } from "react";
import { useAppContext } from "../../context/state";
import { bp } from "../../lib/breakpoints";
import { COLORS } from "../../lib/colors";
import { RandomUserSchema } from "../../lib/interfaces";
import PaginationHandler from "../uis/pagination-handler";

const tableWrapper = css``;

const tableWrapperFirstTier = css``;

const tableContainer = css`
  margin-top: 30px;

  ${bp[1]} {
    margin: 50px;
  }
`;

const tableWrapperSecondTier = css`
  overflow-x: auto;
`;

const tableStyles = css`
  width: 1200px;

  ${bp[1]} {
    width: 100%;
  }
`;

const theadStyles = css`
  background-color: ${COLORS.grey_300};
`;

const thStyles = css`
  padding: 10px;
  text-align: left;
  text-transform: uppercase;
`;

const tdStyles = css`
  padding: 10px;
`;

const rowGreyStyles = css`
  background-color: ${COLORS.grey_300};
`;

const UserList: () => EmotionJSX.Element = () => {
  const { randomUsers } = useAppContext();

  const mainContent = () => {
    if (!randomUsers) {
      return (
        <Skeleton
          data-testid="skeleton"
          variant="rectangular"
          width="100%"
          height={431}
        />
      );
    }
    return (
      <table css={tableStyles}>
        <thead css={theadStyles}>
          <tr>
            <th css={thStyles}>Name</th>
            <th css={thStyles}>Username</th>
            <th css={thStyles}>Email</th>
            <th css={thStyles}>Gender</th>
            <th css={thStyles}>Registered Date</th>
          </tr>
        </thead>
        <tbody>
          {randomUsers?.map((user: RandomUserSchema, i: number) => (
            <tr
              key={user.login.username}
              css={i % 2 !== 0 ? rowGreyStyles : null}
            >
              <td data-testid="user-fullname" css={tdStyles}>
                {user.name.first} {user.name.last}
              </td>
              <td data-testid="user-name" css={tdStyles}>
                {user.login.username}
              </td>
              <td data-testid="user-email" css={tdStyles}>
                {user.email}
              </td>
              <td data-testid="user-gender" css={tdStyles}>
                {user.gender}
              </td>
              <td data-testid="user-registered-date" css={tdStyles}>
                {Intl.DateTimeFormat("en-GB", {
                  dateStyle: "medium",
                  timeStyle: "medium",
                }).format(new Date(user.registered.date))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div css={tableWrapper}>
      <div css={tableWrapperFirstTier}>
        <div css={tableContainer}>
          <div css={tableWrapperSecondTier}>{mainContent()}</div>
          <PaginationHandler />
        </div>
      </div>
    </div>
  );
};

export default memo(UserList);
