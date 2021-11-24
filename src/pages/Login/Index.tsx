import { Button, Checkbox, Form, Input, Radio } from "antd";
import axios from "axios";
import React, { useCallback, useState } from "react";
import useInput from "../../hooks/useInput";
import { Container } from "./styles";

const Login: React.VFC = () => {
  const [id, onChangeId, setId] = useInput("");
  const [pwd, onChangePwd, setpwd] = useInput("");

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = useCallback(async () => {
    await axios.get("http://localhost:3000/login", {
      params: {
        id,
        pwd,
      },
    });
    // await axios.get(`https://lily.sunmoon.ac.kr/CheckIDPW_XML.aspx?id=${id}&pw=${pwd}`)
  }, [id, pwd]);

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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default Login;
