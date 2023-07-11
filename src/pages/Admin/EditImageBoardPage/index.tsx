import { Descriptions, Input, Typography, Upload } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation, useParams } from "react-router";
import { Container } from "./styles";
import useInput from "../../../hooks/useInput";
import { Button } from "../EditBoardPage/styles";
import {
  UploadOutlined,
  DeleteOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import { fileSwitcher, linkSwitcher } from "../../../utils/switcher";
import {
  AttachmentType,
  BoardQuery,
  useUpdateBoardMutation,
} from "../../../typings/api.d";
import { useBoardContext } from "../../../contexts";
import { attachmentUploader } from "../../../utils/attachmentUploader";

interface locationProps {
  search: string;
}

interface paramProps {
  param: string;
  subparam: string;
}

const EditImageBoardPage: React.VFC = () => {
  const history = useHistory();
  const { param, subparam } = useParams<paramProps>();
  const { search } = useLocation<locationProps>();
  const queryObj = queryString.parse(search);
  const { category, id } = queryObj;
  const { boards, loading } = useBoardContext();
  const [board, setBoard] = useState<BoardQuery["board"]>();
  const [files, setFiles] = useState<AttachmentType[]>([]);
  const [imgUrl, setImgUrl] = useState<string | undefined>();
  const [image, setImage] = useState<AttachmentType | undefined>();
  const [link, onChangeLink, setLink] = useInput("");
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);

  const [isFileNeeded, setIsFileNeeded] = useState<boolean>(false);
  const [isLinkNeeded, setIsLinkNeeded] = useState<boolean>(false);

  console.log("editimageboard");

  useEffect(() => {
    setIsFileNeeded(fileSwitcher(subparam as string));
    setIsLinkNeeded(linkSwitcher(subparam as string));
  }, [subparam]);

  useEffect(() => {
    if (boards) {
      const board = boards.find((v) => String(v._id) === String(id));
      setBoard(boards.find((v) => String(v._id) === String(id)));
      if (board && board.images) {
        setImage(board.images[0]);
      }
    }
  }, [boards, id]);

  const [editBoard] = useUpdateBoardMutation({
    onCompleted: () => {
      toast.success("게시물이 수정 되었습니다");
      history.push({
        pathname: `/admin/${param}/${category}`,
        state: { refresh: true },
      });
    },
  });

  const handleImageUpload = useCallback(
    async (file: any) => {
      setUploadLoading(true);
      Promise.resolve(
        attachmentUploader({
          type: "images",
          file,
          category: String(category) || "",
        })
      ).then((url) => {
        setImgUrl(url);
        setImage({
          url,
          fileName: file.name,
        });
      });
      setUploadLoading(false);
    },
    [category]
  );

  const handleFileUpload = useCallback(
    async (file: any) => {
      setUploadLoading(true);
      Promise.resolve(
        attachmentUploader({
          type: "files",
          file,
          category: String(category) || "",
        })
      ).then((url) => {
        setImgUrl(url);
        setFiles((prev) => [
          ...prev,
          {
            url,
            fileName: file.name,
          },
        ]);
      });
      setUploadLoading(false);
    },
    [category]
  );

  const handleSubmit = useCallback(async () => {
    if (image) {
      await editBoard({
        variables: {
          args: {
            _id: String(id),
            link: link.includes("http") ? link : `http://${link}`,
            images: [image],
          },
        },
      });
    } else {
      await editBoard({
        variables: {
          args: {
            _id: String(id),
            link: link.includes("http") ? link : `http://${link}`,
          },
        },
      });
    }
  }, [id, image, link, editBoard]);

  useEffect(() => {
    if (board) {
      setLink(board.link || "");
      if (board.files) {
        setFiles(board.files);
      }
      if (board.images && board.images.length > 0) {
        setImage(board.images[0]);
      }
    }
  }, [board, setBoard, setLink]);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <Container>
      <div className="button-group">
        <Button type="ghost" onClick={() => history.goBack()}>
          뒤로
        </Button>
        <Button type="primary" disabled={uploadLoading} onClick={handleSubmit}>
          {!uploadLoading ? (
            "완료"
          ) : (
            <>
              <LoadingOutlined /> 파일 / 이미지 업로딩 중
            </>
          )}
        </Button>
      </div>
      <Descriptions
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        layout="horizontal"
      >
        {isLinkNeeded && (
          <Descriptions.Item label="링크" span={4} labelStyle={{ width: 100 }}>
            <Input
              placeholder={board?.link || undefined}
              value={link}
              onChange={onChangeLink}
            />
          </Descriptions.Item>
        )}
        {isFileNeeded && (
          <Descriptions.Item label="파일" span={4} labelStyle={{ width: 100 }}>
            {files && files.length !== 0 ? (
              <>
                {files.map((elem, idx) => {
                  return (
                    <div key={idx} className="attach-group">
                      <a
                        href={elem?.url}
                        download
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        {elem?.fileName}
                      </a>
                      <button className="attach-button">
                        <DeleteOutlined />
                      </button>
                    </div>
                  );
                })}
              </>
            ) : files.length === 0 ? (
              <div>첨부파일 없음</div>
            ) : (
              <></>
            )}
            <Upload
              multiple={true}
              maxCount={4}
              className="upload-list-inline"
              customRequest={({ file }) => {
                handleFileUpload(file);
              }}
              disabled={uploadLoading}
              onChange={({ file: callbackFile }) => {
                if (files.length !== 0) {
                  callbackFile.status = "done";
                } else {
                  callbackFile.status = "removed";
                }
              }}
            >
              <Button disabled={uploadLoading} icon={<UploadOutlined />}>
                파일 업로드
              </Button>
            </Upload>
          </Descriptions.Item>
        )}
        <Descriptions.Item label="이미지" span={4} labelStyle={{ width: 100 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {image ? (
              <img
                src={image.url}
                alt={image.fileName}
                width={300}
                style={{
                  marginBottom: 20,
                }}
              />
            ) : (
              <Typography.Text>업로드 된 이미지가 없습니다</Typography.Text>
            )}

            <Upload
              listType="picture"
              customRequest={({ file }) => {
                handleImageUpload(file);
              }}
              showUploadList={false}
              progress={{ showInfo: true }}
              onChange={({ file: callbackFile }) => {
                if (imgUrl) {
                  callbackFile.status = "done";
                } else {
                  callbackFile.status = "removed";
                }
              }}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>이미지 업로드</Button>
            </Upload>
          </div>
        </Descriptions.Item>
      </Descriptions>
    </Container>
  );
};

export default EditImageBoardPage;
