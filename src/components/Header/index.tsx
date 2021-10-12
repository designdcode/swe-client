import React, { useState } from "react";
import { NavigationData, NavProps } from "../../assets/NavigationData";
import {
  HeaderContainer,
  HeaderMain,
  HeaderTop,
  MainDesktop,
  MainMobile,
  Cover,
  HeaderLine,
} from "./styles";

const Header: React.VFC = () => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <HeaderContainer>
      <HeaderTop>
        <div className="top-content">
          <span>SUNMOON UNIVERSITY</span>
          <span>HOME | LOGIN</span>
        </div>
      </HeaderTop>
      <HeaderMain>
        <MainDesktop>
          <div className="main-content-desktop">
            <div>logo</div>
            <div>options</div>
          </div>
          <div className="main-menu">
            {NavigationData.map((elem: NavProps, idx) => {
              return (
                <ul
                  key={idx}
                  onMouseOver={() => setHover(elem.key)}
                  onMouseLeave={() => setHover(null)}
                >
                  <HeaderLine hoverProps={hover === idx ? true : false} />
                  <div className="header-title">
                    <span>{elem.ko_title}</span>
                  </div>
                  <Cover>
                    {elem.subMenu.map((item, i) => {
                      return <li key={i}>{item.ko_title}</li>;
                    })}
                  </Cover>
                </ul>
              );
            })}
          </div>
        </MainDesktop>
        <MainMobile>mobile</MainMobile>
      </HeaderMain>
    </HeaderContainer>
  );
};

export default Header;
