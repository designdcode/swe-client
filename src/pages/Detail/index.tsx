import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router";
import { NavigationData } from "../../assets/NavigationData";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getBoardByCategory } from "../../typings/api";
import { GET_BOARD_BY_CATEGORY } from "../../queries/adminQuery";

interface ParamProps {
  param: string;
  subparam: string;
}

interface middleMenuProps {
  isBigger: boolean;
}

interface MenuCellProps {
  first: number;
}

const Detail = () => {
  const screen = useWindowSize();
  const { param, subparam } = useParams<ParamProps>();
  const { loading, data } = useQuery<getBoardByCategory>(
    GET_BOARD_BY_CATEGORY,
    {
      variables: {
        category: subparam,
      },
    }
  );

  const renderButton = useCallback(() => {
    switch (subparam.split("-")[1]) {
      case "cs":
        return (
          <a
            className="link-button"
            href="https://cs.sunmoon.ac.kr/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={"/img/cs_button.jpeg"} alt="buttonimg" />
          </a>
        );
      case "ai":
        return (
          <a
            className="link-button"
            href="https://ais.sunmoon.ac.kr/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={"/img/ai_button.jpg"} alt="buttonimg" />
          </a>
        );
      case "convergence":
        return (
          <a
            className="link-button"
            href="https://swc.sunmoon.ac.kr/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={"/img/swc_button.jpeg"} alt="buttonimg" />
          </a>
        );
      case "it":
        return (
          <a
            className="link-button"
            href="https://itedu.sunmoon.ac.kr/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={"/img/itedu_button.jpg"} alt="buttonimg" />
          </a>
        );
      case "smartcar":
        return (
          <a
            className="link-button"
            href="https://smartcar.sunmoon.ac.kr/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={"/img/smartcar_button.jpeg"} alt="buttonimg" />
          </a>
        );
      case "sw":
        return (
          <a
            className="link-button"
            href="https://sw.sunmoon.ac.kr/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={"/img/sw_button.jpeg"} alt="buttonimg" />
          </a>
        );
      default:
        return null;
    }
  }, [subparam]);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <Wrapper>
      <Cover>
        <CoverTitle margin={screen.width > 1500 ? "25%" : "15%"}>
          {NavigationData.map((item, idx) => {
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
        <SubMenu
          isBigger={param === "major" || param === "basic" ? true : false}
        >
          <div className="submenu-content">
            {NavigationData.map((item, idx) => {
              if (item.title === param) {
                return item.subMenu.map((elem, i) => {
                  const colored = elem.key === subparam ? 0 : 1;
                  return (
                    <ContentCell
                      className="submenu-col"
                      first={colored}
                      key={`${i}key`}
                    >
                      <FakeLine first={colored} />
                      <StyleLink
                        to={`/main/detail/${param}/${elem.key}`}
                        first={colored}
                      >
                        <span style={{ fontWeight: 600 }}>{elem.ko_title}</span>
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
      </Cover>
      <Content>
        {/* <div> */}
        {param.toString() === "sitelink" && renderButton()}
        {/* </div> */}
        <ContentImage>
          {data?.getBoardByCategory.data &&
            data.getBoardByCategory.data[0] &&
            data.getBoardByCategory.data[0].images && (
              <img
                src={data.getBoardByCategory.data[0].images[0]?.url}
                alt="uploadedImage"
              />
            )}
        </ContentImage>
      </Content>
    </Wrapper>
  );
};

export default Detail;

interface CoverTitleMarginProps {
  margin: string;
}

const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    min-height: 50vh;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    margin-top: 15px;
    width: 100%;
    min-width: 1280px;
    max-width: 1920px;
    min-height: 100%;
  }
`;

const Cover = styled.div`
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

const SubMenu = styled.div<middleMenuProps>`
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
      width: 1280px;
      min-height: 50px;
      height: ${(props) => (props.isBigger ? "100px" : "50px")};
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding-left: 160px;
    }
    & .submenu-col {
      width: 170px;
      height: 50px;
      display: flex;
      display: flex;
      align-items: center;
      justify-content: center;
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
    padding: 2px 5px;
    font-size: 13px;
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

const FakeLine = styled.div<MenuCellProps>`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }

  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 50%;
    height: 2px;
    border-top: ${(props) => (props.first === 0 ? "2px solid white" : "")};
  }
`;

const Content = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    height: 100%;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 1280px;
    min-height: 100vh;
    margin: 0 auto;
    & .link-button {
      display: flex;
      justify-content: center;
      width: 100%;
      min-height: 50px;
      margin: 20px auto;
      margin-top: 150px;
      & img {
        width: 300px;
      }
    }
  }
`;

const ContentImage = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    & img {
      width: 100%;
      object-fit: contain;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    padding: 60px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    & img {
      width: 80%;
      margin: 0 auto;
    }
  }
`;
