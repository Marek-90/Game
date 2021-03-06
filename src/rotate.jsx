import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./main";
import Level from "./level";
import GameEasy from "./gameEasy";
import Game from "./game";
import GameHard from "./gameHard";
import Header from "./header";
import Statistic from "./statistic";

const Rotate = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route component={Main} exact path="/" />
        <Route component={Level} path="/level" />
        <Route component={GameEasy} path="/gameEasy" />
        <Route component={Game} path="/game" />
        <Route component={GameHard} path="/gameHard" />
        <Route component={Statistic} path="/statistic" />
      </Switch>
    </>
  );
};

export default Rotate;
