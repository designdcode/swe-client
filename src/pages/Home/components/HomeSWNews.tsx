import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import styled from "@emotion/styled";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  mediaQueries,
} from "../../../utils/mediaQuery";
import { BoardQuery } from "../../../typings/api.d";
import { useBoardContext } from "../../../contexts";
import { SWListItem } from "./HomeSWNews/SWListItem";

type CategoryType =
  | "achievement-aidnews"
  | "achievement-valuenews"
  | "achievement-coopnews"
  | "achievement-startup";

interface GetBoardProps {
  category: CategoryType;
  setter: Dispatch<SetStateAction<BoardQuery["board"] | undefined>>;
}

export const HomeSWNews: FC = () => {
  const { boards } = useBoardContext();
  const [adata, setAdata] = useState<BoardQuery["board"]>();
  const [cdata, setCdata] = useState<BoardQuery["board"]>();
  const [vdata, setVdata] = useState<BoardQuery["board"]>();
  const [sdata, setSdata] = useState<BoardQuery["board"]>();
  const category: GetBoardProps[] = useMemo(
    () => [
      { category: "achievement-aidnews", setter: setAdata },
      { category: "achievement-valuenews", setter: setVdata },
      { category: "achievement-coopnews", setter: setCdata },
      { category: "achievement-startup", setter: setSdata },
    ],
    []
  );

  const getBoard = useCallback(
    (
      c: CategoryType,
      setter: Dispatch<SetStateAction<BoardQuery["board"] | undefined>>
    ) => {
      const foundBoard: BoardQuery["board"] = boards
        .filter((v) => v.category === c)
        .sort(
          (a, b) =>
            new Date(b.inputCreatedAt).getTime() -
            new Date(a.inputCreatedAt).getTime()
        )[0];
      setter(foundBoard);
    },
    [boards]
  );

  useEffect(() => {
    if (boards) {
      category.map((v) => {
        getBoard(v.category, v.setter);
        return null;
      });
    }
  }, [boards, category, getBoard]);

  return (
    <Wrapper>
      <Container>
        <SWListItem data={adata} even={false} title="SW 교육성과" />
        <SWListItem data={vdata} title="SW 가치확산" even />
        <SWListItem data={cdata} title="SW 산학협력" even={false} />
        <SWListItem data={sdata} title="SW 직무교육" even />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    background-image: url("/img/swback.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 600px;
    -webkit-box-shadow: inset 0px 12px 30px 0px rgba(0, 0, 0, 0.28);
    box-shadow: inset 0px 10px 15px -10px rgba(0, 0, 0, 0.28);
  }
`;

const Container = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    max-width: 1280px;
    display: flex;
    flex-direction: column;
  }
`;
