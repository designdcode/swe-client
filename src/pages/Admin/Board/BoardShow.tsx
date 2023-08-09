import { FC, useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Button, Descriptions, Image, Typography } from "antd";
import { useHistory, useLocation } from "react-router";
import { useBoardContext } from "../../../contexts";
import { BoardQuery, useRemoveBoardMutation } from "../../../typings/api.d";
import { toast } from "react-toastify";

export const BoardShow: FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const param = pathname.split("/")[2];
  const id = pathname.split("/")[4];
  const { boards, refetch } = useBoardContext();
  const [board, setBoard] = useState<BoardQuery["board"]>();

  useEffect(() => {
    if (id.includes("sitemap")) {
      history.push(`/admin/${param}/${id}`);
    }
  }, [id, param, history]);

  const [deleteBoard] = useRemoveBoardMutation({
    onCompleted: () => {
      toast.success("게시물이 삭제 되었습니다");
      if (refetch) {
        refetch();
      }
    },
  });

  const handleRemove = useCallback(async () => {
    await deleteBoard({
      variables: {
        _id: id,
      },
      onCompleted: () => {
        history.goBack();
      },
    });
  }, [id, history, deleteBoard]);

  useEffect(() => {
    if (boards) {
      setBoard(boards.find((v) => v._id === id));
    }
  }, [boards, id]);

  return (
    <div>
      <Button type="ghost" onClick={() => history.goBack()}>
        뒤로
      </Button>
      <Descriptions
        size="middle"
        bordered
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          backgroundColor: "white",
          padding: "15px",
        }}
        column={1}
      >
        <Descriptions.Item label="제목">{board?.title}</Descriptions.Item>
        <Descriptions.Item label="상태">
          <Typography.Text type={board?.private ? "danger" : "success"}>
            {board?.private ? "비공개" : "공개"}
          </Typography.Text>
        </Descriptions.Item>
        <Descriptions.Item label="작성자">
          {board?.writer || "관리자"}
        </Descriptions.Item>
        <Descriptions.Item label="작성일">
          {board?.inputCreatedAt?.slice(0, 10) || board?.createdAt.slice(0, 10)}
        </Descriptions.Item>
        <Descriptions.Item label="파일">
          {board?.files && board.files.length !== 0 ? (
            <>
              {board.files.map((elem, idx) => {
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
            labelStyle={{ width: 100 }}
            key="image"
          >
            {board?.images && board.images.length !== 0 ? (
              <Image
                src={board.images[board.images.length - 1]!.url}
                alt="newsimage"
                width={300}
              />
            ) : (
              <>이미지 없음</>
            )}
          </Descriptions.Item>
        )}
        <Descriptions.Item label="내용" span={4} key="content">
          <ContentDiv
            dangerouslySetInnerHTML={{ __html: board?.content || "" }}
          />
        </Descriptions.Item>
      </Descriptions>
      <div
        style={{
          maxWidth: "500px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          type="primary"
          onClick={() => {
            history.push(`/admin/${param}/edit/${board?.category}/${id}`);
          }}
        >
          수정하기
        </Button>
        <Button
          type="primary"
          style={{
            marginLeft: "20px",
          }}
          danger
          onClick={handleRemove}
        >
          삭제하기
        </Button>
      </div>
    </div>
  );
};

const ContentDiv = styled.div`
  & img {
    max-width: 600px;
  }
`;
