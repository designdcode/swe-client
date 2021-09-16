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
import { DELETE_BOARD, DELETE_FILE } from "../../../queries/adminQuery";
import { toast } from "react-toastify";
import { Container, Button } from "./styles";
import { Descriptions, Input } from "antd";
import useInput from "../../../hooks/useInput";
import { CloseCircleOutlined } from "@ant-design/icons";

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
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");
  const [link, onChangeLink, setLink] = useInput("");

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

  const [editBoard] = useMutation(DELETE_BOARD, {
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
        content,
        link,
      },
    });
  }, [id, title, content, link, editBoard]);

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
        <Descriptions.Item label="제목" span={3} labelStyle={{ width: 100 }}>
          <Input value={title} onChange={onChangeTitle} />
        </Descriptions.Item>
        {files && (
          <Descriptions.Item
            label="첨부파일"
            span={3}
            labelStyle={{ width: 100 }}
          >
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
                    onClick={() => deleteFile({ variables: { id: elem?.id } })}
                  >
                    <CloseCircleOutlined />
                  </button>
                </div>
              );
            })}
          </Descriptions.Item>
        )}
        <Descriptions.Item label="링크" span={3}>
          <Input value={link} onChange={onChangeLink} />
        </Descriptions.Item>
        <Descriptions.Item label="내용" span={3}>
          <Input value={content} onChange={onChangeContent} />
        </Descriptions.Item>
      </Descriptions>
      <div className="button-group">
        <Button type="primary" onClick={handleEditBoard}>
          수정하기
        </Button>
        <Button type="primary" danger onClick={handleDeleteBoard}>
          삭제하기
        </Button>
      </div>
    </Container>
  );
};

export default EditBoardPage;
