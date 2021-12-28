import styled from "@emotion/styled/macro";
import {
  breakpoints,
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";

interface LineProps {
  hoverProps: boolean;
}

interface onMenuProps {
  menuOpen: boolean;
}

export const HeaderContainer = styled.div`
  width: 100%;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    height: 48px;
  }

  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 150px;
    min-width: 1280px;
  }
`;

export const HeaderTop = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  height: 30px;
  background-color: #0c1b58;
  color: white;
  & .top-content {
    height: 100%;
    width: ${breakpoints.pc}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    font-size: 12px;
    letter-spacing: 0.13px;
  }

  & .options {
    display: flex;
    width: 100px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const HeaderMain = styled.div``;

export const Cover = styled.div`
  transform: scaleY(0);
  visibility: hidden;
  height: 0;
  border-top: 1px solid #0c1b58;
  background-color: black;

  & .link {
    color: white;
    &:hover {
      color: #0c1b58;
    }
  }

  & li {
    width: 100%;
    height: 100%;
    min-height: 25px;
    margin: 5px 0;
    width: 141px;
    &:hover {
      background-color: white;
      color: #0c1b58;
    }
  }

  &:hover {
    background-color: #0c1b58;
    transition: 0.2s linear;
  }
`;

export const MainDesktop = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    & .main-content-desktop {
      width: ${breakpoints.pc}px;
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      height: 80px;
    }

    & .main-menu {
      height: 55px;
      width: 100%;
      color: white;
      display: flex;
      justify-content: center;
      background-color: #0c1b58;
      &:hover ${Cover} {
        visibility: visible;
        transform: scaleY(1);
        height: 320px;
        opacity: 0.8;
        /* padding-top: 7px; */
        transition: height 0.1s ease-in;
        position: absolute;
        z-index: 1000;
      }

      &:hover li {
        height: 30px;
        transition: height 0.1s ease-in;
      }

      .header-title {
        width: 141px;
        height: 50%;
        margin: 10px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        & span {
          display: flex;
          flex-direction: inherit;
          justify-content: center;
          align-items: center;
          height: 70%;
          font-weight: 600;
          cursor: pointer;
        }

        &:hover {
          color: #f03fa8;
          transition: 0.2s linear;
        }
      }

      & ul {
        padding: 0;
        width: 141px;
        list-style: none;
        cursor: pointer;
        position: relative;
      }
      & li {
        width: 141px;
        font-size: 11.5px;
        line-height: 25px;
        text-align: center;
        color: white;
        height: 0;
        cursor: pointer;
        padding: 2px 4px;
        &:hover {
          color: #0c1b58;
          transition: 0.2s linear;
        }
      }
    }
  }
`;
export const HeaderLine = styled.div<LineProps>`
  width: 100%;
  height: 4px;
  margin-bottom: 3px;
  background-color: ${(props) => (props.hoverProps ? "#f03fa8" : "none")};
  transition: 0.2s;
  right: calc(100% - 150px);
  &:hover {
    right: 0;
  }
`;

export const MainMobile = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: none;
  }
  & .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: #0c1b58;
    color: white;
    padding: 0 15px;

    & .menu {
      font-size: 24px;
      transform: rotate(90deg);
    }
  }
`;

export const MobileDrawerBlock = styled.div<onMenuProps>`
  width: 100%;
  margin: 5px 0;
  height: 75px;
  font-size: 17px;

  & button {
    color: white;
    width: 100%;
    height: 100%;
    background-color: ${(props) => (props.menuOpen ? "#384270" : "#0c1b58")};
    border: none;
  }
`;
export const MobileDrawerSubBlock = styled.div`
  width: 100%;
  margin: 5px 0;
  font-size: 14px;
  height: 50px;
  & button {
    color: white;
    width: 100%;
    height: 100%;
    background-color: #384270;
    border: none;
    text-align: left;
  }
`;
