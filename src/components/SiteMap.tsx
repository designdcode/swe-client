import { FC } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Card, List, Typography } from "antd";
import { NavigationData } from "../assets/NavigationData";

export const SiteMap: FC = () => {
  return (
    <div>
      <Typography.Title
        level={2}
        style={{
          color: "#0c1b58",
        }}
      >
        사이트맵
      </Typography.Title>
      <Cover>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 3,
          }}
          style={{
            backgroundColor: "transparent",
          }}
          dataSource={NavigationData}
          renderItem={(item) => (
            <List.Item
              style={{
                borderBottom: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                }}
                title={
                  <div>
                    <Typography.Title
                      level={4}
                      style={{
                        color: "#0c1b58",
                      }}
                    >
                      {item.ko_title}
                    </Typography.Title>
                    <div
                      style={{
                        width: "30%",
                        borderBottom: "4px solid #0c1b58",
                      }}
                    />
                  </div>
                }
              >
                <List
                  dataSource={item.subMenu}
                  renderItem={(subItem) => {
                    let to;
                    if (
                      subItem.title.split("-")[0] === "achievement" ||
                      subItem.title.split("-")[0] === "community"
                    ) {
                      if (subItem.key.split("-")[1] === "sitemap") {
                        to = `/main/detail/${item.title}/${subItem.key}`;
                      } else {
                        to = `/main/board/${item.title}/${subItem.key}`;
                      }
                    } else {
                      to = `/main/detail/${item.title}/${subItem.key}`;
                    }
                    return (
                      <List.Item
                        style={{
                          borderBottom: "none",
                          padding: "10px",
                        }}
                      >
                        <StyledLink to={to}>{subItem.ko_title}</StyledLink>
                      </List.Item>
                    );
                  }}
                />
              </Card>
            </List.Item>
          )}
        />
      </Cover>
    </div>
  );
};

const Cover = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  background-image: url(/img/loginBG.jpeg);
  background-size: cover;
`;

const StyledLink = styled(Link)`
  color: #0c1b58;
  &:hover,
  &:focus {
    color: #f03fa8;
  }
`;
