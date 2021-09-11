import React, { useCallback, useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "./admin.css";
import {
  AdminNavData,
  NavProps,
  ObjProps,
} from "../../assets/AdminNav/AdminNavData";
import AdminRouteHandler from "../../utils/AdminRouteHandler";
import { Link } from "react-router-dom";

interface ParamProps {
  param: string;
  subparam: string;
}

const Admin: React.FC = () => {
  const [pickMenu, setPickMenu] = useState<string>("대시보드");
  const [parentMenu, setParentMenu] = useState<string>("대시보드");
  const [params, setParams] = useState<ParamProps>({
    param: "dashboard",
    subparam: "dashboard",
  });
  const [showBreadCrumb, setShowBreadCrumb] = useState<boolean>(false);
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  const handlePickMenu = useCallback(
    (koMenu, koParentMenu, menu, parentMenu) => {
      setShowBreadCrumb(true);
      setParentMenu(koParentMenu);
      setPickMenu(koMenu);
      setParams({
        param: menu,
        subparam: parentMenu,
      });
    },
    []
  );

  const handleClickDashboard = useCallback(() => {
    setShowBreadCrumb(false);
    setParentMenu("대시보드");
    setPickMenu("대시보드");
    setParams({
      param: "dashboard",
      subparam: "dashboard",
    });
  }, []);

  return (
    <Layout style={{ height: "100vh" }}>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Menu.Item key={1}>Logout</Menu.Item>
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
                to={`/admin/dashboard/dashboard`}
                onClick={handleClickDashboard}
              >
                <span>대시보드</span>
              </Link>
            </Menu.Item>
            {AdminNavData.map((data: NavProps) => {
              return (
                <SubMenu key={data.ko_title} title={data.ko_title}>
                  {data.subMenu.map((elem: ObjProps) => {
                    return (
                      <Menu.Item key={elem.key}>
                        <Link
                          to={`/admin/${data.title}/${elem.key}`}
                          onClick={() =>
                            handlePickMenu(
                              elem.ko_title,
                              data.ko_title,
                              data.title,
                              elem.key
                            )
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
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          {showBreadCrumb && (
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>{parentMenu}</Breadcrumb.Item>
              <Breadcrumb.Item>{pickMenu}</Breadcrumb.Item>
            </Breadcrumb>
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
    </Layout>
  );
};

export default Admin;
