import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <div className="options">
            <div>
              <Link
                to={"/main"}
                style={{ textDecoration: "none", color: "white" }}
              >
                HOME
              </Link>
            </div>
            <div>|</div>
            <div>
              <Link
                to={"/main/login"}
                style={{ textDecoration: "none", color: "white" }}
              >
                LOGIN
              </Link>
            </div>
          </div>
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
                  style={{ margin: 0 }}
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
