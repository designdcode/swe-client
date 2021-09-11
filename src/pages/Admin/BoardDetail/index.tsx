import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router";
import { useLazyQuery } from "@apollo/client";
import { GET_BOARD } from "../../../queries/sharedQuery";
import {
  getBoardByCategory_getBoardByCategory_data,
  getBoardById,
} from "../../../typings/api";
import { Descriptions, Typography } from "antd";
import { Button, Container } from "./styles";
import { getDate } from "../../../hooks/getDate";

interface locationProps {
  search: string;
}

const BoardDetail: React.VFC = () => {
  const { search } = useLocation<locationProps>();
  const history = useHistory();
  const queryObj = queryString.parse(search);
  const { id } = queryObj;
  const [board, setBoard] =
    useState<getBoardByCategory_getBoardByCategory_data>();
  const [getBoardById, { loading, data }] =
    useLazyQuery<getBoardById>(GET_BOARD);

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
          <br />
          test
          <br />
          testest
        </Descriptions.Item>
      </Descriptions>
      <div className="button-group">
        <Button type="primary">수정</Button>
        <Button type="primary" danger>
          삭제
        </Button>
      </div>
    </Container>
  );
};

export default BoardDetail;
