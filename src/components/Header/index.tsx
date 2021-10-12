import React from "react";
import { HeaderContainer } from "./styles";

const Header: React.VFC = () => {
  return (
    <HeaderContainer>
      <div className="top">top</div>
      <div className="main">main</div>
    </HeaderContainer>
  );
};

export default Header;
