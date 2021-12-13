import React from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router";
import { NavigationData } from "../../assets/NavigationData";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";
import { BsHouseFill } from "react-icons/bs";

interface ParamProps {
  param: string;
  subparam: string;
}

const Detail = () => {
  const { param, subparam } = useParams<ParamProps>();
  return (
    <Page>
      <Wrapper>
        {/* <div style={{ position: "relative" }}> */}
        <TopCover />
        <TopCoverContent>
          {NavigationData.map((item) => {
            if (item.title === param) {
              return (
                <>
                  <TitleWrapper key={item.key}>
                    <MainTitle> {item.ko_title}</MainTitle>
                    <MainDesc>description</MainDesc>
                  </TitleWrapper>
                  <MenuWrapper>
                    <MenuBar>
                      <IconBox>
                        <BsHouseFill size={25} />
                      </IconBox>
                      <MenuRow>
                        {item.subMenu.map((data) => {
                          return <DetailMenu>{data.ko_title} </DetailMenu>;
                        })}
                      </MenuRow>
                    </MenuBar>
                  </MenuWrapper>
                </>
              );
            }
          })}
        </TopCoverContent>
        {/* </div> */}
        <ContentContainer>
          <ContentCover>
            <TopBg />
            <BottomBg />
          </ContentCover>
          <Content>lalalalalala</Content>
        </ContentContainer>
        {/* <BottomCover>
				</BottomCover> */}
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
    min-width: 1280px;
    max-width: 1920px;
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
    min-width: 1280px;
    max-width: 1920px;
    height: 360px;
    z-index: 1;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    background-image: url("/img/detailBG.png");
    background-position: center;
    background-repeat: no-repeat;
    /* background-size: 1920px 360px; */
    /* background-size: cover; */
  }
`;
const TopCoverContent = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    min-width: 1280px;
    max-width: 1920px;
    height: 360px;
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
    /* width: 100%; */
    width: 1280px;
    display: flex;
    flex-direction: column;
    margin-left: 24%;
    margin-bottom: 20px;
  }
`;

const MainTitle = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
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

const MenuWrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    height: 50px;
    background-color: #e5e2e2b8;
    display: flex;
    position: absolute;
    bottom: 0;
    z-index: 2;
    margin: 0 auto;
    opacity: 0.9;
  }
`;
const MenuBar = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    /* margin-left: 180px; */
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }
`;
const IconBox = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 60px;
    height: 100%;
    background-color: #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-left: 500px; */
  }
`;
const MenuRow = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: center;
    /* justify-content: space-between; */
    font-size: 15px;
    align-items: center;
  }
`;

const DetailMenu = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 150px;
    min-width: 80px;
    margin: 0 2%;
    height: 100%;
    color: black;
    cursor: pointer;
    &:hover {
      background-color: #red;
      color: white;
      background-color: #0c1b58;
    }
  }
`;

const TopBg = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100px;
    height: 300px;
    /* position: absolute;
		z-index: 2; */
    background-image: url("/img/top.png");
    background-size: contain;
    background-repeat: no-repeat;
    display: block;
    left: 0;
  }
`;

const BottomBg = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 1000px;
    height: 500px;
    background-image: url("/img/bottom.png");
    background-size: contain;
    background-repeat: no-repeat;
    display: block;
    float: right;
    right: 0;
  }
`;

const ContentCover = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 1280px;
    height: 200px;
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ContentContainer = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    position: relative;
    margin: 0 auto;
    min-height: 100vh;
    padding-top: 400px;
    max-width: 1280px;
  }
`;

const Content = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    position: absolute;
    width: 100%;
    z-index: 2;
    min-height: 100% - 400px;
  }
`;
