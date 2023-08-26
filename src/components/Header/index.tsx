import React, { useCallback, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
import { IoIosLogOut } from "react-icons/io";
import { userLogOut } from "../../utils/loginResolver";
import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Image } from "antd";

const Header: React.VFC = () => {
  const history = useHistory();
  const [hover, setHover] = useState<number | null>(null);
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [childrenDrawer, setChildrenDrawer] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [onMenu, setOnMenu] = useState<number>(-1);
  const [subMenuTitle, setSubMenuTitle] = useState<string>("");

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

  const renderList = () => {
    return (
      <Box
        sx={{
          width: 250,
          backgroundColor: "#0c1b58",
          color: "white",
          height: "100%",
        }}
        role="presentation"
      >
        <List>
          {NavigationData.map((item, idx) => {
            return (
              <ListItem
                key={idx}
                onClick={() => {
                  handleMenuClick(idx);
                  setSubMenuTitle(item.ko_title);
                }}
              >
                <ListItemText sx={{ fontSize: "18px" }} disableTypography>
                  {item.ko_title}
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Box>
    );
  };

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
                <div style={{ cursor: "pointer" }} onClick={() => userLogOut()}>
                  LOGOUT
                </div>
              ) : (
                <Link
                  to={"/main/login"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  LOGIN&ensp;
                </Link>
              )}
            </div>
          </div>
        </div>
      </HeaderTop>
      <HeaderMain>
        <MainDesktop>
          <div className="main-content-desktop">
            <div />
            <Link
              to="/main"
              style={{
                marginLeft: "12rem",
              }}
            >
              <Image
                height={"70px"}
                preview={false}
                src={"/img/logo.png"}
                alt="logo"
              />
            </Link>
            <div className="last-content-desktop">
              <div className="last-content-desktop">
                <div className="col">
                  <Link to="https://mpp.sunmoon.ac.kr">
                    <Image preview={false} src="/img/value.png" />
                  </Link>
                  <Link to="https://www.instagram.com/sw_sunmoonuniv/">
                    <Image preview={false} src="/img/instaButton.png" />
                  </Link>
                </div>
                <div className="col">
                  <Link to="https://mpp.sunmoon.ac.kr/">
                    <Image preview={false} src="/img/platform.png" />
                  </Link>
                  <Link to="https://www.youtube.com/@SW-hj4ss">
                    <Image preview={false} src="/img/youtubeButton.png" />
                  </Link>
                </div>
              </div>
              <Link to="/main">
                <Image
                  preview={false}
                  src={"/img/homeIcon.jpeg"}
                  alt="home"
                  width={40}
                  height={40}
                />
              </Link>
              {loggedIn ? (
                <div
                  style={{
                    display: "inline-block",
                    marginLeft: 15,
                    cursor: "pointer",
                  }}
                >
                  <Image
                    preview={false}
                    src={"/img/logout.jpeg"}
                    alt="logout"
                    width={35}
                    height={35}
                  />
                </div>
              ) : (
                <Link to="/main/login" style={{ marginLeft: 15 }}>
                  <Image
                    preview={false}
                    src={"/img/homeLogin.jpeg"}
                    alt="login"
                    width={40}
                    height={40}
                  />
                </Link>
              )}
            </div>
          </div>
          <div className="main-menu">
            {NavigationData.map((elem: NavProps, idx) => {
              let to;
              if (
                elem.title.split("-")[0] === "achievement" ||
                elem.title.split("-")[0] === "community"
              ) {
                to = `/main/board/${elem.title}/${elem.subMenu[0].key}`;
              } else {
                to = `/main/detail/${elem.title}/${elem.subMenu[0].key}`;
              }
              return (
                <ul
                  style={{ margin: 0 }}
                  key={idx}
                  onMouseOver={() => setHover(elem.key)}
                  onMouseLeave={() => setHover(null)}
                >
                  <HeaderLine hoverProps={hover === idx ? true : false} />
                  <Link to={to} className="header-title">
                    <span>{elem.ko_title}</span>
                  </Link>
                  <Cover>
                    {elem.subMenu.map((item, i) => {
                      let to;
                      if (
                        item.title.split("-")[0] === "achievement" ||
                        item.title.split("-")[0] === "community"
                      ) {
                        if (item.key.split("-")[1] === "sitemap") {
                          to = `/main/detail/${elem.title}/${item.key}`;
                        } else {
                          to = `/main/board/${elem.title}/${item.key}`;
                        }
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
              anchor="left"
              open={drawerVisible}
              onClose={() => setDrawerVisible(!drawerVisible)}
            >
              <div style={menuStyles}>
                <div>&ensp;</div>
                <div
                  style={{ cursor: "pointer", fontWeight: 600 }}
                  onClick={() => setDrawerVisible(!drawerVisible)}
                >
                  X
                </div>
              </div>
              {renderList()}
            </Drawer>
            <Drawer
              anchor="left"
              open={onMenu > -1 ? true : false}
              onClose={() => setOnMenu(-1)}
            >
              {onMenu > -1 && (
                <>
                  <div style={subMenuStyles}>
                    <div onClick={() => setOnMenu(-1)}>&lsaquo;</div>
                    <div style={{ fontSize: "18px" }}>{subMenuTitle}</div>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => setOnMenu(-1)}
                    >
                      X
                    </div>
                  </div>
                  <Box
                    sx={{
                      width: 250,
                      backgroundColor: "#384270",
                      color: "white",
                      height: "100%",
                    }}
                    role="presentation"
                    onClick={() => setOnMenu(-1)}
                  >
                    <List>
                      {NavigationData[onMenu].subMenu.map((elem, idx) => {
                        let to: string;
                        if (
                          elem.title.split("-")[0] === "achievement" ||
                          elem.title.split("-")[0] === "community"
                        ) {
                          to = `/main/board/${elem.title}/${elem.key}`;
                        } else {
                          to = `/main/detail/${elem.title}/${elem.key}`;
                        }
                        return (
                          <ListItem
                            key={idx}
                            onClick={() => {
                              history.push(to);
                              setDrawerVisible(false);
                              setChildrenDrawer(false);
                              setOnMenu(-1);
                            }}
                          >
                            <ListItemText
                              sx={{ fontSize: "18px" }}
                              disableTypography
                            >
                              {elem.ko_title}
                            </ListItemText>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Box>
                </>
              )}
            </Drawer>
          </div>
        </MainMobile>
      </HeaderMain>
    </HeaderContainer>
  );
};

export default Header;

const menuStyles = {
  height: "50px",
  width: "100%",
  backgroundColor: "#0c1b58",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingRight: "20px",
};

const subMenuStyles = {
  height: "50px",
  width: "100%",
  backgroundColor: "#384270",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingRight: "20px",
  paddingLeft: "20px",
};
