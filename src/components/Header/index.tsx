import React, { useCallback, useEffect, useState } from "react";
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
  MobileDrawerBlock,
  MobileDrawerSubBlock,
} from "./styles";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { Drawer } from "antd";
import { userLogOut } from "../../utils/loginResolver";

const Header: React.VFC = () => {
  const [hover, setHover] = useState<number | null>(null);
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [childrenDrawer, setChildrenDrawer] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [onMenu, setOnMenu] = useState<number>(-1);

  useEffect(() => {
    if (localStorage.getItem("stno")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleMenuClick = useCallback(
    (index: number) => {
      setOnMenu(index);
      setChildrenDrawer(!childrenDrawer);
    },
    [childrenDrawer]
  );

  const onClose = useCallback(() => {
    setDrawerVisible(false);
  }, []);

  const onChildrenDrawerClose = useCallback(() => {
    setChildrenDrawer(false);
    setOnMenu(-1);
  }, []);

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
              {loggedIn ? (
                <div onClick={() => userLogOut()}>LOG OUT</div>
              ) : (
                <Link
                  to={"/main/login"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  LOGIN
                </Link>
              )}
            </div>
          </div>
        </div>
      </HeaderTop>
      <HeaderMain>
        <MainDesktop>
          <div className="main-content-desktop">
            <div></div>
            <Link to="/main">
              <img src={"/img/logo.png"} alt="logo" />
            </Link>
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
                      let to;
                      if (item.title.split("-")[0] === "achievement") {
                        to = `/main/board/${elem.title}/${item.key}`;
                      } else {
                        to = `/main/detail/${elem.title}/${item.key}`;
                      }
                      return (
                        <Link key={i} to={to} className="link">
                          <li key={i}>{item.ko_title}</li>
                        </Link>
                      );
                    })}
                  </Cover>
                </ul>
              );
            })}
          </div>
        </MainDesktop>
        <MainMobile>
          <div className="wrapper">
            <div
              className="menu"
              onClick={() => setDrawerVisible(!drawerVisible)}
            >
              |||
            </div>
            <div className="logo">
              <Link to={"/main"}>
                <img
                  src={"/img/mobileLogo.png"}
                  alt="mobile logo"
                  typeof="png"
                />
              </Link>
            </div>
            <div className="login">
              {loggedIn ? (
                <div onClick={() => userLogOut()}>
                  <IoIosLogOut size={25} />
                </div>
              ) : (
                <Link
                  to={"/main/login"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <BsPersonCircle size={25} />
                </Link>
              )}
            </div>
            <Drawer
              width={180}
              closable={false}
              onClose={onClose}
              visible={drawerVisible}
              placement={"left"}
              bodyStyle={drawerStyle}
            >
              {NavigationData.map((elem: NavProps, idx) => {
                return (
                  <MobileDrawerBlock
                    key={idx}
                    menuOpen={onMenu === idx ? true : false}
                  >
                    <button onClick={() => handleMenuClick(idx)}>
                      {elem.ko_title}
                    </button>
                  </MobileDrawerBlock>
                );
              })}
              <Drawer
                width={180}
                closable={false}
                onClose={onChildrenDrawerClose}
                visible={childrenDrawer}
                placement={"left"}
                bodyStyle={subDrawerStyle}
              >
                {NavigationData[onMenu]?.subMenu.map((item, i) => {
                  return (
                    <MobileDrawerSubBlock>
                      <button>{item.ko_title}</button>
                    </MobileDrawerSubBlock>
                  );
                })}
              </Drawer>
            </Drawer>
          </div>
        </MainMobile>
      </HeaderMain>
    </HeaderContainer>
  );
};

export default Header;

const drawerStyle = {
  backgroundColor: " #0c1b58",
  paddingTop: "50px",
  paddingRight: 0,
  paddingLeft: 0,
};

const subDrawerStyle = {
  backgroundColor: "#384270",
  paddingTop: "60px",
  paddingRight: 0,
  paddingLeft: "20px",
};
