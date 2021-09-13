import React, { useEffect, useState } from "react";
import queryString from "query-string";
import useInput from "../../../hooks/useInput";
import { Container } from "./styles";
import { Form, Input, Button, Checkbox, Upload } from "antd";
import { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "../../../queries/adminQuery";
import { toast } from "react-toastify";
import { useHistory, useLocation } from "react-router";
import {
  contentSwitcher,
  fileSwitcher,
  imageSwitcher,
  linkSwitcher,
} from "../../../utils/switcher";
import { UploadOutlined } from "@ant-design/icons";
import { fileUploader } from "../../../utils/fileUploader";
import { fileRemover } from "../../../utils/fileRemover";
import { storage } from "../../../utils/firebase";

interface locationProps {
  search: string;
}

interface fileProps {
  url: string;
  fileName: string;
}

const layout = {
  wrapperCol: { span: 16 },
};

//upload progressing needed

const UploadBoardPage: React.VFC = () => {
  const history = useHistory();
  const { search } = useLocation<locationProps>();
  const queryObj = queryString.parse(search);
  const { category, param, subparam } = queryObj;
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");
  const [link, onChangeLink, setLink] = useInput("");
  const [showLink, setShowLink] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string | undefined>();
  const [imgName, setImgName] = useState<string>();
  const [file, setFile] = useState<fileProps[]>([]);

  const [isLinkNeeded, setIsLinkNeeded] = useState<boolean>(false);
  const [isFileNeeded, setIsFileNeeded] = useState<boolean>(false);
  const [isImageNeeded, setIsImageNeeded] = useState<boolean>(false);
  const [isContentNeeded, setIsContentNeeded] = useState<boolean>(true);

  useEffect(() => {
    setIsLinkNeeded(linkSwitcher(subparam as string));
    setIsImageNeeded(imageSwitcher(subparam as string));
    setIsFileNeeded(fileSwitcher(subparam as string));
    setIsContentNeeded(contentSwitcher(subparam as string));
  }, [subparam]);

  const [createBoard, { loading }] = useMutation(CREATE_BOARD, {
    onCompleted: ({ createBoard }) => {
      const { ok, err } = createBoard;
      if (ok) {
        setTitle("");
        setContent("");
        setLink("");
        setImgUrl("");
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
    if (file.length !== 0) {
      for (let i = 0; i < file.length; i++) {
        createBoard({
          variables: {
            title: title.trim() ? title : null,
            content: content.trim() ? content : null,
            link: link.trim() ? link : null,
            category,
            files: file,
          },
        });
      }
    } else if (imgUrl) {
      createBoard({
        variables: {
          title: title.trim() ? title : null,
          content: content.trim() ? content : null,
          link: link.trim() ? link : null,
          category,
          images: [{ url: imgUrl, fileName: imgName }],
        },
      });
    } else {
      createBoard({
        variables: {
          title: title.trim() ? title : null,
          content: content.trim() ? content : null,
          link: link.trim() ? link : null,
          category,
        },
      });
    }
  }, [title, content, link, createBoard, category, file, imgName, imgUrl]);

  const handleImageUpload = useCallback(
    (file: any) => {
      const filename = file.name;
      setImgName(file.name);
      fileUploader("images", file, category as string, filename, setImgUrl);
    },
    [category]
  );

  const handleFileUpload = useCallback(
    (file: any) => {
      const upload = storage.ref(`/files/${category}/${file.name}`).put(file);
      upload.on(
        "state_changed",
        (snapshot) => {},
        (err) => console.log(err),
        () => {
          storage
            .ref(`/files/${category}/${file.name}`)
            .getDownloadURL()
            .then((url) => {
              setFile((prev) => [...prev, { url: url, fileName: file.name }]);
              toast.success("파일 / 이미지가 업로드 되었습니다");
            });
        }
      );
    },
    [category]
  );

  const handleImageRemover = useCallback(() => {
    if (imgName && imgName.trim()) {
      fileRemover("images", category as string, imgName, setImgUrl);
    }
  }, [category, imgName]);

  const handleFileRemover = useCallback(
    (file: any) => {
      storage
        .ref(`/files/${category}/${file.name}`)
        .delete()
        .then(() => {
          setFile(
            file.filter((elem: fileProps) => elem.fileName !== file.name)
          );
          toast.success("업로드 된 파일/이미지가 삭제 되었습니다");
        })
        .catch((err) => toast.error(err));
    },
    [category]
  );

  return (
    <Container>
      <Form {...layout} name="upload-board" onFinish={onFinish}>
        <Form.Item name={["title"]} label="제목">
          <Input type="text" onChange={onChangeTitle} value={title} />
        </Form.Item>
        {isLinkNeeded && (
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
        {isImageNeeded && (
          <Upload
            style={{ marginBottom: 20 }}
            listType="picture"
            customRequest={({ file }) => handleImageUpload(file)}
            onChange={({ file }) => {
              if (imgUrl !== "") {
                file.status = "done";
              } else {
                file.status = "removed";
              }
            }}
            className="upload-list-inline"
            maxCount={1}
            onRemove={() => handleImageRemover()}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        )}
        {isFileNeeded && (
          <Upload
            multiple={true}
            customRequest={({ file }) => handleFileUpload(file)}
            onChange={({ file }) => {
              if (imgUrl !== "") {
                file.status = "done";
              } else {
                file.status = "removed";
              }
            }}
            maxCount={4}
            onRemove={(file) => handleFileRemover(file)}
          >
            <Button style={{ marginBottom: 20 }} icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>
        )}
        {isContentNeeded && (
          <Form.Item name={["content"]} label="내용" style={{ marginTop: 20 }}>
            <Input.TextArea
              onChange={onChangeContent}
              rows={10}
              value={content}
            />
          </Form.Item>
        )}
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
