import { Descriptions, Image, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { Container, Button } from "./styles";
import { fileSwitcher, linkSwitcher } from "../../../utils/switcher";
import { BoardQuery, BoardsQuery } from "../../../typings/api.d";
import { useBoardContext } from "../../../contexts";

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
  const [data, setData] = useState<BoardsQuery["boards"]["data"]>();
  const { boards, loading, refetch } = useBoardContext();
  const [file, setFile] = useState<BoardQuery["board"]["files"]>();
  const [image, setImage] = useState<BoardQuery["board"]["images"]>();
  const [isFileNeeded, setIsFileNeeded] = useState<boolean>(false);
  const [isLinkNeeded, setIsLinkNeeded] = useState<boolean>(false);

  useEffect(() => {
    setIsFileNeeded(fileSwitcher(subparam as string));
    setIsLinkNeeded(linkSwitcher(subparam as string));
  }, [subparam]);

  useEffect(() => {
    if (boards) {
      const board = boards.filter((v) => v.category === sub);
      setData(board);
      setImage(board[0]?.images);
    }
  }, [boards, sub]);

  useEffect(() => {
    const initData = () => {
      if (data) {
        if (data[0]?.files) setFile(data[0].files);
        if (data[0]?.images) setImage(data[0].images);
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
        {data && data.length > 0 ? (
          <Button
            type="primary"
            style={{ marginLeft: 25 }}
            onClick={() =>
              history.push(
                `/admin/${param}/edit-image-${param}?category=${subparam}&id=${data[0]?._id}`
              )
            }
          >
            수정하기
          </Button>
        ) : (
          <Button
            type="primary"
            style={{ marginLeft: 25 }}
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
        {isLinkNeeded && (
          <Descriptions.Item label="링크" span={4} labelStyle={{ width: 100 }}>
            {data ? (
              <a href={`${data[0].link}`} target="_blank" rel="noreferrer">
                {data && data[0].link}
              </a>
            ) : (
              <Typography.Text>링크가 없습니다</Typography.Text>
            )}
          </Descriptions.Item>
        )}
        {isFileNeeded && (
          <Descriptions.Item label="파일" span={4} labelStyle={{ width: 100 }}>
            {file && file.length ? (
              file.map((elem, idx) => {
                return (
                  <span key={elem?.fileName} className={"attach-group"}>
                    <a
                      href={`${elem?.url}`}
                      download
                      target="_blank"
                      rel="noreferrer"
                    >
                      {elem?.fileName}
                    </a>
                  </span>
                );
              })
            ) : (
              <Typography.Text>첨부파일이 없습니다</Typography.Text>
            )}
          </Descriptions.Item>
        )}
        <Descriptions.Item label="이미지" span={4} labelStyle={{ width: 100 }}>
          {image && image[0] ? (
            <Image width={300} src={image[0].url} />
          ) : (
            <Typography.Text>업로드 된 이미지가 없습니다</Typography.Text>
          )}
        </Descriptions.Item>
      </Descriptions>
    </Container>
  );
};

export default ImageBoardPage;
