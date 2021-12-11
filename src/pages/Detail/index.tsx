import React from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router";
import { NavigationData } from "../../assets/NavigationData";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";

interface ParamProps {
  param: string;
  subparam: string;
}

const Detail = () => {
  const { param, subparam } = useParams<ParamProps>();
  return (
    <Page>
      <Wrapper>
        <TopCover />
        <Content>
          {NavigationData.map((item) => {
            if (item.title === param) {
              return (
                <TitleWrapper key={item.key}>
                  <MainTitle> {item.ko_title}</MainTitle>
                  <MainDesc>description</MainDesc>
                </TitleWrapper>
              );
            }
          })}
        </Content>
        <BottomCover>bottom</BottomCover>
      </Wrapper>
    </Page>
  );
};

export default Detail;

const Page = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100vw;
  }
`;

const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 1920px;
    min-height: 100vh;
    margin: 0 auto;
    left: 0;
    right: 0;
    margin-top: 15px;
  }
`;

const TopCover = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    max-width: 1920px;
    height: 360px;
    z-index: 1;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    background-image: url("/img/homebnews.jpeg");
  }
`;

const BottomCover = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    position: absolute;
    z-index: 1;
    width: 3000px;
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
    top: 526px;
    left: 0;
    right: 0;
    height: 83%;
  }
`;

const Content = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 1280px;
    height: 100%;
    display: flex;
    position: absolute;
    z-index: 2;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
`;

const TitleWrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    padding-top: 95px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

const MainTitle = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    letter-spacing: 0.43px;
    font-size: 43px;
    color: #ffffff;
    text-shadow: 3px 3px 3px #000000e3;
    opacity: 1;
  }
`;

const MainDesc = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    letter-spacing: 0.19px;
    font-size: 19px;
    color: #ffffff;
    text-shadow: 3px 3px 3px #000000e3;
    opacity: 1;
  }
`;
