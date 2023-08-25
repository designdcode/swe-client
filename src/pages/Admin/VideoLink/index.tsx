import React, { useCallback, useEffect, useState } from "react";
import { Container } from "./styles";
import styled from "@emotion/styled";
import YouTube, { Options } from "react-youtube";
import {
  Button,
  Checkbox,
  Descriptions,
  Input,
  Radio,
  Spin,
  Typography,
  Upload,
} from "antd";
import { toast } from "react-toastify";
import { useBoardContext } from "../../../contexts";
import { useCreateBoardMutation } from "../../../typings/api.d";
import { attachmentUploader } from "../../../utils/attachmentUploader";

const VideoLink: React.VFC = () => {
  const [videoId, setVideoId] = useState<string>("");
  const [videoPreview, setVideoPreview] = useState<string>();
  const [url, setUrl] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const { boards, loading: queryLoading, refetch } = useBoardContext();
  const [action, setAction] = useState<"link" | "file">("link");
  const [isYoutubeUrl, setIsYoutubeUrl] = useState<boolean>(false);

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
      const latestVideo = filtered[filtered?.length - 1] || undefined;
      if (
        latestVideo &&
        latestVideo.link &&
        latestVideo.title?.includes("youtube")
      ) {
        setVideoId(latestVideo.link.split("v=")[1]);
      }
      if (latestVideo && latestVideo.link) {
        setVideoPreview(latestVideo.link);
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
          title: `video-${action}${isYoutubeUrl ? "-youtube" : ""}`,
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
  }, [url, createBoardMutation, refetch, setUrl, action, isYoutubeUrl]);

  const onReady = (e: any) => {
    e.target.pauseVideo();
  };

  const handleImageUpload = useCallback((file: any) => {
    setLoading(true);
    Promise.resolve(
      attachmentUploader({
        type: "images",
        file,
        category: "link",
      })
    )
      .then((url) => {
        setUrl(url);
        toast.success("영상이 업로드 되었습니다");
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("업로드에 실패하였습니다. 잠시후 다시 시도해 주세요");
        setLoading(false);
      });
  }, []);

  const handleChange = useCallback((v) => {
    setAction(v.target.value);
  }, []);

  const handleCheck = useCallback((v) => {
    setIsYoutubeUrl(v.target.checked);
  }, []);

  return (
    <Container>
      <Content>
        {queryLoading && (
          <Typography.Title level={3}>Loading...</Typography.Title>
        )}
        <Descriptions
          size="middle"
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            backgroundColor: "white",
            padding: "15px",
          }}
          bordered
          labelStyle={{
            width: "150px",
          }}
          column={1}
        >
          <Descriptions.Item label="업로드된 영상">
            {videoId !== "" ? (
              <YouTube opts={opts} videoId={videoId} onReady={onReady} />
            ) : videoPreview ? (
              <div>
                <video
                  style={{
                    width: "500px",
                  }}
                  autoPlay={false}
                  muted
                  controls
                >
                  <source src={videoPreview} type="video/mp4" />
                </video>
              </div>
            ) : (
              <Typography.Text>업로드 된 비디오가 없습니다.</Typography.Text>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="영상올리기">
            <Radio.Group
              defaultValue={"link"}
              onChange={handleChange}
              buttonStyle="solid"
              optionType="button"
              disabled={loading}
            >
              <Radio.Button value={"link"}>링크</Radio.Button>
              <Radio.Button value={"file"}>파일</Radio.Button>
            </Radio.Group>
            <div
              style={{
                margin: "20px 0",
              }}
            >
              {loading && (
                <div
                  style={{
                    margin: "20px 0",
                  }}
                >
                  <Spin
                    size="default"
                    style={{
                      marginRight: "15px",
                    }}
                  />
                  <Typography.Text>파일 업로드 중입니다.</Typography.Text>
                </div>
              )}
              {action === "link" ? (
                <div>
                  <Input placeholder="링크를 입력해주세요. ex)https://..." />
                  <Checkbox
                    style={{
                      marginTop: "20px",
                    }}
                    onChange={handleCheck}
                  >
                    유튜브 링크입니다.
                  </Checkbox>
                </div>
              ) : (
                <Upload
                  maxCount={1}
                  accept="video/mp4"
                  disabled={loading}
                  customRequest={({ file }) => handleImageUpload(file)}
                  showUploadList={false}
                >
                  <Button disabled={loading}>파일 업로드</Button>
                </Upload>
              )}
            </div>
            {url && (
              <video
                style={{
                  width: "500px",
                }}
                autoPlay={false}
                muted
                controls
              >
                <source src={url} type="video/mp4" />
              </video>
            )}
          </Descriptions.Item>
        </Descriptions>
        <Button onClick={handleSubmit} disabled={loading}>
          올리기
        </Button>
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
