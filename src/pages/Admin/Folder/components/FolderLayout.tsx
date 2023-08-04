import React, { FC, useCallback, useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Form, Input, Layout, Menu, Modal, Typography } from "antd";
import styled from "@emotion/styled";
import { useFolderContext } from "../../../../contexts";
import { useHistory, useParams } from "react-router";
import {
  FolderQuery,
  useCreateFolderMutation,
} from "../../../../typings/api.d";
import { toast } from "react-toastify";
import { ItemType } from "antd/lib/menu/hooks/useItems";

const { Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

interface ItemProp {
  _id?: string;
  label?: string;
  children?: ItemType[];
  onClick?: () => void;
}

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: ItemProp[],
  onClick?: () => void
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    onClick,
  } as MenuItem;
};

export const FolderLayout: FC = ({ children }) => {
  const [form] = Form.useForm();
  const params: Record<string, string> = useParams();
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const { folders, parentFolders, refetch } = useFolderContext();
  const [createFolder] = useCreateFolderMutation();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const menuItems = (parentFolders || []).map((f) => {
    return getItem(f.label, f._id, undefined, undefined, () => {
      history.push(`/admin/folder/${f._id}`);
    });
  });

  useEffect(() => {
    if (
      params &&
      params.subparam &&
      params.subparam === "layout" &&
      parentFolders &&
      parentFolders.length > 0
    ) {
      history.push(
        `/admin/folder/${parentFolders[0]._id}/${parentFolders[0].label}`
      );
    }
  }, [params, parentFolders, history]);

  const handleCreateFolder = useCallback(async () => {
    const label = form.getFieldValue("label");
    if (label) {
      await createFolder({
        variables: {
          args: {
            label,
            value: label,
          },
        },
        onCompleted: () => {
          refetch();
          setOpenModal(false);
          toast.success("폴더가 생성되었습니다.");
          form.setFieldValue("label", undefined);
        },
      });
    }
  }, [form, createFolder, refetch]);

  const renderMenuItem = useCallback(
    (children: NonNullable<FolderQuery["folder"]["children"]>) => {
      return children.map((c) => {
        const foundFolder = folders.find((f) => f._id === c._id);
        if (foundFolder?.children && foundFolder.children.length > 0) {
          return (
            <Menu.SubMenu
              key={c._id}
              title={foundFolder.label}
              onTitleClick={() => {
                history.push(
                  `/admin/folder/${foundFolder._id}/${foundFolder.label}`
                );
              }}
            >
              {renderMenuItem(foundFolder.children)}
            </Menu.SubMenu>
          );
        } else {
          return (
            <Menu.Item
              key={c._id}
              onClick={() => {
                history.push(`/admin/folder/${c._id}/${c.label}`);
              }}
            >
              {foundFolder?.label}
            </Menu.Item>
          );
        }
      });
    },
    [folders, history]
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        width={250}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[(menuItems[0]?.key as string) || "1"]}
          mode="inline"
        >
          {parentFolders?.map((f, i) => {
            if (f.children && f.children.length > 0) {
              const childFolder = folders.find((child) => f._id === child._id);
              return (
                <Menu.SubMenu
                  key={f._id}
                  title={f.label}
                  onTitleClick={() => {
                    history.push(`/admin/folder/${f._id}/${f.label}`);
                  }}
                >
                  {renderMenuItem(childFolder?.children || [])}
                </Menu.SubMenu>
              );
            } else {
              return (
                <Menu.Item
                  key={f._id}
                  onClick={() => {
                    history.push(`/admin/folder/${f._id}/${f.label}`);
                  }}
                >
                  {f.label}
                </Menu.Item>
              );
            }
          })}
          <Menu.Item key="create" onClick={() => setOpenModal(true)}>
            폴더 생성하기
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Modal
          open={openModal}
          onOk={handleCreateFolder}
          onCancel={() => setOpenModal(false)}
        >
          <Form form={form}>
            <Form.Item name="label" required label="폴더명">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
        {parentFolders && parentFolders.length > 0 ? (
          <Content style={{ margin: "0 16px" }}>{children}</Content>
        ) : (
          <Content
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography.Title level={4}>폴더가 없습니다.</Typography.Title>
          </Content>
        )}
      </Layout>
    </Layout>
  );
};

const Sider = styled(Layout.Sider)`
  .ant-menu > .ant-menu-item-active,
  .ant-menu > .ant-menu-item-open,
  .ant-menu > .ant-menu-submenu-open,
  .ant-menu > .ant-menu-item-selected,
  .ant-menu > .ant-menu-submenu-selected {
    font-size: 18px;
    transition: font-size 0.05s;
  }
`;
