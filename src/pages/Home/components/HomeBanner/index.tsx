import React from "react";
import styled from "@emotion/styled";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../../../utils/mediaQuery";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useWindowSize } from "../../../../hooks/useWindowSize";

const HomeBanner: React.VFC = () => {
  const size = useWindowSize();

  return (
    <Wrapper>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        renderIndicator={
          size.width > 767
            ? (onClickHandler, isSelected, index, label) => {
                const defStyle = {
                  marginLeft: 20,
                  color: "white",
                  cursor: "pointer",
                };
                const style = isSelected
                  ? { ...defStyle, color: "red" }
                  : { ...defStyle };
                return (
                  <span
                    style={style}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    key={index}
                    role="button"
                    tabIndex={0}
                    aria-label={`${label} ${index + 1}`}
                  >
                    {index === 0 && (
                      <IoIosArrowDropleft size={45} color={"white"} />
                    )}
                    {index === 1 && (
                      <IoIosArrowDropright size={45} color={"white"} />
                    )}
                  </span>
                );
              }
            : undefined
        }
      >
        <ImageBox>
          <Image
            src={
              size.width > 767 ? "img/banner1.jpeg" : "img/mobileBanner.jpeg"
            }
            alt="banner"
          />
        </ImageBox>
        <ImageBox>
          <CoverContentBox>
            <CoverContent className="first-content">Sunmoon Univ.</CoverContent>
            <CoverContent className="second-content">
              SW 중심대학사업단
            </CoverContent>
            <CoverContent className="third-content">
              글로벌 SW역량 강화 글로벌 IT 한류문화 조성
            </CoverContent>
          </CoverContentBox>
          <Cover />
          <Image
            src={
              size.width > 767 ? "img/banner2.jpeg" : "img/mobileBanner2.jpeg"
            }
            alt="banner2"
          />
        </ImageBox>
      </Carousel>
    </Wrapper>
  );
};

export default HomeBanner;

const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    height: 400px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 650px;
    width: 100%;
    max-width: 1920px;
  }
`;

const ImageBox = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    height: 100%;
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: contain;
`;

const Cover = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    max-width: 1920px;
    height: 250px;
    background-color: darkgray;
    opacity: 0.5;
    position: absolute;
    top: 30%;
    display: flex;
    z-index: 2;
  }
`;

export const CoverContent = styled.span`
  display: none;
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: block;
    color: white;
    width: 450px;
  }
`;

export const CoverContentBox = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    max-width: 1280px;
    /* margin:0 auto; */
    text-align: start;
    position: absolute;
    top: 30%;
    z-index: 5;
    right: 20%;

    & .first-content {
    }
    & .second-content {
      font-size: 50px;
      letter-spacing: -1.43px;
    }
    & .third-content {
      letter-spacing: 0.22px;
    }
  }
`;
