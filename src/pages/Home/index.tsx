import React, { useState, useEffect } from "react";
import PopUp from "../../components/PopUp";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  BREAKPOINT_BIGGER_THAN_PC,
  BREAKPOINT_PHONE_MEDIUM,
  breakpoints,
  mediaQueries,
} from "../../utils/mediaQuery";
import HomeBanner from "./components/HomeBanner";
import HomeBoard from "./components/HomeBoard";
import { usePopupContext } from "../../contexts";
import styled from "@emotion/styled";
import { Wrapper } from "../styles";
import { HomeCardNews } from "./components/HomeCardNews";
import { HomeSWNews } from "./components/HomeSWNews";

const Home: React.VFC = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const screen = useWindowSize();
  const { popups } = usePopupContext();
  localStorage.setItem("fuzePopUpNotShow", new Date().getTime().toString());

  useEffect(() => {
    const fuzePopUpNotShow = localStorage.getItem("fuzePopUpNotShow") || "";
    const fuzePopUpNotShowUNIX = Date.parse(fuzePopUpNotShow || "");
    const whenWillBeExpired = parseInt(fuzePopUpNotShow, 10) + 1000 * 60;

    const currentUNIX = Math.floor(new Date().getTime());

    if (Number.isNaN(fuzePopUpNotShowUNIX)) {
      setShowPopUp(true);
    }

    if (whenWillBeExpired < currentUNIX) {
      setShowPopUp(true);
    }
  }, []);

  return (
    <Wrapper>
      {screen.width > breakpoints.phoneMedium &&
        popups &&
        popups[popups.length - 1]?.up && (
          <PopUp
            showPopup={showPopUp}
            setShowPopUp={setShowPopUp}
            url={popups[popups.length - 1].url || ""}
            link={popups[popups.length - 1].link}
          />
        )}
      <HomeBanner />
      <HomeBoard />
      <HomeCardNews />
      <HomeSWNews />
    </Wrapper>
  );
};

export default Home;

export const Container = styled.div`
  ${mediaQueries(BREAKPOINT_PHONE_MEDIUM)} {
  }
  ${mediaQueries(BREAKPOINT_BIGGER_THAN_PC)} {
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
`;
