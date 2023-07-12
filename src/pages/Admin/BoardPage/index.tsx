import { useEffect, useState } from "react";
import { Table, Space, Button } from "antd";
import Column from "antd/lib/table/Column";
import { Link, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "@emotion/styled";
import { useBoardContext } from "../../../contexts";
import { useRemoveBoardMutation } from "../../../typings/api.d";

interface ParamProps {
  param: string;
  subparam: string;
}
interface TableBoardProps {
  id: string;
  index: number | null;
  title: string | null;
  createdAt: string | null;
  category: string;
  private: boolean;
  type: string;
  writer: string | null;
}

interface LocationProps {
  refresh?: boolean;
}

const BoardPage = () => {
  const { param, subparam } = useParams<ParamProps>();
  const { state } = useLocation<LocationProps>();
  const { boards: boardsContext, loading, refetch } = useBoardContext();
  const [boards, setBoards] = useState<TableBoardProps[]>();
  const [deleteBoard] = useRemoveBoardMutation({
    onCompleted: () => {
      toast.success("게시물이 삭제 되었습니다");
      if (refetch) {
        refetch();
      }
    },
  });

  console.log("board page", boards);

  useEffect(() => {
    const excuteRefetch = () => {
      if (refetch) {
        refetch();
      }
    };
    if (state && state.refresh) {
      excuteRefetch();
    }
    return () => excuteRefetch();
  }, [refetch, state]);

  useEffect(() => {
    if (boardsContext) {
      const dataSource: Array<TableBoardProps> = boardsContext.map(
        (elem, i) => ({
          id: elem._id,
          index: boardsContext.length - i,
          title: elem.title || "",
          createdAt: elem.inputCreatedAt,
          // createdAt: getDate(elem.createdAt || ""),
          category: elem.category,
          private: elem.private || false,
          type: elem.type || "",
          writer: elem.writer || "",
        })
      );
      setBoards(dataSource);
    }
  }, [boardsContext]);

  if (loading) {
    return <>loading</>;
  }

  return (
    <Container>
      <Link
        to={`/admin/${param}/create-${param}?category=${subparam}&param=${param}&subparam=${subparam}`}
      >
        <Button type="primary" style={{ marginTop: 15, marginBottom: 20 }}>
          글쓰기
        </Button>
      </Link>
      <Table dataSource={boards} rowKey={"id"}>
        <Column title="번호" dataIndex="index" key="index" width={80} />
        <Column
          title="제목"
          dataIndex="title"
          key="title"
          render={(text, record: TableBoardProps) => {
            return (
              <Space>
                <Link
                  to={`/admin/${param}/detail-${param}?category=${subparam}&id=${record.id}`}
                >
                  {text}
                </Link>
              </Space>
            );
          }}
        />
        <Column title="작성자" dataIndex="writer" key="writer" width={100} />
        <Column
          title="작성일"
          dataIndex="inputCreatedAt"
          key="inputCreatedAt"
          width={100}
        />
        <Column
          title="공개여부"
          key="public"
          width={100}
          render={(text, record: TableBoardProps) => (
            <Space size="middle">{record.private ? "비공개" : "공개"}</Space>
          )}
        />
        <Column
          title="옵션"
          key="action"
          width={100}
          render={(text, record: TableBoardProps) => (
            <Space size="middle">
              <Button
                type="primary"
                danger
                onClick={() => deleteBoard({ variables: { _id: record.id } })}
              >
                삭제
              </Button>
            </Space>
          )}
        />
      </Table>
    </Container>
  );
};

export default BoardPage;

const Container = styled.div``;
