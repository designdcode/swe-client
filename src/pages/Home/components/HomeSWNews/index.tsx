import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../../../utils/mediaQuery";
import { BoardQuery, BoardsQuery } from "../../../../typings/api.d";
import { useBoardContext } from "../../../../contexts";

const HomeSWNews: React.VFC = () => {
  const history = useHistory();
  const [aurl, setAurl] = useState<BoardQuery["board"]["images"]>();
  const [vurl, setVurl] = useState<BoardQuery["board"]["images"]>();
  const [curl, setCurl] = useState<BoardQuery["board"]["images"]>();
  const [surl, setSurl] = useState<BoardQuery["board"]["images"]>();

  const [adata, setAdata] = useState<BoardsQuery["boards"]["data"]>();
  const [cdata, setCdata] = useState<BoardsQuery["boards"]["data"]>();
  const [vdata, setVdata] = useState<BoardsQuery["boards"]["data"]>();
  const [sdata, setSdata] = useState<BoardsQuery["boards"]["data"]>();

  const { boards, loading } = useBoardContext();

  useEffect(() => {
    if (boards) {
      const aidNews = boards
        .filter((v) => v.category === "achievement-aidnews")
        .sort(
          (a, b) =>
            new Date(a.inputCreatedAt).getTime() -
            new Date(b.inputCreatedAt).getTime()
        );
      const valueNews = boards
        .filter((v) => v.category === "achievement-valuenews")
        .sort(
          (a, b) =>
            new Date(a.inputCreatedAt).getTime() -
            new Date(b.inputCreatedAt).getTime()
        );
      const coopNews = boards
        .filter((v) => v.category === "achievement-coopnews")
        .sort(
          (a, b) =>
            new Date(a.inputCreatedAt).getTime() -
            new Date(b.inputCreatedAt).getTime()
        );
      const startupNews = boards
        .filter((v) => v.category === "achievement-startup")
        .sort(
          (a, b) =>
            new Date(a.inputCreatedAt).getTime() -
            new Date(b.inputCreatedAt).getTime()
        );

      setAurl(aidNews[aidNews.length - 1]?.images);
      setAdata(aidNews);
      setVurl(valueNews[valueNews.length - 1]?.images);
      setVdata(valueNews);
      setCurl(coopNews[coopNews.length - 1]?.images);
      setCdata(coopNews);
      setSurl(startupNews[startupNews.length - 1]?.images);
      setSdata(startupNews);
    }
  }, [boards]);

  const renderSectionImage = useCallback(
    (image: { url: string; fileName: string } | null) => {
      return (
        <img src={image ? image.url : `/img/blackLogo.jpeg`} alt="newsImage" />
      );
    },
    []
  );

  const handleRoute = useCallback(
    (
      data?: BoardsQuery["boards"]["data"] | undefined,
      url?: BoardQuery["board"]["images"] | null | undefined
    ) => {
      let imageUrl: string | undefined = "";
      if (data && data[data.length - 1] && data[data.length - 1].content) {
        const content = data[data.length - 1].content || "";
        const imgTag =
          content.match(/<img[^>]+src="http([^">]+)/g)?.toString() || "";
        imageUrl = imgTag.split('src="')[1];
      }

      return (
        <SectionBox>
          <SectionImage>
            {url && url.length > 0
              ? renderSectionImage(url[0])
              : renderSectionImage({
                  url: imageUrl,
                  fileName: "image",
                })}
          </SectionImage>
          <SectionDesc>
            <div className="section-title">
              {data && data[data.length - 1]?.title}
            </div>
            {data && data[data.length - 1]?.content?.includes("<img src=") ? (
              <div
                className="section-desc"
                dangerouslySetInnerHTML={{
                  __html:
                    (data && data[data.length - 1]?.content)?.replace(
                      /<img .*?>/g,
                      ""
                    ) || "",
                }}
              />
            ) : (
              <div
                className="section-desc"
                dangerouslySetInnerHTML={{
                  __html: (data && data[data.length - 1]?.content) || "",
                }}
              />
            )}
          </SectionDesc>
        </SectionBox>
      );
    },
    [renderSectionImage]
  );

  const renderSectionTitle = useCallback(
    (param: string) => {
      let title: string = "title";
      switch (param) {
        case "achievement-valuenews":
          title = "SW 가치확산센터 소식";
          break;
        case "achievement-startup":
          title = "창업센터 소식";
          break;
        case "achievement-coopnews":
          title = "SW 산학협력 소식";
          break;
        case "achievement-aidnews":
          title = "SW 교육지원센터 소식";
          break;
        default:
          break;
      }

      return (
        <SectionTitle>
          <div
            className="title-burger"
            onClick={() => {
              history.push(`/main/board/achievement/${param}`);
            }}
          >
            |||
          </div>
          <div className="title-title">{title}</div>
          <div className="title-more">
            <Link
              to={`/main/board/achievement/${param}`}
              className="title-link"
            >
              더보기+
            </Link>
          </div>
        </SectionTitle>
      );
    },
    [history]
  );

  if (loading) {
    return (
      <Wrapper>
        <div>로딩중입니다...</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Content>
        <Row>
          <Section>
            {renderSectionTitle("achievement-aidnews")}
            {!adata || typeof adata[0]?._id === "undefined" ? (
              <div />
            ) : (
              <SectionContent
                to={`/main/detail/achievement/achievement-aidnews/${
                  adata && adata[adata.length - 1]?._id
                }`}
              >
                {handleRoute(adata, aurl)}
              </SectionContent>
            )}
          </Section>
          <Section>
            {renderSectionTitle("achievement-coopnews")}
            {!cdata || typeof cdata[0]?._id === "undefined" ? (
              <div />
            ) : (
              <SectionContent
                to={`/main/detail/achievement/achievement-coopnews/${
                  cdata && cdata[cdata.length - 1]?._id
                }`}
              >
                {handleRoute(cdata, curl)}
              </SectionContent>
            )}
          </Section>
        </Row>
        <Row>
          <Section>
            {renderSectionTitle("achievement-valuenews")}
            {!vdata || typeof vdata[0]?._id === "undefined" ? (
              <div />
            ) : (
              <SectionContent
                to={`/main/detail/achievement/achievement-valuenews/${
                  vdata && vdata[vdata.length - 1]?._id
                }`}
              >
                {handleRoute(vdata, vurl)}
              </SectionContent>
            )}
          </Section>
          <Section>
            {renderSectionTitle("achievement-startup")}
            {!sdata || typeof sdata[0]?._id === "undefined" ? (
              <div />
            ) : (
              <SectionContent
                to={`/main/detail/achievement/achievement-startup/${
                  sdata[sdata.length - 1]?._id
                }`}
              >
                {handleRoute(sdata, surl)}
              </SectionContent>
            )}
          </Section>
        </Row>
      </Content>
    </Wrapper>
  );
};

export default HomeSWNews;

const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    margin-top: 10px;
    padding: 25px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    background-image: url("img/homeswnews.jpeg");
    min-height: 500px;
    max-width: 1980px;
    min-width: 1280px;
    background-position: center;
    box-shadow: 0px 6px 11px 0px rgba(0, 0, 0, 0.89);
  }
`;

const Content = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 1280px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

const Row = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
`;

const Section = styled.div`
  color: black;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    height: 450px;
    border-bottom: 3px dashed #eee;
    padding-top: 30px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 370px;
    width: 600px;
    margin-bottom: 50px;
    margin: 50px 0;
  }
`;

const SectionTitle = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    height: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 600;
    color: #0c1b58;
    margin-bottom: 15px;
    & .title-burger {
      transform: rotate(90deg);
      color: black;
      opacity: 0.2;
    }
    & .title-title {
      width: 75%;
    }

    & .title-more {
      font-size: 10px;
      color: black;
      & .title-link {
        text-decoration: none;
        color: black;
      }
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 25px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 600;
    color: #0c1b58;
    margin-bottom: 15px;
    & .title-burger {
      transform: rotate(90deg);
      color: black;
      opacity: 0.2;
      font-size: 24px;
      cursor: pointer;
    }
    & .title-title {
      width: 75%;
      font-size: 24px;
    }

    & .title-more {
      font-size: 10px;
      color: black;
      & .title-link {
        text-decoration: none;
        color: black;
      }
    }
  }
`;

const SectionContent = styled(Link)`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 75%;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: flex;
    width: 100%;
    height: 95%;
    padding: 1px;
    cursor: pointer;
    justify-content: space-between;
    &:hover {
      transition: 0.2s linear;
      background-color: #eee;
    }
  }
`;

const SectionBox = styled.div`
  display: flex;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
  }
`;

const SectionImage = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    & img {
      max-width: 320px;
      height: 200px;
      object-fit: cover;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 15px;
    & img {
      width: 350px;
      height: 350px;
      object-fit: cover;
    }
  }
`;

const SectionDesc = styled.div`
  color: black;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    & .section-title {
      max-height: 15%;
      font-size: 12px;
      font-weight: 600;
      margin-top: 10px;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    & .section-desc {
      max-height: 30%;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-top: 20px;
      font-size: 9px;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    padding: 12px;
    display: flex;
    max-width: 240px;
    flex-direction: column;
    & .section-title {
      max-height: 30%;
      font-size: 16px;
      font-weight: 600;
    }
    & .section-desc {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 10px;
      font-size: 12px;
    }
  }
`;
