import styled from "@emotion/styled";
import { bp } from "./breakpoints";
import { COLORS } from "./colors";

// headline-1 title styling
export const H1 = styled.h1`
  color: ${COLORS.grey_700};
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  ${bp[0]} {
    font-size: 30px;
    line-height: 36px;
  }
`;

// label standard styling
export const LABEL = styled.label`
  color: ${COLORS.grey_500};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

// button styling
export const BUTTON = styled.button`
  border-radius: 5px;
  background-color: ${COLORS.blue_100};
  border: transparent;
  color: ${COLORS.grey_0};
  cursor: pointer;
  padding: 8px 20px;
`;
