import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
} from "react";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { BoardsQuery, useBoardsQuery } from "../typings/api.d";

interface BoardContextProps {
  loading: boolean;
  boards: BoardsQuery["boards"]["data"];
  refetch?: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<BoardsQuery>>;
}

interface BoardContextProviderProps {
  children: ReactNode;
}

export const BoardContext = createContext<BoardContextProps | undefined>(
  undefined
);

export const BoardContextProvider: FC<BoardContextProviderProps> = ({
  children,
}) => {
  const { loading, data, refetch } = useBoardsQuery({
    fetchPolicy: "network-only",
  });

  const contextValue = useMemo(
    () => ({
      loading,
      boards: data?.boards.data as BoardsQuery["boards"]["data"],
      refetch,
    }),
    [loading, data, refetch]
  );

  return (
    <BoardContext.Provider value={contextValue}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = (): BoardContextProps => {
  const appContext = useContext(BoardContext);
  if (!appContext) {
    throw new Error("BoardContext is not initialized");
  }
  return appContext;
};
