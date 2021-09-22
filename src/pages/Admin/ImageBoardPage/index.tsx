import { Descriptions, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { Container, Button } from "./styles";
import { useQuery } from "@apollo/client";
import {
  getBoardByCategory,
  getBoardByCategory_getBoardByCategory_data,
  getBoardByCategory_getBoardByCategory_data_files,
  getBoardByCategory_getBoardByCategory_data_images,
} from "../../../typings/api";
import { GET_BOARD_BY_CATEGORY } from "../../../queries/adminQuery";

interface ParamProps {
  param: string;
  subparam: string;
}

interface locationProps {
  search: string;
  refresh?: boolean;
}

const ImageBoardPage: React.VFC = () => {
  const history = useHistory();
  const { param, subparam } = useParams<ParamProps>();
  const { state } = useLocation<locationProps>();
  const [board, setBoard] =
    useState<
      (getBoardByCategory_getBoardByCategory_data | null | undefined)[]
    >();
  const [file, setFile] = useState<
    (getBoardByCategory_getBoardByCategory_data_files | null)[] | undefined
  >();
  const [image, setImage] =
    useState<
      (getBoardByCategory_getBoardByCategory_data_images | null | undefined)[]
    >();
  const { loading, data, refetch } = useQuery<getBoardByCategory>(
    GET_BOARD_BY_CATEGORY,
    {
      variables: { category: subparam },
    }
  );

  useEffect(() => {
    if (data && data.getBoardByCategory) {
      if (
        data.getBoardByCategory.data &&
        data.getBoardByCategory.data.length !== 0
      ) {
        setBoard(data.getBoardByCategory.data);
        if (board && board[0] && board[0].files) setFile(board[0].files);
        if (board && board[0] && board[0].images) setImage(board[0].images);
      }
    }
  }, [data, board, setBoard, setFile, setImage]);

  useEffect(() => {
    const excuteRefetch = () => {
      if (refetch) refetch();
    };
    if (state && state.refresh) {
      excuteRefetch();
    }
    return () => excuteRefetch();
  }, [refetch, state]);

  if (loading) {
    return <>loading</>;
  }

  return (
    <Container>
      <div className="button-group">
        <Button type="ghost" onClick={() => history.goBack()}>
          뒤로
        </Button>
        {board && board[0] ? (
          <Button
            type="primary"
            onClick={() =>
              history.push(
                `/admin/${param}/edit-image-${param}?category=${subparam}&id=${
                  board && board[0]?.id
                }`
              )
            }
          >
            수정하기
          </Button>
        ) : (
          <Button
            type="primary"
            onClick={() =>
              history.push(
                `/admin/${param}/create-image-${param}?category=${subparam}&param=${param}&subparam=${subparam}`
              )
            }
          >
            글쓰기
          </Button>
        )}
      </div>
      <Descriptions
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        layout="horizontal"
      >
        <Descriptions.Item label="링크" span={4} labelStyle={{ width: 100 }}>
          {board && board[0]?.link ? (
            <a href={`${board[0].link}`} target="_blank" rel="noreferrer">
              {board[0].link}
            </a>
          ) : (
            <Typography.Text>링크가 없습니다</Typography.Text>
          )}
        </Descriptions.Item>
        <Descriptions.Item
          label="첨부파일"
          span={4}
          labelStyle={{ width: 100 }}
        >
          {file ? (
            file.map((elem, idx) => {
              return (
                <div key={idx} className={"attach-group"}>
                  <a
                    href={`${elem?.url}`}
                    download
                    target="_blank"
                    rel="noreferrer"
                  >
                    {elem?.fileName}
                  </a>
                </div>
              );
            })
          ) : (
            <Typography.Text>첨부파일이 없습니다</Typography.Text>
          )}
        </Descriptions.Item>
        <Descriptions.Item label="이미지" span={4} labelStyle={{ width: 100 }}>
          {image && image[0] ? (
            <img src={image[0].url} alt={image[0].fileName} />
          ) : (
            <Typography.Text>업로드 된 이미지가 없습니다</Typography.Text>
          )}
        </Descriptions.Item>
      </Descriptions>
    </Container>
  );
};

export default ImageBoardPage;
