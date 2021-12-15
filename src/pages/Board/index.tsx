import React, { useState } from "react";
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
import * as StyledColumn from "antd/lib/table/Column";
import Column from "antd/lib/table/Column";
import { Link } from "react-router-dom";

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
  const { param, subparam } = useParams<ParamProps>();
  const [boards, setBoards] = useState<Array<TableBoardProps>>();
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
  console.log(param, subparam);

  if (loading && !boards) {
    return <div>loading...</div>;
  }
  return (
    <Wrapper>
      <StyledTable dataSource={boards} rowKey={"id"}>
        <Column
          title={() => {
            return (
              <Space>
                <TableTitle>번호</TableTitle>
              </Space>
            );
          }}
          dataIndex="index"
          key="index"
          render={(text) => {
            return <TableDesc>{text}</TableDesc>;
          }}
          width={80}
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
                <Link to="/main">
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
          width={150}
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
          width={150}
        />
      </StyledTable>
    </Wrapper>
  );
};

export default Board;

const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }

  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    margin-top: 30px;
    max-width: 1280px;
    min-width: 800px;
    min-height: 80vh;
    padding: 0 30px;
  }
`;

const StyledTable = styled(Table)`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    border-top: 4px solid #04083e;
  }
`;

const TableTitle = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    font-size: 22px;
    font-weight: 600;
    color: #04083e;
  }
`;

const TableDesc = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    font-size: 19px;
    font-weight: 500;
    color: #04083e;
  }
`;
