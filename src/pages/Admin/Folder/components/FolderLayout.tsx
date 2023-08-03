import React, { FC, useCallback, useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Breadcrumb, Form, Input, Layout, Menu, Modal, Typography } from "antd";
import { useFolderContext } from "../../../../contexts";
import { useHistory, useParams } from "react-router";
import { useCreateFolderMutation } from "../../../../typings/api.d";
import { toast } from "react-toastify";
import { PlusCircleOutlined } from "@ant-design/icons";
import { ItemType } from "antd/lib/menu/hooks/useItems";

const { Content, Sider } = Layout;

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
  const { parentFolders, refetch } = useFolderContext();
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
      history.push(`/admin/folder/${parentFolders[0]._id}`);
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

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[(menuItems[0]?.key as string) || "1"]}
          mode="inline"
          items={[
            ...menuItems,
            {
              key: "create",
              label: "폴더 생성하기",
              icon: <PlusCircleOutlined />,
              onClick: () => setOpenModal(true),
            },
          ]}
        />
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
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            {children}
          </Content>
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
