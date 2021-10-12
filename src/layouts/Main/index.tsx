import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Content } from "./styles";

const Main: React.VFC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Content>
        <div>test</div>
      </Content>
      <Footer />
    </div>
  );
};

export default Main;
