import React, { useEffect, useState } from "react";
import { Container, Col, TableRowSpan } from "./styles";
import { Row, Typography, Table, Divider } from "antd";
import { useQuery } from "@apollo/client";
import { GET_BOARD, GET_LINK } from "../../../queries/sharedQuery";
import {
  getBoard,
  getBoard_getBoard_data,
  getLinks,
} from "../../../typings/api";
import Column from "antd/lib/table/Column";
import { Link, useLocation } from "react-router-dom";
import { getDate } from "../../../utils/convertDate";

interface LocationProps {
  refresh?: boolean;
}

const Dashboard: React.VFC = () => {
  const { data, loading, refetch, error } = useQuery<getBoard>(GET_BOARD);
  const { refetch: linkRefetch, error: linkError } =
    useQuery<getLinks>(GET_LINK);
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
          .filter((item) => item.category.includes("community-notice"))
          .slice(0, 5)
      );
      setAdmission(
        data.getBoard.data
          .filter((item) => item.category.includes("community-administration"))
          .slice(0, 5)
      );
    }
  }, [data]);

  useEffect(() => {
    const excuteRefetch = () => {
      if (refetch) refetch();
      if (linkRefetch) linkRefetch();
    };
    if (state && state.refresh) excuteRefetch();
    return () => excuteRefetch();
  }, [refetch, state, linkRefetch]);

  if (error) console.error(error);
  if (linkError) console.error(linkError);

  return (
    <Container>
      {loading ? (
        <>loading...</>
      ) : (
        <Row gutter={[30, 40]} justify={"space-between"}>
          <Col span={11}>
            <Table
              title={() => (
                <Typography.Title level={4}>공지사항</Typography.Title>
              )}
              dataSource={notice}
              showHeader={false}
              rowKey={"noticeid"}
              pagination={false}
              size="middle"
            >
              <Column
                dataIndex="title"
                align="left"
                ellipsis={true}
                key={"noticesubid"}
                render={(value, record: getBoard_getBoard_data, i) => {
                  return (
                    <TableRowSpan key={i}>
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
                key={"noticetime"}
                render={(value, record: getBoard_getBoard_data, i) => {
                  return (
                    <span key={i}>
                      <Link
                        to={`/admin/community/detail-community?category=${record.category}&id=${record.id}`}
                      >
                        {getDate(value)}
                      </Link>
                    </span>
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
              rowKey={"admissionkey"}
              pagination={false}
              size="middle"
            >
              <Column
                dataIndex="title"
                align="left"
                ellipsis={true}
                key={"subadmissionkey"}
                render={(value, record: getBoard_getBoard_data, id) => {
                  return (
                    <TableRowSpan key={id}>
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
                key={"subadmissionkeydate"}
                render={(value, record: getBoard_getBoard_data, idx) => {
                  return (
                    <span key={idx}>
                      <Link
                        to={`/admin/community/detail-community?category=${record.category}&id=${record.id}`}
                      >
                        {getDate(value)}
                      </Link>
                    </span>
                  );
                }}
              />
            </Table>
          </Col>
        </Row>
      )}
      <Divider />
    </Container>
  );
};

export default Dashboard;
