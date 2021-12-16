import styled from "@emotion/styled";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";

export const Content = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    min-height: 90vh;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    min-height: 100vh;
    margin: 0 auto;
  }
`;
