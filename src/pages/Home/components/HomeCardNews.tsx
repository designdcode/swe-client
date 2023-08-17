import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../../utils/mediaQuery";
import { MenuOutlined } from "@ant-design/icons";
import { Image, Typography } from "antd";
import { Carousel } from "react-responsive-carousel";
import { useBoardContext } from "../../../contexts";
import { BoardsQuery } from "../../../typings/api.d";

export const HomeCardNews: FC = () => {
  const { boards } = useBoardContext();
  const [data, setData] =
    useState<Array<BoardsQuery["boards"]["data"] | undefined>>();

  const [mobileData, setMobileData] = useState<
    BoardsQuery["boards"]["data"] | undefined
  >();
  const [selected, setSelected] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [mobileTotal, setMobileTotal] = useState<number>(0);

  useEffect(() => {
    if (boards) {
      const filtered = boards
        .filter((v) => v.category === "community-administration")
        .sort(
          (a, b) =>
            new Date(b.inputCreatedAt).getTime() -
            new Date(a.inputCreatedAt).getTime()
        )
        .slice(0, 12);
      const first: BoardsQuery["boards"]["data"] = filtered.slice(0, 3);
      const second: BoardsQuery["boards"]["data"] = filtered.slice(4, 8);
      const third: BoardsQuery["boards"]["data"] = filtered.slice(9, 12);
      const resolvedData = [
        first.length === 0 ? undefined : first,
        second.length === 0 ? undefined : second,
        third.length === 0 ? undefined : third,
      ].filter((v) => v);
      setData(resolvedData);
      setTotal(resolvedData.length);
      setMobileData(first);
      setMobileTotal(first.length);
    }
  }, [boards]);

  const handleNext = useCallback(() => {
    if (selected === total) {
      setSelected(1);
    } else {
      setSelected(selected + 1);
    }
  }, [selected, total]);

  const handlePrev = useCallback(() => {
    if (selected === 1) {
      setSelected(total);
    } else {
      setSelected(selected - 1);
    }
  }, [selected, total]);

  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <Wrapper>
      <Title>
        <Typography.Title
          level={window.innerWidth < 420 ? 4 : 3}
          style={{
            color: window.innerWidth < 420 ? "white" : "#0C1B58",
          }}
        >
          <MenuOutlined
            style={{
              marginRight: "10px",
              color: window.innerWidth < 420 ? "white" : "#0C1B58",
            }}
          />
          카드뉴스
        </Typography.Title>
        <DesktopOption>
          {Array(total)
            .fill(null)
            .map((_, i) => {
              return (
                <div
                  key={i}
                  style={{
                    borderRadius: "25px",
                    width: "15px",
                    height: "15px",
                    margin: "10px",
                    cursor: "pointer",
                    backgroundColor: selected === i ? "#438ef7" : "gray",
                  }}
                  onClick={() => setSelected(i)}
                />
              );
            })}
          <div
            style={{
              display: "flex",
            }}
          >
            <ArrowButton onClick={handlePrev}>
              <span>&lt;</span>
            </ArrowButton>
            <ArrowButton onClick={handleNext}>
              <span>&gt;</span>
            </ArrowButton>
          </div>
        </DesktopOption>
        <MobileOption>
          {Array(mobileTotal)
            .fill(null)
            .map((_, i) => {
              return (
                <div
                  key={i}
                  style={{
                    borderRadius: "25px",
                    width: "10px",
                    height: "10px",
                    margin: "10px",
                    cursor: "pointer",
                    backgroundColor: selected === i ? "#438ef7" : "gray",
                  }}
                  onClick={() => setSelected(i)}
                />
              );
            })}
        </MobileOption>
      </Title>
      <DeskTopMenu>
        <CarouselWrapper>
          <Carousel
            infiniteLoop
            selectedItem={selected}
            showIndicators={false}
            showThumbs={false}
          >
            {data.map((menu, i) => {
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {menu?.map((subMenu, index) => {
                    const url =
                      subMenu && subMenu.images && subMenu.images[0]?.url;
                    return (
                      <div
                        key={index}
                        style={{
                          width: "30%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          height={250}
                          preview={false}
                          src={url || "/img/blackLogo.jpeg"}
                        />
                        <Typography.Paragraph>
                          {subMenu.title}
                        </Typography.Paragraph>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </CarouselWrapper>
      </DeskTopMenu>
      <MobileMenu>
        <CarouselWrapper>
          <Carousel
            infiniteLoop
            selectedItem={selected}
            showIndicators={false}
            showThumbs={false}
            swipeable={false}
          >
            {mobileData &&
              mobileData.map((d, i) => {
                const url = d && d.images && d.images[0]?.url;
                return (
                  <div
                    key={i}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      height={250}
                      preview={false}
                      src={url || "/img/blackLogo.jpeg"}
                    />
                    <Typography.Paragraph
                      ellipsis
                      style={{
                        color: "white",
                        width: "80%",
                        margin: "10px 0",
                      }}
                    >
                      {d.title}
                    </Typography.Paragraph>
                  </div>
                );
              })}
          </Carousel>
        </CarouselWrapper>
      </MobileMenu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    margin-top: 20px;
    background-image: url("img/homebnews.jpeg");
    background-position: center;
    background-size: cover;
    padding: 20px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    min-width: 1280px;
  }
`;

const DesktopOption = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    max-width: 1280px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const MobileOption = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: none;
  }
`;

const Title = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    margin: 20px 0;
  }
`;

const DeskTopMenu = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }
`;

const MobileMenu = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    margin-top: 15px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: none;
  }
`;

const CarouselWrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
  }
`;

const ArrowButton = styled.div`
  padding: 5px;
  width: 15px;
  height: 15px;
  border-radius: 100px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;
  span {
    font-size: 8px;
  }
`;
