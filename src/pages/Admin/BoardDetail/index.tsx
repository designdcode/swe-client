import React, { useCallback, useEffect, useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation, useParams } from "react-router";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_BOARD } from "../../../queries/sharedQuery";
import {
  getBoardByCategory_getBoardByCategory_data,
  getBoardById,
} from "../../../typings/api";
import { Descriptions, Typography } from "antd";
import { Button, Container } from "./styles";
import { getDate } from "../../../hooks/getDate";
import { DELETE_BOARD } from "../../../queries/adminQuery";
import { toast } from "react-toastify";

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
  const [board, setBoard] =
    useState<getBoardByCategory_getBoardByCategory_data>();
  const [getBoardById, { loading, data }] =
    useLazyQuery<getBoardById>(GET_BOARD);

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
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        layout="horizontal"
      >
        <Descriptions.Item label="제목" span={3} labelStyle={{ width: 100 }}>
          <Typography.Title level={3}>{board?.title}</Typography.Title>
        </Descriptions.Item>
        <Descriptions.Item label="작성일" span={3} labelStyle={{ width: 100 }}>
          {getDate(board?.createdAt || "")}
        </Descriptions.Item>
        <Descriptions.Item label="내용" span={3}>
          {board?.content}
        </Descriptions.Item>
      </Descriptions>
      <div className="button-group">
        <Button type="primary">수정</Button>
        <Button type="primary" danger onClick={handleDeleteBoard}>
          삭제
        </Button>
      </div>
    </Container>
  );
};

export default BoardDetail;
