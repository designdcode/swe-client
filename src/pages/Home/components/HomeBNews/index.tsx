import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Card as StyledCard } from "antd";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useWindowSize } from "../../../../hooks/useWindowSize";
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
  const screen = useWindowSize();
  const [newsData, setNewsData] = useState<
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
        if (ok && data && data !== null) {
          setNewsData(data);
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
          <div className="main-sub-title">
            <div className="line"></div>
            <span className="title">사업단소식</span>
          </div>
          {newsData && newsData !== null && (
            <div className="dots">
              {newsData.map((item, idx) => {
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
          {!newsData ? (
            <>업로드 된 소식이 없습니다</>
          ) : (
            <>
              {screen.width < 376 ? (
                <Carousel
                  showIndicators={false}
                  showStatus={false}
                  showThumbs={false}
                  showArrows={false}
                  selectedItem={currentDot}
                  infiniteLoop={true}
                  width={300}
                >
                  {newsData.map((item, idx) => {
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
              ) : (
                <div className="card-container">
                  {newsData.map((item, idx) => {
                    let url: string | undefined = "";
                    if (item.images && item.images.length > 0) {
                      url = item.images[item.images.length - 1]?.url;
                    }
                    if (idx > 2) {
                      return null;
                    }
                    return (
                      <Card
                        key={idx}
                        hoverable
                        bordered={false}
                        cover={
                          <img
                            src={url}
                            alt="example"
                            height={270}
                            width={240}
                          />
                        }
                      >
                        <div className="card-desc">{item.title}</div>
                      </Card>
                    );
                  })}
                </div>
              )}
            </>
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
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    min-height: 400px;
    background-position: center;
    background-size: cover;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    min-height: 450px;
    max-width: 1980px;
    background-position: center;
  }
`;
const Container = styled.div`
  display: flex;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    min-height: 400px;
    flex-direction: column;
    padding: 25px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 1280px;
    min-height: 450px;
    margin: 0 auto;
    flex-direction: column;
  }
`;

const TitleWithLine = styled.div`
  display: flex;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
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
    & .main-sub-title {
      width: 100%;
      display: flex;
      position: relative;
      height: 60px;
    }

    & .line {
      width: 1px;
      height: 60px;
      border-left: 10px solid #c53082;
      margin-right: 10px;
    }

    & .title {
      font-size: 24px;
      font-weight: 600;
      color: white;
      display: block;
      text-align: end;
      padding-top: 25px;
    }
  }
`;

const Image = styled.img`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    margin-top: 25px;
    width: 285px;
    height: 260px;
    object-fit: cover;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    height: 250px;
  }
`;

const Content = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    margin-top: 15px;
    height: 360px;
    padding-bottom: 20px;
    & .card-container {
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: space-between;
    }
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
  width: 100%;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 350px;
    max-width: 375px;
    margin: 0 auto;
    & .carousel-text {
      margin-top: 25px;
      max-width: 300px;
      color: white;
      max-height: 40px;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const Card = styled(StyledCard)`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 200px;
    height: 100%;
    & .card-desc {
      max-height: 65px;
      color: white;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 400px;
    height: 100%;
    background: transparent;
    & .card-desc {
      max-height: 65px;
      color: white;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    & img {
      object-fit: cover;
    }
  }
`;
