import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import PopUp from "../../components/PopUp";
import { useWindowSize } from "../../hooks/useWindowSize";
import { GET_POPUP_STATUS } from "../../queries/sharedQuery";
import { getPopupStatus } from "../../typings/api";
import { Wrapper } from "../styles";
import HomeBanner from "./components/HomeBanner";
import HomeBNews from "./components/HomeBNews";
import HomeBoard from "./components/HomeBoard";
import HomeSWNews from "./components/HomeSWNews";

const Home: React.VFC = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const screen = useWindowSize();
  const { data } = useQuery<getPopupStatus>(GET_POPUP_STATUS);
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
      {screen.width > 376 &&
        data?.getPopupStatus.data &&
        data.getPopupStatus.data.up && (
          <PopUp
            showPopup={showPopUp}
            setShowPopUp={setShowPopUp}
            url={data.getPopupStatus.data.url || ""}
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
