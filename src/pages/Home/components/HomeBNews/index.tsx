import styled from "@emotion/styled";
import React from "react";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  mediaQueries,
} from "../../../../utils/mediaQuery";

const HomeBNews: React.VFC = () => {
  return (
    <Wrapper>
      <Content>bnews</Content>
    </Wrapper>
  );
};

export default HomeBNews;

export const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 400px;
    max-width: 1980px;
    background-image: url("img/homebnews.jpeg");
  }
`;
export const Content = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 900px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;
