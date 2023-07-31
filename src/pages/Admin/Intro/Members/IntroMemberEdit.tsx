import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { useHistory, useLocation } from "react-router";
import { Button, Form, Input, Select } from "antd";
import {
  CreateMemberInput,
  useMemberQuery,
  useUpdateMemberMutation,
} from "../../../../typings/api.d";
import { departments } from "./department";

export const IntroMemberEdit: FC = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const id = pathname.split("/")[4];

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [job, setJob] = useState<string>();
  const [department, setDepartment] = useState<string>();
  const [jobTitle, setJobTitle] = useState<string>();

  const { data, loading } = useMemberQuery({
    skip: !id,
    variables: {
      _id: id,
    },
    onCompleted: ({ member }) => {
      setName(member.memberName);
      setDepartment(member.department);
      setEmail(member.email);
      setPhoneNumber(member.phoneNumber);
      setJob(member.job || "");
      setJobTitle(member.jobTitle || "");
    },
  });

  const [updateMember] = useUpdateMemberMutation({
    onCompleted: () => {
      history.goBack();
    },
  });

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
      await updateMember({
        variables: {
          args: {
            _id: id,
            ...value,
            job: job || data?.member.job,
          },
        },
      });
    },
    [id, updateMember, data, job]
  );

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
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
            required
            placeholder={name}
            onChange={(e) => handleChange(e, setName)}
            value={name}
          />
        </Form.Item>
        <Form.Item name="email" label="이메일" required>
          <Input
            type="email"
            placeholder={email}
            required
            onChange={(e) => handleChange(e, setEmail)}
            value={email}
          />
        </Form.Item>
        <Form.Item name="phoneNumber" label="내선번호" required>
          <Input
            type="text"
            required
            placeholder={phoneNumber}
            onChange={(e) => handleChange(e, setPhoneNumber)}
            value={phoneNumber}
          />
        </Form.Item>
        <Form.Item name="jobTitle" label="직책 / 구분" required>
          <Input
            type="text"
            placeholder={jobTitle}
            onChange={(e) => handleChange(e, setJobTitle)}
            value={jobTitle}
          />
        </Form.Item>
        <Form.Item name="job" label="담당업무">
          <Input
            type="text"
            placeholder={job}
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
            placeholder={
              departments.find((d) => d.value === department)?.label || ""
            }
            options={departments}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            저장
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
