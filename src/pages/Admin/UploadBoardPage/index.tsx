import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useHistory, useLocation } from "react-router";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";

import queryString from "query-string";
import useInput from "../../../hooks/useInput";
import { Container } from "./styles";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Upload,
  Switch,
  Menu,
  Dropdown,
  DatePicker,
} from "antd";
import { toast } from "react-toastify";
import {
  contentSwitcher,
  fileSwitcher,
  imageSwitcher,
  linkSwitcher,
  typeSwitcher,
} from "../../../utils/switcher";
import Editor from "../../../components/Editor";
import { useCreateBoardMutation } from "../../../typings/api.d";
import { attachmentUploader } from "../../../utils/attachmentUploader";

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

const UploadBoardPage: React.VFC = () => {
  const history = useHistory();
  const { search } = useLocation<locationProps>();
  const queryObj = queryString.parse(search);
  const { category, param, subparam } = queryObj;
  const [title, onChangeTitle, setTitle] = useInput("");
  const [createdAt, setCreatedAt] = useState<string>(new Date().toString());
  const [content, setContent] = useState<string>("");
  const [link, onChangeLink, setLink] = useInput("");
  const [writerName, onChangeWriterName, setWriterName] = useInput("");
  const [showLink, setShowLink] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string | undefined>();
  const [imgName, setImgName] = useState<string>();
  const [file, setFile] = useState<fileProps[]>([]);

  const [isLinkNeeded, setIsLinkNeeded] = useState<boolean>(false);
  const [isFileNeeded, setIsFileNeeded] = useState<boolean>(false);
  const [isImageNeeded, setIsImageNeeded] = useState<boolean>(false);
  const [isContentNeeded, setIsContentNeeded] = useState<boolean>(true);
  const [isTypeNeeded, setIsTypeNeeded] = useState<boolean>(false);
  const [checkPublic, setCheckPublic] = useState<boolean>(true);
  const [type, setType] = useState<{ type: string; title: string }>();
  const [showAttach, setShowAttach] = useState<boolean>(true);
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);

  console.log("updateboardpage");

  useEffect(() => {
    setIsImageNeeded(imageSwitcher(subparam as string));
    setIsLinkNeeded(linkSwitcher(subparam as string));
    setIsFileNeeded(fileSwitcher(subparam as string));
    setIsContentNeeded(contentSwitcher(subparam as string));
    setIsTypeNeeded(typeSwitcher(subparam as string));
  }, [subparam]);

  const handleChange = (value: string) => {
    setContent(value);
  };

  const onChangeCreatedAt = useCallback((date) => {
    setCreatedAt(new Date(date).toString());
  }, []);

  const [createBoard, { loading }] = useCreateBoardMutation({
    onCompleted: () => {
      setTitle("");
      setContent("");
      setLink("");
      setImgUrl("");
      setWriterName("");
      toast.success("게시물을 생성 하였습니다");
      history.push({
        pathname: `/admin/${param}/${subparam}`,
        state: { refresh: true },
      });
    },
  });

  const handleLinkAdd = useCallback(() => {
    setShowLink(!showLink);
    if (!showLink) {
      setLink("");
    }
  }, [showLink, setLink, setShowLink]);

  const onFinish = useCallback(async () => {
    if (file.length !== 0) {
      await createBoard({
        variables: {
          args: {
            title: title.trim() ? title : "제목없음",
            content: content.trim() ? content : null,
            link: link.trim() ? link : null,
            category: category as string,
            files: file.length !== 0 ? file : null,
            images: imgUrl?.trim()
              ? [{ url: imgUrl, fileName: imgName || "" }]
              : undefined,
            private: checkPublic ? false : true,
            type: type?.type,
            showAttach: showAttach ? true : false,
            inputCreatedAt: createdAt,
            writer: writerName || "관리자",
          },
        },
      });
    } else if (imgUrl) {
      await createBoard({
        variables: {
          args: {
            title: title.trim() ? title : "제목없음",
            content: content.trim() ? content : null,
            link: link.trim() ? link : null,
            category: category as string,
            files: null,
            images: imgUrl?.trim()
              ? [{ url: imgUrl, fileName: imgName || "" }]
              : null,
            private: checkPublic ? false : true,
            type: type?.type,
            showAttach: showAttach ? true : false,
            inputCreatedAt: createdAt,
            writer: writerName || "관리자",
          },
        },
      });
    } else {
      await createBoard({
        variables: {
          args: {
            title: title.trim() ? title : "제목없음",
            content: content.trim() ? content : null,
            link: link.trim() ? link : null,
            private: checkPublic ? false : true,
            category: category as string,
            type: type?.type,
            showAttach: showAttach ? true : false,
            inputCreatedAt: createdAt,
            writer: writerName || "관리자",
          },
        },
      });
    }
  }, [
    title,
    content,
    link,
    createBoard,
    category,
    file,
    imgName,
    imgUrl,
    checkPublic,
    type,
    showAttach,
    createdAt,
    writerName,
  ]);

  const handleImageUpload = useCallback(
    (file: any) => {
      setUploadLoading(true);
      setImgName(file.name);
      Promise.resolve(
        attachmentUploader({
          type: "images",
          file,
          category: String(category) || "",
        })
      ).then((url) => {
        setImgUrl(url);
        toast.success("파일 / 이미지가 업로드 되었습니다");
      });
      setUploadLoading(false);
    },
    [category]
  );

  const handleFileUpload = useCallback(
    (file: any) => {
      setUploadLoading(true);
      Promise.resolve(
        attachmentUploader({
          type: "fileds",
          file,
          category: String(category) || "",
        })
      ).then((url) => {
        setFile((prev) => [...prev, { url: url, fileName: file.name }]);
        toast.success("파일 / 이미지가 업로드 되었습니다");
      });
      setUploadLoading(false);
    },
    [category]
  );

  const testMenu = useMemo(() => {
    return (
      <Menu style={{ width: 150 }}>
        <Menu.Item key="0">
          <div
            onClick={() =>
              setType({
                type: "basic",
                title: "SW기초교육",
              })
            }
          >
            SW기초교육
          </div>
        </Menu.Item>
        <Menu.Item key="1">
          <div
            onClick={() =>
              setType({
                type: "major",
                title: "SW전공교육",
              })
            }
          >
            SW전공교육
          </div>
        </Menu.Item>
        <Menu.Item key="2">
          <div
            onClick={() =>
              setType({
                type: "convergence",
                title: "SW융합교육",
              })
            }
          >
            SW융합교육
          </div>
        </Menu.Item>
      </Menu>
    );
  }, []);

  const valueMenu = useMemo(() => {
    return (
      <Menu style={{ width: 150 }}>
        <Menu.Item key="0">
          <div
            onClick={() =>
              setType({
                type: "edu",
                title: "수요중심",
              })
            }
          >
            수요중심
          </div>
        </Menu.Item>
        <Menu.Item key="1">
          <div
            onClick={() =>
              setType({
                type: "training",
                title: "선도자양성",
              })
            }
          >
            선도자양성
          </div>
        </Menu.Item>
        <Menu.Item key="2">
          <div
            onClick={() =>
              setType({
                type: "share",
                title: "가치공유",
              })
            }
          >
            가치공유
          </div>
        </Menu.Item>
      </Menu>
    );
  }, []);

  const coopMenu = useMemo(() => {
    return (
      <Menu style={{ width: 150 }}>
        <Menu.Item key="0">
          <div
            onClick={() =>
              setType({
                type: "network",
                title: "기관 네트워크",
              })
            }
          >
            기관 네트워크
          </div>
        </Menu.Item>
        <Menu.Item key="1">
          <div
            onClick={() =>
              setType({
                type: "project",
                title: "기관 프로젝트",
              })
            }
          >
            기관 프로젝트
          </div>
        </Menu.Item>
        <Menu.Item key="2">
          <div
            onClick={() =>
              setType({
                type: "internship",
                title: "기관 인턴쉽",
              })
            }
          >
            기관 인턴쉽
          </div>
        </Menu.Item>
      </Menu>
    );
  }, []);

  const handleMenu = useCallback(
    (prop?: string) => {
      switch (prop) {
        case "coopnews":
          return coopMenu;
        case "valuenews":
          return valueMenu;
        default:
          return testMenu;
      }
    },
    [coopMenu, valueMenu, testMenu]
  );

  return (
    <Container>
      <Form {...layout} name="upload-board" onFinish={onFinish}>
        <Form.Item name={["title"]} label="제목">
          <Input type="text" onChange={onChangeTitle} value={title} />
        </Form.Item>
        <Form.Item name={["writer"]} label="작성자">
          <Input
            type="text"
            onChange={onChangeWriterName}
            value={writerName}
            style={{
              width: "200px",
            }}
          />
        </Form.Item>
        <Form.Item name={["create"]} label="생성날짜">
          <DatePicker onChange={onChangeCreatedAt} />
        </Form.Item>
        <Form.Item name={["checked"]} label={"공개 / 비공개"}>
          <Switch
            defaultChecked
            onChange={() => setCheckPublic(!checkPublic)}
          />
          <span style={{ marginLeft: 15 }}>
            {checkPublic ? "공개" : "비공개"}
          </span>
        </Form.Item>
        {isTypeNeeded && (
          <Form.Item name={["type"]} label="대분류">
            <Dropdown
              overlay={() => handleMenu(subparam?.toString().split("-")[1])}
              trigger={["click"]}
            >
              <Button>{!type ? "선택하기" : type.title}&ensp;&ensp;&or;</Button>
            </Dropdown>
          </Form.Item>
        )}
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
          <Form.Item name={["image"]} label={"이미지"}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {imgUrl && (
                <img
                  src={imgUrl}
                  width={200}
                  alt={"uploadimage"}
                  style={{
                    marginBottom: 20,
                  }}
                />
              )}
              <Upload
                style={{ marginBottom: 20 }}
                listType="picture"
                customRequest={({ file }) => handleImageUpload(file)}
                accept="image/*"
                showUploadList={false}
                onChange={({ file }) => {
                  if (imgUrl !== "") {
                    file.status = "done";
                  } else {
                    file.status = "removed";
                  }
                }}
                className="upload-list-inline"
                maxCount={1}
              >
                {!uploadLoading && (
                  <Button icon={<UploadOutlined />}>Upload</Button>
                )}
              </Upload>
            </div>
          </Form.Item>
        )}
        {isFileNeeded && (
          <Form.Item name={["file"]} label={"첨부파일"}>
            <Upload
              multiple={true}
              customRequest={({ file }) => handleFileUpload(file)}
              maxCount={4}
              onChange={({ file: callbackFile }) => {
                if (file.length !== 0) {
                  callbackFile.status = "done";
                } else {
                  callbackFile.status = "removed";
                }
              }}
            >
              {!uploadLoading && (
                <Button style={{ marginBottom: 20 }} icon={<UploadOutlined />}>
                  Upload
                </Button>
              )}
            </Upload>
          </Form.Item>
        )}
        {isContentNeeded && (
          <Form.Item
            name={"content"}
            label="내용"
            style={{ marginTop: 20 }}
            initialValue=""
            rules={[{ required: true }]}
          >
            <Editor onChange={handleChange} content={content} />
          </Form.Item>
        )}
        {isFileNeeded && (
          <Form.Item
            name={"showAttach"}
            label="첨부파일 공개여부"
            style={{ marginTop: 20 }}
            initialValue=""
          >
            <Switch
              defaultChecked={true}
              onChange={() => setShowAttach(!showAttach)}
            />
          </Form.Item>
        )}
        <Form.Item
          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
          name={"Upload"}
        >
          <Button type="primary" htmlType="submit" disabled={uploadLoading}>
            {!loading ? (
              !uploadLoading ? (
                "올리기"
              ) : (
                <>
                  <LoadingOutlined /> 이미지 / 파일 업로드 중입니다...
                </>
              )
            ) : (
              "Uploading..."
            )}
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default UploadBoardPage;
