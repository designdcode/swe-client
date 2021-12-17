import { Descriptions, Input, Typography, Upload } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation, useParams } from "react-router";
import { Container } from "./styles";
import {
  getBoardById,
  getBoardByIdVariables,
  getBoardById_getBoardById_data,
  getBoardById_getBoardById_data_files,
  getBoardById_getBoardById_data_images,
} from "../../../typings/api";
import { useMutation, useQuery } from "@apollo/client";
import { GET_BOARD_BY_ID } from "../../../queries/sharedQuery";
import useInput from "../../../hooks/useInput";
import { Button } from "../EditBoardPage/styles";
import {
  UploadOutlined,
  DeleteOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { storage } from "../../../utils/firebase";
import {
  CREATE_FILE,
  CREATE_IMAGE,
  DELETE_FILE,
  DELETE_IMAGE,
  EDIT_BOARD,
} from "../../../queries/adminQuery";
import { toast } from "react-toastify";
import { fileUploader } from "../../../utils/fileUploader";
import { fileRemover } from "../../../utils/fileRemover";
import { fileSwitcher, linkSwitcher } from "../../../utils/switcher";

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
  const [board, setBoard] = useState<getBoardById_getBoardById_data>();
  const [file, setFile] =
    useState<(getBoardById_getBoardById_data_files | null)[]>();
  const [tmpFiles, setTmpFiles] = useState<{ url: string; fileName: string }[]>(
    []
  );
  const [imgUrl, setImgUrl] = useState<string | undefined>();
  const [imgName, setImgName] = useState<string>();
  const [image, setImage] =
    useState<getBoardById_getBoardById_data_images | null>();
  const [link, onChangeLink, setLink] = useInput("");
  const [progress, setProgress] = useState<number>(0);

  const [isFileNeeded, setIsFileNeeded] = useState<boolean>(false);
  const [isLinkNeeded, setIsLinkNeeded] = useState<boolean>(false);

  useEffect(() => {
    setIsFileNeeded(fileSwitcher(subparam as string));
    setIsLinkNeeded(linkSwitcher(subparam as string));
  }, [subparam]);

  const { loading, data, refetch } = useQuery<
    getBoardById,
    getBoardByIdVariables
  >(GET_BOARD_BY_ID, {
    variables: {
      id: parseInt(id as string, 10),
    },
  });

  const [createImage] = useMutation(CREATE_IMAGE, {
    onCompleted: ({ createImage }) => {
      const { ok } = createImage;
      if (ok) {
        setProgress(0);
        if (refetch) refetch();
      }
    },
  });
  const [deleteImage] = useMutation(DELETE_IMAGE, {
    onCompleted: ({ deleteImage }) => {
      const { ok, err } = deleteImage;
      if (ok) {
        if (refetch) refetch();
        toast.error("이미지가 삭제 되었습니다");
      } else {
        console.log(err);
        toast.error(err);
      }
    },
  });
  const [createFile] = useMutation(CREATE_FILE, {
    onCompleted: ({ createFile }) => {
      const { ok } = createFile;
      if (ok) {
        setProgress(0);
        if (refetch) refetch();
      }
    },
  });
  const [deleteFile] = useMutation(DELETE_FILE, {
    onCompleted: ({ deleteFile }) => {
      const { ok, err } = deleteFile;
      if (ok) {
        toast.success("파일이 삭제 되었습니다");
        if (refetch) refetch();
      } else {
        console.log(err);
        toast.error(err);
      }
    },
  });

  const [editBoard] = useMutation(EDIT_BOARD, {
    onCompleted: ({ editBoard }) => {
      const { ok, err } = editBoard;
      if (ok) {
        toast.success("게시물이 수정 되었습니다");
        history.push({
          pathname: `/admin/${param}/${category}`,
          state: { refresh: true },
        });
      } else {
        console.log(err);
        toast.error("게시물을 삭제 할 수 없습니다");
      }
    },
  });

  const handleImageRemover = useCallback(() => {
    if (imgName && imgName.trim()) {
      fileRemover("images", category as string, imgName, setImgUrl);
    }
  }, [category, imgName]);

  const handleImageUpload = useCallback(
    async (file: any) => {
      handleImageRemover();
      setProgress(progress + 1);
      const filename = file.name;
      setImgName(file.name);
      fileUploader(
        "images",
        file,
        category as string,
        filename,
        setImgUrl,
        progress,
        setProgress,
        createImage,
        parseInt(id as string, 10)
      );
    },
    [category, progress, handleImageRemover, createImage, id]
  );

  const handleFileUpload = useCallback(
    (file: any) => {
      setProgress(1);
      const upload = storage.ref(`/files/${category}/${file.name}`).put(file);
      upload.on(
        "state_changed",
        (snapshot) => {},
        (err) => console.log(err),
        () => {
          storage
            .ref(`/files/${category}/${file.name}`)
            .getDownloadURL()
            .then(async (url) => {
              setTmpFiles((prev) => [
                ...prev,
                { url: url, fileName: file.name },
              ]);
              await createFile({
                variables: {
                  url,
                  fileName: file.name,
                  boardId: parseInt(id as string, 10),
                },
                onCompleted: ({ createFile }) => {
                  const { ok, err } = createFile;
                  if (ok) {
                    toast.success("파일이 업로드 되었습니다");
                    if (refetch) refetch();
                  } else {
                    toast.error("파일 업로드에 실패 하였습니다");
                    console.log(err);
                  }
                },
              });
              setProgress(progress - 1);
            });
        }
      );
    },
    [createFile, id, category, progress, refetch]
  );

  const handleDeleteFile = useCallback(
    async (id?: number, name?: string) => {
      storage.ref(`/files/${category}/${name}`).delete();
      await deleteFile({
        variables: {
          id,
        },
      });
    },
    [deleteFile, category]
  );

  useEffect(() => {
    if (data && data.getBoardById && data.getBoardById.data) {
      setBoard(data.getBoardById.data);
      setLink(data.getBoardById.data.link || "");
    }
    if (
      data &&
      data.getBoardById &&
      data.getBoardById.data &&
      data.getBoardById.data.files
    ) {
      setFile(data.getBoardById.data.files);
    }
    if (
      data &&
      data.getBoardById &&
      data.getBoardById.data &&
      data.getBoardById.data.images
    ) {
      setImage(data.getBoardById.data.images[0]);
      setImgName(data.getBoardById.data.images[0]?.fileName);
    }
  }, [data, setBoard, setLink]);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <Container>
      <div className="button-group">
        <Button type="ghost" onClick={() => history.goBack()}>
          뒤로
        </Button>
        <Button
          type="primary"
          disabled={progress === 0 ? false : true}
          onClick={() =>
            editBoard({
              variables: {
                id: parseInt(id as string, 10),
                link: link.includes("http") ? link : `http://${link}`,
              },
            })
          }
        >
          {progress === 0 ? (
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
            {file && file.length !== 0 ? (
              <>
                {file.map((elem, idx) => {
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
                      <button
                        className="attach-button"
                        onClick={() =>
                          handleDeleteFile(elem?.id, elem?.fileName)
                        }
                      >
                        <DeleteOutlined />
                      </button>
                    </div>
                  );
                })}
              </>
            ) : tmpFiles.length === 0 ? (
              <div>첨부파일 없음</div>
            ) : (
              <></>
            )}
            <Upload
              multiple={true}
              maxCount={4}
              className="upload-list-inline"
              customRequest={({ file }) => handleFileUpload(file)}
              onChange={({ file: callbackFile }) => {
                if (tmpFiles.length !== 0) {
                  callbackFile.status = "done";
                } else {
                  callbackFile.status = "removed";
                }
              }}
            >
              <Button icon={<UploadOutlined />}>파일 업로드</Button>
            </Upload>
          </Descriptions.Item>
        )}
        <Descriptions.Item label="이미지" span={4} labelStyle={{ width: 100 }}>
          {image && (
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => {
                fileRemover(
                  "images",
                  category as string,
                  image.fileName,
                  setImgUrl
                );
                deleteImage({ variables: { id: image.id } });
              }}
            >
              이미지 삭제
            </Button>
          )}
          <Upload
            listType="picture"
            customRequest={({ file }) => {
              if (image) {
                deleteImage({ variables: { id: image && image.id } });
              }
              handleImageUpload(file);
            }}
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
          {image ? (
            <img src={image.url} alt={image.fileName} />
          ) : (
            <Typography.Text>업로드 된 이미지가 없습니다</Typography.Text>
          )}
        </Descriptions.Item>
      </Descriptions>
    </Container>
  );
};

export default EditImageBoardPage;
