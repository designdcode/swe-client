import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
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
      category: "achievement-aidnew",
    },
    onCompleted: ({ getBoardByCategory }) => {
      const { ok, err, data } = getBoardByCategory;
      if (ok && data && data.length > 0) {
        setAurl(data[data.length - 1].images);
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
      if (ok && data) {
        setVurl(data[data.length - 1].images);
        setSdata(data);
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
      if (ok && data) {
        setCurl(data[data.length - 1].images);
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
      if (ok && data) {
        setSurl(data[data.length - 1].images);
        setSdata(data);
      } else {
        console.log(err);
      }
    },
  });

  const renderSectionImage = useCallback(
    (image: getBoardByCategory_getBoardByCategory_data_images | null) => {
      return (
        <img
          src={image ? image.url : ""}
          alt="newsImage"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      );
    },
    []
  );

  return (
    <Wrapper>
      <Content>
        <Row>
          <Section to="/">
            {aloading ? (
              <>loading</>
            ) : (
              <>
                <SectionTitle>
                  <div className="title-burger">|||</div>
                  <div className="title-title">SW 교육지원센터 소식</div>
                  <div className="title-more">
                    <Link
                      to="/main/detail/achievement/achievement-aidnews"
                      className="title-link"
                    >
                      더보기+
                    </Link>
                  </div>
                </SectionTitle>
                <SectionContent>
                  <SectionImage>
                    {aurl ? (
                      renderSectionImage(aurl[aurl.length - 1])
                    ) : (
                      <>none</>
                    )}
                  </SectionImage>
                  <SectionDesc>
                    <div className="section-title">
                      {
                        adata!.getBoardByCategory.data![
                          adata!.getBoardByCategory.data!.length - 1
                        ].title
                      }
                    </div>
                    <div className="section-desc">
                      {
                        adata!.getBoardByCategory.data![
                          adata!.getBoardByCategory.data!.length - 1
                        ].content
                      }
                    </div>
                  </SectionDesc>
                </SectionContent>
              </>
            )}
          </Section>
          <Section to="/">
            {cloading ? (
              <>loading</>
            ) : (
              <>
                <SectionTitle>
                  <div className="title-burger">|||</div>
                  <div className="title-title">SW 산학협력 소식</div>
                  <div className="title-more">
                    <Link
                      to="/main/detail/achievement/achievement-coopnews"
                      className="title-link"
                    >
                      더보기+
                    </Link>
                  </div>
                </SectionTitle>
                <SectionContent>
                  <SectionImage>
                    {curl ? (
                      renderSectionImage(curl[curl.length - 1])
                    ) : (
                      <>none</>
                    )}
                  </SectionImage>
                  <SectionDesc>
                    <div className="section-title">
                      {
                        cdata!.getBoardByCategory.data![
                          cdata!.getBoardByCategory.data!.length - 1
                        ].title
                      }
                    </div>
                    <div className="section-desc">
                      {
                        cdata!.getBoardByCategory.data![
                          cdata!.getBoardByCategory.data!.length - 1
                        ].content
                      }
                    </div>
                  </SectionDesc>
                </SectionContent>
              </>
            )}
          </Section>
        </Row>
        <Row>
          <Section to="/">
            {vloading ? (
              <>loading</>
            ) : (
              <>
                <SectionTitle>
                  <div className="title-burger">|||</div>
                  <div className="title-title">SW 가치확산센터 소식</div>
                  <div className="title-more">
                    <Link
                      to="/main/detail/achievement/achievement-valuenews"
                      className="title-link"
                    >
                      더보기+
                    </Link>
                  </div>
                </SectionTitle>
                <SectionContent>
                  <SectionImage>
                    {vurl ? (
                      renderSectionImage(vurl[vurl.length - 1])
                    ) : (
                      <>none</>
                    )}
                  </SectionImage>
                  <SectionDesc>
                    <div className="section-title">
                      {
                        vdata!.getBoardByCategory.data![
                          vdata!.getBoardByCategory.data!.length - 1
                        ].title
                      }
                    </div>
                    <div className="section-desc">
                      {
                        vdata!.getBoardByCategory.data![
                          vdata!.getBoardByCategory.data!.length - 1
                        ].content
                      }
                    </div>
                  </SectionDesc>
                </SectionContent>
              </>
            )}
          </Section>
          <Section
            to={`/main/detail/achievement/achievement-startup/${
              sdata?.getBoardByCategory.data[
                sdata.getBoardByCategory.data?.length - 1
              ].id
            }`}
          >
            {sloading ? (
              <>loading</>
            ) : (
              <>
                <SectionTitle>
                  <div className="title-burger">|||</div>
                  <div className="title-title">창업센터 소식</div>
                  <div className="title-more">
                    <Link
                      to="/main/detail/achievement/achievement-startup"
                      className="title-link"
                    >
                      더보기+
                    </Link>
                  </div>
                </SectionTitle>
                <SectionContent>
                  <SectionImage>
                    {surl ? (
                      renderSectionImage(surl[surl.length - 1])
                    ) : (
                      <>none</>
                    )}
                  </SectionImage>
                  <SectionDesc>
                    <div className="section-title">
                      {
                        sdata!.getBoardByCategory.data![
                          sdata!.getBoardByCategory.data!.length - 1
                        ].title
                      }
                    </div>
                    <div className="section-desc">
                      {
                        sdata!.getBoardByCategory.data![
                          sdata!.getBoardByCategory.data!.length - 1
                        ].content
                      }
                    </div>
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
    background-position: center;
  }
`;

const Content = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 900px;
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

const Section = styled(Link)`
  color: black;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    height: 250px;
    border-bottom: 3px dashed #eee;
    padding-top: 30px;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    height: 200px;
    width: 400px;
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
`;

const SectionContent = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    display: flex;
    width: 100%;
    height: 75%;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    display: flex;
    width: 100%;
    height: 95%;
    padding: 5px;
    cursor: pointer;
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
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 50%;
    height: 100%;
    margin-right: 10px;
  }
`;

const SectionDesc = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .section-title {
      height: 30%;
      width: 80%;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
      font-weight: 600;
    }

    & .section-desc {
      height: 60%;
      width: 80%;
      word-break: break-all;
      text-overflow: ellipsis;
      line-height: 1.2;
      font-size: 9px;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .section-title {
      height: 40%;
      width: 80%;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
      font-weight: 600;
    }

    & .section-desc {
      height: 60%;
      width: 80%;
      word-break: break-all;
      text-overflow: ellipsis;
      line-height: 1.2;
      font-size: 9px;
    }
  }
`;
