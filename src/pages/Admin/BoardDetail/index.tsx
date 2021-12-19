import React, { useCallback, useEffect, useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation, useParams } from "react-router";
import { useMutation, useQuery } from "@apollo/client";
import { GET_BOARD_BY_ID } from "../../../queries/sharedQuery";
import {
  createReply,
  createReplyVariables,
  deleteReply,
  deleteReplyVariables,
  getBoardById,
  getBoardByIdVariables,
  getBoardById_getBoardById_data,
  getBoardById_getBoardById_data_files,
  getBoardById_getBoardById_data_images,
} from "../../../typings/api";
import { Descriptions, Typography } from "antd";
import { Button, Container } from "./styles";
import {
  CREATE_REPLY,
  DELETE_BOARD,
  DELETE_REPLY,
} from "../../../queries/adminQuery";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { getDate } from "../../../utils/convertDate";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "@emotion/styled";

interface locationProps {
  search: string;
}

interface paramProps {
  param: string;
}

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["clean"],
  ],
};

const formats = ["header", "bold", "italic", "underline", "list"];

const BoardDetail: React.VFC = () => {
  const { search } = useLocation<locationProps>();
  const { param } = useParams<paramProps>();
  const history = useHistory();
  const queryObj = queryString.parse(search);
  const { id, category } = queryObj;
  const [board, setBoard] = useState<getBoardById_getBoardById_data>();
  const [files, setFiles] =
    useState<(getBoardById_getBoardById_data_files | undefined | null)[]>();
  const [images, setImages] =
    useState<(getBoardById_getBoardById_data_images | undefined | null)[]>();
  const [showReply, setShowReply] = useState<boolean>(false);
  const [reply, setReply] = useState<string>("");

  const { data, loading, refetch } = useQuery<
    getBoardById,
    getBoardByIdVariables
  >(GET_BOARD_BY_ID, {
    variables: {
      id: parseInt(id as string, 10),
    },
  });

  const handleChange = (value: any) => {
    setReply(value);
  };

  const [deleteBoard] = useMutation(DELETE_BOARD, {
    onCompleted: ({ deleteBoard }) => {
      const { ok, err } = deleteBoard;
      if (ok) {
        toast.success("게시물이 삭제 되었습니다.");
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

  const [createReplyMutation] = useMutation<createReply, createReplyVariables>(
    CREATE_REPLY,
    {
      onCompleted: ({ createReply }) => {
        const { ok, err } = createReply;
        if (ok) {
          refetch();
          setShowReply(false);
        } else {
          console.log(err);
        }
      },
    }
  );

  const [deleteReplyMutation] = useMutation<deleteReply, deleteReplyVariables>(
    DELETE_REPLY,
    {
      onCompleted: ({ deleteReply }) => {
        const { ok, err } = deleteReply;
        if (ok) {
          refetch();
          toast.info("답글이 삭제 되었습니다.");
        } else {
          console.log(err);
        }
      },
    }
  );

  const handleDeleteBoard = useCallback(() => {
    deleteBoard({
      variables: {
        id: parseInt(id as string, 10),
      },
    });
  }, [id, deleteBoard]);

  useEffect(() => {
    if (data && data.getBoardById && data.getBoardById.data) {
      setBoard(data.getBoardById.data);
    }
    if (
      data &&
      data.getBoardById &&
      data.getBoardById.data &&
      data.getBoardById.data.files
    ) {
      setFiles(data.getBoardById.data.files);
    }
    if (
      data &&
      data.getBoardById &&
      data.getBoardById.data &&
      data.getBoardById.data.images
    ) {
      setImages(data.getBoardById.data.images);
    }
  }, [data]);

  const handleReplySubmit = useCallback(
    async (id?: number) => {
      if (id) {
        await createReplyMutation({
          variables: {
            boardId: id,
            content: reply,
          },
        });
      }
    },
    [createReplyMutation, reply]
  );

  const handleDeleteReply = useCallback(
    async (id?: number) => {
      if (id) {
        await deleteReplyMutation({
          variables: {
            replyId: id,
          },
        });
      }
    },
    [deleteReplyMutation]
  );

  if (loading) {
    return <>loading</>;
  }

  return (
    <Container>
      <Button type="ghost" onClick={() => history.goBack()}>
        뒤로
      </Button>
      <Descriptions
        bordered
        // column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        layout="horizontal"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Descriptions.Item
          key="title"
          label="제목"
          span={3}
          labelStyle={{ width: 100 }}
        >
          <Typography.Title level={3}>{board?.title}</Typography.Title>
        </Descriptions.Item>
        <Descriptions.Item
          key="status"
          label="상태"
          span={3}
          labelStyle={{ width: 100 }}
        >
          <Typography.Text type={board?.private ? "danger" : "success"}>
            {board?.private ? "비공개" : "공개"}
          </Typography.Text>
        </Descriptions.Item>
        <Descriptions.Item
          key="date"
          label="작성일"
          span={3}
          labelStyle={{ width: 100 }}
        >
          {getDate(board?.createdAt || "")}
        </Descriptions.Item>
        <Descriptions.Item
          key="file"
          label="파일"
          span={3}
          labelStyle={{ width: 100 }}
        >
          {files && files.length !== 0 ? (
            <>
              {files.map((elem, idx) => {
                return (
                  <span key={idx} style={{ display: "inline-block" }}>
                    <a
                      href={elem?.url}
                      download
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      {elem?.fileName}
                    </a>
                    <span
                      style={{
                        display: "inline-block",
                        marginLeft: 15,
                        color: `${board?.showAttach ? "#0081fa" : "red"}`,
                      }}
                    >
                      {board?.showAttach ? "공개" : "비공개"}
                    </span>
                  </span>
                );
              })}
            </>
          ) : (
            <>첨부파일 없음</>
          )}
        </Descriptions.Item>
        {(param === "achievement" || param === "community") && (
          <Descriptions.Item
            label="이미지"
            span={4}
            labelStyle={{ width: 100 }}
            key="image"
          >
            {images && images.length !== 0 ? (
              <img
                src={images[images.length - 1]!.url}
                alt="newsimage"
                width={300}
              />
            ) : (
              <>이미지 없음</>
            )}
          </Descriptions.Item>
        )}
        <Descriptions.Item label="내용" span={4} key="content">
          <span
            style={{ whiteSpace: "pre-wrap" }}
            dangerouslySetInnerHTML={{ __html: board?.content || "" }}
          ></span>
        </Descriptions.Item>
        {(category?.toString().split("-")[1] === "request" ||
          category?.toString().split("-")[1] === "help") && (
          <Descriptions.Item label="답글" span={4} key="content">
            {board?.replies && board.replies.length > 0 ? (
              board.replies.map((item, idx) => {
                return (
                  <div key={idx} style={{ display: "flex" }}>
                    <span
                      style={{
                        display: "block",
                        minWidth: 200,
                        minHeight: 100,
                      }}
                      dangerouslySetInnerHTML={{ __html: item?.content || "" }}
                    ></span>
                    <Button
                      type="primary"
                      danger
                      style={{ marginLeft: 15 }}
                      onClick={() => handleDeleteReply(item?.id)}
                    >
                      답글 삭제
                    </Button>
                  </div>
                );
              })
            ) : (
              <div>
                {showReply ? (
                  <Editor
                    modules={modules}
                    formats={formats}
                    value={reply || ""}
                    onChange={handleChange}
                    theme="snow"
                  />
                ) : (
                  <span style={{ display: "block", marginBottom: 15 }}>
                    답글이 없습니다
                  </span>
                )}
              </div>
            )}
            {showReply ? (
              <Button
                type="primary"
                onClick={() => {
                  handleReplySubmit(board?.id);
                }}
              >
                게시
              </Button>
            ) : (
              <Button type="default" onClick={() => setShowReply(!showReply)}>
                댓글 달기
              </Button>
            )}
          </Descriptions.Item>
        )}
      </Descriptions>
      <div className="button-group">
        <Link
          to={`/admin/${param}/edit-${param}?category=${category}&id=${id}`}
        >
          <Button type="primary">수정</Button>
        </Link>
        <Button type="primary" danger onClick={handleDeleteBoard}>
          삭제
        </Button>
      </div>
    </Container>
  );
};

export default BoardDetail;

const Editor = styled(ReactQuill)`
  background-color: white;
  min-height: 150px;
  .ql-container {
    min-height: 150px;
  }
`;
