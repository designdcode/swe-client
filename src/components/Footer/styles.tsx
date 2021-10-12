import styled from "@emotion/styled";
import {
  BREAKPOINT_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";

export const FooterContaier = styled.div`
  width: 100%;
  height: 270px;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_PC)} {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
    span {
      display: block;
      max-width: 850px;
      color: #747474;
      text-align: center;
      line-height: 20px;
    }
  }
`;
