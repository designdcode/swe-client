import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";
import { useQuery } from "@apollo/client";
import { GET_BOARD_BY_CATEGORY } from "../../queries/adminQuery";
import { useParams } from "react-router";
import {
  getBoardByCategory,
  getBoardByCategoryVariables,
} from "../../typings/api";
import { getDate } from "../../utils/convertDate";
import { Space, Table } from "antd";
import Column from "antd/lib/table/Column";
import { Link } from "react-router-dom";
import { ConvertTitle } from "../../utils/convertTitle";
import { NavigationData } from "../../assets/NavigationData";
import { useWindowSize } from "../../hooks/useWindowSize";

interface ParamProps {
  param: string;
  subparam: string;
}

interface TableBoardProps {
  id: number | null;
  index: number | null;
  title: string | null;
  createdAt: string | null;
  category: string;
}

const Board: React.VFC = () => {
  const screen = useWindowSize();
  const { param, subparam } = useParams<ParamProps>();
  const [boards, setBoards] = useState<Array<TableBoardProps>>();
  const [title, setTitle] = useState<string>();
  const [writeAble, setWriteAble] = useState<boolean>(false);
  const { loading } = useQuery<getBoardByCategory, getBoardByCategoryVariables>(
    GET_BOARD_BY_CATEGORY,
    {
      variables: {
        category: subparam,
      },
      onCompleted: ({ getBoardByCategory }) => {
        const { ok, err, data } = getBoardByCategory;
        if (ok && data) {
          let dataSource: Array<TableBoardProps> = [];
          data.map((elem, i) => {
            const obj: TableBoardProps = {
              id: elem.id,
              index: data.length - i,
              title: elem.title,
              createdAt: getDate(elem.createdAt || ""),
              category: elem.category,
            };
            return dataSource.push(obj);
          });
          setBoards(dataSource);
        } else {
          console.log(err);
        }
      },
    }
  );
  useEffect(() => {
    setTitle(ConvertTitle(subparam));
    if (subparam.split("-")[1] === "request") {
      setWriteAble(true);
    }
  }, [subparam]);

  if (loading && !boards) {
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
                        to={`/main/board/${param}/${elem.key}`}
                        first={colored}
                      >
                        {elem.ko_title}
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
      <Container>
        <BoardTitle>
          {title}
          {writeAble && <Link to="/">글쓰기</Link>}
        </BoardTitle>
        <StyledTable dataSource={boards} rowKey={"id"}>
          <Column
            title={() => {
              return (
                <Space>
                  <TableTitle>{screen.width > 375 ? "번호" : "#"}</TableTitle>
                </Space>
              );
            }}
            dataIndex="index"
            key="index"
            render={(text) => {
              return <TableDesc>{text}</TableDesc>;
            }}
            width={screen.width > 375 ? 80 : 30}
          />
          <Column
            title={() => {
              return (
                <Space>
                  <TableTitle>제목</TableTitle>
                </Space>
              );
            }}
            dataIndex="title"
            key="title"
            ellipsis={true}
            render={(text, record: TableBoardProps) => {
              return (
                <Space>
                  <Link to={`/main/detail/${param}/${subparam}/${record.id}`}>
                    <TableDesc>{text}</TableDesc>
                  </Link>
                </Space>
              );
            }}
          />
          <Column
            title={() => {
              return (
                <Space>
                  <TableTitle>관리자</TableTitle>
                </Space>
              );
            }}
            dataIndex="관리자"
            key="관리자"
            render={() => {
              return (
                <Space>
                  <TableDesc>관리자</TableDesc>
                </Space>
              );
            }}
            width={screen.width > 375 ? 150 : 65}
          />
          <Column
            title={() => {
              return (
                <Space>
                  <TableTitle>작성일</TableTitle>
                </Space>
              );
            }}
            dataIndex="createdAt"
            key="createdAt"
            render={(text) => {
              return <TableDesc>{text}</TableDesc>;
            }}
            width={screen.width > 375 ? 150 : 90}
          />
        </StyledTable>
      </Container>
    </Wrapper>
  );
};

export default Board;

interface CoverTitleMarginProps {
  margin: string;
}

interface middleMenuProps {
  isBigger: boolean;
}

interface MenuCellProps {
  first: number;
}

const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    margin-top: 15px;
    min-width: 800px;
    max-width: 1920px;
    min-height: 80vh;
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
      min-width: 800px;
      min-height: 50px;
      height: ${(props) => (props.isBigger ? "100px" : "50px")};
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding-left: 15%;
    }
    & .submenu-col {
      width: 20%;
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

const Container = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }

  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    min-width: 800px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 30px;
  }
`;

const BoardTitle = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    height: 80px;
    font-size: 20px;
    color: #0c1b58;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    min-width: 350px;
    margin: 0 auto;
    font-size: 50px;
    color: #0c1b58;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    & a {
      background-color: #0c1b58;
      font-size: 18px;
      padding: 8px 12px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      &:hover {
        color: #f03fa8;
        transition: 0.2s linear;
      }
    }
  }
`;

const StyledTable = styled(Table)`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    border-top: 4px solid #04083e;
    margin: 0 20px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    border-top: 4px solid #04083e;
  }
`;

const TableTitle = styled.div`
  color: #04083e;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    font-size: 8px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }
`;

const TableDesc = styled.div`
  color: #04083e;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    font-size: 8px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    font-size: 16px;
    font-weight: 500;
  }
`;
