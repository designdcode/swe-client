import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
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
                    return (
                      <Link to="#" key={idx}>
                        <li>{item.ko_title}</li>
                      </Link>
                    );
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
