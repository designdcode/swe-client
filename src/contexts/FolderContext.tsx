import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Exact,
  FolderQuery,
  FoldersQuery,
  useFolderLazyQuery,
  useFoldersQuery,
} from "../typings/api.d";
import {
  ApolloQueryResult,
  LazyQueryExecFunction,
  OperationVariables,
} from "@apollo/client";

interface FolderContextProps {
  folders: FoldersQuery["folders"];
  parentFolders?: FoldersQuery["folders"];
  loading: boolean;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<FoldersQuery>>;
  getFolder: LazyQueryExecFunction<
    FolderQuery,
    Exact<{
      _id: string;
    }>
  >;
}

interface FolderContextProviderProps {
  children: ReactNode;
}

export const FolderContext = createContext<FolderContextProps | undefined>(
  undefined
);

export const FolderContextProvider: FC<FolderContextProviderProps> = ({
  children,
}) => {
  const { data, loading, refetch } = useFoldersQuery({
    fetchPolicy: "network-only",
  });
  const [parentFolders, setParentFolders] = useState<FoldersQuery["folders"]>(
    []
  );
  const [getFolder] = useFolderLazyQuery();

  useEffect(() => {
    if (data) {
      setParentFolders(data.folders.filter((f) => !f.parentId));
    }
  }, [data]);

  const contextValue = useMemo(
    () => ({
      folders: data?.folders as FoldersQuery["folders"],
      parentFolders: parentFolders as FoldersQuery["folders"],
      loading,
      refetch,
      getFolder,
    }),
    [data, refetch, loading, getFolder, parentFolders]
  );

  return (
    <FolderContext.Provider value={contextValue}>
      {children}
    </FolderContext.Provider>
  );
};

export const useFolderContext = (): FolderContextProps => {
  const appContext = useContext(FolderContext);
  if (!appContext) {
    throw new Error("FolderContext is not initialized");
  }
  return appContext;
};
