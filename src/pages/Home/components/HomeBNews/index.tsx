import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { GET_BOARD_BY_CATEGORY } from "../../../../queries/adminQuery";
import {
  getBoardByCategory,
  getBoardByCategoryVariables,
  getBoardByCategory_getBoardByCategory_data,
} from "../../../../typings/api";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../../../utils/mediaQuery";

const HomeBNews: React.VFC = () => {
  const [data, setData] = useState<
    getBoardByCategory_getBoardByCategory_data[] | undefined | null
  >();
  const [currentDot, setCurrentDot] = useState<number>(0);
  const { loading } = useQuery<getBoardByCategory, getBoardByCategoryVariables>(
    GET_BOARD_BY_CATEGORY,
    {
      variables: {
        category: "achievement-news",
      },
      onCompleted: ({ getBoardByCategory }) => {
        const { ok, data, err } = getBoardByCategory;
        if (ok && data) {
          setData(data);
        } else {
          console.log(err);
        }
      },
    }
  );

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Wrapper>
      <Container>
        <TitleWithLine>
          <div>
            <div className="line"></div>
            <span className="title">사업단소식</span>
          </div>
          {data && data !== null && (
            <div className="dots">
              {data.map((item, idx) => {
                if (idx < 5) {
                  return (
                    <Dot
                      key={idx}
                      current={currentDot === idx ? true : false}
                      onClick={() => setCurrentDot(idx)}
                    ></Dot>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          )}
        </TitleWithLine>
        <Content>
          {!data ? (
            <>업로드 된 소식이 없습니다</>
          ) : (
            <Carousel
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              showArrows={false}
              selectedItem={currentDot}
              infiniteLoop={true}
              width={285}
            >
              {data.map((item, idx) => {
                let url: string | undefined = "";
                if (item.images && item.images.length > 0) {
                  url = item.images[item.images.length - 1]?.url;
                }
                return (
                  <CarouselContent key={idx}>
                    <Image src={url !== "" ? url : url} alt="news image" />
                    <div className="carousel-text">{item.title}</div>
                  </CarouselContent>
                );
              })}
            </Carousel>
          )}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default HomeBNews;

interface DotProps {
  current: boolean;
}

const Wrapper = styled.div`
  background-image: url("img/homebnews.jpeg");
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    min-height: 400px;
    max-width: 1980px;
    background-position: center;
  }
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    min-height: 400px;
    background-position: center;
    background-size: cover;
  }
`;
const Container = styled.div`
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 900px;
    min-height: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    min-height: 400px;
    padding: 25px;
  }
`;

const TitleWithLine = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    & .line {
      width: 25px;
      border-bottom: 3px solid #c53082;
    }

    & .title {
      font-size: 17px;
      font-weight: 600;
      color: white;
    }

    & .dots {
      display: flex;
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

const Content = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Dot = styled.div<DotProps>`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 8px;
    height: 8px;
    background-color: ${(props) => (props.current ? "white" : "gray")};
    border-radius: 10px;
    margin: 2px;
  }
`;
const CarouselContent = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    max-width: 375px;
    margin: 0 auto;
    & .carousel-text {
      margin-top: 25px;
      max-width: 270px;
      color: white;
      max-height: 40px;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
