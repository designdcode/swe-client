import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import styled from "@emotion/styled";
import {
  breakpoints,
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";
import { ConvertTitle } from "../../utils/convertTitle";
import { useQuery } from "@apollo/client";
import { GET_BOARD_BY_ID } from "../../queries/sharedQuery";
import { getBoardById, getBoardByIdVariables } from "../../typings/api";
import { GrAttachment } from "react-icons/gr";
import { Link } from "react-router-dom";
import { NavigationData } from "../../assets/NavigationData";
import { useWindowSize } from "../../hooks/useWindowSize";
import { toast } from "react-toastify";
import { replySwitcher } from "../../utils/switcher";
import moment from "moment";

interface ParamProps {
  param: string;
  subparam: string;
  id: string;
}

const BoardDetail: React.VFC = () => {
  const screen = useWindowSize();
  const history = useHistory();
  const { param, subparam, id } = useParams<ParamProps>();
  const [pageTitle, setPageTitle] = useState<string>();
  const stno = localStorage.getItem("stno");
  const [isReplyNeeded, setIsReplyNeeded] = useState<boolean>(false);
  const { data, loading } = useQuery<getBoardById, getBoardByIdVariables>(
    GET_BOARD_BY_ID,
    {
      variables: {
        id: parseInt(id, 10),
      },
    }
  );

  useEffect(() => {
    setPageTitle(ConvertTitle(subparam));
    setIsReplyNeeded(replySwitcher(subparam));
  }, [subparam]);

  useEffect(() => {
    if (data?.getBoardById.data?.private) {
      if (data.getBoardById.data.writer !== stno) {
        toast.info("비밀글 입니다");
        history.push(`/main/board/${param}/${subparam}`);
      }
    }
  }, [data, stno, param, subparam, history]);

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
        <SubMenu isBigger={param === "major" ? true : false} margin="5%">
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
                        to={`/main/board/${param}/${elem.key}`}
                        first={colored}
                      >
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
      </Cover>

      <Body>
        <div className="head">
          <div></div>
          <div className="head-title">{pageTitle}</div>
          <div className="head-logo">
            <img src="/img/blackLogo.jpeg" alt="logo" />
          </div>
        </div>
        <Content>
          <div className="content-head">
            <div className="content-head-title">
              {data?.getBoardById.data?.title}
            </div>
            <div className="content-head-desc">
              <div className="content-head-desc-date">
                {moment(
                  new Date(data?.getBoardById.data?.inputCreatedAt || ""),
                  true
                )
                  .format("YYYY/MM/DD")
                  .toString()}
              </div>
              <div>
                {data?.getBoardById.data?.writer
                  ? data?.getBoardById.data.writer
                  : "관리자"}
              </div>
            </div>
          </div>
          <ContentBody>
            {data?.getBoardById.data?.images &&
            data.getBoardById.data.images[0] ? (
              <img
                src={data.getBoardById.data.images[0].url}
                alt="news uploaded img"
              />
            ) : (
              ""
            )}
            <div
              className="content-body-desc"
              dangerouslySetInnerHTML={{
                __html: data?.getBoardById.data?.content || "",
              }}
            ></div>
            {data?.getBoardById.data?.showAttach &&
              data?.getBoardById.data?.files &&
              data.getBoardById.data.files.length > 0 && (
                <div className="content-body-attachment">
                  {data?.getBoardById.data?.files.map((item, idx) => {
                    return (
                      <div key={idx} className="attachment-row">
                        <GrAttachment
                          size={screen.width > breakpoints.phoneMedium ? 14 : 8}
                        />
                        <a
                          href={item?.url}
                          download
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item?.fileName}
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}
          </ContentBody>
          <ContentReply>
            {isReplyNeeded && <div className="reply-title">&#x21aa;답글</div>}
            <div
              className="reply-content"
              dangerouslySetInnerHTML={{
                __html:
                  (data &&
                    data.getBoardById.data &&
                    data.getBoardById.data.replies &&
                    data.getBoardById.data.replies[0] &&
                    data.getBoardById.data.replies[0]?.content) ||
                  "",
              }}
            ></div>
          </ContentReply>
          <ContentBottom>
            <Link to={`/main/board/${param}/${subparam}`}>목록보기</Link>
          </ContentBottom>
        </Content>
      </Body>
    </Wrapper>
  );
};

export default BoardDetail;

interface CoverTitleMarginProps {
  margin: string;
}

interface middleMenuProps {
  isBigger: boolean;
  margin?: string;
}

interface MenuCellProps {
  first: number;
}

const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    /* width: 1280px; */
    margin: 0 auto;
    padding-top: 15px;
    min-height: 50vh;
    min-width: 800px;
    max-width: 1920px;
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
      max-width: 1200px;
      min-width: 1000px;
      min-height: 50px;
      height: ${(props) => (props.isBigger ? "100px" : "50px")};
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding-left: ${(props) => props.margin};
    }
    & .submenu-col {
      width: 16%;
      height: 50px;
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

const FakeLine = styled.div<MenuCellProps>`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }

  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 50%;
    height: 2px;
    border-top: ${(props) => (props.first === 0 ? "2px solid white" : "")};
  }
`;

const Body = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    & .head {
      height: 80px;
      width: 100%;
      display: flex;
      align-items: center;
    }
    & .head-title {
      font-size: 20px;
      font-weight: 500;
      color: #0c1b58;
    }

    & .head-logo {
      display: none;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    max-width: 1280px;
    min-width: 1000px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    & .head {
      min-height: 150px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & .head-title {
      font-size: 35px;
      font-weight: 500;
      color: #0c1b58;
    }

    & .head-logo {
      img {
        height: 100px;
        width: 100px;
      }
    }
  }
`;
const Content = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;

    & .content-head {
      width: 100%;
      border-top: 2px solid black;
      border-bottom: 2px solid black;
      padding: 20px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & .content-head-title {
        font-size: 12px;
        font-weight: 600;
        display: flex;
        align-items: center;
      }

      & .content-head-desc {
        display: flex;
        font-size: 10px;
        color: #868686;

        & .content-head-desc-date {
          margin-right: 15px;
        }
      }
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    min-height: 30vh;
    border-top: 3px solid #0c1b58;

    & .content-head {
      min-height: 150px;
      width: 100%;
      border-bottom: 1px solid black;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & .content-head-title {
        font-size: 20px;
        font-weight: 600;
        min-height: 35px;
        display: flex;
        align-items: center;
        color: #0c1b58;
      }
      & .content-head-desc {
        display: flex;
        font-size: 20px;
        color: #868686;
        margin-top: 15px;
        & .content-head-desc-date {
          margin-right: 50px;
        }
      }
    }
  }
`;

const ContentBody = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    & img {
      width: 310px;
      height: 150px;
    }

    & .content-body-desc {
      font-size: 10px;
      margin-top: 30px;
      width: 310px;
    }

    & .content-body-attachment {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 10px;
      min-height: 20px;
      margin: 30px 0;
      /* padding:0 15px; */
      background-color: #f7f7f7;
      & .attachment-row {
        display: flex;

        a {
          margin-left: 20px;
          width: 230px;
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    padding: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    & img {
      width: 850px;
      height: 450px;
      object-fit: cover;
    }

    & .content-body-desc {
      margin-top: 30px;
    }

    & .content-body-attachment {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      min-height: 40px;
      background-color: #f7f7f7;
      margin: 50px 0;
      padding: 20px;
      a {
        margin-left: 20px;
      }
    }
  }
`;

const ContentReply = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    min-height: 50px;
    margin: 0 auto;
    border-top: 2px solid #dddddd;
    padding: 20px 30px;
    & .reply-title {
      font-size: 24px;
      color: #0c1b58;
      font-weight: 600;
    }

    & .reply-content {
      width: 90%;
      padding: 10px 40px;
    }
  }
`;

const ContentBottom = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: #b7b7b7;
      font-size: 10px;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a {
      color: white;
      padding: 4px 10px;
      font-size: 18px;
      background-color: #0c1b58;
    }
  }
`;
