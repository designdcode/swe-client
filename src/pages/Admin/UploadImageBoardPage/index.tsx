import React, { useCallback, useEffect, useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router";
import { fileSwitcher, linkSwitcher } from "../../../utils/switcher";
import useInput from "../../../hooks/useInput";
import { toast } from "react-toastify";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { attachmentUploader } from "../../../utils/attachmentUploader";
import { useCreateBoardMutation } from "../../../typings/api.d";
import { useBoardContext } from "../../../contexts";

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
  const { refetch } = useBoardContext();
  const { search } = useLocation<locationProps>();
  const queryObj = queryString.parse(search);
  const { category, param, subparam } = queryObj;
  const [link, onChangeLink, setLink] = useInput("");
  const [showLink, setShowLink] = useState<boolean>(false);
  const [file, setFile] = useState<fileProps[]>([]);
  const [imgUrl, setImgUrl] = useState<string | undefined>();
  const [imgName, setImgName] = useState<string>();
  const [isLinkNeeded, setIsLinkNeeded] = useState<boolean>(false);
  const [isFileNeeded, setIsFileNeeded] = useState<boolean>(false);
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLinkNeeded(linkSwitcher(subparam as string));
    setIsFileNeeded(fileSwitcher(subparam as string));
  }, [subparam]);

  const [createBoard] = useCreateBoardMutation({
    onCompleted: (result) => {
      setLink("");
      toast.success("게시물을 생성 하였습니다");
      if (refetch) {
        refetch();
      }
      history.push({
        pathname: `/admin/${param}/${subparam}`,
        state: { refresh: true },
      });
    },
  });

  const handleLinkAdd = useCallback(() => {
    setShowLink(!showLink);
    if (!showLink) setLink("");
  }, [showLink, setLink, setShowLink]);

  const handleSubmit = useCallback(async () => {
    if (imgUrl) {
      console.log("with image");
      await createBoard({
        variables: {
          args: {
            link: link.trim()
              ? link.includes("http")
                ? link
                : `http://${link}`
              : null,
            category: String(category) || "",
            files: file.length !== 0 ? file : null,
            images: [{ url: imgUrl, fileName: imgName || "" }],
          },
        },
      });
    } else {
      await createBoard({
        variables: {
          args: {
            link: link.trim()
              ? link.includes("http")
                ? link
                : `http://${link}`
              : null,
            category: String(category) || "",
            files: file.length !== 0 ? file : null,
          },
        },
      });
    }
  }, [createBoard, category, file, imgName, imgUrl, link]);

  const handleImageUpload = useCallback(
    (file: any) => {
      setImgName(file.name);
      setUploadLoading(true);
      Promise.resolve(
        attachmentUploader({
          type: "images",
          file,
          category: String(category) || "",
        })
      )
        .then((url) => {
          setImgUrl(url);
          toast.success("파일 / 이미지가 업로드 되었습니다");
          setUploadLoading(false);
        })
        .catch((err) => {
          console.error(err);
          toast.error("업로드에 실패하였습니다. 잠시후 다시 시도해 주세요");
          setUploadLoading(false);
        });
    },
    [category]
  );

  const handleFileUpload = useCallback(
    (file: any) => {
      setUploadLoading(true);
      Promise.resolve(
        attachmentUploader({
          type: "files",
          file,
          category: String(category) || "",
        })
      )
        .then((url) => {
          setFile((prev) => [...prev, { url: url, fileName: file.name }]);
          toast.success("파일 / 이미지가 업로드 되었습니다");
          setUploadLoading(false);
        })
        .catch((err) => {
          console.error(err);
          toast.error("업로드에 실패하였습니다. 잠시후 다시 시도해 주세요");
          setUploadLoading(false);
        });
    },
    [category]
  );

  return (
    <Container>
      <span style={{ marginBottom: 20, display: "block" }}>
        &#8251;상세 페이지 이미지는 최소 가로 1024픽셀 이상의 이미지를 사용 해
        주세요.
      </span>
      <Form {...layout} name="upload-board" disabled={uploadLoading}>
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
        {isFileNeeded && (
          <Form.Item name={["file"]} label="파일">
            {uploadLoading && <LoadingOutlined />}
            <Upload
              style={{ marginBottom: 20 }}
              multiple={true}
              customRequest={({ file }) => handleFileUpload(file)}
              maxCount={4}
              disabled={uploadLoading}
              showUploadList={false}
              onChange={({ file: callbackFile }) => {
                if (file.length !== 0) {
                  callbackFile.status = "done";
                } else {
                  callbackFile.status = "removed";
                }
              }}
            >
              <Button disabled={uploadLoading} icon={<UploadOutlined />}>
                Upload
              </Button>
            </Upload>
          </Form.Item>
        )}
        <Form.Item name={["image"]} label="이미지">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {uploadLoading && <LoadingOutlined />}
            {imgUrl && (
              <img
                src={imgUrl}
                width={300}
                style={{
                  marginBottom: 50,
                }}
                alt="uploadedimage"
              />
            )}
            <Upload
              style={{ marginBottom: 20 }}
              listType="picture"
              customRequest={({ file }) => {
                setUploadLoading(true);
                handleImageUpload(file);
              }}
              showUploadList={false}
              onChange={({ file: callbackFile }) => {
                if (file.length !== 0) {
                  callbackFile.status = "done";
                } else {
                  callbackFile.status = "removed";
                }
              }}
              disabled={uploadLoading}
              maxCount={1}
            >
              <Button disabled={uploadLoading} icon={<UploadOutlined />}>
                이미지 업로드
              </Button>
            </Upload>
          </div>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button
            type={"primary"}
            onClick={handleSubmit}
            disabled={uploadLoading ? true : false}
          >
            {!uploadLoading ? (
              "업로드"
            ) : (
              <>
                <LoadingOutlined /> &ensp; Uploading...
              </>
            )}
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default UploadImageBoardPage;

const Container = styled.div`
  .link-checkbox {
    margin: 20px 0;
  }
`;
