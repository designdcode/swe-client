import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Login from "../../pages/Login/Index";
import { Content } from "./styles";

const Main: React.VFC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Content>
        <Switch>
          <Route path="/main/login" component={Login} />
        </Switch>
      </Content>
      <Footer />
    </div>
  );
};

export default Main;
