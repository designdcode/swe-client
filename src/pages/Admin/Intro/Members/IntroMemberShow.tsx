import React, { FC, useCallback, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import styled from "@emotion/styled";
import { Button, Descriptions } from "antd";
import {
  useMemberQuery,
  useRemoveMemberMutation,
} from "../../../../typings/api.d";

export const IntroMemberShow: FC = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/")[4];
  const history = useHistory();
  const { data, loading, refetch } = useMemberQuery({
    skip: !id,
    variables: {
      _id: id,
    },
  });
  const [removeMember] = useRemoveMemberMutation();

  const handleRemove = useCallback(async () => {
    await removeMember({
      variables: {
        _id: id,
      },
      onCompleted: () => {
        history.goBack();
      },
    });
  }, [id, history, removeMember]);

  useEffect(() => {
    refetch({ _id: id });
  }, [id, refetch]);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <Container>
      <Button type="ghost" onClick={() => history.goBack()}>
        뒤로
      </Button>
      <Descriptions
        size="middle"
        bordered
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          backgroundColor: "white",
          padding: "15px",
        }}
        column={{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="이름">
          {data?.member.memberName}
        </Descriptions.Item>
        <Descriptions.Item label="이메일">
          {data?.member.email}
        </Descriptions.Item>
        <Descriptions.Item label="연락처">
          {data?.member.phoneNumber}
        </Descriptions.Item>
        <Descriptions.Item label="담당부서">
          {data?.member.department}
        </Descriptions.Item>
        <Descriptions.Item label="담당업무">
          {data?.member.job}
        </Descriptions.Item>
        <Descriptions.Item label="생성일자">
          {data?.member.createdAt.slice(0, 10)}
        </Descriptions.Item>
      </Descriptions>
      <div
        style={{
          maxWidth: "500px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          type="primary"
          onClick={() => {
            history.push(`/admin/intro/member-edit/${id}`);
          }}
        >
          수정하기
        </Button>
        <Button
          type="primary"
          style={{
            marginLeft: "20px",
          }}
          danger
          onClick={handleRemove}
        >
          삭제하기
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  & .button-group {
    display: flex;
    align-items: center;
  }
`;
