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
import { useWindowSize } from "../../hooks/useWindowSize";

interface ParamProps {
  param: string;
  subparam: string;
}

const Detail = () => {
  const screen = useWindowSize();
  const { param, subparam } = useParams<ParamProps>();
  return (
    <Wrapper>
      <Cover>
        <CoverTitle margin={screen.width > 1500 ? "25%" : "15%"}>
          {NavigationData.map((item, idx) => {
            if (item.title === param) {
              return (
                <div key={idx}>
                  <span className="cover-main-title">{item.ko_title}</span>
                  <span className="cover-description">description</span>
                </div>
              );
            } else {
              return null;
            }
          })}
        </CoverTitle>
        <img src="/img/detailBG.jpeg" alt="cover" />
      </Cover>
    </Wrapper>
  );
};

export default Detail;

interface CoverTitleMarginProps {
  margin: string;
}

const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    margin-top: 15px;
    border: 1px solid black;
    width: 100%;
    min-width: 1280px;
    max-width: 1920px;
  }
`;

const Cover = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    height: 350px;
    margin: 0 auto;
    border: 1px solid red;
    position: relative;
    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

const CoverTitle = styled.div<CoverTitleMarginProps>`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    position: absolute;
    font-size: 20px;
    margin-left: ${(props) => props.margin};
    margin-top: 50px;
    & .cover-main-title {
      font-size: 40px;
      font-weight: 600;
      letter-spacing: 0.43px;
      color: #ffffff;
      text-shadow: 3px 3px 3px #000000e3;
      display: block;
    }

    & .cover-description {
      display: block;
      font-size: 20px;
      letter-spacing: 0.43px;
      color: #ffffff;
      text-shadow: 3px 3px 3px #000000e3;
    }
  }
`;
