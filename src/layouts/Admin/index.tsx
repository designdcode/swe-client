import React, { useCallback, useEffect } from "react";
import { Layout, Menu, Breadcrumb, Form, Input, Button } from "antd";
import { AdminNavData, NavProps, ObjProps } from "../../assets/AdminNavData";
import AdminRouteHandler from "../../utils/AdminRouteHandler";
import { useHistory } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { adminLoginVar } from "../../utils/apollo";
import useInput from "../../hooks/useInput";
import { adminLogin, adminLogOut } from "../../utils/loginResolver";
import { toast } from "react-toastify";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LoginContainer } from "./styles";
import styled from "@emotion/styled";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { useMenuContext } from "../../contexts";

const Admin: React.FC = () => {
  const loginStatus = useReactiveVar(adminLoginVar);
  const history = useHistory();
  const [adminId, adminIdOnChange, setAdminId] = useInput("");
  const [adminPW, adminPWOnChange, setAdminPW] = useInput("");
  const {
    parentMenu,
    setParentMenu,
    childMenu,
    setChildMenu,
    showMenuTitle,
    setShowMenuTitle,
  } = useMenuContext();
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

  const handlePickMenu = useCallback(
    (koMenu, koParentMenu) => {
      setShowMenuTitle(true);
      setParentMenu(koParentMenu);
      setChildMenu(koMenu);
    },
    [setParentMenu, setChildMenu, setShowMenuTitle]
  );

  const handleClickDashboard = useCallback(() => {
    setShowMenuTitle(false);
    setParentMenu("대시보드");
    setChildMenu("대시보드");
  }, [setParentMenu, setChildMenu, setShowMenuTitle]);

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
          <Header
            className="header"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="logo">
              <img src="/img/admin_logo.png" alt="logoimg" width={200} />
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ display: "flex", justifyContent: "flex-end" }}
              items={[
                {
                  key: "main",
                  label: "메인으로가기",
                  onClick: () => {
                    adminLogOut();
                    history.push("/main");
                  },
                },
                {
                  key: "logout",
                  label: "로그아웃",
                  onClick: () => {
                    adminLogOut();
                  },
                },
              ]}
            />
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["dashboard"]}
                defaultOpenKeys={["dashboard"]}
                style={{ height: "100%", borderRight: 0 }}
                items={[
                  {
                    key: "dashboard",
                    label: "대시보드",
                    onClick: () => {
                      history.push({
                        pathname: `/admin/dashboard/dashboard`,
                        state: { refresh: true },
                      });
                      handleClickDashboard();
                    },
                  },
                  ...AdminNavData.map((d: NavProps, i): ItemType => {
                    return {
                      key: i,
                      label: d.ko_title,
                      children: d.subMenu.map((sub: ObjProps, i): ItemType => {
                        return {
                          key: `${sub.ko_title}/${d.title}, ${i}`,
                          label: sub.ko_title,
                          onClick: () => {
                            history.push(
                              `/admin/${d.title}/${
                                sub.isList ? "list" : "show"
                              }/${sub.key}`
                            );
                            handlePickMenu(sub.ko_title, d.ko_title);
                          },
                        };
                      }),
                    };
                  }),
                  {
                    key: "홍보영상",
                    label: "홍보영상",
                    children: [
                      {
                        key: "홍보영상링크",
                        label: "홍보영상링크",
                        onClick: () => {
                          setParentMenu("홍보영상");
                          setChildMenu("홍보영상링크");
                          history.push(`/admin/link/link`);
                        },
                      },
                    ],
                  },
                  {
                    key: "팝업",
                    label: "팝업",
                    children: [
                      {
                        key: "팝업관리",
                        label: "팝업관리",
                        onClick: () => {
                          setParentMenu("팝업");
                          setChildMenu("팝업관리");
                          history.push(`/admin/popup/popup`);
                        },
                      },
                    ],
                  },
                  {
                    key: "폴더",
                    label: "폴더",
                    children: [
                      {
                        key: "폴더관리",
                        label: "폴더관리",
                        onClick: () => {
                          setParentMenu("폴더");
                          setChildMenu("폴더관리");
                          history.push(`/admin/folder/layout`);
                        },
                      },
                    ],
                  },
                ]}
              />
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              {showMenuTitle && (
                <StyledBread style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item className="bread-item">
                    {parentMenu}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="bread-item">
                    {childMenu}
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
