import styled from "@emotion/styled";
import {
  breakpoints,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";

export const FooterContaier = styled.div`
  width: 100%;
  height: 270px;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
    font-size: 8px;
    span {
      display: block;
      max-width: ${breakpoints.phoneMedium}px;
      color: #747474;
      text-align: center;
      line-height: 10px;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  span {
    display: block;
    max-width: ${breakpoints.tablet}px;
    color: #747474;
    text-align: center;
    line-height: 20px;
  }
`;
