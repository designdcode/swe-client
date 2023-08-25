import { FC, useCallback, useEffect, useState } from "react";
import { BoardQuery, BoardsQuery } from "../../../../../typings/api.d";
import { Divider, List as BaseList, Typography, Radio } from "antd";
import { List as BaseMobileList } from "antd-mobile";
import styled from "@emotion/styled";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../../../../utils/mediaQuery";
import { MenuOutlined } from "@ant-design/icons";
import { useBoardContext } from "../../../../../contexts";
import { Link } from "react-router-dom";

const MobileListItem = BaseMobileList.Item;

export const NoticeTable: FC = () => {
  const { boards } = useBoardContext();
  const [data, setData] = useState<BoardsQuery["boards"]["data"]>();
  const [category, setCategory] = useState<
    "community-notice" | "achievement-news"
  >("community-notice");

  useEffect(() => {
    if (boards) {
      const sorted = boards
        .filter((v) => v.category === category)
        .sort(
          (a, b) =>
            new Date(b.inputCreatedAt).getTime() -
            new Date(a.inputCreatedAt).getTime()
        );
      setData(sorted);
    }
  }, [boards, category]);

  const handleChange = useCallback((e) => {
    setCategory(e.target.value);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <List
        size={"small"}
        header={
          <ListHeader>
            <Typography.Title
              level={3}
              style={{
                color: "white",
              }}
            >
              <MenuOutlined /> SW 중심대학공지사항
            </Typography.Title>
            <Radio.Group
              onChange={handleChange}
              optionType="button"
              defaultValue={"community-notice"}
              buttonStyle="solid"
            >
              <Radio.Button
                style={{
                  border: "none",
                  backgroundColor:
                    category === "community-notice" ? "#f03fa8" : "white",
                  color: category === "community-notice" ? "white" : "black",
                }}
                value="community-notice"
              >
                공지
              </Radio.Button>
              <Radio.Button
                style={{
                  border: "none",
                  backgroundColor:
                    category === "achievement-news" ? "#f03fa8" : "white",
                  color: category === "achievement-news" ? "white" : "black",
                }}
                value="achievement-news"
              >
                사업성과
              </Radio.Button>
            </Radio.Group>
          </ListHeader>
        }
        dataSource={data.slice(0, 5)}
        // @ts-expect-error no typed
        renderItem={(item: BoardQuery["board"], index) => {
          if (index === 0) {
            return (
              <div key={index}>
                <Typography.Title
                  level={5}
                  style={{
                    color: "white",
                    paddingTop: "15px",
                  }}
                >
                  [Title]{item.title}
                </Typography.Title>
                <Content>
                  <span
                    style={{
                      color: "white",
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        item.content?.replace(/<img .*?><h1 .*?>/g, "") || "",
                    }}
                  />
                </Content>
                <Divider
                  style={{
                    backgroundColor: "white",
                    margin: "10px 0",
                    marginBottom: "15px",
                  }}
                />
              </div>
            );
          }
          return (
            <BaseList.Item key={index}>
              <Typography.Paragraph
                style={{
                  maxWidth: "80%",
                  color: "white",
                }}
                ellipsis
              >
                {item.title}
              </Typography.Paragraph>
              <Typography.Text
                style={{
                  color: "white",
                }}
              >
                {item.createdAt.slice(0, 10)}
              </Typography.Text>
            </BaseList.Item>
          );
        }}
      />
      <MobileList
        header={
          <div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                margin: "20px 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <Radio.Group
                  onChange={handleChange}
                  optionType="button"
                  defaultValue={"community-notice"}
                  buttonStyle="solid"
                >
                  <Radio.Button
                    style={{
                      border: "none",
                      backgroundColor:
                        category === "community-notice" ? "#f03fa8" : "white",
                      color:
                        category === "community-notice" ? "white" : "black",
                    }}
                    value="community-notice"
                  >
                    공지사항
                  </Radio.Button>
                  <Radio.Button
                    style={{
                      border: "none",
                      backgroundColor:
                        category === "achievement-news" ? "#f03fa8" : "white",
                      color:
                        category === "achievement-news" ? "white" : "black",
                    }}
                    value="achievement-news"
                  >
                    사업성과
                  </Radio.Button>
                </Radio.Group>
              </div>
              <Link to={`/main/board/${category}/${category}`}>더보기+</Link>
            </div>
            <Typography.Title
              level={4}
              style={{
                color: "#0C1B58",
              }}
            >
              <MenuOutlined /> SW 중심대학공지사항
            </Typography.Title>
          </div>
        }
        style={{}}
      >
        {data.slice(0, 4).map((d, i) => {
          return (
            <MobileListItem
              key={i}
              description={
                <Typography.Paragraph
                  style={{
                    color: "#0C1B58",
                    width: "85vw",
                  }}
                  ellipsis
                >
                  {d.title}
                </Typography.Paragraph>
              }
            />
          );
        })}
      </MobileList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    /* max-width: 85vw; */

    -webkit-box-shadow: inset 0px 12px 30px 0px rgba(0, 0, 0, 0.28);
    box-shadow: inset 0px 10px 15px -10px rgba(0, 0, 0, 0.28);
    margin: 10px 0;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    margin: 20px;
    width: 50%;
  }
`;

const Content = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const List = styled(BaseList)`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: none;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
  }
`;

const MobileList = styled(BaseMobileList)`
  width: 100%;
  .adm-list-body {
    background-color: transparent;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: none;
  }
`;
