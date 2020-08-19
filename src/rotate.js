import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./main";
import Level from "./level";
import Game from "./game";
import Header from "./header";

const Rotate = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route component={Main} exact path="/" />
        <Route component={Level} path="/level" />
        <Route component={Game} path="/game" />
      </Switch>
    </>
  );
};

export default Rotate;
