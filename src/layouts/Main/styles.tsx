import styled from "@emotion/styled";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";

export const Content = styled.div`
  min-height: 100vh;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
  }
`;
