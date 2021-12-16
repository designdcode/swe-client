import { Button, Form, Input } from "antd";
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

  return (
    <Container>
      <Form
        className="login-form"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <LoginHead>
          <img src="/img/logo.png" alt="main-logo" />
        </LoginHead>
        <LoginBody>
          <LoginDesc>desc</LoginDesc>
          <LoginInputBox>
            <Form.Item
              className="form-item"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input value={id} onChange={onChangeId} className="form-input" />
            </Form.Item>
            <Form.Item
              className={"form-item"}
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                value={pwd}
                onChange={onChangePwd}
                className="form-input"
              />
            </Form.Item>
          </LoginInputBox>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" disabled={loading}>
              Submit
            </Button>
          </Form.Item>
        </LoginBody>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  background-image: url("/img/loginBG.jpeg");
  height: 100%;
  width: 100%;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    max-width: 1920px;
    min-width: 1280px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    & .login-form {
      height: 720px;
      width: 650px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      margin: 65px 0;
    }
  }
`;

const LoginHead = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    margin: 20px 0;
    height: 50px;
  }
`;

const LoginBody = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url("/img/webLoginBG.jpeg");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    & .form-item {
    }

    & .form-input {
      width: 300px;
      height: 40px;
    }
  }
`;

const LoginDesc = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
  }
`;

const LoginInputBox = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
  }
`;
