import React, { useCallback, useState } from "react";
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
import { BsPersonCircle } from "react-icons/bs";
import { Drawer } from "antd";

const Header: React.VFC = () => {
  const [hover, setHover] = useState<number | null>(null);

  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [childrenDrawer, setChildrenDrawer] = useState<boolean>(false);

  const showDrawer = useCallback(() => {
    setDrawerVisible(!drawerVisible);
  }, [drawerVisible]);

  const onClose = useCallback(() => {
    setDrawerVisible(false);
  }, []);

  const showChildrenDrawer = useCallback(() => {
    setChildrenDrawer(!childrenDrawer);
  }, [childrenDrawer]);

  const onChildrenDrawerClose = useCallback(() => {
    setChildrenDrawer(false);
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
        <MainMobile>
          <div className="wrapper">
            <div className="menu" onClick={showDrawer}>
              |||
            </div>
            <div className="logo">
              <Link to={"/main"}>
                <img src={"img/mobileLogo.png"} alt="mobile logo" />
              </Link>
            </div>
            <div className="login">
              <Link
                to={"/main/login"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <BsPersonCircle size={25} />
              </Link>
            </div>
            <Drawer
              title="drawer"
              width={185}
              closable={false}
              onClose={onClose}
              visible={drawerVisible}
              placement={"left"}
            >
              <button onClick={showChildrenDrawer}>child</button>
              <Drawer
                width={185}
                closable={false}
                onClose={onChildrenDrawerClose}
                visible={childrenDrawer}
                placement={"left"}
              >
                this is child
              </Drawer>
            </Drawer>
          </div>
        </MainMobile>
      </HeaderMain>
    </HeaderContainer>
  );
};

export default Header;
