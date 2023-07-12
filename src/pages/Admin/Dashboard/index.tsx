import React, { useEffect, useState } from "react";
import { Container, Col, TableRowSpan } from "./styles";
import { Row, Typography, Table, Divider } from "antd";
import Column from "antd/lib/table/Column";
import { Link, useLocation } from "react-router-dom";
import { getDate } from "../../../utils/convertDate";
import Moment from "react-moment";
import { useBoardContext } from "../../../contexts";
import { BoardQuery, BoardsQuery } from "../../../typings/api.d";

interface LocationProps {
  refresh?: boolean;
}

const Dashboard: React.VFC = () => {
  const { boards, loading, refetch } = useBoardContext();
  const { state } = useLocation<LocationProps>();
  const [notice, setNotice] = useState<BoardsQuery["boards"]["data"]>();
  const [admission, setAdmission] = useState<BoardsQuery["boards"]["data"]>();

  useEffect(() => {
    if (boards) {
      setNotice(
        boards
          .filter((item) => item.category === "community-notice")
          .slice(0, 5)
      );
      setAdmission(
        boards
          .filter((item) => item.category === "community-administration")
          .slice(0, 5)
      );
    }
  }, [boards]);

  useEffect(() => {
    const excuteRefetch = () => {
      if (refetch) refetch();
    };
    if (state && state.refresh) excuteRefetch();
    return () => excuteRefetch();
  }, [refetch, state]);

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
                render={(value, record: BoardQuery["board"], i) => {
                  return (
                    <TableRowSpan key={i}>
                      <Link
                        to={`/admin/community/detail-community?category=${record.category}&id=${record._id}`}
                      >
                        {value}
                      </Link>
                    </TableRowSpan>
                  );
                }}
              />
              <Column
                dataIndex="inputCreatedAt"
                align="right"
                key={"noticetime"}
                render={(value, record: BoardQuery["board"], i) => {
                  return (
                    <span key={i}>
                      <Link
                        to={`/admin/community/detail-community?category=${record.category}&id=${record._id}`}
                      >
                        <Moment format={"YYYY/MM/DD"}>{value}</Moment>
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
                render={(value, record: BoardQuery["board"], id) => {
                  return (
                    <TableRowSpan key={id}>
                      <Link
                        to={`/admin/community/detail-community?category=${record.category}&id=${record._id}`}
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
                render={(value, record: BoardQuery["board"], idx) => {
                  return (
                    <span key={idx}>
                      <Link
                        to={`/admin/community/detail-community?category=${record.category}&id=${record._id}`}
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
