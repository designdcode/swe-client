import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import queryString from "query-string";
import {
  getBoardByCategory_getBoardByCategory_data_files,
  getBoardById,
  getBoardById_getBoardById_data,
} from "../../../typings/api";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_BOARD } from "../../../queries/sharedQuery";
import {
  CREATE_FILE,
  DELETE_BOARD,
  DELETE_FILE,
  EDIT_BOARD,
} from "../../../queries/adminQuery";
import { toast } from "react-toastify";
import { Container, Button } from "./styles";
import { Descriptions, Input, Upload } from "antd";
import useInput from "../../../hooks/useInput";
import {
  DeleteOutlined,
  LoadingOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { storage } from "../../../utils/firebase";

interface locationProps {
  search: string;
}

interface paramProps {
  param: string;
}

const EditBoardPage: React.VFC = () => {
  const { search } = useLocation<locationProps>();
  const queryObj = queryString.parse(search);
  const history = useHistory();
  const { param } = useParams<paramProps>();
  const { id, category } = queryObj;
  const [board, setBoard] = useState<getBoardById_getBoardById_data>();
  const [files, setFiles] =
    useState<
      (getBoardByCategory_getBoardByCategory_data_files | null | undefined)[]
    >();
  const [tmpFiles, setTmpFiles] = useState<{ url: string; fileName: string }[]>(
    []
  );
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");
  const [link, onChangeLink, setLink] = useInput("");
  const [progress, setProgress] = useState<number>(0);

  const [getBoardById, { loading, data, refetch }] =
    useLazyQuery<getBoardById>(GET_BOARD);

  const [deleteBoard] = useMutation(DELETE_BOARD, {
    onCompleted: ({ deleteBoard }) => {
      const { ok, err } = deleteBoard;
      if (ok) {
        toast.success("게시물이 삭제 되었습니다");
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

  const [deleteFile] = useMutation(DELETE_FILE, {
    onCompleted: ({ deleteFile }) => {
      const { ok, err } = deleteFile;
      if (ok) {
        toast.success("파일이 삭제 되었습니다");
        if (refetch) refetch();
        else {
          console.log(err);
          toast.error(err);
        }
      }
    },
  });

  const [createFile] = useMutation(CREATE_FILE);

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

  const handleDeleteBoard = useCallback(() => {
    deleteBoard({
      variables: {
        id: parseInt(id as string, 10),
      },
    });
  }, [id, deleteBoard]);

  const handleEditBoard = useCallback(() => {
    editBoard({
      variables: {
        id: parseInt(id as string, 10),
        title,
        content: content,
        link,
      },
    });
  }, [id, title, content, link, editBoard]);

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

  useEffect(() => {
    if (id) {
      getBoardById({ variables: { id: parseInt(id as string, 10) } });
    }
  }, [id, getBoardById]);

  useEffect(() => {
    if (data && data.getBoardById && data.getBoardById.data) {
      setBoard(data.getBoardById.data);
      setTitle(data.getBoardById.data.title || "");
      setContent(data.getBoardById.data.content || "");
      setLink(data.getBoardById.data.link || "");
    }
    if (
      data &&
      data.getBoardById &&
      data.getBoardById.data &&
      data.getBoardById.data.files
    ) {
      setFiles(data.getBoardById.data.files);
    }
  }, [data, setTitle, setContent, setLink]);

  useEffect(() => {
    if (progress < 0) {
      setProgress(0);
    }
  }, [progress]);

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
        <Descriptions.Item label="제목" span={4} labelStyle={{ width: 100 }}>
          <Input
            placeholder={board?.title || undefined}
            value={title}
            onChange={onChangeTitle}
          />
        </Descriptions.Item>
        <Descriptions.Item
          label="첨부파일"
          span={4}
          labelStyle={{ width: 100 }}
        >
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
                    <button
                      className="attach-button"
                      onClick={() => handleDeleteFile(elem?.id, elem?.fileName)}
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
        <Descriptions.Item label="링크" span={4}>
          <Input
            placeholder={board?.link || undefined}
            value={link}
            onChange={onChangeLink}
          />
        </Descriptions.Item>
        <Descriptions.Item label="내용" span={4}>
          <Input.TextArea
            placeholder={board?.content || undefined}
            rows={10}
            value={content}
            onChange={onChangeContent}
          />
        </Descriptions.Item>
      </Descriptions>
      <div className="button-group">
        <Button
          type="primary"
          onClick={() => handleEditBoard()}
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
        <Button type="primary" danger onClick={handleDeleteBoard}>
          삭제하기
        </Button>
      </div>
    </Container>
  );
};

export default EditBoardPage;
