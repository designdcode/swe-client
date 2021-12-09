import React from "react";
import { Wrapper } from "../styles";
import HomeBanner from "./components/HomeBanner";
import HomeBoard from "./components/HomeBoard";

const Home: React.VFC = () => {
  return (
    <Wrapper>
      <HomeBanner />
      <HomeBoard />
    </Wrapper>
  );
};

export default Home;
