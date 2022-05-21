import { css, jsx } from "@emotion/react";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { bp } from "../../lib/breakpoints";
import { COLORS } from "../../lib/colors";
import { LABEL } from "../../lib/design-system";

const filterHandlerContainerStyles = css`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  ${bp[0]} {
    flex-direction: row;
  }
`;

const inputWrapperStyles = css`
  border: 1px solid ${COLORS.grey_100};
  border-radius: 5px;
  display: flex;
`;

const inputStyles = css`
  border: 0;
  border-radius: 5px;
  padding: 5px 8px;
  width: 100%;
`;

const FilterHandler: () => EmotionJSX.Element = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [setInputValue]
  );

  const handleClear = () => {
    setInputValue("");
  };

  return (
    <div css={filterHandlerContainerStyles}>
      <LABEL htmlFor="keyword">Search</LABEL>
      <div css={inputWrapperStyles}>
        <input
          css={inputStyles}
          type="text"
          name="keyword"
          id="keyword"
          autoComplete="off"
          placeholder="Search..."
          value={inputValue}
          onChange={handleChange}
        />
        <button type="button" data-testid="close-button" onClick={handleClear}>
          X
        </button>
      </div>
      <LABEL htmlFor="gender">Gender</LABEL>
      <select id="gender" name="gender">
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default FilterHandler;
