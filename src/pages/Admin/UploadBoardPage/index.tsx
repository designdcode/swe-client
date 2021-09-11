import React, { useState } from "react";
import queryString from "query-string";
import useInput from "../../../hooks/useInput";
import { Container } from "./styles";
import { Form, Input, Button } from "antd";
import { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "../../../queries/adminQuery";
import { toast } from "react-toastify";
import { useHistory, useLocation } from "react-router";

interface locationProps {
  search: string;
}

const layout = {
  wrapperCol: { span: 16 },
};

const UploadBoardPage: React.FC = () => {
  const history = useHistory();
  const { search } = useLocation<locationProps>();
  const queryObj = queryString.parse(search);
  const { category, param, subparam } = queryObj;
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");
  const [showLink, setShowLink] = useState<boolean>(true);
  const [link, onChangeLink, setLink] = useInput("");

  const [createBoard, { loading }] = useMutation(CREATE_BOARD, {
    onCompleted: ({ createBoard }) => {
      const { ok, err } = createBoard;
      if (ok) {
        setTitle("");
        setContent("");
        setLink("");
        toast.success("게시물을 생성 하였습니다");
        history.push({
          pathname: `/admin/${param}/${subparam}`,
          state: { refresh: true },
        });
      } else {
        console.log(err);
        toast.error("게시물을 생성 할 수 없습니다");
      }
    },
  });

  const onFinish = useCallback(() => {
    createBoard({
      variables: {
        title: title.trim() ? title : null,
        content: content.trim() ? content : null,
        link: link.trim() ? link : null,
        category,
      },
    });
  }, [title, content, link, createBoard, category]);

  return (
    <Container>
      <Form {...layout} name="upload-board" onFinish={onFinish}>
        <Form.Item name={["title"]} label="제목">
          <Input onChange={onChangeTitle} value={title} />
        </Form.Item>
        {showLink && (
          <Form.Item name={["link"]} label="링크">
            <Input onChange={onChangeLink} value={link} />
          </Form.Item>
        )}
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

export default UploadBoardPage;
