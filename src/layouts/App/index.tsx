import React from "react";
import lodable from "@loadable/component";
import "./styles.css";

import { Redirect, Route, Switch } from "react-router";
import { MenuContextProvider } from "../../contexts";

const Main = lodable(() => import("../Main"));
const Admin = lodable(() => import("../Admin"));
const Renewal = lodable(() => import("../Renewal"));

const App: React.FC = () => {
  return (
    <MenuContextProvider>
      <Switch>
        <Redirect exact path="/" to="/main" />
        <Redirect exact path="/admin" to="/admin/dashboard/dashboard" />

        <Route path="/main" component={Main} />
        <Route path="/admin/:param/:subparam" component={Admin} />
        <Route path="/renewal" component={Renewal} />
      </Switch>
    </MenuContextProvider>
  );
};

export default App;