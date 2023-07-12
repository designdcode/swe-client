import React, { useCallback, useEffect, useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation, useParams } from "react-router";
import { Descriptions, Typography } from "antd";
import { Button, Container } from "./styles";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Editor from "../../../components/Editor";
import Moment from "react-moment";
import {
  BoardQuery,
  useCreateCommentMutation,
  useRemoveBoardMutation,
  useRemoveCommentMutation,
} from "../../../typings/api.d";
import { useBoardContext } from "../../../contexts";

interface locationProps {
  search: string;
}

interface paramProps {
  param: string;
}

const BoardDetail: React.VFC = () => {
  const { search } = useLocation<locationProps>();
  const { param } = useParams<paramProps>();
  const history = useHistory();
  const queryObj = queryString.parse(search);
  const { id, category } = queryObj;
  const [board, setBoard] = useState<BoardQuery["board"]>();
  const [files, setFiles] = useState<BoardQuery["board"]["files"]>();
  const [images, setImages] = useState<BoardQuery["board"]["images"]>();
  const [showReply, setShowReply] = useState<boolean>(false);
  const [reply, setReply] = useState<string>("");
  const { boards, loading, refetch } = useBoardContext();

  console.log("board detail");

  const [deleteBoard] = useRemoveBoardMutation({
    onCompleted: () => {
      toast.success("게시물이 삭제 되었습니다.");
      history.push({
        pathname: `/admin/${param}/${category}`,
        state: { refresh: true },
      });
    },
  });

  const [createReplyMutation, { loading: mutationLoading }] =
    useCreateCommentMutation({
      onCompleted: () => {
        setReply("");
        setShowReply(false);
        if (refetch) refetch();
      },
    });

  const [deleteReplyMutation] = useRemoveCommentMutation({
    onCompleted: () => {
      if (refetch) {
        refetch();
        toast.info("답글이 삭제 되었습니다.");
      }
    },
  });

  useEffect(() => {
    if (boards) {
      setBoard(boards.find((v) => String(v._id) === String(id)));
    }
  }, [boards, id]);

  const handleChange = (value: any) => {
    setReply(value);
  };

  const handleDeleteBoard = useCallback(() => {
    deleteBoard({
      variables: {
        _id: String(id),
      },
    });
  }, [id, deleteBoard]);

  useEffect(() => {
    if (board && board.files) {
      setFiles(board.files);
    }
    if (board && board.images) {
      setImages(board.images);
    }
  }, [board]);

  const handleReplySubmit = useCallback(
    async (id: string) => {
      await createReplyMutation({
        variables: {
          args: {
            boardId: id,
            content: reply,
          },
        },
      });
    },
    [createReplyMutation, reply]
  );

  const handleDeleteReply = useCallback(
    async (id: string) => {
      await deleteReplyMutation({
        variables: {
          _id: id,
        },
      });
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
          <Moment format="YYYY/MM/DD">{board?.inputCreatedAt || 0}</Moment>
        </Descriptions.Item>
        <Descriptions.Item
          key="writer"
          label="작성자"
          span={3}
          labelStyle={{ width: 100 }}
        >
          <Typography.Text>
            {board?.writer === "" || board?.writer === null
              ? "관리자"
              : board?.writer}
          </Typography.Text>
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
                  <div
                    key={idx}
                    style={{
                      padding: "6px",
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
            </>
          ) : (
            <div>
              첨부파일 없음&ensp;
              <span
                style={{
                  display: "inline-block",
                  marginLeft: 15,
                  fontSize: 10,
                  color: `${board?.showAttach ? "#0081fa" : "red"}`,
                }}
              >
                {board?.showAttach ? "공개" : "비공개"}
              </span>
            </div>
          )}
        </Descriptions.Item>
        {(param === "achievement" || param === "community") && (
          <Descriptions.Item
            label="이미지"
            span={4}
            labelStyle={{ width: 100 }}
            key="image"
          >
            {console.log(images)}
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
            {board?.comments && board.comments.length > 0 ? (
              board.comments.map((item, idx) => {
                return (
                  <div key={idx} style={{ display: "flex" }}>
                    <span
                      style={{
                        display: "block",
                        minWidth: 200,
                        minHeight: 100,
                      }}
                      dangerouslySetInnerHTML={{
                        __html: item?.content || "",
                      }}
                    ></span>
                    <Button
                      type="primary"
                      danger
                      style={{ marginLeft: 15 }}
                      onClick={() => handleDeleteReply(item._id)}
                    >
                      답글 삭제
                    </Button>
                  </div>
                );
              })
            ) : (
              <div style={{ display: "block" }}>
                {showReply ? (
                  <Editor onChange={handleChange} content={reply} />
                ) : (
                  <span style={{ display: "block", marginBottom: 15 }}>
                    답글이 없습니다
                  </span>
                )}
              </div>
            )}
            {board?.comments &&
              board.comments.length === 0 &&
              (showReply ? (
                <Button
                  type="primary"
                  onClick={() => {
                    handleReplySubmit(board._id);
                  }}
                >
                  게시
                </Button>
              ) : (
                <Button
                  type="default"
                  disabled={mutationLoading}
                  onClick={() => setShowReply(showReply ? false : true)}
                >
                  {mutationLoading ? "업로드 중" : "댓글달기"}
                </Button>
              ))}
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
