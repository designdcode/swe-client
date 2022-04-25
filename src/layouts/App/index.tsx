import React from "react";
import lodable from "@loadable/component";
import "./styles.css";

import { Redirect, Route, Switch } from "react-router";

const Main = lodable(() => import("../Main"));
const Admin = lodable(() => import("../Admin"));
const Renewal = lodable(() => import("../Renewal"))

const App: React.FC = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/main" />
      {/* <Redirect exact path="/" to="/renewal" /> */}
      <Redirect exact path="/admin" to="/admin/dashboard/dashboard" />

      <Route path="/renewal" component={Renewal} />
      <Route path="/main" component={Main} />
      <Route path="/admin/:param/:subparam" component={Admin} />
    </Switch>
  );
};

export default App;
