import React, { useEffect, useState } from "react";
import { Container } from "../LinkManager/styles";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import { GET_BOARD_BY_CATEGORY } from "../../../queries/adminQuery";
import {
  getBoardByCategory,
  getBoardByCategoryVariables,
} from "../../../typings/api";
import YouTube, { Options } from "react-youtube";
import useInput from "../../../hooks/useInput";

const VideoLink: React.VFC = () => {
  const [videoId, setVideoId] = useState<string>("");
  const [url, onChangeUrl, setUrl] = useInput("");
  const { data, loading } = useQuery<
    getBoardByCategory,
    getBoardByCategoryVariables
  >(GET_BOARD_BY_CATEGORY, {
    variables: {
      category: "link",
    },
    onCompleted: ({ getBoardByCategory }) => {
      const { ok, err, data } = getBoardByCategory;
      if (ok && data && data.length > 0) {
        if (data[0].link) {
          setVideoId(data[0].link.split("=v")[1]);
        }
      } else {
        console.log(err);
      }
    },
  });

  const opts: Options = {
    height: "350",
    width: "500",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (e: any) => {
    e.target.pauseVideo();
  };

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Container>
      <Content>
        <div className="head">
          <span className="title">현재 업로드된 영상</span>
          <div className="head-button">링크 올리기</div>
        </div>
        {videoId !== "" ? (
          <YouTube opts={opts} videoId={videoId} onReady={onReady} />
        ) : (
          <div className="notice">현재 업로드 된 비디오가 없습니다</div>
        )}
      </Content>
    </Container>
  );
};

export default VideoLink;

const Content = styled.div`
  & .head {
    display: flex;
    align-items: center;

    & .title {
      font-size: 16px;
      display: block;
    }

    & .head-button {
      padding: 6px 8px;
      background-color: skyblue;
      color: white;
      margin-left: 150px;
      cursor: pointer;
    }
    margin-bottom: 30px;
  }

  & .notice {
    padding: 15px;
  }
`;
