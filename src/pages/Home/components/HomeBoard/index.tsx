import React from "react";
import styled from "@emotion/styled";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  mediaQueries,
} from "../../../../utils/mediaQuery";

const HomeBoard: React.VFC = () => {
  return (
    <Wrapper>
      <Content>
        <Col>first</Col>
        <Col>second</Col>
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
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 90%;
    width: 445px;
    border: 1px solid black;
  }
`;
