import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "@emotion/styled";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";
import { ConvertTitle } from "../../utils/convertTitle";
import { useQuery } from "@apollo/client";
import { GET_BOARD_BY_ID } from "../../queries/sharedQuery";
import { getBoardById, getBoardByIdVariables } from "../../typings/api";
import { getDate } from "../../utils/convertDate";
import { GrAttachment } from "react-icons/gr";
import { Link } from "react-router-dom";
import { NavigationData } from "../../assets/NavigationData";
import { useWindowSize } from "../../hooks/useWindowSize";

interface ParamProps {
  param: string;
  subparam: string;
  id: string;
}

const BoardDetail: React.VFC = () => {
  const screen = useWindowSize();
  const { param, subparam, id } = useParams<ParamProps>();
  const [pageTitle, setPageTitle] = useState<string>();
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
  }, [subparam]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Wrapper>
      <Cover>
        <CoverTitle>
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
                {getDate(data?.getBoardById.data?.createdAt || "")}
              </div>
              <div>관리자</div>
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
            <div className="content-body-desc">
              {data?.getBoardById.data?.content}
            </div>
            {data?.getBoardById.data?.files &&
              data.getBoardById.data.files.length > 0 && (
                <div className="content-body-attachment">
                  {data?.getBoardById.data?.files.map((item, idx) => {
                    return (
                      <div key={idx} className="attachment-row">
                        <GrAttachment size={screen.width > 375 ? 14 : 8} />
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
          <ContentBottom>
            <Link to={`/main/board/${param}/${subparam}`}>목록보기</Link>
          </ContentBottom>
        </Content>
      </Body>
    </Wrapper>
  );
};

export default BoardDetail;

const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 1280px;
    margin: 0 auto;
    padding-top: 20px;
    min-height: 50vh;
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
    display: none;
  }
`;

const CoverTitle = styled.div`
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
    display: none;
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
    & .head {
      min-height: 150px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & .head-title {
      font-size: 50px;
      font-weight: 500;
      color: #0c1b58;
    }

    & .head-logo {
      img {
        height: 130px;
        width: 130px;
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
        font-size: 27px;
        font-weight: 600;
        min-height: 35px;
        display: flex;
        align-items: center;
      }
      & .content-head-desc {
        display: flex;
        font-size: 20px;
        color: #868686;

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
    align-items: center;

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
    justify-content: center;
    align-items: center;

    a {
      color: #b7b7b7;
      font-size: 18px;
    }
  }
`;