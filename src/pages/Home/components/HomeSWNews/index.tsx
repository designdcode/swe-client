import styled from "@emotion/styled";
import React from "react";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  mediaQueries,
} from "../../../../utils/mediaQuery";

const HomeSWNews: React.VFC = () => {
  return (
    <Wrapper>
      <Content>
        <Row>
          <Col>HomeSWNews1</Col>
          <Col>HomeSWNews2</Col>
        </Row>
        <Row>
          <Col>HomeSWNews3</Col>
          <Col>HomeSWNews4</Col>
        </Row>
      </Content>
    </Wrapper>
  );
};

export default HomeSWNews;

export const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 500px;
    max-width: 1980px;
    background-image: url("img/homeswnews.jpeg");
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

export const Row = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
  }
`;

export const Col = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 150px;
    width: 445px;
    border: 1px solid black;
    margin: 75px 0;
  }
`;
