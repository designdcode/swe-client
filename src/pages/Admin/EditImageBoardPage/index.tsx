import { Descriptions, Form, Input, Typography, Upload } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router";
import { Container } from "./styles";
import {
  getBoardById,
  getBoardById_getBoardById_data,
  getBoardById_getBoardById_data_files,
  getBoardById_getBoardById_data_images,
} from "../../../typings/api";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_BOARD } from "../../../queries/sharedQuery";
import useInput from "../../../hooks/useInput";
import { Button } from "../EditBoardPage/styles";
import { CloseCircleOutlined, UploadOutlined } from "@ant-design/icons";
import { storage } from "../../../utils/firebase";
import { CREATE_FILE, DELETE_FILE } from "../../../queries/adminQuery";
import { toast } from "react-toastify";
import { fileUploader } from "../../../utils/fileUploader";
import { fileRemover } from "../../../utils/fileRemover";

interface locationProps {
  search: string;
}

interface fileProps {
  url: string;
  fileName: string;
}

const EditImageBoardPage: React.VFC = () => {
  const history = useHistory();
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

  const [getBoardById, { loading, data, refetch }] =
    useLazyQuery<getBoardById>(GET_BOARD);
  const [createFile] = useMutation(CREATE_FILE);
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

  const handleImageRemover = useCallback(() => {
    if (imgName && imgName.trim()) {
      fileRemover("images", category as string, imgName, setImgUrl);
    }
  }, [category, imgName]);

  const handleImageUpload = useCallback(
    (file: any) => {
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
        setProgress
      );
    },
    [category, progress, handleImageRemover]
  );

  const handleFileUpload = useCallback(
    (file: any) => {
      setProgress(progress + 1);
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
    if (id) {
      getBoardById({ variables: { id: parseInt(id as string, 10) } });
    }
  }, [id, getBoardById]);

  useEffect(() => {
    if (data && data.getBoardById && data.getBoardById.data) {
      setBoard(data.getBoardById.data);
      setLink(data.getBoardById.data.link || "");
    }
    if (data?.getBoardById.data?.files) setFile(data.getBoardById.data.files);
    if (data?.getBoardById.data?.images) {
      setImage(data.getBoardById.data.images[0]);
      setImgName(data.getBoardById.data.images[0]?.fileName);
    }
  }, [data, setBoard, setLink]);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <Container>
      <Button type="ghost" onClick={() => history.goBack()}>
        뒤로
      </Button>
      <Descriptions
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        layout="horizontal"
      >
        <Descriptions.Item label="링크" span={3} labelStyle={{ width: 100 }}>
          <Input
            placeholder={board?.link || undefined}
            value={link}
            onChange={onChangeLink}
          />
        </Descriptions.Item>
        <Descriptions.Item
          label="첨부파일"
          span={3}
          labelStyle={{ width: 100 }}
        >
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
                      onClick={() => handleDeleteFile(elem?.id, elem?.fileName)}
                    >
                      <CloseCircleOutlined />
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
        <Descriptions.Item label="이미지" span={3} labelStyle={{ width: 100 }}>
          <Upload
            listType="picture"
            customRequest={({ file }) => handleImageUpload(file)}
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
