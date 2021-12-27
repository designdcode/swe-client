import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GET_BOARD_BY_CATEGORY } from "../../../../queries/adminQuery";
import {
  getBoardByCategory,
  getBoardByCategoryVariables,
  getBoardByCategory_getBoardByCategory_data,
  getBoardByCategory_getBoardByCategory_data_images,
} from "../../../../typings/api";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../../../utils/mediaQuery";

const HomeSWNews: React.VFC = () => {
  const history = useHistory();
  const [aurl, setAurl] = useState<
    (getBoardByCategory_getBoardByCategory_data_images | null)[] | null
  >();
  const [vurl, setVurl] = useState<
    (getBoardByCategory_getBoardByCategory_data_images | null)[] | null
  >();
  const [curl, setCurl] = useState<
    (getBoardByCategory_getBoardByCategory_data_images | null)[] | null
  >();
  const [surl, setSurl] = useState<
    (getBoardByCategory_getBoardByCategory_data_images | null)[] | null
  >();

  const [adata, setAdata] =
    useState<getBoardByCategory_getBoardByCategory_data[]>();
  const [cdata, setCdata] =
    useState<getBoardByCategory_getBoardByCategory_data[]>();
  const [vdata, setVdata] =
    useState<getBoardByCategory_getBoardByCategory_data[]>();
  const [sdata, setSdata] =
    useState<getBoardByCategory_getBoardByCategory_data[]>();

  const { loading: aloading } = useQuery<
    getBoardByCategory,
    getBoardByCategoryVariables
  >(GET_BOARD_BY_CATEGORY, {
    variables: {
      category: "achievement-aidnews",
    },
    onCompleted: ({ getBoardByCategory }) => {
      const { ok, err, data } = getBoardByCategory;
      if (ok && data && data.length > 0) {
        setAurl(data[0].images);
        setAdata(data);
      } else {
        console.log(err);
      }
    },
  });
  const { loading: vloading } = useQuery<
    getBoardByCategory,
    getBoardByCategoryVariables
  >(GET_BOARD_BY_CATEGORY, {
    variables: {
      category: "achievement-valuenews",
    },
    onCompleted: ({ getBoardByCategory }) => {
      const { ok, err, data } = getBoardByCategory;
      if (ok && data && data.length > 0) {
        setVurl(data[0].images);
        setVdata(data);
      } else {
        console.log(err);
      }
    },
  });
  const { loading: cloading } = useQuery<
    getBoardByCategory,
    getBoardByCategoryVariables
  >(GET_BOARD_BY_CATEGORY, {
    variables: {
      category: "achievement-coopnews",
    },
    onCompleted: ({ getBoardByCategory }) => {
      const { ok, err, data } = getBoardByCategory;
      if (ok && data && data.length > 0) {
        setCurl(data[0].images);
        setCdata(data);
      } else {
        console.log(err);
      }
    },
  });
  const { loading: sloading } = useQuery<
    getBoardByCategory,
    getBoardByCategoryVariables
  >(GET_BOARD_BY_CATEGORY, {
    variables: {
      category: "achievement-startup",
    },
    onCompleted: ({ getBoardByCategory }) => {
      const { ok, err, data } = getBoardByCategory;
      if (ok && data && data.length > 0) {
        setSurl(data[0].images);
        setSdata(data);
      } else {
        console.log(err);
      }
    },
  });

  const renderSectionImage = useCallback(
    (image: getBoardByCategory_getBoardByCategory_data_images | null) => {
      return <img src={image ? image.url : ""} alt="newsImage" />;
    },
    []
  );

  return (
    <Wrapper>
      <Content>
        <Row>
          <Section>
            {aloading ? (
              <>loading</>
            ) : (
              <>
                <SectionTitle>
                  <div
                    className="title-burger"
                    onClick={() => {
                      history.push(
                        "/main/board/achievement/achievement-aidnews"
                      );
                    }}
                  >
                    |||
                  </div>
                  <div className="title-title">SW 교육지원센터 소식</div>
                  <div className="title-more">
                    <Link
                      to="/main/board/achievement/achievement-aidnews"
                      className="title-link"
                    >
                      더보기+
                    </Link>
                  </div>
                </SectionTitle>
                <SectionContent
                  to={`/main/detail/achievement/achievement-aidnews/${
                    adata && adata[adata.length - 1].id
                  }`}
                >
                  <SectionImage>
                    {aurl ? (
                      renderSectionImage(aurl[aurl.length - 1])
                    ) : (
                      <>none</>
                    )}
                  </SectionImage>
                  <SectionDesc>
                    <div className="section-title">
                      {adata && adata[0].title}
                    </div>
                    <div
                      className="section-desc"
                      dangerouslySetInnerHTML={{
                        __html: (adata && adata[0].content) || "",
                      }}
                    ></div>
                  </SectionDesc>
                </SectionContent>
              </>
            )}
          </Section>
          <Section>
            {cloading ? (
              <>loading</>
            ) : (
              <>
                <SectionTitle>
                  <div
                    className="title-burger"
                    onClick={() => {
                      history.push(
                        "/main/board/achievement/achievement-coopnews"
                      );
                    }}
                  >
                    |||
                  </div>
                  <div className="title-title">SW 산학협력 소식</div>
                  <div className="title-more">
                    <Link
                      to="/main/board/achievement/achievement-coopnews"
                      className="title-link"
                    >
                      더보기+
                    </Link>
                  </div>
                </SectionTitle>
                <SectionContent
                  to={`/main/detail/achievement/achievement-coopnews/${
                    cdata && cdata[cdata.length - 1].id
                  }`}
                >
                  <SectionImage>
                    {curl ? (
                      renderSectionImage(curl[curl.length - 1])
                    ) : (
                      <>none</>
                    )}
                  </SectionImage>
                  <SectionDesc>
                    <div className="section-title">
                      {cdata && cdata[0].title}
                    </div>
                    <div
                      className="section-desc"
                      dangerouslySetInnerHTML={{
                        __html: (cdata && cdata[0].content) || "",
                      }}
                    ></div>
                  </SectionDesc>
                </SectionContent>
              </>
            )}
          </Section>
        </Row>
        <Row>
          <Section>
            {vloading ? (
              <>loading</>
            ) : (
              <>
                <SectionTitle>
                  <div
                    className="title-burger"
                    onClick={() => {
                      history.push(
                        "/main/board/achievement/achievement-valuenews"
                      );
                    }}
                  >
                    |||
                  </div>
                  <div className="title-title">SW 가치확산센터 소식</div>
                  <div className="title-more">
                    <Link
                      to="/main/board/achievement/achievement-valuenews"
                      className="title-link"
                    >
                      더보기+
                    </Link>
                  </div>
                </SectionTitle>
                <SectionContent
                  to={`/main/detail/achievement/achievement-valuenews/${
                    vdata && vdata[vdata.length - 1].id
                  }`}
                >
                  <SectionImage>
                    {vurl ? (
                      renderSectionImage(vurl[vurl.length - 1])
                    ) : (
                      <>none</>
                    )}
                  </SectionImage>
                  <SectionDesc>
                    <div className="section-title">
                      {vdata && vdata[0].title}
                    </div>
                    <div
                      className="section-desc"
                      dangerouslySetInnerHTML={{
                        __html: (vdata && vdata[0].content) || "",
                      }}
                    ></div>
                  </SectionDesc>
                </SectionContent>
              </>
            )}
          </Section>
          <Section>
            {sloading ? (
              <>loading</>
            ) : (
              <>
                <SectionTitle>
                  <div
                    className="title-burger"
                    onClick={() => {
                      history.push(
                        "/main/board/achievement/achievement-startup"
                      );
                    }}
                  >
                    |||
                  </div>
                  <div className="title-title">창업센터 소식</div>
                  <div className="title-more">
                    <Link
                      to="/main/board/achievement/achievement-startup"
                      className="title-link"
                    >
                      더보기+
                    </Link>
                  </div>
                </SectionTitle>
                <SectionContent
                  to={`/main/detail/achievement/achievement-startup/${
                    sdata && sdata[sdata.length - 1].id
                  }`}
                >
                  <SectionImage>
                    {surl ? (
                      renderSectionImage(surl[surl.length - 1])
                    ) : (
                      <>none</>
                    )}
                  </SectionImage>
                  <SectionDesc>
                    <div className="section-title">
                      {sdata && sdata[0].title}
                    </div>
                    <div
                      className="section-desc"
                      dangerouslySetInnerHTML={{
                        __html: (sdata && sdata[0].content) || "",
                      }}
                    ></div>
                  </SectionDesc>
                </SectionContent>
              </>
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
    width: 90%;
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
    padding: 5px;
    cursor: pointer;
    justify-content: space-between;
    &:hover {
      transition: 0.2s linear;
      background-color: #eee;
    }
  }
`;

const SectionImage = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 50%;
    height: 100%;
    margin-right: 10px;

    & img {
      width: 320px;
      height: 200px;
      margin: 0 auto;
      object-fit: cover;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 50%;
    height: 100%;
    margin-right: 10px;
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
    justify-content: space-between;
    & .section-title {
      height: 25%;
      width: 95%;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
      font-weight: 600;
      margin-top: 10px;
      line-height: 1.4;
    }

    & .section-desc {
      height: 60%;
      width: 95%;
      word-break: break-all;
      text-overflow: ellipsis;
      line-height: 1.2;
      font-size: 9px;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 37%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    & .section-title {
      height: 29%;
      width: 80%;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 16px;
      font-weight: 600;
    }
    & .section-desc {
      margin-top: 10px;
      height: 29%;
      width: 80%;
      display: block;
      overflow: hidden;
      word-break: break-all;
      line-height: 1.6;
      font-size: 12px;
    }
  }
`;
