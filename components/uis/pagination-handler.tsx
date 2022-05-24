import { css } from "@emotion/react";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useCallback } from "react";
import { useAppContext } from "../../context/state";
import { COLORS } from "../../lib/colors";

const paginationWrapperStyles = css`
  display: flex;
  margin-top: 16px;
`;

const paginationContainerStyles = css`
  border: 1px solid ${COLORS.grey_100};
  border-radius: 5px;
  display: flex;
`;

const buttonPaginationStyles = css`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0;
  height: 40px;
  width: 40px;

  &:disabled,
  &:hover {
    background: ${COLORS.grey_300};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const buttonNumPaginationStyles = css`
  border-left: 1px solid ${COLORS.grey_100};
  border-right: 1px solid ${COLORS.grey_100};
`;

const chevronLeftPaginationStyles = css`
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;

const chevronRightPaginationStyles = css`
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;

const buttonActiveStyles = css`
  border: 1px solid ${COLORS.blue_100};
  color: ${COLORS.blue_100};
`;

const PaginationHandler: () => EmotionJSX.Element = () => {
  const { buttonActive, setButtonActive } = useAppContext();

  const onPaginationButtonClick = useCallback(
    (page: number, chevron?: string) => {
      if (
        (chevron === "left" && page === 0) ||
        (chevron === "right" && page === 6)
      )
        return;
      setButtonActive(page);
    },
    [setButtonActive]
  );

  return (
    <div css={paginationWrapperStyles}>
      <div css={paginationContainerStyles}>
        <button
          css={[buttonPaginationStyles, chevronLeftPaginationStyles]}
          onClick={() => onPaginationButtonClick(buttonActive - 1, "left")}
          disabled={buttonActive === 1}
          data-testid="chevron-left"
        >
          <ChevronLeftIcon />
        </button>
        <button
          css={[
            buttonPaginationStyles,
            buttonNumPaginationStyles,
            buttonActive === 1 ? buttonActiveStyles : null,
          ]}
          onClick={() => onPaginationButtonClick(1)}
          data-testid={buttonActive === 1 ? "pagination-button-1-active" : null}
        >
          <span>1</span>
        </button>
        <button
          css={[
            buttonPaginationStyles,
            buttonActive === 2 ? buttonActiveStyles : null,
          ]}
          onClick={() => onPaginationButtonClick(2)}
          data-testid={buttonActive === 2 ? "pagination-button-2-active" : null}
        >
          <span>2</span>
        </button>
        <button
          css={[
            buttonPaginationStyles,
            buttonNumPaginationStyles,
            buttonActive === 3 ? buttonActiveStyles : null,
          ]}
          onClick={() => onPaginationButtonClick(3)}
          data-testid={buttonActive === 3 ? "pagination-button-3-active" : null}
        >
          <span>3</span>
        </button>
        <button
          css={[
            buttonPaginationStyles,
            buttonActive === 4 ? buttonActiveStyles : null,
          ]}
          onClick={() => onPaginationButtonClick(4)}
          data-testid={buttonActive === 4 ? "pagination-button-4-active" : null}
        >
          <span>4</span>
        </button>
        <button
          css={[
            buttonPaginationStyles,
            buttonNumPaginationStyles,
            buttonActive === 5 ? buttonActiveStyles : null,
          ]}
          onClick={() => onPaginationButtonClick(5)}
          data-testid={buttonActive === 5 ? "pagination-button-5-active" : null}
        >
          <span>5</span>
        </button>
        <button
          css={[buttonPaginationStyles, chevronRightPaginationStyles]}
          data-testid="chevron-right"
          onClick={() => onPaginationButtonClick(buttonActive + 1, "right")}
          disabled={buttonActive === 5}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default PaginationHandler;
