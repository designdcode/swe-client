import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

interface MenuContextProps {
  parentMenu: string;
  childMenu: string;
  showMenuTitle: boolean;
  setShowMenuTitle: Dispatch<SetStateAction<boolean>>;
  setParentMenu: Dispatch<SetStateAction<string>>;
  setChildMenu: Dispatch<SetStateAction<string>>;
}

interface MenuContextProviderProps {
  children: ReactNode;
}

export const MenuContext = createContext<MenuContextProps | undefined>(
  undefined
);

export const MenuContextProvider: FC<MenuContextProviderProps> = ({
  children,
}) => {
  const [parentMenu, setParentMenu] = useState<string>("");
  const [childMenu, setChildMenu] = useState<string>("");
  const [showMenuTitle, setShowMenuTitle] = useState<boolean>(false);

  const contextValue = useMemo(
    () => ({
      parentMenu,
      setParentMenu,
      childMenu,
      setChildMenu,
      showMenuTitle,
      setShowMenuTitle,
    }),
    [
      parentMenu,
      childMenu,
      setChildMenu,
      setParentMenu,
      showMenuTitle,
      setShowMenuTitle,
    ]
  );

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};

export const useMenuContext = (): MenuContextProps => {
  const appContext = useContext(MenuContext);
  if (!appContext) {
    throw new Error("MenuContext is not initialized");
  }
  return appContext;
};
