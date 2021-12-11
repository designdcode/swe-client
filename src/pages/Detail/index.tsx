import React from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router";
import { NavigationData } from "../../assets/NavigationData";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  mediaQueries,
} from "../../utils/mediaQuery";

interface ParamProps {
  param: string;
  subparam: string;
}

const Detail = () => {
  const { param, subparam } = useParams<ParamProps>();
  // console.log(param, subparam)

  return (
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
      <BottomCover></BottomCover>
    </Wrapper>
  );
};

export default Detail;

export const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    max-width: 1920px;
    min-width: 1280px;
    margin-top: 15px;
    width: 100%;
    /* display: flex; */
    /* flex-direction: column; */
    position: relative;
    min-height: 100vh;
  }
`;
export const TopCover = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    max-width: 1920px;
    min-width: 1280px;
    width: 100%;
    background-color: yellow;
    height: 360px;
    display: flex;
    /* margin: 0 auto; */
    position: absolute;
    z-index: 1;
    /* background-image: url("img/homebnews.jpeg"); */
  }
`;

export const BottomCover = styled.div``;

export const Content = styled.div`
  width: 1280px;
  height: 360px;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 2;
`;

export const TitleWrapper = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const MainTitle = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    letter-spacing: 0.43px;
    font-size: 43px;
    color: #ffffff;
    text-shadow: 3px 3px 3px #000000e3;
    opacity: 1;
  }
`;

export const MainDesc = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    letter-spacing: 0.19px;
    font-size: 19px;
    color: #ffffff;
    text-shadow: 3px 3px 3px #000000e3;
    opacity: 1;
  }
`;
