import { Button, Form, Input } from "antd";
import React, { useCallback } from "react";
import useInput from "../../hooks/useInput";
import styled from "@emotion/styled";
import {
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

  const [UserLoginMutation, { loading }] = useMutation<
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
          <LoginDesc>
            <LoginDescTitle>로그인</LoginDescTitle>
            <LoginDescSub>
              본교 포털 아이디로 로그인 해주시기 바랍니다.
            </LoginDescSub>
          </LoginDesc>
          <LoginInputBox>
            <Form.Item
              className="form-item"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                placeholder="포털 아이디"
                value={id}
                onChange={onChangeId}
                className="form-input"
              />
            </Form.Item>
            <Form.Item
              className={"form-item"}
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="비밀번호"
                value={pwd}
                onChange={onChangePwd}
                className="form-input"
              />
            </Form.Item>
          </LoginInputBox>
          <Form.Item>
            <StyledButton type="primary" htmlType="submit" disabled={loading}>
              로그인
            </StyledButton>
          </Form.Item>
          <BottomLogo>
            <img src="/img/logo.png" alt="main-logo" />
          </BottomLogo>
        </LoginBody>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    height: 80%;
    width: 375px;
    margin: 0 auto;
    & .login-form {
      height: 100%;
      display: flex;
      flex-direction: column;
      margin: 20px 0;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 100%;

    background-image: url("/img/loginBG.jpeg");
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
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    margin: 20px 0;
    height: 50px;
  }
`;

const LoginBody = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 170px;
    flex-direction: column;
    background-image: url("/img/mobileLoginBG.jpeg");
    & .form-item {
    }

    & .form-input {
      width: 300px;
      height: 40px;
    }
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    margin-top: 15px;
    margin-bottom: 30px;
  }
`;

const LoginDescTitle = styled.div`
  color: #04083e;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    text-align: center;
    font-weight: 600;
    font-size: 32px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    font-size: 27px;
    letter-spacing: 0.27px;
  }
`;

const LoginDescSub = styled.div`
  color: #444444;
  font-weight: 600;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    font-size: 14px;
    margin-top: 15px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    font-size: 14px;
    letter-spacing: 0.14px;
  }
`;

const LoginInputBox = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
  }
`;

const StyledButton = styled(Button)`
  width: 300px;
  height: 45px;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    background-color: #0c1b58;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    font-size: 16px;
    letter-spacing: 0.23px;
    background-color: #0c1b58;
    &:hover {
      background-color: #0c1b58;
    }
  }
`;

const BottomLogo = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    padding: 0 30px;
    display: flex;
    justify-content: flex-end;
    & img {
      width: 180px;
      object-fit: contain;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: none;
  }
`;
