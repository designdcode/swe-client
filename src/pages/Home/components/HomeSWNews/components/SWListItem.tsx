import React, { FC, useCallback, useEffect, useState } from "react";
import { BoardQuery } from "../../../../../typings/api.d";
import styled from "@emotion/styled";
import { Image, Typography } from "antd";
import { Image as MobileImage } from "antd-mobile";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../../../../utils/mediaQuery";
import { NumberBox } from ".";
import {
  optionCooperate,
  optionEducate,
  optionValue,
} from "../../../../Admin/Board/selectOptionts";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

interface SWListItemProps {
  data: BoardQuery["board"] | undefined;
  even: boolean;
  title: string;
}

export const SWListItem: FC<SWListItemProps> = ({ data, even, title }) => {
  const url = (data?.images && data.images[0]?.url) || "";
  const [category, setCategory] = useState<string>();

  useEffect(() => {
    if (data) {
      const typeCategory = data?.category?.split("-")[1];
      switch (typeCategory) {
        case "coopnews":
          setCategory(
            optionCooperate.find((v) => v.value === data.type)?.label
          );
          break;
        case "valuenews":
          setCategory(optionValue.find((v) => v.value === data.type)?.label);
          break;
        case "aidnews":
          setCategory(optionEducate.find((v) => v.value === data.type)?.label);
          break;
        default:
          break;
      }
    }
  }, [data]);

  const renderDetail = useCallback((title: string, content: string) => {
    return (
      <div
        style={{
          display: "flex",
          margin: "0 10px",
        }}
      >
        <Typography.Text
          style={{
            color: "#C53082",
            marginRight: "10px",
          }}
        >
          {title}
        </Typography.Text>
        <Typography.Text>{content}</Typography.Text>
      </div>
    );
  }, []);

  if (undefined) {
    return null;
  }
  return (
    <Wrapper>
      <Div>
        <Link
          to={`/main/detail/achievement/${data?.category}/${data?._id}`}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ImageWrapper>
            <Image
              preview={false}
              src={url !== "" ? url : "/img/blackLogo.jpeg"}
              alt="news image"
            />
          </ImageWrapper>
          <Container>
            <Row>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <NumberBox fill={even} createdAt={data?.inputCreatedAt} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography.Title
                    style={{
                      margin: "0 10px",
                    }}
                    level={2}
                  >
                    {title}
                  </Typography.Title>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    {renderDetail("분류: ", category || "")}
                    {renderDetail("등록일:", data?.inputCreatedAt.slice(0, 10))}
                    {renderDetail("작성자:", data?.writer || "관리자")}
                  </div>
                </div>
              </div>
            </Row>
            <Row
              style={{
                margin: "10px 0",
              }}
            >
              <Typography.Paragraph
                ellipsis
                style={{
                  margin: 0,
                }}
              >
                {data?.thumbNailcontent}
              </Typography.Paragraph>
            </Row>
          </Container>
        </Link>
        <Link to={`/main/board/achievement/${data?.category}`}>
          <Typography.Text
            style={{
              color: "#0C1B58",
            }}
          >
            더보기+
          </Typography.Text>
        </Link>
      </Div>
      <MobileDiv>
        <div
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <MenuOutlined />
              <Typography.Title
                level={4}
                style={{
                  margin: "0 10px",
                }}
              >
                {title}
              </Typography.Title>
            </div>
            <Link to={`/main/board/achievement/${data?.category}`}>
              <Typography.Text
                style={{
                  color: "#0C1B58",
                }}
              >
                더보기+
              </Typography.Text>
            </Link>
          </div>
          <Link
            to={`/main/detail/achievement/${data?.category}/${data?._id}`}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "150px",
                height: "95px",
                margin: "0 10px",
              }}
            >
              <MobileImage
                src={url !== "" ? url : "/img/blackLogo.jpeg"}
                alt="news image"
                width={150}
                height={100}
                fit="contain"
              />
            </div>
            <div>
              <Typography.Title level={5}>{data?.title}</Typography.Title>
              {renderDetail("분류: ", category || "")}
              {renderDetail("등록일:", data?.inputCreatedAt.slice(0, 10))}
              {renderDetail("작성자:", data?.writer || "관리자")}
            </div>
          </Link>
        </div>
      </MobileDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    margin: 10px;
    padding: 20px 10px;
    width: 900px;
    justify-content: space-between;
    &:hover {
      background-color: #dddddd;
      transition: linear 0.2s;
    }
  }
`;

const Div = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const MobileDiv = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    margin: 20px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    margin: 0 10px;
    margin-right: 40px;
    img {
      width: 120px;
    }
    box-shadow: 5px 5px 14px #000000;
  }
`;

const Container = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Row = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
  }
`;
