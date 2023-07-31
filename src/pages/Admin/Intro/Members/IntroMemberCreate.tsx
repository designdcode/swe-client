import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import styled from "@emotion/styled";
import { Button, Form, Input, Select } from "antd";
import {
  CreateMemberInput,
  useCreateMemberMutation,
} from "../../../../typings/api.d";
import { useHistory } from "react-router";
import { departments } from "./department";

export const IntroMemberCreate: FC = () => {
  const history = useHistory();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [job, setJob] = useState<string>();
  const [department, setDepartment] = useState<string>();
  const [jobTitle, setJobTitle] = useState<string>();

  const [createMember] = useCreateMemberMutation();

  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement>,
      setter: Dispatch<SetStateAction<string | undefined>>
    ) => {
      setter(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    async (value: CreateMemberInput) => {
      await createMember({
        variables: {
          args: value,
        },
        onCompleted: () => {
          history.push({
            pathname: `/admin/intro/list/intro-task`,
          });
        },
      });
    },
    [history, createMember]
  );

  return (
    <Container>
      <Form
        onFinish={handleSubmit}
        initialValues={{ remember: true }}
        name="upload-member"
        wrapperCol={{ span: 16 }}
        labelCol={{
          style: {
            width: "80px",
          },
        }}
      >
        <Form.Item name="memberName" label="이름" required>
          <Input
            type="text"
            onChange={(e) => handleChange(e, setName)}
            value={name}
          />
        </Form.Item>
        <Form.Item name="email" label="이메일" required>
          <Input
            type="email"
            onChange={(e) => handleChange(e, setEmail)}
            value={email}
          />
        </Form.Item>
        <Form.Item name="phoneNumber" label="내선번호" required>
          <Input
            type="text"
            onChange={(e) => handleChange(e, setPhoneNumber)}
            value={phoneNumber}
          />
        </Form.Item>
        <Form.Item name="jobTitle" label="직책 / 구분" required>
          <Input
            type="text"
            onChange={(e) => handleChange(e, setJobTitle)}
            value={jobTitle}
          />
        </Form.Item>
        <Form.Item name="job" label="담당업무">
          <Input
            type="text"
            onChange={(e) => handleChange(e, setJob)}
            value={job}
          />
        </Form.Item>
        <Form.Item name="department" label="담당부서" required>
          <Select
            value={department}
            onChange={(v) => {
              setDepartment(v);
            }}
            options={departments}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            저장
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export const Container = styled.div`
  & .link-checkbox {
    margin: 20px;
    margin-left: 40px;
  }

  & .upload-list-inline {
    width: 200px;
    margin-right: 8px;
  }

  & .ant-upload-list-picture-container {
    width: 300px;
  }
  & .ant-upload-list-item-info {
    width: 300px;
  }
`;
