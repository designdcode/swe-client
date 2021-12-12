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
          size.width > 375
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
              size.width > 375 ? "img/banner1.jpeg" : "img/mobileBanner.jpeg"
            }
            alt="banner"
          />
          {size.width > 375 && (
            <ImageCover src={"img/banner2_cover.jpeg"} alt="banner cover" />
          )}
        </ImageBox>
        <ImageBox>
          <Image
            src={
              size.width > 375 ? "img/banner2.jpeg" : "img/mobileBanner2.jpeg"
            }
            alt="banner2"
          />
          {size.width > 375 && (
            <ImageCover src={"img/banner1_cover.jpeg"} alt="banner2 cover" />
          )}
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
  height: 400px;
  object-fit: contain;
`;

const ImageCover = styled.img`
  height: 400px;
  object-fit: cover;
  position: absolute;
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
