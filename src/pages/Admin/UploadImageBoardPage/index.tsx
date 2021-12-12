import React, { useCallback, useEffect, useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router";
import { Container } from "./styles";
import { linkSwitcher } from "../../../utils/switcher";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "../../../queries/adminQuery";
import useInput from "../../../hooks/useInput";
import { toast } from "react-toastify";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";
import { fileUploader } from "../../../utils/fileUploader";
import { storage } from "../../../utils/firebase";
import { fileRemover } from "../../../utils/fileRemover";

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

const UploadImageBoardPage = () => {
  const history = useHistory();
  const { search } = useLocation<locationProps>();
  const queryObj = queryString.parse(search);
  const { category, param, subparam } = queryObj;
  const [link, onChangeLink, setLink] = useInput("");
  const [showLink, setShowLink] = useState<boolean>(false);
  const [file, setFile] = useState<fileProps[]>([]);
  const [imgUrl, setImgUrl] = useState<string | undefined>();
  const [imgName, setImgName] = useState<string>();
  const [isLinkNeeded, setIsLinkNeeded] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsLinkNeeded(linkSwitcher(subparam as string));
  }, [subparam]);

  const [createBoard] = useMutation(CREATE_BOARD, {
    onCompleted: ({ createBoard }) => {
      const { ok, err } = createBoard;
      if (ok) {
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
    if (!showLink) setLink("");
  }, [showLink, setLink, setShowLink]);

  const onFinish = useCallback(async () => {
    await createBoard({
      variables: {
        link: link.trim()
          ? link.includes("http")
            ? link
            : `http://${link}`
          : null,
        category,
        files: file.length !== 0 ? file : null,
        images: imgUrl?.trim() ? [{ url: imgUrl, fileName: imgName }] : null,
      },
    });
    setLoading(false);
  }, [createBoard, category, file, imgName, imgUrl, link]);

  const handleImageUpload = useCallback(
    (file: any) => {
      const filename = file.name;
      setImgName(file.name);
      setLoading(true);
      fileUploader(
        "images",
        file,
        category as string,
        filename,
        setImgUrl,
        progress,
        setProgress
      );
      setProgress(0);
    },
    [category, progress]
  );

  const handleFileUpload = useCallback(
    (file: any) => {
      setProgress(progress + 1);
      setLoading(true);
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
              setProgress(0);
            });
        }
      );
    },
    [category, progress]
  );

  const handleImageRemover = useCallback(() => {
    if (imgName && imgName.trim()) {
      fileRemover("images", category as string, imgName, setImgUrl);
      setProgress(0);
    }
  }, [category, imgName]);

  const handleFileRemover = useCallback(
    (propFile: any) => {
      storage
        .ref(`/files/${category}/${propFile.name}`)
        .delete()
        .then(() => {
          toast.success("업로드 된 파일/이미지가 삭제 되었습니다");
          setFile(
            file.filter((elem: fileProps) => elem.fileName !== propFile.name)
          );
        })
        .catch((err) => toast.error(err));
    },
    [category, file]
  );

  return (
    <Container>
      <Form {...layout} name="upload-board" onFinish={onFinish}>
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
        <Form.Item name={["file"]} label="파일">
          <Upload
            style={{ marginBottom: 20 }}
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
            onRemove={(file) => handleFileRemover(file)}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item name={["image"]} label="이미지">
          <Upload
            style={{ marginBottom: 20 }}
            listType="picture"
            customRequest={({ file }) => handleImageUpload(file)}
            progress={{ showInfo: true }}
            onChange={({ file: callbackFile }) => {
              if (file.length !== 0) {
                callbackFile.status = "done";
              } else {
                callbackFile.status = "removed";
              }
            }}
            maxCount={1}
            onRemove={() => handleImageRemover()}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button
            type={"primary"}
            htmlType="submit"
            disabled={progress !== 0 ? true : false}
          >
            {!loading ? (
              progress <= 0 ? (
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

export default UploadImageBoardPage;
