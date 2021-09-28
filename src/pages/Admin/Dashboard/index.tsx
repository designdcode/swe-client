import React from "react";
import { Container, Col } from "./styles";
import { Row } from "antd";

const Dashboard = () => {
  return (
    <Container>
      <Row gutter={[30, 40]} justify={"space-between"}>
        <Col span={11}>col1</Col>
        <Col span={11}>col2</Col>
        <Col span={11}>col3</Col>
        <Col span={11}>col4</Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
