import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Image,
  Input,
  Select,
  Spin,
  Switch,
  Upload,
} from "antd";
import useInput from "../../../hooks/useInput";
import { useHistory, useLocation } from "react-router";
import {
  contentSwitcher,
  fileSwitcher,
  imageSwitcher,
  linkSwitcher,
  typeSwitcher,
} from "../../../utils/switcher";
import { toast } from "react-toastify";
import { useCreateBoardMutation } from "../../../typings/api.d";
import { attachmentUploader } from "../../../utils/attachmentUploader";
import Editor from "../../../components/Editor";
import { optionCooperate, optionEducate, optionValue } from "./selectOptionts";

export interface FileProps {
  url: string;
  fileName: string;
}

export const BoardCreate: FC = () => {
  const { pathname } = useLocation();
  const param = pathname.split("/")[2];
  const history = useHistory();
  const subparam = pathname.split("/")[4];
  const [title, setTitle] = useState<string>();
  const [createdAt, setCreatedAt] = useState<string>(new Date().toString());
  const [content, setContent] = useState<string>("");
  const [link, onChangeLink, setLink] = useInput("");
  const [writerName, setWriterName] = useState<string>();
  const [showLink, setShowLink] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string | undefined>();
  const [imgName, setImgName] = useState<string>();
  const [file, setFile] = useState<FileProps[]>([]);

  const [isLinkNeeded, setIsLinkNeeded] = useState<boolean>(false);
  const [isFileNeeded, setIsFileNeeded] = useState<boolean>(false);
  const [isImageNeeded, setIsImageNeeded] = useState<boolean>(false);
  const [isContentNeeded, setIsContentNeeded] = useState<boolean>(true);
  const [isTypeNeeded, setIsTypeNeeded] = useState<boolean>(false);

  const [checkPublic, setCheckPublic] = useState<boolean>(true);
  const [type, setType] = useState<string>();
  const [showAttach, setShowAttach] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsImageNeeded(imageSwitcher(subparam as string));
    setIsLinkNeeded(linkSwitcher(subparam as string));
    setIsFileNeeded(fileSwitcher(subparam as string));
    setIsContentNeeded(contentSwitcher(subparam as string));
    setIsTypeNeeded(typeSwitcher(subparam as string));
  }, [subparam]);

  const handleMenu = useCallback(() => {
    const optionCategory = subparam.split("-")[1];
    switch (optionCategory) {
      case "coopnews":
        return optionCooperate;
      case "valuenews":
        return optionValue;
      default:
        return optionEducate;
    }
  }, [subparam]);

  const [createBoard] = useCreateBoardMutation({
    onCompleted: () => {
      setTitle("");
      setContent("");
      setLink("");
      setImgUrl("");
      setWriterName("");
      toast.success("게시물을 생성 하였습니다");
      history.push({
        pathname: `/admin/${param}/list/${subparam}`,
        state: { refresh: true },
      });
    },
  });

  const onFinish = useCallback(async () => {
    await createBoard({
      variables: {
        args: {
          title: title?.trim() ? title : "제목없음",
          content: content.trim() ? content : null,
          link: link.trim() ? link : null,
          category: subparam as string,
          files: file.length !== 0 ? file : null,
          images: imgUrl?.trim()
            ? [{ url: imgUrl, fileName: imgName || "" }]
            : undefined,
          private: checkPublic ? false : true,
          type,
          showAttach: showAttach ? true : false,
          inputCreatedAt: createdAt,
          writer: writerName || "관리자",
        },
      },
    });
  }, [
    title,
    content,
    link,
    subparam,
    file,
    imgUrl,
    imgName,
    checkPublic,
    type,
    writerName,
    createdAt,
    showAttach,
    createBoard,
  ]);

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const onChangeCreatedAt = useCallback((date) => {
    setCreatedAt(new Date(date).toString());
  }, []);

  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement>,
      setter: Dispatch<SetStateAction<string | undefined>>
    ) => {
      setter(e.target.value);
    },
    []
  );

  const handleImageUpload = useCallback(
    (file: any) => {
      setImgName(file.name);
      setLoading(true);
      Promise.resolve(
        attachmentUploader({
          type: "images",
          file,
          category: String(subparam) || "",
        })
      )
        .then((url) => {
          setImgUrl(url);
          toast.success("파일 / 이미지가 업로드 되었습니다");
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          toast.error("업로드에 실패하였습니다. 잠시후 다시 시도해 주세요");
          setLoading(false);
        });
    },
    [subparam]
  );

  const handleFileUpload = useCallback(
    (file: any) => {
      setLoading(true);
      Promise.resolve(
        attachmentUploader({
          type: "fileds",
          file,
          category: String(subparam) || "",
        })
      )
        .then((url) => {
          setFile((prev) => [...prev, { url: url, fileName: file.name }]);
          toast.success("파일 / 이미지가 업로드 되었습니다");
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          toast.error("업로드에 실패하였습니다. 잠시후 다시 시도해 주세요");
          setLoading(false);
        });
    },
    [subparam]
  );

  return (
    <div>
      <Form
        initialValues={{ remember: true }}
        name="upload-member"
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        labelCol={{
          style: {
            width: "100px",
          },
        }}
      >
        <Form.Item name="title" label="제목">
          <Input
            type="text"
            onChange={(e) => handleChange(e, setTitle)}
            value={title}
          />
        </Form.Item>
        <Form.Item name={"writer"} label="작성자">
          <Input
            type="text"
            onChange={(e) => handleChange(e, setWriterName)}
            value={writerName}
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
          <Form.Item name="type" label="대분류">
            <Select options={handleMenu()} onChange={(v) => setType(v)} />
          </Form.Item>
        )}
        {isLinkNeeded && (
          <>
            <div className="link-checkbox">
              <Checkbox
                onChange={() => {
                  setShowLink(!showLink);
                  if (!showLink) {
                    setLink("");
                  }
                }}
              >
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
          <>
            <Form.Item name="image" label="이미지">
              <Upload
                maxCount={1}
                accept="image/*"
                disabled={loading}
                customRequest={({ file }) => handleImageUpload(file)}
                showUploadList={false}
              >
                <Button disabled={loading}>이미지 업로드</Button>
              </Upload>
            </Form.Item>
            {imgUrl && (
              <Form.Item label="미리보기">
                {loading ? (
                  <Spin tip="업로드 중입니다">
                    <div className="content" />
                  </Spin>
                ) : (
                  <Image width={300} src={imgUrl} />
                )}
              </Form.Item>
            )}
          </>
        )}
        {isFileNeeded && (
          <Form.Item
            name={"showAttach"}
            label="파일공개"
            style={{ marginTop: 20 }}
            initialValue=""
          >
            <Switch
              defaultChecked={true}
              onChange={() => setShowAttach(!showAttach)}
            />
          </Form.Item>
        )}
        <>
          <Form.Item name="files" label="파일">
            <Upload
              maxCount={4}
              disabled={loading}
              customRequest={({ file }) => handleFileUpload(file)}
              showUploadList={false}
            >
              <Button disabled={loading}>파일 업로드</Button>
            </Upload>
            <div
              style={{
                marginTop: "15px",
              }}
            >
              {file &&
                file.map((elem, idx) => {
                  return (
                    <div
                      key={idx}
                      className="attach-group"
                      style={{
                        padding: "8px",
                      }}
                    >
                      <a
                        href={elem?.url}
                        download
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        {elem?.fileName}
                      </a>
                    </div>
                  );
                })}
            </div>
          </Form.Item>
        </>
        {isContentNeeded && (
          <Form.Item
            name={"content"}
            label="내용"
            style={{ marginTop: 20 }}
            initialValue=""
            rules={[{ required: true }]}
          >
            <Editor onChange={handleContentChange} content={content} />
          </Form.Item>
        )}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" disabled={loading}>
            저장
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
