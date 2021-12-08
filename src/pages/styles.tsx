import styled from "@emotion/styled";
import {
  breakpoints,
  BREAKPOINT_BIGGER_THAN_PC,
  mediaQueries,
} from "../utils/mediaQuery";

export const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    max-width: ${breakpoints.lpc};
    margin-top: 20px;
  }
`;
