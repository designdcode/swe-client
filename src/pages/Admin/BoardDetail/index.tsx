import React, { useCallback, useEffect, useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation, useParams } from "react-router";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_BOARD_BY_ID } from "../../../queries/sharedQuery";
import {
  getBoardById,
  getBoardById_getBoardById_data,
  getBoardById_getBoardById_data_files,
} from "../../../typings/api";
import { Descriptions, Typography } from "antd";
import { Button, Container } from "./styles";
import { getDate } from "../../../hooks/getDate";
import { DELETE_BOARD } from "../../../queries/adminQuery";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

interface locationProps {
  search: string;
}

interface paramProps {
  param: string;
}

const BoardDetail: React.VFC = () => {
  const { search } = useLocation<locationProps>();
  const { param } = useParams<paramProps>();
  const history = useHistory();
  const queryObj = queryString.parse(search);
  const { id, category } = queryObj;
  const [board, setBoard] = useState<getBoardById_getBoardById_data>();
  const [files, setFiles] =
    useState<(getBoardById_getBoardById_data_files | undefined | null)[]>();
  const [getBoardById, { loading, data }] =
    useLazyQuery<getBoardById>(GET_BOARD_BY_ID);

  const [deleteBoard] = useMutation(DELETE_BOARD, {
    onCompleted: ({ deleteBoard }) => {
      const { ok, err } = deleteBoard;
      if (ok) {
        toast.success("게시물이 삭제 되었습니다.");
        history.push({
          pathname: `/admin/${param}/${category}`,
          state: { refresh: true },
        });
      } else {
        console.log(err);
        toast.error("게시물을 삭제 할 수 없습니다");
      }
    },
  });

  const handleDeleteBoard = useCallback(() => {
    deleteBoard({
      variables: {
        id: parseInt(id as string, 10),
      },
    });
  }, [id, deleteBoard]);

  useEffect(() => {
    if (id) {
      getBoardById({ variables: { id: parseInt(id as string, 10) } });
    }
  }, [id, getBoardById]);

  useEffect(() => {
    if (data && data.getBoardById && data.getBoardById.data) {
      setBoard(data.getBoardById.data);
    }
    if (
      data &&
      data.getBoardById &&
      data.getBoardById.data &&
      data.getBoardById.data.files
    ) {
      setFiles(data.getBoardById.data.files);
    }
  }, [data]);

  if (loading) {
    return <>loading</>;
  }

  return (
    <Container>
      <Button type="ghost" onClick={() => history.goBack()}>
        뒤로
      </Button>
      <Descriptions
        bordered
        // column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        layout="horizontal"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Descriptions.Item label="제목" span={4} labelStyle={{ width: 100 }}>
          <Typography.Title level={3}>{board?.title}</Typography.Title>
        </Descriptions.Item>
        <Descriptions.Item label="작성일" span={4} labelStyle={{ width: 100 }}>
          {getDate(board?.createdAt || "")}
        </Descriptions.Item>
        <Descriptions.Item
          label="첨부파일"
          span={4}
          labelStyle={{ width: 100 }}
        >
          {files && files.length !== 0 ? (
            <>
              {files.map((elem, idx) => {
                return (
                  <span key={idx} style={{ display: "inline-block" }}>
                    <a
                      href={elem?.url}
                      download
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      {elem?.fileName}
                    </a>
                  </span>
                );
              })}
            </>
          ) : (
            <>첨부파일 없음</>
          )}
        </Descriptions.Item>
        <Descriptions.Item label="내용" span={4}>
          <span>{board?.content}</span>
        </Descriptions.Item>
      </Descriptions>
      <div className="button-group">
        <Link
          to={`/admin/${param}/edit-${param}?category=${category}&id=${id}`}
        >
          <Button type="primary">수정</Button>
        </Link>
        <Button type="primary" danger onClick={handleDeleteBoard}>
          삭제
        </Button>
      </div>
    </Container>
  );
};

export default BoardDetail;
