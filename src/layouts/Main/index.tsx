import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Detail from "../../pages/Detail";
import Home from "../../pages/Home";
import Login from "../../pages/Login/Index";
import { Content } from "./styles";

const Main: React.VFC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Content>
        <Switch>
          <Route path="/main/detail/:param/:subparam/:id" />
          <Route path="/main/detail/:param/:subparam" component={Detail} />
          <Route path="/main/login" component={Login} />
          <Route path="/main" component={Home} />
        </Switch>
      </Content>
      <Footer />
    </div>
  );
};

export default Main;
