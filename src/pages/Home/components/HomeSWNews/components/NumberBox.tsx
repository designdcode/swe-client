import styled from "@emotion/styled";
import React, { FC } from "react";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../../../../utils/mediaQuery";
import { Typography } from "antd";
import { Stack } from "@mui/material";

interface NumberBoxProps {
  fill: boolean;
  createdAt: Date;
}

export const NumberBox: FC<NumberBoxProps> = ({ fill, createdAt }) => {
  const year = new Date(createdAt).getFullYear();
  const month = new Date(createdAt).getMonth() + 1;
  const date = new Date(createdAt).getDate();

  return (
    <Wrapper
      style={{
        backgroundColor: fill ? "#0c1b58" : "#CCCCCC",
      }}
    >
      <Stack direction={"column"} alignItems={"center"}>
        <Typography.Text
          style={{
            color: "white",
            margin: 0,
          }}
        >
          {year}
        </Typography.Text>
        <Typography.Title
          level={5}
          style={{
            color: "white",
            margin: 0,
          }}
        >
          {month > 10 ? month : `0${month}`}.{date}
        </Typography.Title>
      </Stack>
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
