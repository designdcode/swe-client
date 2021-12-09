import styled from "@emotion/styled";
import { BREAKPOINT_BIGGER_THAN_PC, mediaQueries } from "../utils/mediaQuery";

export const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    max-width: 1920px;
    margin-top: 15px;
  }
`;
