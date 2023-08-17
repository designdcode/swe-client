import React, { useEffect, useState } from "react";
import { BoardQuery } from "../../../../typings/api.d";
import { useBoardContext } from "../../../../contexts";
import { NoticeTable, VideoBoard } from "./components";
import styled from "@emotion/styled";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../../../utils/mediaQuery";

const HomeBoard: React.VFC = () => {
  const { boards, loading } = useBoardContext();
  const [videoData, setVideoData] = useState<BoardQuery["board"]>();

  useEffect(() => {
    if (boards) {
      const videos = boards
        .filter((v) => v.category === "link")
        .sort(
          (a, b) =>
            new Date(b.inputCreatedAt).getTime() -
            new Date(a.inputCreatedAt).getTime()
        );
      setVideoData(videos[videos.length - 1] || undefined);
    }
  }, [boards]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Wrapper>
      <Container>
        <NoticeTable />
        <VideoBoard videoLink={videoData?.link || ""} />
      </Container>
    </Wrapper>
  );
};

export default HomeBoard;

const Wrapper = styled.div`
  display: flex;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    height: 750px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 550px;
    background-color: #0c1b58;
    background-image: url("/img/boardBack.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    flex-direction: column;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    max-width: 1280px;
    justify-content: space-between;
  }
`;
