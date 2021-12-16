import loadable from "@loadable/component";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Login from "../../pages/Login/Index";
import { Content } from "./styles";

const Home = loadable(() => import("../../pages/Home/index"));
const Detail = loadable(() => import("../../pages/Detail/index"));
const Board = loadable(() => import("../../pages/Board/index"));
const BoardDetail = loadable(() => import("../../pages/BoardDetail/index"));

const Main: React.VFC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Content>
        <Switch>
          <Route path="/main/board/:param/:subparam" component={Board} />
          <Route
            path="/main/detail/:param/:subparam/:id"
            component={BoardDetail}
          />
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
