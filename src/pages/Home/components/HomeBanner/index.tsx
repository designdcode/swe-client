import React from "react";
import styled from "@emotion/styled";
import {
  breakpoints,
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
          size.width > breakpoints.phoneMedium
            ? (onClickHandler, isSelected, index, label) => {
                const defStyle = {
                  marginLeft: 10,
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
                      <IoIosArrowDropleft
                        size={40}
                        color={"white"}
                        style={{ opacity: 0.5 }}
                      />
                    )}
                    {index === 1 && (
                      <IoIosArrowDropright
                        size={40}
                        color={"white"}
                        style={{ opacity: 0.5 }}
                      />
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
              size.width > breakpoints.phoneMedium
                ? "img/banner1.jpeg"
                : "img/mobileBanner.jpeg"
            }
            alt="banner"
          />
          {size.width > breakpoints.phoneMedium && (
            <ImageCover src={"img/banner2_cover.jpeg"} alt="banner cover" />
          )}
        </ImageBox>
        <ImageBox>
          <Image
            src={
              size.width > breakpoints.phoneMedium
                ? "img/banner2.jpeg"
                : "img/MobileBanner2.jpeg"
            }
            alt="banner2"
          />
          {size.width > breakpoints.phoneMedium && (
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
    width: 100%;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    margin-top: 15px;
    max-width: 1920px;
  }
`;

const ImageBox = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    height: 100%;
  }
`;

const Image = styled.img`
  object-fit: contain;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 90%;
    height: 400px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 550px;
    width: 1280px;
  }
`;

const ImageCover = styled.img`
  height: 400px;
  object-fit: cover;
  position: absolute;
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 640px;
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
