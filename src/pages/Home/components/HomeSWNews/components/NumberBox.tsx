import styled from "@emotion/styled";
import React, { FC } from "react";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../../../../utils/mediaQuery";
import { Typography } from "antd";

interface NumberBoxProps {
  fill: boolean;
}

export const NumberBox: FC<NumberBoxProps> = ({ fill }) => {
  return (
    <Wrapper
      style={{
        backgroundColor: fill ? "#0c1b58" : "#CCCCCC",
      }}
    >
      <Typography.Title
        style={{
          color: "white",
          margin: 0,
        }}
        level={2}
      >
        01
      </Typography.Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65px;
    width: 65px;
    margin-right: 20px;
  }
`;
