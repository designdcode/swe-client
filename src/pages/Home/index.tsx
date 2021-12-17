import React, { useState, useEffect } from "react";
import PopUp from "../../components/PopUp";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Wrapper } from "../styles";
import HomeBanner from "./components/HomeBanner";
import HomeBNews from "./components/HomeBNews";
import HomeBoard from "./components/HomeBoard";
import HomeSWNews from "./components/HomeSWNews";

const Home: React.VFC = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const screen = useWindowSize();

  useEffect(() => {
    const fuzePopUpNotShow = localStorage.getItem("fuzePopUpNotShow");
    const fuzePopUpNotShowUNIX = Date.parse(fuzePopUpNotShow || "");
    const whenWillBeExpired = fuzePopUpNotShowUNIX + 1000 * 60;

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
      {screen.width > 375 && (
        <PopUp showPopup={showPopUp} setShowPopUp={setShowPopUp} />
      )}
      <HomeBanner />
      <HomeBoard />
      <HomeBNews />
      <HomeSWNews />
    </Wrapper>
  );
};

export default Home;
