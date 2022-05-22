import { css } from "@emotion/react";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { useState } from "react";
import { useCallback } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { bp, bpOnly } from "../../lib/breakpoints";
import { COLORS } from "../../lib/colors";
import { BUTTON, LABEL } from "../../lib/design-system";

interface FilterHandlerProps {
  genderValue: string;
  inputValue: string;
  setGenderValue: (genderValue: string) => void;
  setInputValue: (inputValue: string) => void;
}

const filterHandlerContainerStyles = css`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  ${bp[0]} {
    flex-direction: row;
  }

  ${bp[1]} {
    margin-left: 50px;
  }
`;

const inputWrapperStyles = css`
  border: 1px solid ${COLORS.grey_100};
  border-radius: 5px;
  display: flex;
  margin-top: 4px;
  min-width: 200px;
`;

const inputStyles = css`
  border: 2px solid transparent;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  height: 22px;
  padding: 8px 12px;
  width: 100%;

  &:focus {
    border: 2px solid ${COLORS.blue_100};
  }

  &:focus-visible {
    outline: transparent;
  }
`;

const buttonClearStyles = css`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  padding: 0 10px;
`;

const closeIconStyles = css`
  color: ${COLORS.grey_500};
  cursor: pointer;
  opacity: 0.7;
  width: 15px;
`;

const labelGenderStyles = css`
  display: flex;
  flex-direction: column;

  ${bpOnly[0]} {
    margin-top: 8px;
  }

  ${bp[0]} {
    margin-left: 16px;
  }
`;

const selectGenderStyles = css`
  appearance: none;
  background-position: right 8px center;
  background-repeat: no-repeat;
  background-size: 24px 24px;
  border: 1px solid ${COLORS.grey_100};
  border-radius: 5px;
  padding: 0 12px;
  height: 44px;
  margin-top: 4px;
  min-width: 200px;

  &:focus,
  &:focus-visible {
    outline: 2px solid ${COLORS.blue_100};
  }
`;

const buttonResetStyles = css`
  height: 45px;
  margin-top: auto;

  ${bpOnly[0]} {
    margin-top: 8px;
  }

  ${bp[0]} {
    margin-left: 16px;
  }

  &:hover {
    background-color: ${COLORS.blue_200};
  }
`;

const FilterHandler: (props: FilterHandlerProps) => EmotionJSX.Element = ({
  inputValue,
  genderValue,
  setGenderValue,
  setInputValue,
}) => {
  const onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void =
    useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      },
      [setInputValue]
    );

  const onGenderValueChange: (e: React.ChangeEvent<HTMLSelectElement>) => void =
    useCallback(
      (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (!e.target.value) {
          setGenderValue("");
          return;
        }
        setGenderValue(e.target.value);
      },
      [setGenderValue]
    );

  const onClearClick: () => void = () => {
    setInputValue("");
  };

  const onResetFilterClick: () => void = () => {
    setGenderValue("");
  };

  return (
    <div css={filterHandlerContainerStyles}>
      <div>
        <LABEL htmlFor="search">Search</LABEL>
        <div css={inputWrapperStyles}>
          <input
            css={inputStyles}
            type="text"
            name="search"
            id="search"
            autoComplete="off"
            placeholder="Search..."
            value={inputValue}
            onChange={onInputChange}
          />
          <button
            css={buttonClearStyles}
            type="button"
            data-testid="close-button"
            onClick={onClearClick}
          >
            <CloseIcon css={closeIconStyles} />
          </button>
        </div>
      </div>
      <div css={labelGenderStyles}>
        <LABEL htmlFor="gender">Gender</LABEL>
        <select
          css={selectGenderStyles}
          id="gender"
          name="gender"
          data-testid="gender"
          value={genderValue}
          onChange={onGenderValueChange}
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div
        css={css`
          display: flex;
        `}
      >
        <BUTTON
          css={buttonResetStyles}
          type="button"
          onClick={onResetFilterClick}
        >
          Reset Filter
        </BUTTON>
      </div>
    </div>
  );
};

export default FilterHandler;
