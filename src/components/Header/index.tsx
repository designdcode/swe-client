import React, { useCallback, useState } from "react";
import { NavigationData } from "../../assets/NavigationData";
import { HeaderContainer } from "./styles";

const Header: React.VFC = () => {
  return (
    <HeaderContainer>
      <div className="top">top</div>
      <nav className="main-mobile">main</nav>
      <nav className="main-desktop">
        <ul className="main-header">
          {NavigationData.map((elem, idx) => {
            return (
              <li key={idx}>
                <a href="/#" className="menu-link">
                  {elem.ko_title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
