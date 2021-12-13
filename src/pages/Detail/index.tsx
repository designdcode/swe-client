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
    <Wrapper>
      <Cover />
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    margin-top: 15px;
    border: 1px solid black;
    min-width: 1280px;
    max-width: 1920px;
  }
`;

const Cover = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 1920px;
    height: 350px;
    border: 1px solid red;
    background-image: url("/img/detailBG.png");
  }
`;
