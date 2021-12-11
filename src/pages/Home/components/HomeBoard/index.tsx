import React, { useCallback } from "react";
import styled from "@emotion/styled";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../../../utils/mediaQuery";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { useQuery } from "@apollo/client";
import { GET_BOARD_BY_CATEGORY } from "../../../../queries/adminQuery";
import {
  getBoardByCategory,
  getBoardByCategoryVariables,
  getBoardByCategory_getBoardByCategory_data,
} from "../../../../typings/api";
import { List } from "antd";
import { getDate } from "../../../../utils/convertDate";

interface NoticeProps {
  data: getBoardByCategory_getBoardByCategory_data[] | undefined;
}

const NoticeBoard: React.FC<NoticeProps> = ({ data }) => {
  const now = new Date().getMonth() + 1;
  const filtered = data
    ?.filter(
      (item) => parseInt(getDate(item.createdAt || "").split("-")[1]) === now
    )
    .splice(0, 6);
  const renderListItem = useCallback((item) => {
    const itemDate = getDate(item.createdAt);
    return (
      <List.Item style={{ display: "flex" }}>
        <NoticeTitleBox>공지</NoticeTitleBox>
        <NoticeListSpan>[안내] {item.title}</NoticeListSpan>
        <NoticeDate>{itemDate}</NoticeDate>
      </List.Item>
    );
  }, []);
  return (
    <BoardContainer>
      <div className="board-title">
        <div className="board-top-title">
          <TitleWithLine>
            <div className="line"></div>
            <span className="title">공지사항</span>
          </TitleWithLine>
          <div>더보기 +</div>
        </div>
        <div className="board-bottom-title">
          <div className="date">
            <span className="date-title">{now}</span>
            <span className="date-subtitle">small</span>
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

const VideoBoard = () => {
  return <VideoContainer>videio</VideoContainer>;
};

const HomeBoard: React.VFC = () => {
  const size = useWindowSize();
  const { loading, data } = useQuery<
    getBoardByCategory,
    getBoardByCategoryVariables
  >(GET_BOARD_BY_CATEGORY, {
    variables: {
      category: "community-notice",
    },
  });

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Wrapper>
      <Content>
        {size.width > 767 ? (
          <>
            <Col>
              {data?.getBoardByCategory.data === null ? (
                <>no data</>
              ) : (
                <NoticeBoard data={data?.getBoardByCategory.data} />
              )}
            </Col>
            <Col>
              <VideoBoard />
            </Col>
          </>
        ) : (
          <>
            <Col>
              <VideoBoard />
            </Col>
            <Col>
              {data?.getBoardByCategory.data === null ? (
                <>no data</>
              ) : (
                <NoticeBoard data={data?.getBoardByCategory.data} />
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
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 400px;
    max-width: 1980px;
  }
`;

const Content = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 900px;
    height: 100%;
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
    height: 90%;
    width: 445px;
    border: 1px solid black;
  }
`;

const VideoContainer = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: flex;
    width: 100%;
    height: 400px;
    box-shadow: 5px 5px 14px #0000005a;
    padding: 0 35px;
  }
`;

const BoardContainer = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 100%;
    padding: 0 35px;
    padding-top: 30px;
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
    display: none;
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
    display: none;
  }
`;

const NoticeListSpan = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    font-size: 11px;
    font-weight: 600;
    width: 55%;
    color: #0c1b58;
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
`;
