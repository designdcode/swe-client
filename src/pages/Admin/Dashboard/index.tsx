import React, { useEffect, useState } from "react";
import { Container, Col, TableRowSpan } from "./styles";
import { Row, Typography, Table, Divider } from "antd";
import { useQuery } from "@apollo/client";
import { GET_BOARD } from "../../../queries/sharedQuery";
import { getBoard, getBoard_getBoard_data } from "../../../typings/api";
import Column from "antd/lib/table/Column";
import { getDate } from "../../../hooks/getDate";
import { Link, useHistory, useLocation } from "react-router-dom";

interface LocationProps {
  refresh?: boolean;
}

const Dashboard: React.VFC = () => {
  const history = useHistory();
  const { data, loading, refetch } = useQuery<getBoard>(GET_BOARD);
  const { state } = useLocation<LocationProps>();
  const [notice, setNotice] = useState<
    Array<getBoard_getBoard_data> | undefined
  >();
  const [admission, setAdmission] = useState<
    Array<getBoard_getBoard_data> | undefined
  >();

  useEffect(() => {
    if (data?.getBoard.data) {
      setNotice(
        data.getBoard.data
          .filter((item) => item.category.includes("notice"))
          .slice(0, 5)
      );
      setAdmission(
        data.getBoard.data
          .filter((item) => item.category.includes("admission"))
          .slice(0, 5)
      );
    }
  }, [data]);

  useEffect(() => {
    const excuteRefetch = () => {
      if (refetch) refetch();
    };
    if (state && state.refresh) excuteRefetch();
    return () => excuteRefetch();
  }, [refetch, state]);

  if (loading) {
    return <>loading...</>;
  }
  return (
    <Container>
      <Row gutter={[30, 40]} justify={"space-between"}>
        <Col span={11}>
          <Table
            title={() => (
              <Typography.Title level={4}>공지사항</Typography.Title>
            )}
            dataSource={notice}
            showHeader={false}
            rowKey={"id"}
            pagination={false}
            size="middle"
          >
            <Column
              dataIndex="title"
              align="left"
              ellipsis={true}
              render={(value, record: getBoard_getBoard_data) => {
                return (
                  <TableRowSpan>
                    <Link
                      to={`/admin/community/detail-community?category=${record.category}&id=${record.id}`}
                    >
                      {value}
                    </Link>
                  </TableRowSpan>
                );
              }}
            />
            <Column
              dataIndex="createdAt"
              align="right"
              render={(value, record: getBoard_getBoard_data) => {
                return (
                  <TableRowSpan>
                    <Link
                      to={`/admin/community/detail-community?category=${record.category}&id=${record.id}`}
                    >
                      {getDate(value)}
                    </Link>
                  </TableRowSpan>
                );
              }}
            />
          </Table>
        </Col>
        <Col span={11}>
          <Table
            title={() => (
              <Typography.Title level={4}>학사공지</Typography.Title>
            )}
            dataSource={admission}
            showHeader={false}
            rowKey={"id"}
            pagination={false}
            size="middle"
          >
            <Column
              dataIndex="title"
              align="left"
              ellipsis={true}
              render={(value, record: getBoard_getBoard_data) => {
                return (
                  <TableRowSpan>
                    <Link
                      to={`/admin/community/detail-community?category=${record.category}&id=${record.id}`}
                    >
                      {value}
                    </Link>
                  </TableRowSpan>
                );
              }}
            />
            <Column
              dataIndex="createdAt"
              align="right"
              render={(value, record: getBoard_getBoard_data) => {
                return (
                  <TableRowSpan>
                    <Link
                      to={`/admin/community/detail-community?category=${record.category}&id=${record.id}`}
                    >
                      {getDate(value)}
                    </Link>
                  </TableRowSpan>
                );
              }}
            />
          </Table>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Typography.Title level={4}>학사공지</Typography.Title>
        <Table></Table>
      </Row>
    </Container>
  );
};

export default Dashboard;
