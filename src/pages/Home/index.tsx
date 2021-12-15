import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Wrapper } from "../styles";
import HomeBanner from "./components/HomeBanner";
import HomeBNews from "./components/HomeBNews";
import HomeBoard from "./components/HomeBoard";
import HomeSWNews from "./components/HomeSWNews";

const Home: React.VFC = () => {
  return (
    <Wrapper>
      <HomeBanner />
      <HomeBoard />
      <HomeBNews />
      <HomeSWNews />
    </Wrapper>
  );
};

export default Home;
