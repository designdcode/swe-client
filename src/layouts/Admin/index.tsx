import React, { useCallback, useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb, Form, Input, Button } from "antd";
import { AdminNavData, NavProps, ObjProps } from "../../assets/AdminNavData";
import AdminRouteHandler from "../../utils/AdminRouteHandler";
import { Link, useHistory, useParams } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { adminLoginVar } from "../../utils/apollo";
import useInput from "../../hooks/useInput";
import { adminLogin, adminLogOut } from "../../utils/loginResolver";
import { toast } from "react-toastify";
import { UserOutlined, LockOutlined, LogoutOutlined } from "@ant-design/icons";
import { LoginContainer } from "./styles";
import { getSubTitle, getTitle } from "../../utils/getTitle";
import styled from "@emotion/styled";

interface ParamProps {
  param: string;
  subparam: string;
}

const Admin: React.FC = () => {
  const loginStatus = useReactiveVar(adminLoginVar);
  const history = useHistory();
  const { param, subparam } = useParams<ParamProps>();
  const [adminId, adminIdOnChange, setAdminId] = useInput("");
  const [adminPW, adminPWOnChange, setAdminPW] = useInput("");
  const [pickMenu, setPickMenu] = useState<string>("대시보드");
  const [parentMenu, setParentMenu] = useState<string>("대시보드");
  const [showBreadCrumb, setShowBreadCrumb] = useState<boolean>(false);
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  const onFinish = useCallback(() => {
    if (adminId === "adminswe" && adminPW === "adminswe") {
      setAdminId("");
      setAdminPW("");
      adminLogin();
      toast.success("로그인 되었습니다");
    } else {
      toast.error("아이디 & 암호가 틀립니다");
    }
  }, [adminId, adminPW, setAdminId, setAdminPW]);

  const handlePickMenu = useCallback((koMenu, koParentMenu) => {
    setShowBreadCrumb(true);
    setParentMenu(koParentMenu);
    setPickMenu(koMenu);
  }, []);

  const handleClickDashboard = useCallback(() => {
    setShowBreadCrumb(false);
    setParentMenu("대시보드");
    setPickMenu("대시보드");
  }, []);

  useEffect(() => {
    if (param !== "dashboard") {
      setShowBreadCrumb(true);
      setParentMenu(getTitle(param));
      setPickMenu(getSubTitle(param, subparam));
    }
  }, [param, subparam, history]);

  useEffect(() => {
    const time = localStorage.getItem("admin");
    if (time) {
      if (parseInt(time, 10) / 1000 < Date.now() / 1000) {
        adminLogOut();
      }
    }
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {loginStatus ? (
        <>
          <Header className="header">
            <div className="logo">
              <img src="/img/admin_logo.png" alt="logoimg" width={200} />
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Menu.Item
                key={1}
                onClick={() => {
                  adminLogOut();
                  history.push("/main");
                }}
              >
                메인으로 가기
              </Menu.Item>
              <Menu.Item key={2} onClick={() => adminLogOut()}>
                <LogoutOutlined /> Logout
              </Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["dashboard"]}
                defaultOpenKeys={["dashboard"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <Menu.Item key={"dashboard"} title="대시보드">
                  <Link
                    to={{
                      pathname: `/admin/dashboard/dashboard`,
                      state: { refresh: true },
                    }}
                    onClick={handleClickDashboard}
                  >
                    <span>대시보드</span>
                  </Link>
                </Menu.Item>
                {AdminNavData.map((data: NavProps) => {
                  return (
                    <SubMenu key={data.ko_title} title={data.ko_title}>
                      {data.subMenu.map((elem: ObjProps, i) => {
                        return (
                          <Menu.Item key={elem.title}>
                            <Link
                              to={`/admin/${data.title}/${
                                elem.isList ? "list" : "show"
                              }/${elem.key}`}
                              onClick={() =>
                                handlePickMenu(elem.ko_title, data.ko_title)
                              }
                            >
                              <span>{elem.ko_title}</span>
                            </Link>
                          </Menu.Item>
                        );
                      })}
                    </SubMenu>
                  );
                })}
                <SubMenu title="홍보영상">
                  <Menu.Item
                    onClick={() => {
                      setParentMenu("홍보영상");
                      setPickMenu("홍보영상링크");
                    }}
                  >
                    <Link to={`/admin/link/link`}>
                      <span>홍보영상링크</span>
                    </Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu title="팝업">
                  <Menu.Item
                    onClick={() => {
                      setParentMenu("팝업");
                      setPickMenu("팝업관리");
                    }}
                  >
                    <Link to={`/admin/popup/popup`}>
                      <span>팝업관리</span>
                    </Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              {showBreadCrumb && (
                <StyledBread style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item className="bread-item">
                    {parentMenu}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="bread-item">
                    {pickMenu}
                  </Breadcrumb.Item>
                </StyledBread>
              )}
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <AdminRouteHandler />
              </Content>
            </Layout>
          </Layout>
        </>
      ) : (
        <LoginContainer>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                value={adminId}
                onChange={adminIdOnChange}
                className="login-input"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                value={adminPW}
                onChange={adminPWOnChange}
                className={"login-input"}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </LoginContainer>
      )}
    </Layout>
  );
};

export default Admin;

const StyledBread = styled(Breadcrumb)`
  & .bread-item {
    font-size: 16px;
    font-weight: 600;
  }
`;
