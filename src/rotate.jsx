import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import Level from "./Level";
import GameEasy from "./GameEasy";
import Game from "./Game";
import GameHard from "./GameHard";
import Header from "./Header";
import Statistic from "./Statistic";

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
