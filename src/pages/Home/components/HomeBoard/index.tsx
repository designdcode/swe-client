import React from "react";
import styled from "@emotion/styled";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../../../utils/mediaQuery";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { useQuery } from "@apollo/client";
import { GET_BOARD_BY_CATEGORY } from "../../../../queries/adminQuery";
import {
  getBoardByCategory,
  getBoardByCategoryVariables,
} from "../../../../typings/api";

const NoticeBoard = () => {
  return <div>notice</div>;
};

const VideoBoard = () => {
  return <div>videio</div>;
};

const HomeBoard: React.VFC = () => {
  const size = useWindowSize();
  const { loading, data } = useQuery<
    getBoardByCategory,
    getBoardByCategoryVariables
  >(GET_BOARD_BY_CATEGORY, {
    variables: {
      category: "notice",
    },
  });
  console.log(data);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Wrapper>
      <Content>
        {size.width > 767 ? (
          <>
            <Col>
              <NoticeBoard />
            </Col>
            <Col>
              <VideoBoard />
            </Col>
          </>
        ) : (
          <>
            <Col>
              <VideoBoard />
            </Col>
            <Col>
              <NoticeBoard />
            </Col>
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default HomeBoard;

export const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 400px;
    max-width: 1980px;
  }
`;

export const Content = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const Col = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    height: 300px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 90%;
    width: 445px;
    border: 1px solid black;
  }
`;
