import React, { useCallback, useEffect, useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation, useParams } from "react-router";
import { useMutation, useQuery } from "@apollo/client";
import { GET_BOARD_BY_ID } from "../../../queries/sharedQuery";
import {
  getBoardById,
  getBoardByIdVariables,
  getBoardById_getBoardById_data,
  getBoardById_getBoardById_data_files,
  getBoardById_getBoardById_data_images,
} from "../../../typings/api";
import { Descriptions, Typography, Carousel, Radio } from "antd";
import { Button, CarouselDiv, Container } from "./styles";
import { DELETE_BOARD } from "../../../queries/adminQuery";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { getDate } from "../../../utils/convertDate";

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
  const [board, setBoard] = useState<getBoardById_getBoardById_data>();
  const [files, setFiles] =
    useState<(getBoardById_getBoardById_data_files | undefined | null)[]>();
  const [images, setImages] =
    useState<(getBoardById_getBoardById_data_images | undefined | null)[]>();

  const { data, loading } = useQuery<getBoardById, getBoardByIdVariables>(
    GET_BOARD_BY_ID,
    {
      variables: {
        id: parseInt(id as string, 10),
      },
    }
  );

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
        <Descriptions.Item label="제목" span={4} labelStyle={{ width: 100 }}>
          <Typography.Title level={3}>{board?.title}</Typography.Title>
        </Descriptions.Item>
        <Descriptions.Item label="작성일" span={4} labelStyle={{ width: 100 }}>
          {getDate(board?.createdAt || "")}
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
                  <span key={idx} style={{ display: "inline-block" }}>
                    <a
                      href={elem?.url}
                      download
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      {elem?.fileName}
                    </a>
                  </span>
                );
              })}
            </>
          ) : (
            <>첨부파일 없음</>
          )}
        </Descriptions.Item>
        <Descriptions.Item label="내용" span={4}>
          <span style={{ whiteSpace: "pre-wrap" }}>{board?.content}</span>
        </Descriptions.Item>
      </Descriptions>
      {param === "achievement" && (
        <Carousel dotPosition="bottom" style={{ minHeight: 400 }}>
          {images?.map((item, idx) => {
            return <CarouselDiv url={item!.url} key={idx} />;
          })}
        </Carousel>
      )}
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
