import React, { useCallback, useEffect, useState } from "react";
import { Container } from "../LinkManager/styles";
import styled from "@emotion/styled";
import YouTube, { Options } from "react-youtube";
import useInput from "../../../hooks/useInput";
import { Input } from "antd";
import { toast } from "react-toastify";
import { useBoardContext } from "../../../contexts";
import { useCreateBoardMutation } from "../../../typings/api.d";

const VideoLink: React.VFC = () => {
  const [videoId, setVideoId] = useState<string>("");
  const [url, onChangeUrl, setUrl] = useInput("");
  const [inputOpen, setInputOpen] = useState<boolean>(false);
  const { boards, loading, refetch } = useBoardContext();

  const [createBoardMutation] = useCreateBoardMutation({
    onCompleted: () => {
      toast.success("성공적으로 업로드 되었습니다");
      setUrl("");
      window.location.reload();
    },
  });

  useEffect(() => {
    if (boards) {
      const filtered = boards.filter((v) => v.category === "link");
      if (filtered[0] && filtered[0].link) {
        setVideoId(filtered[0].link.split("v=")[1]);
      }
    }
  }, [boards]);

  const opts: Options = {
    height: "350",
    width: "500",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleSubmit = useCallback(async () => {
    await createBoardMutation({
      variables: {
        args: {
          title: "video link",
          content: "video-content",
          link: url,
          category: "link",
        },
      },
    }).then((res) => {
      if (refetch) {
        refetch();
      }
    });
    setUrl("");
  }, [url, createBoardMutation, refetch, setUrl]);

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
          <div className="head-button" onClick={() => setInputOpen(!inputOpen)}>
            링크 올리기
          </div>
        </div>
        {inputOpen && (
          <div className="input-content">
            <StyledInput value={url} onChange={onChangeUrl} />
            <button onClick={handleSubmit}>올리기</button>
          </div>
        )}
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

  & .input-content {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 10px 5px;

    & button {
      border: none;
      background-color: skyblue;
      color: white;
      cursor: pointer;
      padding: 4px 6px;
      margin-left: 20px;
    }
  }

  & .notice {
    padding: 15px;
  }
`;

const StyledInput = styled(Input)`
  width: 400px;
`;
