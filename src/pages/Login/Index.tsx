import { Button, Form, Input } from "antd";
import axios from "axios";
import React, { useCallback } from "react";
import useInput from "../../hooks/useInput";
import styled from "@emotion/styled";
import {
  breakpoints,
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";
import { useMutation } from "@apollo/client";
import { UserLogin, UserLoginVariables } from "../../typings/api";
import { USER_LOGIN } from "../../queries/sharedQuery";
import { userLogin } from "../../utils/loginResolver";
import { toast } from "react-toastify";
import { forceHistory } from "../../utils/forceHistory";

const Login: React.VFC = () => {
  const [id, onChangeId, setId] = useInput("");
  const [pwd, onChangePwd, setpwd] = useInput("");

  const [UserLoginMutation, { data, loading }] = useMutation<
    UserLogin,
    UserLoginVariables
  >(USER_LOGIN, {
    onCompleted: ({ UserLogin }) => {
      const { success, error, data } = UserLogin;
      if (success && data) {
        userLogin(data.stno);
        toast.success("로그인 성공");
        setTimeout(() => {
          forceHistory.push("/main");
        }, 1000);
      } else {
        console.log(error);
        toast.error("아이디와 비밀번호를 확인 해 주세요");
      }
    },
  });

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = useCallback(async () => {
    await UserLoginMutation({
      variables: {
        id,
        pwd,
      },
    });
    setId("");
    setpwd("");
  }, [id, pwd, setId, setpwd, UserLoginMutation]);

  console.log(data);

  return (
    <Container>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input value={id} onChange={onChangeId} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password value={pwd} onChange={onChangePwd} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" disabled={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: ${breakpoints.pc}px;
    margin-top: 30px;
  }
`;
