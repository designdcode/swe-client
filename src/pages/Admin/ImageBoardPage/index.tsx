import { Descriptions, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { Container, Button } from "./styles";
import { useLazyQuery } from "@apollo/client";
import {
  getBoardByCategory,
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
  let sub = subparam;
  const { state } = useLocation<locationProps>();
  const [file, setFile] = useState<
    (getBoardByCategory_getBoardByCategory_data_files | null)[] | undefined
  >();
  const [image, setImage] =
    useState<
      (getBoardByCategory_getBoardByCategory_data_images | null | undefined)[]
    >();
  const [getBoard, { loading, data, refetch }] =
    useLazyQuery<getBoardByCategory>(GET_BOARD_BY_CATEGORY);

  useEffect(() => {
    getBoard({ variables: { category: sub } });
  }, [sub, getBoard]);

  useEffect(() => {
    const initData = () => {
      if (
        data?.getBoardByCategory.ok &&
        data.getBoardByCategory.data?.length !== 0
      ) {
        if (
          data.getBoardByCategory.data &&
          data.getBoardByCategory.data.length !== 0
        ) {
          if (data.getBoardByCategory.data[0].files)
            setFile(data.getBoardByCategory.data[0].files);
          if (data.getBoardByCategory.data[0].images)
            setImage(data.getBoardByCategory.data[0].images);
        }
      } else {
        setFile([]);
        setImage([]);
      }
    };
    initData();
    return () => initData();
  }, [data]);

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
        {/* {board && board[0] ? ( */}
        {data?.getBoardByCategory.data?.length !== 0 &&
        data?.getBoardByCategory.ok ? (
          <Button
            type="primary"
            onClick={() =>
              history.push(
                // `/admin/${param}/edit-image-${param}?category=${subparam}&id=${board && board[0]?.id
                `/admin/${param}/edit-image-${param}?category=${subparam}&id=${
                  data.getBoardByCategory.data &&
                  data.getBoardByCategory.data[0].id
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
          {data?.getBoardByCategory.data?.length !== 0 &&
          data?.getBoardByCategory.ok ? (
            <a
              href={`${
                data.getBoardByCategory.data &&
                data.getBoardByCategory.data[0].link
              }`}
              target="_blank"
              rel="noreferrer"
            >
              {data.getBoardByCategory.data &&
                data.getBoardByCategory.data[0].link}
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
          {file && file.length ? (
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
