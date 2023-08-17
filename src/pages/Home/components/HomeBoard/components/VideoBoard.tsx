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
          color: "white",
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
      <div>
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 90%;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 45%;
  }
`;
