import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
} from "react";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { PopupsQuery, usePopupsQuery } from "../typings/api.d";

interface PopupContextProps {
  loading: boolean;
  popups: PopupsQuery["popups"]["data"];
  refetch?: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<PopupsQuery>>;
}

interface PopupContextProviderProps {
  children: ReactNode;
}

export const PopupContext = createContext<PopupContextProps | undefined>(
  undefined
);

export const PopupContextProvider: FC<PopupContextProviderProps> = ({
  children,
}) => {
  const { loading, data, refetch } = usePopupsQuery();

  const contextValue = useMemo(
    () => ({
      loading,
      popups: data?.popups.data as PopupsQuery["popups"]["data"],
      refetch,
    }),
    [loading, data, refetch]
  );

  return (
    <PopupContext.Provider value={contextValue}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopupContext = (): PopupContextProps => {
  const appContext = useContext(PopupContext);
  if (!appContext) {
    throw new Error("PopupContext is not initialized");
  }
  return appContext;
};
