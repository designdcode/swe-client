import styled from "@emotion/styled";
import {
  breakpoints,
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";

export const Content = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: ${breakpoints.pc}px;
    margin: 0 auto;
  }
  min-height: 80vh;
`;
