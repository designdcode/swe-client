import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import { useLazyQuery } from "@apollo/client";
import { GET_BOARD } from "../../../queries/sharedQuery";
import {
  getBoardByCategory_getBoardByCategory_data,
  getBoardById,
} from "../../../typings/api";
import { Button, Descriptions } from "antd";
import { Container } from "./styles";

interface locationProps {
  search: string;
}

const BoardDetail: React.VFC = () => {
  const { search } = useLocation<locationProps>();
  const queryObj = queryString.parse(search);
  const { category, id } = queryObj;
  const [board, setBoard] =
    useState<getBoardByCategory_getBoardByCategory_data>();
  const [getBoardById, { loading, data, refetch }] =
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

  console.log(board);

  if (loading) {
    return <>loading</>;
  }

  return (
    <Container>
      <Descriptions
        bordered
        title="Custom Size"
        extra={<Button type="primary">Edit</Button>}
      >
        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
        <Descriptions.Item label="time">18:00:00</Descriptions.Item>
        <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item label="Official">$60.00</Descriptions.Item>
        <Descriptions.Item label="Config Info">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1<br />
        </Descriptions.Item>
      </Descriptions>
    </Container>
  );
};

export default BoardDetail;
