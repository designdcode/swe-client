import React, { FC } from "react";
import { Typography } from "antd";
import styled from "@emotion/styled";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../../../../utils/mediaQuery";
import { MenuOutlined } from "@ant-design/icons";

interface VideoBoardProps {
  videoLink: string;
}

export const VideoBoard: FC<VideoBoardProps> = ({ videoLink }) => {
  return (
    <Wrapper>
      <Typography.Title
        level={3}
        style={{
          color: window.innerWidth > 420 ? "white" : "black",
          padding: "12px 0",
        }}
      >
        <MenuOutlined
          style={{
            marginRight: "10px",
          }}
        />
        홍보영상
      </Typography.Title>
      <Container style={{}}>
        <video
          style={{
            width: "100%",
          }}
          autoPlay
          muted
          controls
        >
          <source src={videoLink} type="video/mp4" />
        </video>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;

const Container = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
  }
`;
