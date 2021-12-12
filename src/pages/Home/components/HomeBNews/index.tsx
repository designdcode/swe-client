import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { GET_BOARD_BY_CATEGORY } from "../../../../queries/adminQuery";
import {
  getBoardByCategory,
  getBoardByCategoryVariables,
} from "../../../../typings/api";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../../../utils/mediaQuery";

const HomeBNews: React.VFC = () => {
  const [url, setUrl] = useState<string>("");
  const { data, loading } = useQuery<
    getBoardByCategory,
    getBoardByCategoryVariables
  >(GET_BOARD_BY_CATEGORY, {
    variables: {
      category: "acheivement-news",
    },
    onCompleted: ({ getBoardByCategory }) => {
      const { ok, data, err } = getBoardByCategory;
      if (ok && data) {
        if (data[0] && data[0].images && data[0].images[0]) {
          setUrl(data[0].images[0].url);
        }
      } else {
        console.log(err);
      }
    },
  });

  console.log(data);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <Wrapper>
      <Content>
        <TitleWithLine>
          <div className="line"></div>
          <span className="title">사업단소식</span>
        </TitleWithLine>
        <Image src={url} alt="image" />
      </Content>
    </Wrapper>
  );
};

export default HomeBNews;

const Wrapper = styled.div`
  background-image: url("img/homebnews.jpeg");
  background-position: center;
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    min-height: 400px;
    max-width: 1980px;
  }
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    min-height: 400px;
  }
`;
const Content = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 900px;
    min-height: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    min-height: 400px;
    padding: 35px;
  }
`;

const TitleWithLine = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    & .line {
      width: 25px;
      border-bottom: 3px solid #c53082;
    }

    & .title {
      font-size: 17px;
      font-weight: 600;
      color: white;
    }
  }

  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: none;
  }
`;

const Image = styled.img`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    margin-top: 25px;
    width: 285px;
    height: 260px;
    object-fit: cover;
  }
`;
