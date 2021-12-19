import { useLazyQuery, useMutation } from "@apollo/client";
import { Table, Space, Button } from "antd";
import Column from "antd/lib/table/Column";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  DELETE_BOARD,
  GET_BOARD_BY_CATEGORY,
} from "../../../queries/adminQuery";
import { getBoardByCategory } from "../../../typings/api";
import { getDate } from "../../../utils/convertDate";
import styled from "@emotion/styled";

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
  private: boolean;
  type: string;
}

interface LocationProps {
  refresh?: boolean;
}

interface menuProps {
  title: {
    k_title: string;
    title: string;
  }[];
}

const menu: menuProps[] = [
  {
    title: [
      {
        k_title: "전체보기",
        title: "all",
      },
      {
        k_title: "수요중심",
        title: "edu",
      },
      {
        k_title: "선도자양성",
        title: "training",
      },
      {
        k_title: "가치공유",
        title: "share",
      },
    ],
  },
  {
    title: [
      {
        k_title: "전체보기",
        title: "all",
      },
      {
        k_title: "네트워크",
        title: "network",
      },
      {
        k_title: "프로젝트",
        title: "project",
      },
      {
        k_title: "인턴쉽",
        title: "internship",
      },
    ],
  },
  {
    title: [
      {
        k_title: "전체보기",
        title: "all",
      },
      {
        k_title: "SW기초교육",
        title: "basic",
      },
      {
        k_title: "SW전공교육",
        title: "major",
      },
      {
        k_title: "SW융합교육",
        title: "convergence",
      },
    ],
  },
];

const StoragePage = () => {
  const { param, subparam } = useParams<ParamProps>();
  const { state } = useLocation<LocationProps>();
  const [boards, setBoards] = useState<Array<TableBoardProps>>();
  const [subBoard, setSubBoard] = useState<Array<TableBoardProps>>();
  const [isSortNeeded, setIsSortNeeded] = useState<boolean>(false);
  const [getBoard, { loading, data, refetch }] =
    useLazyQuery<getBoardByCategory>(GET_BOARD_BY_CATEGORY);

  const findSortNeededData = useCallback((subparam: string): boolean => {
    switch (subparam.split("-")[1]) {
      case "aidnews":
        return true;
      case "valuenews":
        return true;
      case "coopnews":
        return true;
      default:
        return false;
    }
  }, []);

  useEffect(() => {
    if (param === "achievement" && findSortNeededData(subparam)) {
      setIsSortNeeded(true);
    }
  }, [param, subparam, findSortNeededData]);

  const [deleteBoard] = useMutation(DELETE_BOARD, {
    onCompleted: ({ deleteBoard }) => {
      const { ok, err } = deleteBoard;
      if (ok) {
        toast.success("게시물이 삭제 되었습니다");
        if (refetch) {
          refetch();
        }
      } else {
        toast.error(err);
      }
    },
  });

  const handleSort = useCallback(
    (title: string) => {
      if (boards && subBoard) {
        if (title !== "all") {
          const tmp = subBoard.filter((item) => item.type === title);
          setBoards(tmp);
        }
      }
      if (title === "all") {
        setBoards(subBoard);
      }
    },
    [boards, subBoard]
  );

  useEffect(() => {
    getBoard({ variables: { category: subparam } });
  }, [getBoard, subparam]);

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
    if (data && data.getBoardByCategory && data.getBoardByCategory.data) {
      const res = data.getBoardByCategory.data;
      const dataSource: Array<TableBoardProps> = [];
      res.map((elem, i) => {
        const obj: TableBoardProps = {
          id: elem.id,
          index: res.length - i,
          title: elem.title,
          createdAt: getDate(elem.createdAt || ""),
          category: elem.category,
          private: elem.private || false,
          type: elem.type || "",
        };
        return dataSource.push(obj);
      });
      setBoards(dataSource);
      setSubBoard(dataSource);
    }
  }, [data]);

  if (loading) {
    return <>loading</>;
  }

  return (
    <Container>
      {isSortNeeded ? (
        <div className="sort">
          <Link
            to={`/admin/${param}/create-${param}?category=${subparam}&param=${param}&subparam=${subparam}`}
          >
            <Button type="primary" style={{ marginTop: 15, marginBottom: 20 }}>
              글쓰기
            </Button>
          </Link>
          <div className="sort-menu">
            {subparam.split("-")[1] === "valuenews"
              ? menu[0].title.map((item, idx) => {
                  return (
                    <Button
                      type="default"
                      key={idx}
                      className="sort-menu-button"
                      onClick={() => handleSort(item.title)}
                    >
                      {item.k_title}
                    </Button>
                  );
                })
              : subparam.split("-")[1] === "coopnews"
              ? menu[1].title.map((item, idx) => {
                  return (
                    <Button
                      type="default"
                      key={idx}
                      className="sort-menu-button"
                      onClick={() => handleSort(item.title)}
                    >
                      {item.k_title}
                    </Button>
                  );
                })
              : menu[2].title.map((item, idx) => {
                  return (
                    <Button
                      type="default"
                      key={idx}
                      className="sort-menu-button"
                      onClick={() => handleSort(item.title)}
                    >
                      {item.k_title}
                    </Button>
                  );
                })}
          </div>
        </div>
      ) : (
        <Link
          to={`/admin/${param}/create-${param}?category=${subparam}&param=${param}&subparam=${subparam}`}
        >
          <Button type="primary" style={{ marginTop: 15, marginBottom: 20 }}>
            글쓰기
          </Button>
        </Link>
      )}
      <Table dataSource={boards} rowKey={"id"}>
        <Column title="번호" dataIndex="index" key="index" width={80} />
        <Column
          title="제목"
          dataIndex="title"
          key="title"
          ellipsis={true}
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
        <Column
          title="작성일"
          dataIndex="createdAt"
          key="createdAt"
          width={120}
        />
        <Column
          title="공개여부"
          key="public"
          width={100}
          render={(text, record: TableBoardProps) => (
            <StyledSpace size="middle" private={record.private}>
              <span>{record.private ? "비공개" : "공개"}</span>
            </StyledSpace>
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
                onClick={() => deleteBoard({ variables: { id: record.id } })}
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

export default StoragePage;

interface StyleProps {
  private: boolean;
}

const StyledSpace = styled(Space)<StyleProps>`
  & span {
    color: ${(props) => (props.private ? "#ff4448" : "#27ae60")};
  }
`;
export const Container = styled.div`
  & .sort {
    display: flex;
    justify-content: space-between;
    padding-right: 30px;
    align-items: center;
    & .sort-menu {
      display: flex;
      & .sort-menu-button {
        &:not(:last-child) {
          margin-right: 15px;
        }
      }
    }
  }
`;
