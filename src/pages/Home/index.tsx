import React, { useState, useEffect } from "react";
import PopUp from "../../components/PopUp";
import { useWindowSize } from "../../hooks/useWindowSize";
import { breakpoints } from "../../utils/mediaQuery";
import { Wrapper } from "../styles";
import HomeBanner from "./components/HomeBanner";
import HomeBNews from "./components/HomeBNews";
import HomeBoard from "./components/HomeBoard";
import HomeSWNews from "./components/HomeSWNews";
import { usePopupContext } from "../../contexts";

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
      <HomeBNews />
      <HomeSWNews />
    </Wrapper>
  );
};

export default Home;
