import styled from "@emotion/styled";
import {
  BREAKPOINT_PC,
  BREAKPOINT_PHONE_MEDIUM,
  BREAKPOINT_TABLET,
  mediaQueries,
} from "../../utils/mediaQuery";

export const HeaderContainer = styled.div`
  width: 100%;
  & .top {
    height: 25px;
    border: 1px solid black;
    ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
      display: none;
    }
    ${mediaQueries(BREAKPOINT_PC)} {
      display: flex;
    }
  }

  & .main-mobile {
    ${mediaQueries(BREAKPOINT_PC)} {
      display: none;
    }
  }

  & .main-desktop {
    ${mediaQueries(BREAKPOINT_TABLET)} {
      display: none;
    }
    ${mediaQueries(BREAKPOINT_PC)} {
      width: 100%;
      display: flex;
      height: 150px;
      border: 1px solid blue;
    }

    & .main-header li {
      float: left;
      list-style: none;
      vertical-align: middle;
      line-height: 30px;
    }

    & .menu-link {
      display: block;
      width: 150px;
      font-weight: 12px;
    }
  }
`;
