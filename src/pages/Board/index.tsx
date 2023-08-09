import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import {
  breakpoints,
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";
import { useParams } from "react-router";
import { Space, Table } from "antd";
import Column from "antd/lib/table/Column";
import { Link } from "react-router-dom";
import { ConvertTitle } from "../../utils/convertTitle";
import { useWindowSize } from "../../hooks/useWindowSize";
import useInput from "../../hooks/useInput";
import { useBoardContext } from "../../contexts";
import moment from "moment";
import Cover from "../../components/Cover";
import { ListHead } from "../../components/ListHead";

interface ParamProps {
  param: string;
  subparam: string;
}

interface TableBoardProps {
  id: string | null;
  index: number | null;
  title: string | null;
  createdAt: string | null;
  category: string;
  private: boolean;
  writer: string;
  content: string;
}

const Board: React.VFC = () => {
  const screen = useWindowSize();
  const { param, subparam } = useParams<ParamProps>();
  const [boards, setBoards] = useState<Array<TableBoardProps>>();
  const [subBoards, setSubBoards] = useState<Array<TableBoardProps>>();
  const [title, setTitle] = useState<string>();
  const [writeAble, setWriteAble] = useState<boolean>(false);
  const [searchCategory, setSearchCategory] = useState<string>("전체보기");
  const [term, onChangeTerm, setTerm] = useInput("");
  const { boards: boardsContext, loading, refetch } = useBoardContext();

  useEffect(() => {
    if (boardsContext) {
      let dataSource: Array<TableBoardProps> = [];
      const data = boardsContext
        .filter((v) => v.category === subparam)
        .reverse();
      data.map((elem, i) => {
        const obj: TableBoardProps = {
          id: elem._id,
          index: data.length - i,
          title: elem.title || "",
          createdAt: moment(elem.inputCreatedAt).format("YYYY-MM-DD"),
          category: elem.category,
          private: elem.private || false,
          writer: elem.writer || "",
          content: elem.content || "",
        };
        if (elem.private === false) {
          return dataSource.push(obj);
        }
        return null;
      });
      setBoards(dataSource);
      setSubBoards(dataSource);
    }
  }, [boardsContext, subparam]);

  useEffect(() => {
    if (refetch) {
      refetch();
    }
  }, [refetch]);

  useEffect(() => {
    setTitle(ConvertTitle(subparam));
    if (subparam.split("-")[1] === "request") {
      setWriteAble(true);
    } else if (subparam.split("-")[1] === "help") {
      setWriteAble(true);
    } else {
      setWriteAble(false);
    }
  }, [subparam]);

  const onSearchBoard = useCallback(() => {
    setTerm("");
    switch (searchCategory) {
      case "전체보기":
        setBoards(subBoards);
        break;
      case "제목":
        setBoards(subBoards?.filter((item) => item.title?.includes(term)));
        break;
      default:
        break;
    }
  }, [setTerm, subBoards, term, searchCategory]);

  if (loading && !boards) {
    return <div>loading...</div>;
  }
  return (
    <Wrapper>
      <Cover param={param} subparam={subparam} />
      <Container>
        <ListHead
          onChangeTerm={onChangeTerm}
          onSearchBoard={onSearchBoard}
          param={param}
          subparam={subparam}
          searchCategory={searchCategory}
          setSearchCategory={setSearchCategory}
          term={term}
          title={title || ""}
          writeAble={writeAble}
        />
        <StyledTable
          dataSource={boards}
          rowKey={"id"}
          style={{
            cursor: "pointer",
            margin: "10px 0",
          }}
        >
          <Column
            align={"center"}
            title={() => {
              return (
                <Space>
                  <TableTitle>
                    {screen.width > breakpoints.phoneMedium ? "번호" : "#"}
                  </TableTitle>
                </Space>
              );
            }}
            dataIndex="index"
            key="index"
            render={(text) => {
              return <TableDesc>{text}</TableDesc>;
            }}
            width={screen.width > breakpoints.phoneMedium ? 80 : 30}
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
            align={"center"}
            title={() => {
              return (
                <Space>
                  <TableTitle>작성자</TableTitle>
                </Space>
              );
            }}
            dataIndex="관리자"
            key="관리자"
            render={(text, record: TableBoardProps) => {
              return (
                <Space>
                  <TableDesc>
                    {subparam.split("-")[1] === "request"
                      ? "관리자"
                      : record.writer === null || record.writer === ""
                      ? "관리자"
                      : record.writer}
                  </TableDesc>
                </Space>
              );
            }}
            width={screen.width > breakpoints.phoneMedium ? 150 : 65}
          />
          <Column
            align={"center"}
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
            width={screen.width > breakpoints.phoneMedium ? 150 : 90}
          />
        </StyledTable>
      </Container>
    </Wrapper>
  );
};

export default Board;

const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    margin-top: 15px;
    /* min-width: 800px;
    max-width: 1920px; */
    min-height: 80vh;
  }
`;

const Container = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
  }

  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    /* min-width: 800px; */
    /* max-width: 1280px; */
    margin: 0 auto;
    padding: 0 30px;
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
