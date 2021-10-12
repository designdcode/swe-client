import React, { useCallback, useState } from "react";
import { NavigationData, NavProps } from "../../assets/NavigationData";
import { DropDown, HeaderContainer } from "./styles";

const Header: React.VFC = () => {
  return (
    <HeaderContainer>
      <div className="top">top</div>
      <nav className="main-mobile">main</nav>
      <nav className="main-desktop">
        <ul className="main-header">
          {NavigationData.map((elem: NavProps, idx) => {
            return (
              <DropDown key={idx}>
                <div>{elem.ko_title}</div>
                <div className="dropDownMenu">
                  {elem.subMenu.map((item, idx) => {
                    return <li key={idx}>{item.ko_title}</li>;
                  })}
                </div>
              </DropDown>
            );
          })}
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
