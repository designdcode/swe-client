import React from "react";
import { Container, Col } from "./styles";
import { Row, Typography } from "antd";

const Dashboard = () => {
  return (
    <Container>
      <Row gutter={[30, 40]} justify={"space-between"}>
        <Col span={11}>
          <Typography.Title level={4}>공지사항</Typography.Title>
        </Col>
        <Col span={11}>
          <Typography.Title level={4}>학사공지</Typography.Title>
        </Col>
        <Col span={11}>
          <Typography.Title level={4}>자료실</Typography.Title>
        </Col>
        <Col span={11}>
          <Typography.Title level={4}>something</Typography.Title>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
