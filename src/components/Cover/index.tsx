import React, { FC } from "react";
import styled from "@emotion/styled";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import { NavigationData } from "../../assets/NavigationData";

interface CoverProps {
  param: string;
  subparam: string;
}

export const Cover: FC<CoverProps> = ({ param, subparam }) => {
  const screen = useWindowSize();

  return (
    <StyledCover>
      <CoverTitle margin={screen.width > 1500 ? "25%" : "15%"}>
        {NavigationData.map((item) => {
          if (item.title === param.split("-")[0]) {
            return (
              <div key={item.key}>
                <span className="cover-main-title">{item.ko_title}</span>
                <span className="cover-description">{item.description}</span>
              </div>
            );
          } else {
            return null;
          }
        })}
      </CoverTitle>
      <SubMenu isBigger={param === "major" ? true : false}>
        <div className="submenu-content">
          {NavigationData.map((item, idx) => {
            if (item.title === param) {
              return item.subMenu.map((elem, i) => {
                const colored = elem.key === subparam ? 0 : 1;
                let to;
                if (
                  elem.title.split("-")[0] === "achievement" ||
                  elem.title.split("-")[0] === "community"
                ) {
                  if (elem.key.split("-")[1] === "sitemap") {
                    to = `/main/detail/${elem.title.split("-")[0]}/${elem.key}`;
                  } else {
                    to = `/main/board/${elem.title.split("-")[0]}/${elem.key}`;
                  }
                } else {
                  to = `/main/detail/${elem.title.split("-")[0]}/${elem.key}`;
                }
                return (
                  <ContentCell
                    className="submenu-col"
                    first={colored}
                    key={`${i}key`}
                  >
                    <FakeLine first={colored} />
                    <StyleLink to={to} first={colored}>
                      <span style={{ fontWeight: 400 }}>{elem.ko_title}</span>
                    </StyleLink>
                  </ContentCell>
                );
              });
            } else {
              return null;
            }
          })}
        </div>
      </SubMenu>
      <img src="/img/detailBG.jpeg" alt="cover" />
    </StyledCover>
  );
};

export default Cover;

interface CoverTitleMarginProps {
  margin: string;
}

interface MiddleMenuProps {
  isBigger: boolean;
}

interface MenuCellProps {
  first: number;
}

const StyledCover = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    height: 120px;
    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    min-width: 1280px;
    height: 350px;
    margin: 0 auto;
    position: relative;
    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

const CoverTitle = styled.div<CoverTitleMarginProps>`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    position: absolute;
    top: 10%;
    left: 5%;
    & .cover-main-title {
      font-size: 20px;
      font-weight: 500px;
      color: white;
      display: block;
    }
    & .cover-description {
      display: block;
      font-size: 10px;
      letter-spacing: 0.43px;
      color: #ffffff;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    position: absolute;
    font-size: 20px;
    margin-left: ${(props) => props.margin};
    margin-top: 50px;
    & .cover-main-title {
      font-size: 40px;
      font-weight: 500;
      letter-spacing: 0.43px;
      color: #ffffff;
      text-shadow: 3px 3px 3px #000000e3;
      display: block;
    }

    & .cover-description {
      display: block;
      font-size: 20px;
      letter-spacing: 0.43px;
      color: #ffffff;
      text-shadow: 3px 3px 3px #000000e3;
    }
  }
`;

const FakeLine = styled.div<MenuCellProps>`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }

  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 50%;
    height: 2px;
    border-top: ${(props) => (props.first === 0 ? "2px solid white" : "")};
  }
`;

const SubMenu = styled.div<MiddleMenuProps>`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    background-color: #e5e2e2b8;
    position: absolute;
    bottom: 0;
    font-size: 15px;
    & .submenu-content {
      min-height: 50px;
      height: 50px;
      margin: 0 auto;
      padding-left: 5%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    & .submenu-col {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      :hover {
        color: white;
      }
    }
  }
`;

const StyleLink = styled(Link)<MenuCellProps>`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }

  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 30px;
    font-size: 16px;
    color: ${(props) => (props.first === 0 ? "white" : "black")};
    &:hover {
      color: white;
    }
  }
`;

const ContentCell = styled.div<MenuCellProps>`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }

  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    background-color: ${(props) => (props.first === 0 ? "#0c1b58" : "")};
    color: ${(props) => (props.first === 0 ? "white" : "black")};
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
      background-color: #0c1b58;
      transition: 0.2s linear;
      color: white;
    }
  }
`;
