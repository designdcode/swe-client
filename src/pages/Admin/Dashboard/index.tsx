import React, { useEffect, useState } from "react";
import { Container, Col } from "./styles";
import { Row, Typography, Table, Divider } from "antd";
import Column from "antd/lib/table/Column";
import { useHistory, useLocation } from "react-router-dom";
import { useBoardContext, useMenuContext } from "../../../contexts";
import { BoardsQuery } from "../../../typings/api.d";

interface LocationProps {
  refresh?: boolean;
}

const Dashboard: React.VFC = () => {
  const history = useHistory();
  const { boards, loading, refetch } = useBoardContext();
  const { state } = useLocation<LocationProps>();
  const { setChildMenu, setParentMenu, setShowMenuTitle } = useMenuContext();
  const [notice, setNotice] = useState<BoardsQuery["boards"]["data"]>();
  const [admission, setAdmission] = useState<BoardsQuery["boards"]["data"]>();

  useEffect(() => {
    if (boards) {
      setNotice(
        boards
          .filter((item) => item.category === "community-notice")
          .map((v) => ({
            ...v,
            inputCreatedAt:
              v.inputCreatedAt.slice(0, 10) || v.createdAt.slice(0, 10),
          }))
          .slice(0, 5)
      );
      setAdmission(
        boards
          .filter((item) => item.category === "community-administration")
          .map((v) => ({
            ...v,
            inputCreatedAt:
              v.inputCreatedAt.slice(0, 10) || v.createdAt.slice(0, 10),
          }))
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
      <Typography.Title level={2}>대시보드</Typography.Title>
      {loading ? (
        <>loading...</>
      ) : (
        <Row
          gutter={[30, 40]}
          justify={"space-between"}
          style={{
            marginTop: "20px",
          }}
        >
          <Col span={11}>
            <Table
              title={() => (
                <Typography.Title level={4}>공지사항</Typography.Title>
              )}
              dataSource={notice}
              showHeader={false}
              rowKey={"_id"}
              pagination={false}
              size="middle"
              style={{
                cursor: "pointer",
              }}
              onRow={(record) => {
                return {
                  onClick: () => {
                    setShowMenuTitle(true);
                    setParentMenu("알림마당");
                    setChildMenu("공지사항");
                    history.push(`/admin/community/show/${record._id}`);
                  },
                };
              }}
            >
              <Column
                dataIndex="title"
                align="left"
                ellipsis={true}
                key={"noticesubid"}
              />
              <Column
                dataIndex="inputCreatedAt"
                align="right"
                key={"noticetime"}
              />
            </Table>
          </Col>
          <Col span={11}>
            <Table
              title={() => (
                <Typography.Title level={4}>카드뉴스</Typography.Title>
              )}
              dataSource={admission}
              showHeader={false}
              rowKey={"_id"}
              pagination={false}
              size="middle"
              style={{
                cursor: "pointer",
              }}
              onRow={(record) => {
                return {
                  onClick: () => {
                    setShowMenuTitle(true);
                    setParentMenu("알림마당");
                    setChildMenu("카드뉴스");
                    history.push(`/admin/community/show/${record._id}`);
                  },
                };
              }}
            >
              <Column
                dataIndex="title"
                align="left"
                ellipsis={true}
                key={"subadmissionkey"}
              />
              <Column
                dataIndex="inputCreatedAt"
                align="right"
                key={"subadmissionkeydate"}
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
