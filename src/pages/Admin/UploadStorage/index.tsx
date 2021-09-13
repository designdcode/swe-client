import React, { useCallback, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Container } from "./styles";
import queryString from "query-string";
import useInput from "../../../hooks/useInput";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "../../../queries/adminQuery";
import { toast } from "react-toastify";
import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

interface locationProps {
  search: string;
}

interface fileListProps {
  uid: string;
  name: string;
  status?: string;
  url?: string;
}

const layout = {
  wrapperCol: { span: 16 },
};

const UploadStorage: React.VFC = () => {
  const history = useHistory();
  const { search } = useLocation<locationProps>();
  const queryObj = queryString.parse(search);
  const { category, param, subparam } = queryObj;
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");
  const [fileArr, setFileArr] = useState<[]>();
  const [fileNameArr, setFileNameArr] = useState<[]>();
  const fileList: Array<fileListProps> = [];

  const [createBoard, { loading }] = useMutation(CREATE_BOARD, {
    onCompleted: ({ createBoard }) => {
      const { ok, err } = createBoard;
      if (ok) {
        setTitle("");
        setContent("");
        toast.success("게시물을 생성 하였습니다.");
        history.push({
          pathname: `/admin/${param}/${subparam}`,
          state: { refresh: true },
        });
      } else {
        console.log(err);
        toast.error("게시물을 생성 할 수 없습니다.");
      }
    },
  });

  const handleFileUpload = useCallback((file) => {
    console.log(file);
  }, []);

  const onFinish = useCallback(() => {
    createBoard({
      variables: {
        title: title.trim() ? title : null,
        content: content.trim() ? content : null,
        category,
      },
    });
  }, [title, content, createBoard, category]);

  return (
    <Container>
      <Form name="upload-board" onFinish={onFinish}>
        <Form.Item name={["title"]} label="제목">
          <Input type="text" onChange={onChangeTitle} value={title} />
        </Form.Item>
        <Upload
          style={{ marginBottom: 20 }}
          customRequest={({ file }) => handleFileUpload(file)}
          maxCount={4}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
        <Form.Item name={["content"]} label="내용">
          <Input.TextArea
            onChange={onChangeContent}
            rows={10}
            value={content}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            {!loading ? "Submit" : "Uploading..."}
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default UploadStorage;
