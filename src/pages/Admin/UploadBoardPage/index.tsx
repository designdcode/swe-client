import React, { useEffect, useState } from "react";
import queryString from "query-string";
import useInput from "../../../hooks/useInput";
import { Container } from "./styles";
import { Form, Input, Button, Checkbox, Upload, Modal } from "antd";
import { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "../../../queries/adminQuery";
import { toast } from "react-toastify";
import { useHistory, useLocation } from "react-router";
import { isLinkNeeded } from "../../../utils/isLinkNeeded";
import { UploadOutlined } from "@ant-design/icons";
import { fileUploader } from "../../../utils/imageUploader";
import { fileRemover } from "../../../utils/fileRemover";
import { getBase64 } from "../../../utils/getBaseUrl";

interface locationProps {
  search: string;
}

declare type UploadFileStatus =
  | "error"
  | "success"
  | "done"
  | "uploading"
  | "removed";

interface fileListProps {
  uid: string;
  name: string;
  url?: string;
  status?: UploadFileStatus;
  preview?: string;
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
  const [link, onChangeLink, setLink] = useInput("");
  const [showLink, setShowLink] = useState<boolean>(false);
  const [linkAdd, setLinkAdd] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string | undefined>();
  const [imgName, setImgName] = useState<string>();
  const [imgFileList, setImgFileList] = useState<Array<fileListProps>>([
    {
      uid: "default",
      name: "default",
      status: "done",
    },
  ]);

  // console.log(subparam?.includes("storage"), link);

  useEffect(() => {
    setLinkAdd(isLinkNeeded(subparam as string));
  }, [subparam]);

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

  const handleLinkAdd = useCallback(() => {
    setShowLink(!showLink);
    if (!showLink) {
      setLink("");
    }
  }, [showLink, setLink, setShowLink]);

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

  const handleImageUpload = useCallback(
    (file: any) => {
      const filename = file.name;
      setImgName(file.name);
      fileUploader("images", file, category as string, filename, setImgUrl);
    },
    [category]
  );

  const handleImageRemover = useCallback(() => {
    if (imgName && imgName.trim()) {
      fileRemover("images", category as string, imgName, setImgUrl);
    }
  }, [category, imgName]);

  const handlePreview = useCallback(
    async (file) => {
      if (!file.preview) {
        file.preview = await getBase64(file);
      }
    },
    [imgUrl]
  );

  return (
    <Container>
      <Form {...layout} name="upload-board" onFinish={onFinish}>
        <Form.Item name={["title"]} label="제목">
          <Input type="text" onChange={onChangeTitle} value={title} />
        </Form.Item>
        {linkAdd && (
          <>
            <div className="link-checkbox">
              <Checkbox onChange={handleLinkAdd}>
                {showLink ? "링크제거" : "링크추가"}
              </Checkbox>
            </div>
            {showLink && (
              <Form.Item name={["link"]} label="링크">
                <Input type="text" onChange={onChangeLink} value={link} />
              </Form.Item>
            )}
          </>
        )}
        <Upload
          listType="picture"
          customRequest={({ file, onSuccess }) => {
            console.log(onSuccess);
            handleImageUpload(file);
          }}
          className="upload-list-inline"
          maxCount={1}
          onRemove={() => handleImageRemover()}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
        <Modal>
          <img src={imgUrl} alt="img" />
        </Modal>
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
