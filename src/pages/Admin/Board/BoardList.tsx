import { FC, useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { useBoardContext } from "../../../contexts";
import { Link } from "react-router-dom";
import { Button, Table } from "antd";
import Column from "antd/lib/table/Column";
import { optionCooperate, optionEducate, optionValue } from "./selectOptionts";

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

export const BoardList: FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const category = pathname.split("/")[4];
  const param = pathname.split("/")[2];
  const { boards: boardsContext, refetch } = useBoardContext();
  const [boards, setBoards] = useState<TableBoardProps[]>();
  const hasType =
    category.includes("achievement") && category !== "achievement-news";

  const handleType = useCallback(
    (type?: string | null) => {
      if (!type) {
        return null;
      }
      const typeCategory = pathname.split("/")[4].split("-")[1];
      switch (typeCategory) {
        case "coopnews":
          return optionCooperate.find((v) => v.value === type)?.label;
        case "valuenews":
          return optionValue.find((v) => v.value === type)?.label;
        case "aidnews":
          return optionEducate.find((v) => v.value === type)?.label;
        default:
          break;
      }
    },
    [pathname]
  );

  useEffect(() => {
    if (boardsContext) {
      const boardWithCategory = boardsContext
        .filter((v) => v.category === category)
        .sort(
          (a, b) =>
            new Date(a.inputCreatedAt).getTime() -
            new Date(b.inputCreatedAt).getTime()
        );
      const dataSource: Array<TableBoardProps> = boardWithCategory
        .reverse()
        .map((elem, i) => ({
          id: elem._id,
          index: boardWithCategory.length - i,
          title: elem.title || "",
          createdAt:
            elem.inputCreatedAt.slice(0, 10) || elem.createdAt.split(0, 10),
          category: elem.category,
          private: elem.private || false,
          type: handleType(elem.type) || "",
          writer: elem.writer || "",
        }));
      setBoards(dataSource);
    }
  }, [boardsContext, category, handleType]);

  useEffect(() => {
    if (refetch) {
      refetch();
    }
  }, [refetch]);

  return (
    <div>
      <Link to={`/admin/${param}/create/${category}`}>
        <Button type="primary">글쓰기</Button>
      </Link>
      <Table
        dataSource={boards}
        style={{
          cursor: "pointer",
          marginTop: "20px",
        }}
        rowKey={"id"}
        onRow={(record) => {
          return {
            onClick: () => {
              history.push(`/admin/${param}/show/${record.id}`);
            },
          };
        }}
      >
        <Column title="번호" dataIndex={"index"} key={"index"} width={80} />
        <Column
          title="제목"
          dataIndex={"title"}
          ellipsis={true}
          key={"title"}
        />
        {hasType && (
          <Column
            title="대분류"
            dataIndex={"type"}
            ellipsis={true}
            key={"type"}
          />
        )}
        <Column
          title="작성자"
          dataIndex={"writer"}
          key={"writer"}
          width={100}
        />
        <Column
          title="생성일"
          dataIndex={"createdAt"}
          key={"createdAt"}
          width={150}
        />
      </Table>
    </div>
  );
};
