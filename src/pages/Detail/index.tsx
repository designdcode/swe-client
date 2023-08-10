import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../utils/mediaQuery";
import Map from "../../components/Map";
import { useBoardContext } from "../../contexts";
import { BoardQuery } from "../../typings/api.d";
import { Member } from "../Member";
import Cover from "../../components/Cover";
import { RedirectButton } from "./components";
import { SiteMap } from "../../components";
interface ParamProps {
  param: string;
  subparam: string;
}

const Detail = () => {
  const { param, subparam } = useParams<ParamProps>();
  const { boards } = useBoardContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [board, setBoard] = useState<BoardQuery["board"]>();

  useEffect(() => {
    setLoading(true);
    if (boards) {
      const foundBoards = boards.filter((b) => b.category === subparam);
      if (foundBoards) {
        setBoard(foundBoards[foundBoards.length - 1]);
      }
    }
    setLoading(false);
  }, [boards, subparam]);

  if (loading) {
    return (
      <Wrapper>
        <Cover param={param} subparam={subparam} />
        <div>loading...</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Cover param={param} subparam={subparam} />
      <Content>
        {subparam === "intro-task" ? (
          <Member />
        ) : (
          <>
            <ContentImage>
              {board && board.images && (
                <img src={board.images[0]?.url} alt="uploadedImage" />
              )}
            </ContentImage>
            {param.toString() === "sitelink" &&
              (subparam !== "site-map" ? (
                <div className="button-text">
                  버튼을 클릭하시면 해당 사이트로 이동합니다
                  <RedirectButton subparam={subparam} />
                </div>
              ) : (
                <SiteMap />
              ))}
            {subparam.split("-")[1] === "online" && (
              <div className="platform">
                <div className="platform-text">
                  <span>&#9660; 하단 사이트 참고 &#9660;</span>
                  <a
                    href="http://mpp.sunmoon.ac.kr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://mpp.sunmoon.ac.kr
                  </a>
                </div>
                <ContentImage>
                  <img src="/img/platform2.jpeg" alt="uploadedImage" />
                </ContentImage>
              </div>
            )}
            {subparam.split("-")[1] === "route" && (
              <div className="route">
                <Map />
              </div>
            )}
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    min-height: 50vh;
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    margin-top: 15px;
    width: 100%;
    min-width: 1280px;
    max-width: 1920px;
    min-height: 100%;
  }
`;

const Content = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    height: 100%;

    & .link-button {
      display: flex;
      justify-content: center;
      width: 100%;
      min-height: 50px;
      margin: 10px auto;
      & img {
        width: 200px;
      }
    }
    & .button-text {
      margin-top: 50px;
      width: 100%;
      height: 200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    & .route {
      width: 300px;
      height: 300px;
      margin: 10px auto;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    width: 1280px;
    min-height: 100vh;
    margin: 0 auto;
    & .link-button {
      display: flex;
      justify-content: center;
      width: 100%;
      min-height: 50px;
      margin: 20px auto;
      & img {
        width: 300px;
      }
    }
    & .button-text {
      margin-top: 50px;
      width: 400px;
      height: 300px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    & .route {
      width: 800px;
      height: 600px;
      margin: 25px auto;
    }

    & .platform {
      & .platform-text {
        display: flex;
        width: 300px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #0c1b58;
        margin: 0 auto;
        & span {
          display: block;
        }
        & a {
          color: #0c1b58;
          text-decoration: underline;
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }
`;

const ContentImage = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    & img {
      width: 80%;
      object-fit: contain;
    }
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    padding: 60px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    & img {
      width: 80%;
      margin: 0 auto;
    }
  }
`;
