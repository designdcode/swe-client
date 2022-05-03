import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  breakpoints,
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../../../utils/mediaQuery";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { useQuery } from "@apollo/client";
import {
  getBoardByMonth,
  getBoardByMonthVariables,
  getBoardByMonth_getBoardByMonth_data,
  getVideoLink,
} from "../../../../typings/api";
import { List } from "antd";
import {
  GET_BOARD_BY_MONTH,
  GET_VIDEO_LINK,
} from "../../../../queries/sharedQuery";
import { Link } from "react-router-dom";
import Moment from "react-moment";

interface NoticeProps {
  data:
    | Array<
        Pick<
          getBoardByMonth_getBoardByMonth_data,
          "inputCreatedAt" & "title" & "id"
        >
      >
    | undefined;
}

interface VideoProps {
  data: string | undefined | null;
}

const NoticeBoard: React.FC<NoticeProps> = ({ data }) => {
  const now = new Date().getMonth() + 1;
  const yearMonth = `${new Date().getFullYear()}.${new Date().getMonth() + 1}`;
  let filtered;

  console.log(data);
  if (data && data.length > 6) {
    filtered = data.splice(0, 3);
  } else {
    filtered = data;
  }

  const renderListItem = useCallback((item) => {
    return (
      <NoticeList>
        <NoticeTitleBox>공지</NoticeTitleBox>
        <Link to={`/main/detail/community/community-notice/${item.id}`}>
          <NoticeListSpan>[안내] {item.title}</NoticeListSpan>
        </Link>
        <NoticeDate>
          <Moment format="YYYY/MM/DD">{item.inputCreatedAt || 0}</Moment>
        </NoticeDate>
      </NoticeList>
    );
  }, []);
  return (
    <BoardContainer>
      <div className="board-title">
        <div className="board-bottom-title">
          <div className="date">
            <span className="date-title">{now}</span>
            <span className="date-subtitle">{yearMonth}</span>
          </div>
          <div className="title">SW 중심대학 {now}월 공지사항</div>
        </div>
      </div>
      <div>
        <List
          style={{ width: "100%" }}
          dataSource={filtered}
          renderItem={(item) => renderListItem(item)}
        />
      </div>
    </BoardContainer>
  );
};

const VideoBoard: React.FC<VideoProps> = ({ data }) => {
  return (
    <VideoContainer>
      <div className="board-title">
        <div className="board-top-title">
          <TitleWithLine>
            <div className="line"></div>
            <span className="title">홍보영상</span>
          </TitleWithLine>
        </div>
        <div className="video-container">
          <video autoPlay muted controls>
            <source src={`/img/sunmoon.mp4`} type="video/mp4" />
          </video>
        </div>
      </div>
    </VideoContainer>
  );
};

const HomeBoard: React.VFC = () => {
  const size = useWindowSize();
  const [boardData, setBoardData] = useState<
    Array<
      Pick<getBoardByMonth_getBoardByMonth_data, "inputCreatedAt" & "title">
    >
  >([]);
  const { loading, data } = useQuery<getBoardByMonth, getBoardByMonthVariables>(
    GET_BOARD_BY_MONTH,
    {
      variables: {
        category: "community-notice",
      },
    }
  );
  const { data: videoData } = useQuery<getVideoLink>(GET_VIDEO_LINK);

  useEffect(() => {
    if (data && data.getBoardByMonth && data.getBoardByMonth.data) {
      const sorted = data.getBoardByMonth.data.map((item) => ({
        inputCreatedAt: item.inputCreatedAt,
        title: item.title,
        id: item.id,
      }));
      setBoardData(sorted);
    }
  }, [data]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Wrapper>
      <Content>
        {size.width > breakpoints.phoneMedium ? (
          <>
            <Col>
              {data?.getBoardByMonth.data === null ? (
                <div>저장된 데이터가 없습니다</div>
              ) : (
                <>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdpCBD4dNPsNWguHfat1s620Fmxqpi-TBAK6ehdCoMeL23eQw/viewform"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BannerImage src="/img/mainBanner.png" alt="main banner" />
                  </a>
                  <NoticeBoard data={boardData} />
                </>
              )}
            </Col>
            <Col>
              <VideoBoard data={videoData?.getVideoLink.link} />
            </Col>
          </>
        ) : (
          <>
            <Col>
              <VideoBoard data={videoData?.getVideoLink.link} />
            </Col>
            <Col>
              {data?.getBoardByMonth.data === null ? (
                <div>저장된 데이터가 없습니다</div>
              ) : (
                <>
                  <BannerImage src="/img/mainBanner.png" alt="main banner" />
                  <NoticeBoard data={boardData} />
                </>
              )}
            </Col>
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default HomeBoard;

const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    min-height: 400px;
    width: 100%;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    max-width: 1980px;
    padding-bottom: 25px;
  }
`;

const Content = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

const Col = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    min-height: 300px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 600px;
  }
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 35px;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    padding-top: 30px;
    height: 300px;
    & .board-title {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      & .board-top-title {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        font-size: 11px;
        font-weight: 600;
        margin-bottom: 35px;
      }
      & .board-bottom-title {
        display: flex;
        align-items: center;
        & .date {
          height: 50px;
          width: 50px;
          background-color: #f0f2fa;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
          & .date-title {
            display: block;
            font-size: 28px;
            color: #003875;
            font-weight: 600;
            line-height: 1;
          }

          & .date-subtitle {
            display: block;
            font-size: 8px;
          }
        }

        & .title {
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.9px;
        }
      }
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    padding-top: 15px;
    & .board-title {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      & .board-top-title {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        font-size: 11px;
        font-weight: 600;
        margin-bottom: 15px;
      }
      & .board-bottom-title {
        display: flex;
        align-items: center;
        & .date {
          height: 50px;
          width: 50px;
          background-color: #f0f2fa;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
          & .date-title {
            display: block;
            font-size: 26px;
            color: #003875;
            font-weight: 600;
            line-height: 1;
          }

          & .date-subtitle {
            display: block;
            font-size: 8px;
          }
        }

        & .title {
          font-size: 20px;
          margin-left: 20px;
          font-weight: 600;
          letter-spacing: -0.9px;
        }
      }
    }
  }
`;

const TitleWithLine = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    & .line {
      width: 25px;
      border-bottom: 3px solid #c53082;
    }

    & .title {
      font-size: 17px;
      font-weight: 600;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    & .title {
      font-size: 24px;
      font-weight: 600;
    }
  }
`;

const NoticeList = styled(List.Item)`
  display: flex;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    padding: 5px;
    cursor: pointer;
    & a {
      font-size: 17px;
      font-weight: 600;
      width: 60%;
      color: #0c1b58;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &:hover {
      opacity: 0.7;
      transition: 0.2s linear;
    }
  }
`;

const NoticeTitleBox = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 35px;
    height: 20px;
    color: #334ebc;
    border: 1px solid #334ebc;
    font-size: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 45px;
    height: 25px;
    color: #334ebc;
    border: 1px solid #334ebc;
    font-size: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NoticeListSpan = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    font-size: 11px;
    font-weight: 600;
    width: 55%;
    max-width: 200px;
    color: #0c1b58;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const NoticeDate = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    font-size: 11px;
    font-weight: 600;
    float: rigth;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    font-size: 14px;
    font-weight: 500;
    float: rigth;
    color: #636363;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 35px;
  padding-top: 15px;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    height: 320px;
    display: flex;
    max-width: 412px;
    width: 100%;
    box-shadow: 5px 5px 14px #0000005a;
    padding: 15px 35px;
    .video-container {
      & video {
        width: 310px;
        margin: 0 auto;
        height: 250px;
      }
    }
  }

  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    .video-container {
      margin-top: 20px;
      & video {
        width: 480px;
      }
    }
  }
`;

const BannerImage = styled.img`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    max-width: 100%;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    max-width: 100%;
  }
`;
